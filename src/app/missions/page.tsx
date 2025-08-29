"use client"; // nécessaire car on utilise useState pour les onglets et la recherche

import React, { useState, useMemo } from "react";
import Menu from "@/app/components/menu/Menu";
import TabsMenu from "@/app/components/mission/TabsMenu";
import SearchAndFilters from "@/app/components/mission/SearchAndFilters";
import MissionList, { Mission } from "@/app/components/mission/MissionList";

// Types pour les statuts
type Status = "À pourvoir" | "En cours" | "À venir" | "Terminées" | "Annulées";

// Type Candidate
type Candidate = { id: number; name: string; avatarUrl: string };

// 🔹 Données factices
const candidateList: Candidate[] = [
    { id: 1, name: "Alice", avatarUrl: "/avatars/avatar.jpeg" },
    { id: 2, name: "Bob", avatarUrl: "/avatars/avatar1.jpeg" },
    { id: 3, name: "Charlie", avatarUrl: "/avatars/avatar2.jpeg" },
    { id: 4, name: "David", avatarUrl: "/avatars/avatar3.jpeg" },
    { id: 5, name: "Eva", avatarUrl: "/avatars/avatar4.jpeg" },
  ];

  // Seeding des missions
  const missions: Mission[] = [
    {
      id: 1,
      title: "Réceptionniste de jour",
      date: new Date().toISOString(),
      status: "Badge",
      remuneration: "200.00€",
      hours: "Horaires",
      candidates: candidateList.slice(0, 5),
    },
    {
      id: 2,
      title: "Réceptionniste de jour",
      date: new Date().toISOString(),
      status: "Badge",
      remuneration: "200.00€",
      hours: "Horaires",
      candidates: [],
    },
    {
      id: 3,
      title: "Réceptionniste de jour",
      date: new Date().toISOString(),
      status: "",
      remuneration: "200.00€",
      hours: "Horaires",
      candidates: candidateList.slice(0, 5),
    },
    {
      id: 4,
      title: "Réceptionniste de jour",
      date: new Date().toISOString(),
      status: "",
      remuneration: "200.00€",
      hours: "Horaires",
      candidates: candidateList.slice(0, 3),
    },
    {
      id: 5,
      title: "Réceptionniste de jour",
      date: new Date().toISOString(),
      status: "",
      remuneration: "200.00€",
      hours: "Horaires",
      candidates: [],
    },
  ];

export default function MissionsPage() {
  // Onglet actif
  const [activeTab, setActiveTab] = useState<Status>("À pourvoir");

  // Texte de recherche
  const [searchQuery, setSearchQuery] = useState("");

  // Missions filtrées selon onglet et recherche
  const filteredMissions = useMemo(() => {
    return missions.filter((mission) => {
      const matchesTab = activeTab === "À pourvoir" || mission.status === activeTab;
      const matchesSearch =
        mission.title.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Menu />

      {/* Contenu principal */}
      <main className="flex-1 p-6 bg-gray-50 overflow-y-auto">
        {/* Titre de la page */}
        <h1 className="text-2xl font-bold">Missions</h1>

        {/* Onglets horizontaux */}
        <div className="mt-4">
          <TabsMenu
            active={activeTab}
            onChange={(tab) => setActiveTab(tab as Status)}
          />
        </div>

        {/* Barre de recherche + filtres */}
        <div className="mt-4">
          <SearchAndFilters
            onSearchChange={(q) => setSearchQuery(q)}
            onOpenDate={() => {}}
            onOpenFilters={() => {}}
          />
        </div>

        {/* Liste des missions */}
        <div className="mt-6">
          <MissionList missions={filteredMissions} />
        </div>
      </main>
    </div>
  );
}