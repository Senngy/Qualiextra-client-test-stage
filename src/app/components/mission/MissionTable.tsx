"use client";

import React from "react";
import Image from "next/image";

type Candidate = { id: number; name: string; avatarUrl: string };

type Mission = {
  id: number;
  title: string;
  status: string;
  date: string;
  remuneration?: string;
  hours?: string;
  candidates?: Candidate[];
};

export default function MissionTable({ missions }: { missions: Mission[] }) {
  return (
    <div className="w-full rounded-1 border border-gray-300 overflow-hidden bg-white">
      <table className="min-w-full text-sm">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left">Titre</th>
            <th className="px-4 py-3 text-left">Statut</th>
            <th className="px-4 py-3 text-left">Date</th>
            <th className="px-4 py-3 text-left">Rémunération</th>
            <th className="px-4 py-3 text-left">Horaires</th>
            <th className="px-4 py-3 text-left">Candidats</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((m) => {
            // Pour chaque mission
            // Gestion des candidats
            const candidates = m.candidates || [];
            const visibleCandidates = candidates.slice(0, 5);

            return (
              // On fait un return parce que c'est une fonction dans le map
              <tr
                key={m.id}
                className="border-t border-gray-200 hover:bg-gray-50 transition"
              >
                <td className="px-4 py-3">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-green-600"
                  />
                </td>
                <td className="px-4 py-3">{m.title}</td>
                <td className="px-4 py-3">{m.status || "-"}</td>
                <td className="px-4 py-3">
                  {new Date(m.date).toLocaleDateString()}
                </td>
                <td className="px-4 py-3">{m.remuneration || "-"}</td>
                <td className="px-4 py-3">{m.hours || "-"}</td>
                <td className="px-4 py-3">
                  {candidates.length === 0 ? (
                    <span className="text-xs text-gray-400">
                      Aucun candidat
                    </span>
                  ) : (
                    <div className="flex -space-x-2">
                      {visibleCandidates.map(
                        (
                          c // Afficher les avatars des candidats
                        ) => (
                          <div
                            key={c.id}
                            className="w-6 h-6 relative rounded-full overflow-hidden border-2 border-white"
                          >
                            <Image
                              src={c.avatarUrl}
                              alt={c.name}
                              title={c.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                        )
                      )}
                      {candidates.length > 5 && (
                        <span className="w-6 h-6 rounded-full border-2 border-white bg-gray-200 text-xs flex items-center justify-center text-gray-600">
                          +{candidates.length - 5}
                        </span>
                      )}
                    </div>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
