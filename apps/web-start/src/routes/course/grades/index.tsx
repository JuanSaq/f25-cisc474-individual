import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/course/grades/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/course/grades/"!</div>
}
