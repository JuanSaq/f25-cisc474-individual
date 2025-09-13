import Link from "next/link";
import styles from "../page.module.css";

export default function CoursePage() {
  return (
        <main className={styles.main}>
            <h1>This is a course!</h1>
            <Link href={"/course/announcements"}>Announcements</Link>
            <hr/>
            <Link href={"/course/assignments"}>Assignments</Link>
            <hr/>
            <Link href={"/course/grades"}>Grades</Link>
        </main>
    )
}