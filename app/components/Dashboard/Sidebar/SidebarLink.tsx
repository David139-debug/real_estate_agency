"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"

export default function SidebarLink({ href, children }: 
    { 
        href: string, 
        children: React.ReactNode 
    }
) {
  const pathname = usePathname();

  const active =
    href === "/properties"
      ? pathname === href
      : pathname.startsWith(href)

  
  return (
    <Link
      href={href}
      data-active={active}
      className={`group flex gap-6 py-3 pl-2 rounded-2xl transition
      ${active ? "text-[#006845]" : "hover:bg-gray-100"}`}
    >
      {children}
    </Link>
  )
}