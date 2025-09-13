import Link from "next/link";


export default function CoursePage() {
  return (
        <main>
            <h1>This is a course!</h1>
            <Link href={"/course/announcements"}>Announcements</Link>
            <ol></ol>
            <Link href={"/course/assignments"}>Assignments</Link>
            <ol></ol>
            <Link href={"/course/grades"}>Grades</Link>
        </main>
    )
}