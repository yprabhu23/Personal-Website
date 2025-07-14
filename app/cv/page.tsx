"use client";
import './globals.css';

export default function CV() {
  return (
    <main className="max-w-7xl mx-auto px-8 py-16 text-gray-100 font-sans">
      <h1 className="text-5xl font-bold mb-2">Yash Prabhu</h1>
      <p className="text-gray-400 mb-10 text-lg">
        yprabhu@mit.edu | 267-356-9767
      </p>

      {/* Education */}
      <section className="mb-14">
        <h2 className="text-3xl font-semibold mb-4">Education</h2>

        <div className="mb-6">
          <p className="font-medium text-lg">Massachusetts Institute of Technology (MIT)</p>
          <p className="text-sm text-gray-400">
            GPA: 4.5 / 5.0
          </p>
          <ul className="text-sm text-gray-300 mt-1 list-disc list-inside">
            {/* <li>Candidate for Masters in Electrical Engineering and Computer Science – Flexible: Dec 2027 / Jun 2028</li> */}
            <li>Candidate for Bachelors in Electrical Engineering and Computer Science – Jun 2027</li>
          </ul>
          <p className="mt-2 text-sm text-gray-400">Relevant coursework:</p>
          <ul className="text-sm text-gray-300 list-disc list-inside">
            <li>Computer Architecture, Design/Analysis of Algorithms, Machine Learning, Computer Vision</li>
            <li>Linear Algebra/Optimization, Statistics, Probability/Random Vars, Robotics & Autonomy</li>
            <li>Low-Level Programming, Fundamentals of Programming, Multivariable Calculus</li>
          </ul>
          <p className="mt-2 text-sm text-gray-400">Extracurriculars: Men’s Varsity Soccer, Undergraduate Research</p>
        </div>

        <div>
          <p className="font-medium text-lg">North Penn High School</p>
          <p className="text-sm text-gray-400">
            GPA: 4.65 / 4.0 • Jun 2021 • SAT: 1570 • Awards: ISEF Finalist
          </p>
          <p className="text-sm text-gray-400 mt-1">
            Bb Clarinetist – North Penn High School Wind Ensemble, PMEA All State Band
          </p>
        </div>
      </section>

      {/* Work/Internship Experience */}
      <section className="mb-14">
        <h2 className="text-3xl font-semibold mb-4">Work/Internship Experience</h2>

        <div className="mb-6">
          <p className="font-medium text-lg">MIT CS & AI Lab, Cambridge, MA</p>
          <p className="text-sm text-gray-400">Robotics Research Intern (Improbable AI Group) • Aug 2023 – Present</p>
          <ul className="list-disc list-inside text-sm text-gray-300 mt-1">
            <li>Designing dense reward for catching of ball with Unitree H1 Humanoid in Nvidia Isaac Lab and trained ball-catching policy</li>
            <li>Trained humanoids for walking using pure reinforcement learning controller and procedural reinforcement learning controller to observe walking gaits and produce video for human survey</li>
            <li>Experimenting with randomly initialized PPO agents competing against each other to enforce a policy update constraint via ensemble of policies (CleanRL)</li>
            <li>Used the Universal Manipulation Interface to scale data collection for Visuomotor Diffusion Policies</li>
          </ul>
        </div>

        <div className="mb-6">
          <p className="font-medium text-lg">Nyro Robotics, San Francisco, CA</p>
          <p className="text-sm text-gray-400">Robot Learning Engineering Assistant • Jun 2025 – Present</p>
          <ul className="list-disc list-inside text-sm text-gray-300 mt-1">
            <li>Prototype Testing & Debugging: Run daily ML/AI trainings and deploy hardware-in-the-loop tests on humanoid subsystems, log failures, push firmware hot-fixes</li>
            <li>Data Pipeline Operations: collect, label, and curate teleop logs; ensure training sets stay fresh and versioned</li>
            <li>Control-Stack Experiments: tweak PID/MPC parameters, run A/B trials, and plot performance deltas for senior developers</li>
            <li>Demo Prep & Field Support: flash builds, sanity-check sensors, shadow on-site deployments, capture edge-case telemetry, and develop ML/AI infra</li>
          </ul>
        </div>

        <div className="mb-6">
          <p className="font-medium text-lg">Tangible Robotics, Palo Alto, CA</p>
          <p className="text-sm text-gray-400">Robotics Intern • Jan 2025 – Feb 2025</p>
          <ul className="list-disc list-inside text-sm text-gray-300 mt-1">
            <li>Built differential inverse-kinematics controller teleop simulation in Drake for bimanual setup</li>
            <li>Developed pipeline for Meta Quest & Movis foot pedal to communicate with ROS via UDP</li>
            <li>Presented pitch at Founders, Inc. demo day in San Francisco</li>
            <li>Explored teleop methods: GELLO, Exoskeleton, etc.</li>
          </ul>
        </div>

        <div className="mb-6">
          <p className="font-medium text-lg">AutoUpLink</p>
          <p className="text-sm text-gray-400">UI/UX Design Intern • Jan 2025 – Feb 2025</p>
          <ul className="list-disc list-inside text-sm text-gray-300 mt-1">
            <li>Used Figma to design updated app layout for AutoUpLink</li>
            <li>Presented designs to CTO and CEO</li>
          </ul>
        </div>

        <div>
          <p className="font-medium text-lg">University of Wisconsin Eau-Claire</p>
          <p className="text-sm text-gray-400">Computer Vision Research • 2022</p>
          <ul className="list-disc list-inside text-sm text-gray-300 mt-1">
            {/* <li>Implemented 3000+ lines of C++ to simulate particle collisions in Linux; analyzed 10 billion collisions</li> */}
            <li>Paper accepted at IEEE ICMLA 2022: “A CNN-based Automated Stuttering Identification System” (with Naeem Seliya)</li>
          </ul>
        </div>
      </section>

      {/* Projects */}
      <section className="mb-14">
        <h2 className="text-3xl font-semibold mb-4">Projects</h2>

        <div className="mb-6">
          <p className="font-medium text-lg">RISC-V Computer Processor</p>
          <p className="text-sm text-gray-400">Sep 2022 – Dec 2022</p>
          <ul className="list-disc list-inside text-sm text-gray-300 mt-1">
            <li>Designed 4-stage processor with RISC-V architecture in MiniSpec</li>
            <li>Implemented memory/instruction caches, ALU, pipelining, and bypassing</li>
            <li>Optimized MNIST neural network with C-optimizations, hardware multiplication, packed mult, loop unrolling</li>
          </ul>
        </div>

        <div>
          <p className="font-medium text-lg">Sim2Real Learning for Baseball Detection</p>
          <p className="text-sm text-gray-400">May 2025</p>
          <ul className="list-disc list-inside text-sm text-gray-300 mt-1">
            <li>Generated synthetic baseball trajectories in MuJoCo to boost YOLOv8 performance</li>
            <li>Domain randomized background, lighting, and trajectory</li>
            <li>Mocked Intel RealSense intrinsics; segmented images using Grounded DINO</li>
            {/* <li>Improved THESE METRICS BY THIS MUCH (add exact metrics)</li> */}
          </ul>
        </div>
      </section>

      {/* Skills */}
      <section className="mb-14">
        <h2 className="text-3xl font-semibold mb-4">Skills</h2>
        <ul className="list-disc list-inside text-sm text-gray-300">
          <li>Technical Frameworks: Python, C, C++, Java, OpenCV, Tensorflow, Pytorch, Linux, Git, Bash, Conda, Matlab</li>
          <li>Experienced In: Data Structures, Algorithms, Computer Architecture, AI, Deep Learning, Computer Vision, Robotics, Humanoids, Reinforcement Learning</li>
        </ul>
      </section>

      {/* Resume Download */}
      {/* <section className="pt-4">
        <a
          href="/YashResumeUpdated2025.docx"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 underline text-sm"
        >
          Download full resume →
        </a>
      </section> */}
    </main>
  );
}
