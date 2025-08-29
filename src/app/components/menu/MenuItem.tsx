'use client'

import Link from "next/link";

interface MenuItemProps {
  href: string
  label: string
  active?: boolean
}

export default function MenuItem({ href, label, active }: MenuItemProps) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={[
        "flex w-[200px] h-[40px] px-4 items-center gap-1 text-sm transition",
        active
          ? "bg-orange-100 font-medium"
          : "text-gray-700 hover:bg-gray-100"
      ].join(" ")}
    >
      {label}
    </Link>
  )
}
