import { CourseCreateIn, CourseOut, CourseRef } from '@repo/api/courses';
import { createFileRoute } from '@tanstack/react-router'
import { backendFetcher, mutateBackend } from '../../integrations/fetcher';
import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const Route = createFileRoute('/course/delete')({
  component: RouteComponent,
})

function RouteComponent() {
   const [courseId, setCourseId] = useState('');

   const queryClient = useQueryClient();

   const mutation = useMutation({
    mutationFn: (courseId: string) => {
      return mutateBackend(`/courses/${courseId}`, 'DELETE');
    },
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["courses"]})
    },
   })

  return (
    <div>
        <h1>Hello "/course/delete"!</h1>
    {mutation.isPending ? (
        <div>Deleting course...</div>
      ) : (
        <>
          {mutation.isError ? (
            <div>Error deleting course: {mutation.error.message}</div>
          ) : null}
          {mutation.isSuccess ? (
            <div>Course deleted successfully! ID: {courseId}</div>
          ) : null}
          <hr></hr>
          <div>
            <input
              type="text"
              placeholder="Course Id"
              value={courseId}
              onChange={(e) => setCourseId(e.target.value)}
            />
          </div>
          <div></div>
          <div>
            <button
              onClick={() => {
                mutation.mutate(courseId);
              }}
            >
              Delete Course
            </button>
          </div>
          <hr></hr>
          <div>
            <a href="/dashboard">Back to Courses</a>
          </div>
        </>
      )}
    </div>

  )
}
