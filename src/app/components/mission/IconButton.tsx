"use client"

import { ComponentType } from "react"

interface IconButtonProps {
  icon: ComponentType<{ size?: number; className?: string }>
  ariaLabel: string
  onClick?: () => void
}

export default function IconButton({ icon: Icon, ariaLabel, onClick }: IconButtonProps) {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      className="p-2 rounded-xl hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
    >
      <Icon size={20} />
    </button>
  )
}