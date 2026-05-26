"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { path: "/", label: "01._HOME" },
  { path: "/about", label: "02._ABOUT" },
  { path: "/hoby", label: "03._HOBBY" },
  { path: "/experience", label: "04._EXPERIENCE" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="nav-container">
      {navItems.map((item) => (
        <Link
          key={item.path}
          className={`nav-item ${pathname === item.path ? "active" : ""}`}
          href={item.path}
        >
          <span>{pathname === item.path ? ">" : ""}</span>
          <span>{item.label}</span>
        </Link>
      ))}
    </nav>
  );
}
