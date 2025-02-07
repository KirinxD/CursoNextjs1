import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>Pokemon Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/dashboard/main">Return Home</Link>
    </div>
  )
}
