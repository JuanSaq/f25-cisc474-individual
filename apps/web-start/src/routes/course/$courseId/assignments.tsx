import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/course/$courseId/assignments')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
        <main>
            <h1>Here are your assignments</h1>
            <div>
                <h2>
                    Assignment 1
                </h2>
            </div>
            <hr></hr>
            <div>
                <h2>
                    Assignment 2
                </h2>
            </div>
        </main>
    )
}
