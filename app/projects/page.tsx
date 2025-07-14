"use client";

import React, { useState } from "react";
import ProjectWidget from "./projectwidget";

const projects = [
  {
    title: "Ball catching with Unitree H1",
    description: "I use reinforcement learning methods like PPO in order to explore whether a Unitree H1 is able to catch a medicine ball.",
    link: "https://yourportfolio.com",
    techStack: ["Isaaclab", "Reinforcement Learning", "Python"],
  },
  {
    title: "AI Chatbot",
    description: "A GPT-powered chatbot for real-time conversations.",
    link: "https://github.com/yourchatbot",
    techStack: ["OpenAI", "Vercel", "LangChain"],
  },
];

export default function ProjectsPage() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-black dark:bg-black px-6 py-12">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectWidget
            key={project.title}
            {...project}
            hoveredItem={hoveredItem}
            setHoveredItem={setHoveredItem}
          />
        ))}
      </div>
      

      
    </main>
  );
}
