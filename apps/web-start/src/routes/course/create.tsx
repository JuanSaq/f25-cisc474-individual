import { createFileRoute } from '@tanstack/react-router'
import { CourseCreateIn, CourseOut } from '@repo/api/courses'


import { backendFetcher, mutateBackend } from '../../integrations/fetcher'
import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const Route = createFileRoute('/course/create')({
  component: RouteComponent,
})

function RouteComponent() {
   const [newTitle, setNewTitle] = useState('');
   const [newOwnerId, setNewOwnerId] = useState('1e085d11-c1e8-4fb7-9968-b6bde5721609'); // will use first ownerId for now

   const queryClient = useQueryClient();

   const mutation = useMutation({
    mutationFn: (newCourse: CourseCreateIn) => {
      return mutateBackend<CourseOut>('/courses', 'POST', newCourse);
    },
    onSuccess: (data: CourseOut) => {
      queryClient.setQueryData(['courses', data.id], data)
    },
   })

  return (
    <div>
    <h1>Hello "/course/create"!</h1>
    {mutation.isPending ? (
        <div>Creating course...</div>
      ) : (
        <>
          {mutation.isError ? (
            <div>Error creating course: {mutation.error.message}</div>
          ) : null}
          {mutation.isSuccess ? (
            <div>Course created successfully! ID: {mutation.data.id}</div>
          ) : null}
          <hr></hr>
          <div>
            <input
              type="text"
              placeholder="Course Name"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
          </div>
          <div></div>
          <div>
            <button
              onClick={() => {
                mutation.mutate({
                  title: newTitle,
                  ownerId: newOwnerId,
                });
              }}
            >
              Create Course
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
