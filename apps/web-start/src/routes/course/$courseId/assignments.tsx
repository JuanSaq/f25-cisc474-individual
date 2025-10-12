import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/course/$courseId/assignments')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/course/$courseId/assignments"!</div>
}
