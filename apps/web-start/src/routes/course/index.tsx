import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/course/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main>
        <div>Hello "/course/"!</div>
    </main>
)
}
