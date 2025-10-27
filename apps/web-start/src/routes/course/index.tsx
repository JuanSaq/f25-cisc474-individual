import { createFileRoute, Link } from '@tanstack/react-router'
import { useApiQuery, useCurrentUser } from '../../integrations/api';
import { CourseOut } from '@repo/api/courses';
import LogoutButton from '../../components/LogoutButton';

export const Route = createFileRoute('/course/')({
  component: RouteComponent,
})

function RouteComponent() {
  const { data: user } = useCurrentUser();
  console.log(user?.id);
  
    const query = useApiQuery<Array<CourseOut>>(['courses'], '/courses');
    const { data, error, showLoading, isEnabled } = query;
  
    if (error) return <span>Error: {error.message} </span>;

   // if (!isEnabled) return <span>Not Authenitaced!</span>

    if (showLoading) return <span>Is Loading...</span>;
  
  
    if (!data || data.length === 0) {
      return <div>No courses found.</div>;
    }
  
    return (
      <div>
        <div>Welcome {user?.name} (ID: {user?.id}) to the Courses page!</div>
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
        <LogoutButton/>
      </div>
    )
    
}
