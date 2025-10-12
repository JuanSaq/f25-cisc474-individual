import { createFileRoute, Link } from '@tanstack/react-router'
import "./dashboard.css"

export const Route = createFileRoute('/dashboard')({
  component: RouteComponent,
})


// temp ids for now, will map later
function RouteComponent() {
  return (
  
    <main>
        <h1>Hello "/dashboard"!</h1>
        <div className="courseGrid">
            <Link to="/course/$courseId" params={{courseId: "1"}} className="courseButton"> test</Link>
            <Link to="/course/$courseId" params={{courseId: "2"}} className="courseButton"> test</Link>
            <Link to="/course/$courseId" params={{courseId: "3"}} className="courseButton"> test</Link>
            <Link to="/course/$courseId" params={{courseId: "4"}} className="courseButton"> test</Link>

        </div>
    </main>
  )
}
