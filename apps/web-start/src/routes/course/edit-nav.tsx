import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/course/edit-nav')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
        <h1>Hello "/course/edit-nav"!</h1>
        <li/>
        <Link to="/course/edit">Edit a Course</Link>
        <li/>
        <Link to="/course/delete">Delete a Course</Link>
        <li/>
        <Link to="/course/create">Create a Course</Link>
        <li/>
        <Link to="/course">Return to dashboard</Link>
    </div>
  )
}
