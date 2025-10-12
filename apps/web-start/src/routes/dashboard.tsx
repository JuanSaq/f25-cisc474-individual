import { createFileRoute, Link } from '@tanstack/react-router'
import "./dashboard.css"

export const Route = createFileRoute('/dashboard')({
  component: RouteComponent,
})


// css seems to not be working the same as the old system, will come back later
function RouteComponent() {
  return (
  
    <main>
        <h1>Hello "/dashboard"!</h1>
        <div className="courseGrid">
            <Link to="/" className="courseButton"> test</Link>
            <div> test </div>
            <div> test</div>
            <div> test </div>

        </div>
    </main>
  )
}
