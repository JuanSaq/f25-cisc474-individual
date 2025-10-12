import { createFileRoute, Link} from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
  <div>Hello "/"!
    <li/>
    <Link to="/dashboard">To Dashboard (loads courses from backend)</Link>
    <li/>
    <Link to="/course/$courseId/assignments" params={{courseId: "Test"}}>To Assignments List (loads assignments from backend)</Link>
  </div>
  )
}
