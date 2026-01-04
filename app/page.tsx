/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unused-vars */
import './globals.css';

export default function Home() {
  return (
    <section className="flex items-center justify-center p-6 rounded-md">
  <div className="max-w-6xl text-lg text-left text-white space-y-6">
    
    {/* New Year's Update Bubble */}
    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-lg space-y-4">
      <h2 className="font-semibold text-xl">
        Update: Happy New Year! <span className="italic text-white/70">
          (The year was 2026 in case I forgot to update the website and it's been a while 🙂)
        </span>
      </h2>

      <p>
        2025 was a pretty cool year. I learned a lot, failed a lot, and built a lot of
        new habits, and am super excited for the upcoming year. I also learned how to
        make lattes, and just recently started making my own latte art!
      </p>

      {/* Latte image block */}
      <div className="flex flex-col items-center">
        <img
          src="/latte.jpeg"
          alt="Latte I made"
          className="w-full max-w-xs rounded-lg border border-white/20 shadow-md"
        />
        <span className="mt-2 text-sm text-white/70 italic text-center">
          A latte with Y for Yash ☕🤠
        </span>
      </div>

      <p>
        This year, I'm super focused on bringing my ideas into the real world with robots, staying consistent, and
        growing both emotionally and physically each day. Stay on the lookout for me and also my brother Raj, captain of FTC DivideByZero 9791. We're cooking something up. 
      </p>
    </div>

    {/* Main About Text */}
    <p>
      I'm a rising junior at MIT, currently pursuing my B.S. in Computer
      Science and Electrical Engineering. I enjoy and place a strong focus
      on robotics and machine learning, particularly reinforcement learning
      and its applications to Sim2Real training for whole-body control of
      humanoids. I currently work with the Improbable AI Lab, where I
      develop reinforcement learning pipelines for humanoid robots,
      experiment with policy ensembles, and scale data collection for
      visuomotor policies. I’ve also contributed to projects across the
      robotics stack—from teleoperation systems to control tuning—during
      internships at [Stealth Robotics Startup] and Tangible Robotics.
    </p>

    <p>
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

  </div>
</section>

  );
}
