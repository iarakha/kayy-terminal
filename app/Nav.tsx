"use client"; //

import { useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const navItems = [
  { path: "/", label: "01._HOME" },
  { path: "/about", label: "02._ABOUT" },
  { path: "/experience", label: "03._EXPERIENCE" },
  { path: "/hobby", label: "04._HOBBY" },
];

export default function Nav() {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const currentIndex = navItems.findIndex((item) => item.path === pathname);

    const handleKeyDown = (event: KeyboardEvent) => {
      // CRITICAL CHECK: If the user is typing inside an input field,
      // let the browser handle standard text cursor movement instead of routing!
      const activeEl = document.activeElement;
      if (
        activeEl &&
        (activeEl.tagName === "INPUT" || activeEl.tagName === "TEXTAREA")
      ) {
        return;
      }

      const validIndex = currentIndex === -1 ? 0 : currentIndex;

      // Prevent default page scrolling when arrow keys are pressed in normal page context
      if (["ArrowUp", "ArrowDown"].includes(event.key)) {
        event.preventDefault();
      }

      let nextIndex = validIndex;

      if (event.key === "ArrowDown") {
        nextIndex = (validIndex + 1) % navItems.length;
      } else if (event.key === "ArrowUp") {
        nextIndex = (validIndex - 1 + navItems.length) % navItems.length;
      }

      if (nextIndex !== currentIndex && currentIndex !== -1) {
        router.push(navItems[nextIndex].path);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [pathname, router]);

  return (
    <div className="nav-wrapper">
      <span className="nav-prompt">
        kayy@terminal/nav &gt; SELECT MODULE [↑↓ arrows + ENTER or click]
      </span>
      <nav className="nav-container">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.path}
              className={`nav-item ${isActive ? "active" : ""}`}
              href={item.path}
            >
              <span>{isActive ? "> " : ""}</span>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
