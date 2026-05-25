import Link from "next/link";

export default function Nav() {
  return (
    <nav className="bg-gray-100 dark:bg-gray-800 p-4">
      <ul className="flex space-x-4 justify-center">
        <li>
          <Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-blue-600 dark:text-blue-400 hover:underline">
            About
          </Link>
        </li>
        <li>
          <Link href="/hoby" className="text-blue-600 dark:text-blue-400 hover:underline">
            Hoby
          </Link>
        </li>
        <li>
          <Link href="/experience" className="text-blue-600 dark:text-blue-400 hover:underline">
            Experience
          </Link>
        </li>
      </ul>
    </nav>
  );
}
