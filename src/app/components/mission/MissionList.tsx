'use client'

import React from "react";
import MissionCard from "./MissionCard";
import MissionTable from "./MissionTable";

type Candidate = { id: number; name: string; avatarUrl: string; };

export type Mission = {
  id: number;
  title: string;
  status: string;
  date: string;
  remuneration?: string;
  hours?: string;
  candidates?: Candidate[];
};

type MissionListProps = {
  missions: Mission[]; // Props pour rendre le composant réutilisable
};

export default function MissionList({ missions }: MissionListProps) {
   // Exemple de candidats (avatars dans public/avatars/)
  
  // Trier par date décroissante
  const sorted = [...missions].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div>
      {/* Cards en mobile (< 1280px) */}
      <div className="block xl:hidden space-y-4">
        {sorted.map((m) => (
          <MissionCard key={m.id} {...m} />
        ))}
      </div>

      {/* Table en desktop (≥ 1280px) */}
      <div className="hidden xl:block">
        <MissionTable missions={sorted} />
      </div>
    </div>
  );
}