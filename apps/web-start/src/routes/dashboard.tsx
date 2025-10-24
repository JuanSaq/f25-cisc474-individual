import { createFileRoute, Link } from '@tanstack/react-router'
import "./dashboard.css"
import { useQuery } from '@tanstack/react-query';
import { backendFetcher } from '../integrations/fetcher';
import type { CourseOut } from '@repo/api/courses'

export const Route = createFileRoute('/dashboard')({
  component: RouteComponent,
})


// temp ids for now, will map later
function RouteComponent() {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ['courses'],
    queryFn: backendFetcher<Array<CourseOut>>("/courses"),
  })

  if (isPending) return <span>Is Loading...</span>;

  if (isError) return <span>Error: {error.message}</span>

  /*
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
    */

  return (
    <div>
      <div className='courseGrid'>
        {data.map((course) => (
          <div key={course.id}>
            <Link to="/course/$courseId" params={{courseId: course.id}} className='courseButton'>{course.title}</Link>
          </div>
        ))}
      </div>
      <hr></hr>
      <h1>Or go to course editor page...</h1>
      <Link to="/course/edit-nav" className='courseButton'>Edit Navigator</Link>
    </div>
  )
  
}
