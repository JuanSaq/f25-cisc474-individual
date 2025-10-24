import { createFileRoute, Link } from '@tanstack/react-router'
import "./dashboard.css"
import type { CourseOut } from '@repo/api/courses'
import { useApiQuery, useCurrentUser } from '../integrations/api';

export const Route = createFileRoute('/dashboard')({
  component: RouteComponent,
})


// temp ids for now, will map later
function RouteComponent() {
  const { data: user } = useCurrentUser();

  const query = useApiQuery<Array<CourseOut>>(['courses'], '/courses');
  const { data, error, showLoading } = query;

  if (showLoading) return <span>Is Loading...</span>;

  if (error) return <span>Error: {error.message}, Welcome {user?.name} (ID: {user?.id}) to the Courses page!
      </span>

  if (!data || data.length === 0) {
    return <div>No courses found.</div>;
  }

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
