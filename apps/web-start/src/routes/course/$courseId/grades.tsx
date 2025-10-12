import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/course/$courseId/grades')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
        <main>
            <h1>Grades</h1>
            <h2>Assignment 1 (23/25)</h2>
            <hr></hr>
            <h2>Assignment 2 (24/30)</h2>
            <hr></hr>
            <h2>Assignment 3 (90/100)</h2>
            <hr></hr>
            <h2>Assignment 4 (29/30)</h2>
        </main>
    )
}
