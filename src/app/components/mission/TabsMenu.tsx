'use client'

import React from "react";

type Status = "À pourvoir" | "En cours" | "À venir" | "Terminées" | "Annulées";

type TabsMenuProps = {
  active: Status;
  onChange: (tab: Status) => void;
};

// Onglets horizontaux
const TABS: Status[] = ["À pourvoir", "En cours", "À venir", "Terminées", "Annulées"];

export default function TabsMenu({ active, onChange }: TabsMenuProps) {
  return (
    <div className="flex items-start gap-6 self-stretch">
      {TABS.map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={`flex h-8 flex-col justify-end items-start gap-2
            ${active === tab ? "text-[#798C73]  border-b-4 border-b-[#798C73]" : "text-gray-700 hover:bg-gray-100"}`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}