import { Suspense, lazy } from 'react'
import { codeToHtml } from 'shiki'

const exampleComponents = import.meta.glob('../examples/**/*.tsx') as {
  [key: string]: () => Promise<{
    default: React.ComponentType
  }>
}

const exampleCodes = import.meta.glob('../examples/**/*.tsx', {
  query: '?raw',
  import: 'default',
}) as {
  [key: string]: () => Promise<string>
}

export function ComponentExample({ name }: { name: string }) {
  const path = `../examples/${name}.tsx`

  return (
    <div>
      <ComponentPreview path={path} />
      <ComponentCode path={path} />
    </div>
  )
}

function ComponentPreview(props: { path: string }) {
  const loadComponent = exampleComponents[props.path]

  if (!loadComponent) {
    throw new Error(`Component does not exists on [${props.path}]`)
  }

  const Component = lazy(loadComponent)

  return (
    // TODO
    <Suspense fallback="loading...">
      <Component />
    </Suspense>
  )
}

function ComponentCode(props: { path: string }) {
  const loadCode = exampleCodes[props.path]

  if (!loadCode) {
    throw new Error(`Component does not exists on [${props.path}]`)
  }

  const Code = lazy(async () => {
    const code = await loadCode()
    const html = await codeToHtml(code, {
      lang: 'tsx',
      theme: 'github-dark',
    })
    return {
      default: () => {
        return <div dangerouslySetInnerHTML={{ __html: html }} />
      },
    }
  })

  return (
    // TODO
    <Suspense fallback="loading...">
      <Code />
    </Suspense>
  )
}