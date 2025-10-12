import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/course/$courseId/')({
  component: RouteComponent,
})

function RouteComponent() {
  const courseId = Route.useParams().courseId;
  return (
    <main>
      <div>Hello "/course/{courseId}"!</div>
        <Link to="/course/$courseId/annoucements" params={{courseId: courseId }}>Announcements</Link>
        <hr/>
        <Link to="/course/$courseId/assignments" params={{courseId: courseId}}>Assignments</Link>
        <hr/>
        <Link to="/course/$courseId/grades" params={{courseId}}>Grades</Link>
    </main>
  )
    
}
