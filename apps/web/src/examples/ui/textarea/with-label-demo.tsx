import Label from '@dinui/react/label'
import Textarea from '@dinui/react/textarea'

export default function TextareaWithLabelDemo() {
  return (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="message">Your message</Label>
      <Textarea placeholder="Type your message here." id="message" />
    </div>
  )
}
