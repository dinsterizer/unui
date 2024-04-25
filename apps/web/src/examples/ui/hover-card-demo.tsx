import Avatar from '@dinui/react/avatar'
import Button from '@dinui/react/button'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@dinui/react/hover-card'
import { CalendarIcon } from '@radix-ui/react-icons'

export default function HoverCardDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="ghost">@nextjs</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <Avatar.Image src="https://github.com/vercel.png" />
            <Avatar.Fallback>VC</Avatar.Fallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@nextjs</h4>
            <p className="text-sm">The React Framework – created and maintained by @vercel.</p>
            <div className="flex items-center pt-2">
              <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{' '}
              <span className="text-xs text-wgray-500">Joined December 2021</span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
