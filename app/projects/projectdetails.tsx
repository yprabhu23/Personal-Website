// components/projectdetails.tsx
import React from "react";

interface ProjectDetailsProps {
  title: string;
  description: string;
  media?: React.ReactNode;
  details?: string;
}

export default function ProjectDetails({
  title,
  description,
  media,
  details,
}: ProjectDetailsProps) {
  return (
    <div className="text-white py-8 border-b border-gray-700">
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-300 mb-4">{description}</p>
      {media && <div className="mb-4">{media}</div>}
      {details && <p className="text-gray-400">{details}</p>}
    </div>
  );
}
