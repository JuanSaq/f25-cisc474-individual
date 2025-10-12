import { createFileRoute, Link} from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
  <div>Hello "/"!
    <li></li>
    <Link to="/dashboard">To Dashboard</Link>
  </div>
  )
}
