import { createFileRoute } from '@tanstack/react-router'
import { CourseCreateIn, CourseOut } from '@repo/api/courses'


import { backendFetcher } from '../../integrations/fetcher'
import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const Route = createFileRoute('/course/create')({
  component: RouteComponent,
})

function RouteComponent() {
   const [newTitle, setNewTitle] = useState('');
   const [newOwnerId, setNewOwnerId] = useState('1e085d11-c1e8-4fb7-9968-b6bde5721609'); // will use first ownerId for now

   const queryClient = useQueryClient();

   //const mutation = useMutation({
   // mutationFn: (newCourse: CourseCreateIn)
   //})

  return <div>Hello "/course/create"!</div>
}
