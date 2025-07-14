"use client";

import { useState } from "react";
import NavLink from "./navbaritem";

export default function Navbar() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <nav className="bg-gray-800 rounded-2xl p-1 inline-flex space-x-2">
      {[
        { href: "/", label: "Home" },
        // { href: "/projects", label: "Projects" },
        { href: "/cv", label: "CV" },
      ].map(({ href, label }) => (
        <NavLink
          key={href}
          href={href}
          label={label}
          hoveredItem={hoveredItem}
          setHoveredItem={setHoveredItem}
        />
      ))}
    </nav>
  );
}
