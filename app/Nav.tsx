"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="nav-container">
      <Link className={`nav-item ${pathname === "/" ? "active" : ""}`} href="/">
        HOME
      </Link>
      <Link
        className={`nav-item ${pathname === "/about" ? "active" : ""}`}
        href="/about"
      >
        ABOUT
      </Link>
      <Link
        className={`nav-item ${pathname === "/hoby" ? "active" : ""}`}
        href="/hoby"
      >
        HOBBY
      </Link>
      <Link
        className={`nav-item ${pathname === "/experience" ? "active" : ""}`}
        href="/experience"
      >
        EXPERIENCE
      </Link>
    </nav>
  );
}
