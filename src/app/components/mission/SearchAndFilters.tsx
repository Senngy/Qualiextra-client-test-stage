'use client'

import React from "react";
import { FiSearch, FiCalendar, FiFilter } from "react-icons/fi";

type FiltersBarProps = {
  onSearchChange: (value: string) => void;
  onOpenDate: () => void;
  onOpenFilters: () => void;
};

export default function SearchAndFilters({ onSearchChange, onOpenDate, onOpenFilters }: FiltersBarProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-2">
      {/* Search bar */}
      <input
        type="text"
        placeholder="Rechercher par métier, date JJ/MM/AAAA ou candidat"
        className="flex w-full h-10 px-[8px] pr-1 items-center gap-2 self-stretch rounded-sm border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 sm:block hidden"
        onChange={(e) => onSearchChange(e.target.value)}
      />

      {/* Boutons normal desktop */}
      <div className="hidden sm:flex gap-2">
        <button
          onClick={onOpenDate}
          className="flex h-10 px-4 justify-center items-center gap-1 rounded border border-gray-300 bg-white w-auto hover:bg-gray-200 transition"
        >
          <FiCalendar className="mr-1" />
          Dates
        </button>
        <button
          onClick={onOpenFilters}
          className="flex h-10 px-4 justify-center items-center gap-1 rounded border border-gray-300 bg-white w-auto hover:bg-gray-200 transition"
        >
           <FiFilter className="mr-1" />
          Sélectionner
        </button>
      </div>

      {/* Icon buttons mobile */}
      <div className="flex sm:hidden gap-2">
        <button onClick={() => {}} className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition">
          <FiSearch />
        </button>
        <button onClick={onOpenDate} className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition">
          <FiCalendar />
        </button>
        <button onClick={onOpenFilters} className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition">
          <FiFilter />
        </button>
      </div>
    </div>
  );
}