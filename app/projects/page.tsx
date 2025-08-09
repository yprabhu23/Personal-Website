"use client";

import React, { useState } from "react";
import ProjectWidget from "./projectwidget";
import ProjectDetails from "./projectdetails";

const projects = [
  {
    title: "Ball catching with Unitree H1",
    description: "I use reinforcement learning methods like PPO in order to explore whether a Unitree H1 is able to catch a medicine ball.",
    link: "https://yourportfolio.com",
    techStack: ["Isaaclab", "Reinforcement Learning", "Python"],
  },
  {
    title: "RISCV Pipelined Processor",
    description: "Built a 4-stage pipelined processor for RISCV-architecture in Minispec",
    link: "https://github.com/yourchatbot",
    techStack: ["C", "Minispec", "Assembly"],
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
      <div className="h-screen" />
      <div className="w-full border-t border-gray-700 mt-12" />
      <section className="min-h-screen px-6 py-12">
  <h1 className="text-3xl font-bold text-white mb-8">Project Descriptions</h1>

  <ProjectDetails
    title="Ball catching with Unitree H1"
    description="Using PPO and IsaacLab to train a humanoid robot to catch a medicine ball."
    media={
      <video controls className="w-full max-w-xl rounded-lg">
        <source src="/videos/ball-catch-demo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    }
    details="This project explores real-time visual inference and pose estimation with a latency budget of ~60ms. The reward structure balances reaction time and successful interception trajectory."
  />

  <ProjectDetails
    title="RISCV Pipelined Processor"
    description="A 4-stage pipeline implementation of a RISC-V processor using Minispec."
    media={
      <img
        src="/images/riscv-pipeline-diagram.png"
        alt="Pipeline Diagram"
        className="w-full max-w-xl rounded-lg"
      />
    }
    details="The processor handles hazards with stalling and basic forwarding. I built it to pass ISA compliance tests and wrote custom test benches to verify corner cases."
  />
</section>
      

      
    </main>
  );
}
