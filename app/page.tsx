/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unused-vars */
import './globals.css';

export default function Home() {
  return (
    <div className="min-h-screen pt-28 px-6 p-8 gap-8">
      {/* Row 1: Intro */}
      <section className="flex items-center justify-center  p-6 rounded-md">
        <h1 className="text-3xl font-bold text-white">Hi, I'm Yash 👋</h1>
      </section>

      {/* Row 2: About */}
      <section className="flex items-center justify-center  p-6 rounded-md">
        <p className="max-w-6xl text-lg text-left text-white indent-8">
          I'm a rising junior at MIT, currently pursuing my B.S. in Computer
          Science and Electrical Engineering. I enjoy and place a strong focus
          on robotics and machine learning, particularly reinforcement learning
          and it's applications to Sim2Real training for whole body control of
          humanoids. I currently work with the Improbable AI Lab, where I
          develop reinforcement learning pipelines for humanoid robots,
          experiment with policy ensembles, and scale data collection for
          visuomotor policies. I’ve also contributed to projects across the
          robotics stack—from teleoperation systems to control tuning—during
          internships at [Stealth Robotics Startup] and Tangible Robotics. <br />
          <br />
          My work blends low-level programming, algorithmic rigor, and hands-on
          hardware debugging. I'm particularly interested in the Sim2Real
          problem and enabling intelligent robotic behaviors through
          data-efficient learning. With experience ranging from RISC-V
          architecture to CNN-based speech analysis, I’m driven by solving hard
          technical problems and building systems that actually work in the real
          world. Outside of academics, I play varsity soccer at MIT and enjoy
          diving deep into interdisciplinary research that pushes the boundaries
          of autonomous systems.
        </p>
      </section>
    </div>
  );
}
