import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/course/assignments/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/course/assignments/"!</div>
}
