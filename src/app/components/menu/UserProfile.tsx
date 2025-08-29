'use client'

import Image from "next/image";

interface ProfileProps {
  name: string
  avatarUrl: string
  role?: string
}

export default function Profile({ name, avatarUrl, role }: ProfileProps) {
  return (
    <div className="flex items-center border-b p-3 border-gray-300">
      <Image
        src={avatarUrl}
        alt={`Photo de ${name}`}
        className="w-8 h-8 rounded-full object-cover"
        width={20}
        height={20}
      />
      <div className="flex flex-col">
        <span className="font-medium leading-none">{name}</span>
        {role ? <span className="text-xs text-gray-500">{role}</span> : null}
      </div>
    </div>
  )
}