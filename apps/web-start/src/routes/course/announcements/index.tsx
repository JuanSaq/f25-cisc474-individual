import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/course/announcements/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/course/announcements/"!</div>
}
