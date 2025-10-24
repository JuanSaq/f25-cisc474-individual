import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react';
import { mutateBackend } from '../../integrations/fetcher';
import { CourseOut, CourseUpdateIn } from '@repo/api/courses';

export const Route = createFileRoute('/course/edit')({
  component: RouteComponent,
})

function RouteComponent() {
  const [newTitle, setNewTitle] = useState('');
  const [courseId, setCourseId] = useState('');
   const [newOwnerId, setNewOwnerId] = useState('1e085d11-c1e8-4fb7-9968-b6bde5721609'); // will use first ownerId for now

   const queryClient = useQueryClient();

   const mutation = useMutation({
    mutationFn: (newCourse: CourseUpdateIn) => {
      return mutateBackend<CourseOut>(`/courses/${newCourse.id}`, 'PATCH', newCourse);
    },
    onSuccess: (data: CourseOut) => {
      queryClient.setQueryData(['courses', data.id], data)
    },
   })

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
                  title: newTitle,
                  ownerId: newOwnerId,
                });
              }}
            >
              Edit Course
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
