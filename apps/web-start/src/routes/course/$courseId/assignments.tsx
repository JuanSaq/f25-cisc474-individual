import { Assignment } from '@repo/database'
import { useQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import { backendFetcher } from '../../../integrations/fetcher'

export const Route = createFileRoute('/course/$courseId/assignments')({
  component: RouteComponent,
})

function RouteComponent() {
    const { isPending, isError, data, error } = useQuery<Array<Assignment>>({
    queryKey: ['assignments'],
    queryFn: backendFetcher("/assignments"),
  })

  if (isPending) return <span>Loading assignments...</span>

  if (isError) return <span>Error: {error.message}</span>

  return (
    <div>
        <h1>Assignments</h1>
          {data.map((assignment) => (
            <div key={assignment.id}>
              <li>{assignment.title} Due At: {" "} {assignment.dueDate?.toString().substring(0,10)}</li>
              <hr></hr>
            </div>
          ))}
    </div>

  )

  /*
  return (
        <main>
            <h1>Here are your assignments</h1>
            <div>
                <h2>
                    Assignment 1
                </h2>
            </div>
            <hr></hr>
            <div>
                <h2>
                    Assignment 2
                </h2>
            </div>
        </main>
    )
        */
}
