'use client'

import { Button } from '@dinui/react/button'
import { ToastAction } from '@dinui/react/toast'
import { useToast } from '@dinui/react/use-toast'

export default function ToastDemo() {
  const { toast } = useToast()

  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          title: 'Scheduled: Catch up ',
          description: 'Friday, February 10, 2023 at 5:57 PM',
          action: <ToastAction altText="Goto schedule to undo">Undo</ToastAction>,
        })
      }}
    >
      Add to calendar
    </Button>
  )
}