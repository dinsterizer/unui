import deepmerge from 'deepmerge'
import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

type ColorConfig = Record<string, string>

const utilityColors = [
  'utility-gray-50',
  'utility-gray-100',
  'utility-gray-200',
  'utility-gray-300',
  'utility-gray-400',
  'utility-gray-500',
  'utility-gray-600',
  'utility-gray-700',
  'utility-gray-800',
  'utility-gray-900',

  'utility-brand-50',
  'utility-brand-50_alt',
  'utility-brand-100',
  'utility-brand-100_alt',
  'utility-brand-200',
  'utility-brand-200_alt',
  'utility-brand-300',
  'utility-brand-300_alt',
  'utility-brand-400',
  'utility-brand-400_alt',
  'utility-brand-500',
  'utility-brand-500_alt',
  'utility-brand-600',
  'utility-brand-600_alt',
  'utility-brand-700',
  'utility-brand-700_alt',
  'utility-brand-800',
  'utility-brand-800_alt',
  'utility-brand-900',
  'utility-brand-900_alt',
]

for (const color of [
  'blue',
  'blue-dark',
  'blue-light',
  'error',
  'fuchsia',
  'gray-blue',
  'indigo',
  'orange',
  'orange-dark',
  'pink',
  'purple',
  'success',
  'warning',
]) {
  for (const level of [50, 100, 200, 300, 400, 500, 600, 700]) {
    utilityColors.push(`utility-${color}-${level}`)
  }
}

const utilityColorConfig: ColorConfig = utilityColors.reduce((themeColors, color) => {
  return {
    ...themeColors,
    [color]: `rgb(var(--color-${color}))`,
  }
}, {})

const basicColorConfig: ColorConfig = ['white', 'black', 'alpha-white', 'alpha-black'].reduce(
  (themeColors, color) => {
    return {
      ...themeColors,
      [color]: `rgb(var(--color-${color}))`,
    }
  },
  {},
)

const textColorConfig: ColorConfig = [
  'primary',
  'primary_on-brand',
  'secondary',
  'secondary_hover',
  'secondary_on-brand',
  'tertiary',
  'tertiary_hover',
  'tertiary_on-brand',
  'quaternary',
  'quaternary_on-brand',
  'disabled',
  'placeholder',
  'placeholder_subtle',
  'brand-primary',
  'brand-secondary',
  'brand-tertiary',
  'brand-tertiary_alt',
  'error-primary',
  'warning-primary',
  'success-primary',
].reduce((themeColors, color) => {
  return {
    ...themeColors,
    [color]: `rgb(var(--color-text-${color}))`,
  }
}, {})

const foregroundColorConfig: ColorConfig = [
  'primary',
  'secondary',
  'secondary_hover',
  'tertiary',
  'tertiary_hover',
  'quaternary',
  'quaternary_hover',
  'quinary',
  'quinary_hover',
  'senary',
  'disabled',
  'disabled_subtle',
  'brand-primary',
  'brand-primary_alt',
  'brand-secondary',
  'error-primary',
  'error-secondary',
  'warning-primary',
  'warning-secondary',
  'success-primary',
  'success-secondary',
].reduce((themeColors, color) => {
  return {
    ...themeColors,
    [color]: `rgb(var(--color-fg-${color}))`,
  }
}, {})

const backgroundColorConfig: ColorConfig = [
  'primary',
  'primary_alt',
  'primary_hover',
  'primary-solid',
  'secondary',
  'secondary_alt',
  'secondary_hover',
  'secondary_subtle',
  'secondary-solid',
  'tertiary',
  'quaternary',
  'active',
  'disabled',
  'disabled_subtle',
  'overlay',
  'brand-primary',
  'brand-primary_alt',
  'brand-secondary',
  'brand-solid',
  'brand-solid_hover',
  'brand-section',
  'brand-section_subtle',
  'error-primary',
  'error-secondary',
  'error-solid',
  'warning-primary',
  'warning-secondary',
  'warning-solid',
  'success-primary',
  'success-secondary',
  'success-solid',
].reduce((themeColors, color) => {
  return {
    ...themeColors,
    [color]: `rgb(var(--color-bg-${color}))`,
  }
}, {})

const borderColorConfig: ColorConfig = [
  'primary',
  'secondary',
  'tertiary',
  'disabled',
  'disabled_subtle',
  'brand',
  'brand-solid',
  'brand-solid_alt',
  'error',
  'error-solid',
].reduce((themeColors, color) => {
  return {
    ...themeColors,
    [color]: `rgb(var(--color-border-${color}))`,
  }
}, {})

const ringColorConfig = {
  brand: 'rgb(var(--color-ring-brand) / 0.24)',
  gray: 'rgb(var(--color-ring-gray) / 0.14)',
  'gray-secondary': 'rgb(var(--color-ring-gray-secondary) / 0.20)',
  error: 'rgb(var(--color-ring-error) / 0.24)',
}

export default function withDinui(tailwindConfig: Partial<Config>) {
  return deepmerge(
    {
      content: ['./node_modules/@dinui/react/ui/**/*.tsx'],
      theme: {
        extend: {
          colors: {
            ...basicColorConfig,
            ...utilityColorConfig,
            text: textColorConfig,
            fg: foregroundColorConfig,
            bg: backgroundColorConfig,
            border: borderColorConfig,
            ring: ringColorConfig,
          },

          textColor: textColorConfig,
          placeholderColor: textColorConfig,

          backgroundColor: backgroundColorConfig,
          ringOffsetColor: backgroundColorConfig,
          accentColor: backgroundColorConfig,

          borderColor: borderColorConfig,
          divideColor: borderColorConfig,

          ringColor: ringColorConfig,
          outlineColor: ringColorConfig,

          caretColor: foregroundColorConfig,
          textDecorationColor: foregroundColorConfig,

          // boxShadowColor: {},
          // gradientColorStops: {},
          maxWidth: {
            paragraph: '45rem',
          },
        },
      },
      plugins: [
        plugin(({ matchUtilities }) => {
          matchUtilities(
            {
              fg: (value) => {
                return {
                  color: value,
                }
              },
            },
            {
              type: ['color'],
              values: foregroundColorConfig,
            },
          )
        }),
      ],
    },
    tailwindConfig,
  )
}