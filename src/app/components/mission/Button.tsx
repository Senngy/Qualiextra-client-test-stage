'use client'

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  ariaLabel?: string;
}

export default function Button({
  children,
  variant = "primary",
  className = "",
  type = "button",
  onClick,
  ariaLabel,
}: ButtonProps) {
  const base =
    "px-4 py-2 rounded-xl font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2";
  const styles =
    variant === "primary"
      ? "bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500"
      : variant === "secondary"
      ? "bg-gray-100 text-gray-800 hover:bg-gray-200 focus:ring-gray-400"
      : "bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-400";

  return (
    <button
      type={type}
      aria-label={ariaLabel}
      onClick={onClick}
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </button>
  );
}
