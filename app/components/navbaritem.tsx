"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";

type NavLinkProps = {
  href: string;
  label: string;
  hoveredItem: string | null;
  setHoveredItem: (label: string | null) => void;
};

export default function NavLink({
  href,
  label,
  hoveredItem,
  setHoveredItem,
}: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;
  const isHovered = hoveredItem === label;
  const showActiveStyle = isActive && (!hoveredItem || isHovered);

  return (
    <Link
      href={href}
      onMouseEnter={() => setHoveredItem(label)}
      onMouseLeave={() => setHoveredItem(null)}
      className={clsx(
        "px-4 py-2 rounded-xl font-bold transition duration-200 text-white",
        "transition-colors duration-800 ease-in-out",
        showActiveStyle &&
          "bg-gradient-to-r from-blue-500 to-green-500 shadow-inner text-white",
        !isActive &&
          "hover:bg-gradient-to-r from-blue-500 to-green-500 hover:text-white"
      )}
    >
      {label}
    </Link>
  );
}
