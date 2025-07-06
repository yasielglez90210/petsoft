"use client";

import { cn } from "@/lib/utils";
import Logo from "./logo";
import Link from "next/link";
import { usePathname } from "next/navigation";

const routers = [
  { name: "Dashboard", path: "/app/dashboard" },
  { name: "Account", path: "/app/account" },
];

export default function AppHeader() {
  const activePath = usePathname();

  return (
    <header className="flex justify-between items-center border-b border-white/10 py-2">
      <Logo />
      <nav>
        <ul className="flex gap-2 text-xs">
          {routers.map((route) => (
            <li key={route.path}>
              <Link
                className={cn(
                  "text-white/70 rounded-sm px-2 py-1 hover:text-white focus:text-white transition",
                  { "bg-black/10 text-white": activePath === route.path }
                )}
                href={route.path}
              >
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
