import Link from "next/link"

export default function PageTwoRoute() {
    return <main>Hello page two!
        <Link href="/">
        <a>Go home</a>
      </Link>
    </main>;
}