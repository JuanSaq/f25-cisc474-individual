import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/course/$courseId/annoucements')({
  component: RouteComponent,
})

function RouteComponent() {
    const courseId = Route.useParams().courseId;
  return (
        <main>
            <h1>Annoucments for Course {courseId}</h1>
            <hr></hr>
            <div>
                <h2>
                   
                    {" "}Here is an annoucement!
                </h2>
            </div>
            <hr></hr>
            <div>
                <h2>
     
                    {" "}Here is an another!
                </h2>
            </div>
        </main>
    )
}
