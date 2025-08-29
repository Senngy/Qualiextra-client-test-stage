"use client";

import { useState, useEffect, useRef } from "react";
import Profile from "./UserProfile";
import MenuItem from "./MenuItem";
import { FiX, FiMenu } from "react-icons/fi";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false); // état burger menu
  const menuRef = useRef<HTMLDivElement>(null); // Référence au menu pour la détection de clics extérieurs

  // Click en dehors pour fermer
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* Bouton burger pour mobile */}
       <button
        className="lg:hidden fixed top-4 right-4 z-50 p-2 bg-gray-200 rounded-md"
        onClick={() => setIsOpen(true)}
        aria-label="Ouvrir le menu"
        hidden={isOpen} // disparaît quand le menu est ouvert
      >
        <FiMenu size={24} />
      </button>

      {/* Menu principal */}
     <aside
        ref={menuRef}
        className={`fixed top-0 left-0 h-full w-[320px] xl:w-[200px] bg-white border-r border-gray-400 z-40
                    transform transition-transform duration-300
                    ${isOpen ? "translate-x-0" : "-translate-x-full"} 
                    lg:translate-x-0 lg:static lg:block `}
      >
        {/* Bouton croix */}
        <button
          className="lg:hidden absolute top-4 right-4 p-2"
          onClick={() => setIsOpen(false)}
          aria-label="Fermer le menu"
        >
          <FiX size={24} />
        </button>

        {/* Contenu du menu */}
        <div className="flex flex-col justify-between h-full">
          <div>
            <Profile name="Alex Doe" avatarUrl="/avatars/profile.png" />
            <div className="mx-[16px] mt-4">
              <button className="w-[168px] h-[40px] mx-auto px-[16px] py-[10px] bg-[#798C73] text-white rounded-[2px] hover:bg-[#8DA285]">
                + Nouvelle Mission
              </button>
            </div>

            <nav className="mt-6 space-y-1 pr-[1px]">
              <MenuItem href="/dashboard" label="Tableau de bord" />
              <MenuItem href="/planning" label="Planning" />
              <MenuItem href="/missions" label="Missions" active />
              <MenuItem href="/factures" label="Factures" />
            </nav>
          </div>

          {/* Bottom */}
          <nav className="space-y-1 pb-4">
            <MenuItem href="/parametres" label="Paramètres" />
            <MenuItem href="/contact" label="Contact" />
            <MenuItem href="/logout" label="Déconnexion" />
          </nav>
        </div>
      </aside>
    </>
  );
}