"use client";

import React from "react";
import clsx from "clsx";

type ProjectWidgetProps = {
  title: string;
  description: string;
  link?: string;
  techStack?: string[];
  hoveredItem: string | null;
  setHoveredItem: (label: string | null) => void;
};

export default function ProjectWidget({
  title,
  description,
  link,
  techStack,
  hoveredItem,
  setHoveredItem,
}: ProjectWidgetProps) {
  const isHovered = hoveredItem === title;

  return (
    <div
      onMouseEnter={() => setHoveredItem(title)}
      onMouseLeave={() => setHoveredItem(null)}
      className={clsx(
        "rounded-2xl p-6 border transition-shadow duration-300",
        "bg-white dark:bg-gray-900 text-gray-800 dark:text-white",
        isHovered
          ? "shadow-xl border-blue-500 dark:border-blue-400"
          : "border-gray-200 dark:border-gray-700 hover:shadow-md"
      )}
    >
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-2 text-gray-600 dark:text-gray-300">{description}</p>
      {techStack && (
        <div className="mt-4 flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
      {link ? (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block mt-4 text-sm text-blue-600 dark:text-blue-400 hover:underline"
  >
    View Project →
  </a>
) : (
  <a
    href={`#${title.toLowerCase().replace(/\s+/g, "-")}`}
    className="inline-block mt-4 text-sm text-blue-600 dark:text-blue-400 hover:underline"
  >
    Read More ↓
  </a>
)}
    </div>
  );
}
