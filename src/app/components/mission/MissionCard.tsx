"use client";

import React from "react";
import Image from "next/image";

type User = {
  id: number;
  name: string;
  avatarUrl: string;
};

type MissionCardProps = {
  title: string;
  date: string; // ISO date
  status: string;
  candidates?: User[]; // Tableau de candidats ayant postulé
  remuneration?: string; // Exemple : "200€"
  hours?: string; // Exemple : "20:00 - 06:00"
  candidatesNumberStatus?: string; // Exemple : "5 candidatures"
};

export default function MissionCard({
  title,
  date,
  status,
  candidates = [],
  remuneration,
  hours,
  candidatesNumberStatus = "Aucun candidat n'a postulé pour le moment",
}: MissionCardProps) {
  // Limiter l'affichage des avatars à 5
  const visibleCandidates = candidates.slice(0, 5);

  return (
    <article className="flex py-[16px] flex-col items-start gap-4 border rounded border-gray-300 bg-white w-full shadow-sm hover:shadow-md transition">
      {/* Description de la card */}
      <div className="w-full px-[16px] pb-[16px] flex flex-col justify-between items-start border-b border-gray-200">
        {/* Titre et honoraire */}
        <div className="w-full flex justify-between items-center space-between">
          <h3 className="text-base font-semibold">{title}</h3>
          {remuneration && <span>{remuneration}</span>}
        </div>
        <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center">
          {/* Date + badge + horaires */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1">
            <div className=" mt-1 text-sm text-gray-500">
              {new Date(date).toLocaleDateString()}
            </div>
            <span className="text-xs font-medium px-1 py-1 rounded-[4px] bg-gray-100 text-gray-700">
              {status}
            </span>
          </div>
          <div className="mt-2 flex flex-wrap gap-4 text-sm text-gray-600">
            {hours && <span>🕒 {hours}</span>}
          </div>
        </div>
      </div>

      {/* Infos supplémentaires : rémunération + horaires */}

      {/* Section candidatures */}
      <div className="mt-3 px-[16px] w-full flex justify-center text-center items-center">
        {candidates.length === 0 ? (
          <span className="text-xs text-gray-400">
            {candidatesNumberStatus}
          </span>
        ) : (
          <div className="flex -space-x-2">
            {visibleCandidates.map((c) => (
              <Image
                key={c.id}
                src={c.avatarUrl}
                alt={c.name}
                title={c.name}
                className="w-6 h-6 rounded-full border-2 border-white object-cover"
                width={24}
                height={24}
              />
            ))}
            {candidates.length > 5 && (
              <span className="w-6 h-6 rounded-full border-2 border-white bg-gray-200 text-xs flex items-center justify-center text-gray-600">
                {candidates.length > 0
                  ? `+${candidates.length - 5} voir les ${
                      candidates.length
                    } candidatures`
                  : "Aucun candidat n'a postulé pour le moment"}
              </span>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
