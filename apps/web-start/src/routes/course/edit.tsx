import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react';
import { mutateBackend } from '../../integrations/fetcher';
import { CourseOut, CourseUpdateIn } from '@repo/api/courses';
import { useApiMutation, useCurrentUser } from '../../integrations/api';

export const Route = createFileRoute('/course/edit')({
  component: RouteComponent,
})

function RouteComponent() {
   const { data: currentUser } = useCurrentUser();
   const [newTitle, setNewTitle] = useState('');
   const [courseId, setCourseId] = useState('');
   

   const queryClient = useQueryClient();

   const mutation = useApiMutation<CourseUpdateIn, CourseOut>({
       endpoint: (variables) => ({
         path: `/courses/${variables.id}`,
         method: 'PATCH',
       }),
       invalidateKeys: [['courses']],
    });

   

  return (
    <div>
    <h1>Hello "/course/edit"!</h1>
    {mutation.isPending ? (
        <div>Editing course...</div>
      ) : (
        <>
          {mutation.isError ? (
            <div>Error editing course: {mutation.error.message}</div>
          ) : null}
          {mutation.isSuccess ? (
            <div>Course editing successfully! ID: {mutation.data.id}</div>
          ) : null}
          <hr></hr>
          <div>
            <input
              type="text"
              placeholder="Update Course Name"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="CourseId"
              value={courseId}
              onChange={(e) => setCourseId(e.target.value)}
            />
          </div>
          <div></div>
          <div>
            <button
              onClick={() => {
                mutation.mutate({
                  id: courseId,
                  title: newTitle || '',
                  ownerId: currentUser?.id || '',
                });
              }}
            >
              Edit Course
            </button>
          </div>
          <hr></hr>
          <div>
            <a href="/course">Back to Courses</a>
          </div>
        </>
      )}
    </div>
  )
}
