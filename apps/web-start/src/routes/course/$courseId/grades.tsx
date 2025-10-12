import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/course/$courseId/grades')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/course/$courseId/grades"!</div>
}
