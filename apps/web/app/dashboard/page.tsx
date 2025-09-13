import Link from "next/link";

export default function DashboardPage() {
  return (
        <main>
            <h1>Dashboard</h1>
            <Link href={"/course"}>To Course</Link>
        </main>
    )
}