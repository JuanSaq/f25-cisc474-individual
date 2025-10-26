import { createFileRoute } from '@tanstack/react-router'
import { CourseCreateIn, CourseOut } from '@repo/api/courses'
import { backendFetcher, mutateBackend } from '../../integrations/fetcher'
import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useApiMutation, useCurrentUser } from '../../integrations/api';

export const Route = createFileRoute('/course/create')({
  component: RouteComponent,
})

function RouteComponent() {
  const { data: currentUser } = useCurrentUser();

   const [newTitle, setNewTitle] = useState('');

   const queryClient = useQueryClient();

   const mutation = useApiMutation<CourseCreateIn, CourseOut>({
    endpoint: () => ({
      path: '/courses',
      method: 'POST',
    }),
    invalidateKeys: [['courses']],
  });

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
                  ownerId: currentUser?.id || '1b52ea2a-fe7e-4ab6-8a7b-afaa3d99c0f3',
                });
              }}
            >
              Create Course
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
