import Link from "next/link";
import "./dashboard.css"

export default function DashboardPage() {
  return (
        <main>
            <h1>Dashboard</h1>
            <div className="courseGrid">
                <Link href={"/course"} className="courseButton">To Course</Link>
                <Link href={"/course"} className="courseButton">To Course</Link>
                <Link href={"/course"} className="courseButton">To Course</Link>
            </div>
        </main>
    )
}