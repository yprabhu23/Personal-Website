"use client";

export default function CV() {
  return (
    <main className="max-w-7xl mx-auto px-8 py-16 text-gray-100 font-sans">
      <h1 className="text-5xl font-bold mb-2">Yash Prabhu</h1>

      <p className="text-gray-400 mb-10 text-lg">
        <a href="mailto:yashprabhu19@gmail.com" className="underline hover:text-blue-300">
          yashprabhu19@gmail.com
        </a>{" "}
        | 267-356-9767 |{" "}
        <a href="https://www.yashprabhu.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-300">
          www.yashprabhu.com
        </a>{" "}
        |{" "}
        <a
          href="https://www.linkedin.com/in/yash-prabhu-b9695520a/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-blue-300"
        >
          https://www.linkedin.com/in/yash-prabhu-b9695520a/
        </a>
      </p>

      {/* Education */}
      <section className="mb-14">
        <h2 className="text-3xl font-semibold mb-4">Education</h2>

        <div className="mb-6">
          <p className="font-medium text-lg">Massachusetts Institute of Technology (MIT)</p>
          <p className="text-sm text-gray-400">GPA: 4.7/5.0</p>
          <ul className="text-sm text-gray-300 mt-1 list-disc list-inside">
            <li>Candidate for Bachelor’s in Electrical Engineering and Computer Science — Flexible: Dec 2026/Jun 2027</li>
          </ul>

          <p className="mt-2 text-sm text-gray-400">Relevant coursework: </p>
          <p className="text-sm text-gray-300 list-disc list-inside"> Deep Learning (A), Controls (A), Computer Vision (A), Computer Architecture (A), Circuits (A), Statistics (A), Fundamentals of Programming (A), Robotics and Autonomy (A)</p>

          <p className="mt-2 text-sm text-gray-400">Extracurriculars:</p>
          <p className="text-sm text-gray-300">Men’s Varsity Soccer, Undergraduate Research</p>
        </div>

        <div>
          <p className="font-medium text-lg">North Penn High School, Lansdale, PA</p>
          <p className="text-sm text-gray-400">Jun 2021</p>
          <p className="text-sm text-gray-300">
            Awards: International Science and Engineering Fair Finalist, Pennsylvania All-State Bb Clarinet | SAT: 1570
          </p>
          <p className="text-sm text-gray-300">GPA: 4.21/4.0</p>
        </div>
      </section>

      {/* Work/Internship Experience */}
      <section className="mb-14">
        <h2 className="text-3xl font-semibold mb-4">Work/Internship Experience</h2>

        {/* Nyro Robotics */}
        <div className="mb-6">
          <p className="font-medium text-lg">Nyro Robotics, San Francisco, CA</p>
          <p className="text-sm text-gray-400">Robot Learning Assistant • Jun 2025 - Present</p>
          <ul className="list-disc list-inside text-sm text-gray-300 mt-1 space-y-1">
            <li>
              Refactored OpenHOMIE training pipeline to support multi-GPU simulation and visualization on remote GCP clusters;
              enabled concurrent use of multiple CUDA devices by decoupling graphics and simulation hardware
            </li>
            <li>
              Designed a fully automated visualization + video recording system for headless GPU nodes using X11 forwarding and X
              virtual frame buffer
            </li>
            <li>
              Wrote bash scripts and parameterizable tools for generating benchmark videos of policy visualization from arbitrary
              checkpoints and robot state inputs and added in functionality to upload videos to Google Drive and Weights and
              Biases
            </li>
            <li>
              Integrated Slack + Weights &amp; Biases alerts for reward drops and key training milestones; improved observability
              and reduced idle GPU time during long runs by managing GPU use for visualization to integrate visualization and
              training simultaneously on four GPUs
            </li>
            <li>
              Tune reward functions and control parameters for reinforcement learning trainings using Proximal Policy Optimization
              (PPO) to stabilize Sim2real locomotion using OpenHOMIE action curriculum under distributional shift (Booster vs.
              Unitree robot morphologies); emphasize reproducibility via branch-tracked reward diffs and config
            </li>
          </ul>
        </div>

        {/* MIT CSAIL */}
        <div className="mb-6">
          <p className="font-medium text-lg">MIT CS &amp; AI Lab, Cambridge, MA</p>
          <p className="text-sm text-gray-400">Robotics Research Intern (Improbable AI Group)</p>
          <ul className="list-disc list-inside text-sm text-gray-300 mt-1 space-y-1">
            <li>
              Adapting a MuJoCo-based monocular ball-tracking system I wrote to IsaacLab by integrating photorealistic rendering
              and reducing visual distractors to improve robustness of egocentric object detection under sim-to-real transfer
            </li>
            <li>
              Used an existing IsaacLab pipeline to explore humanoid catching of medicine ball on Unitree H1; utilized PPO, and
              vectorized environments to parallelize rollouts across multiple GPUs
            </li>
            <li>
              Conducted systematic environment modification and reward shaping for velocity-based locomotion Unitree H1
              configuration; reverse-engineered IsaacLab’s manager-based task API to customize observations, command spaces, URDF
              properties, and PD control parameters
            </li>
            <li>
              Developed tools to inject custom objects (e.g. thrown ball) into IsaacSim scenes with tunable initial states,
              enabling egocentric catch trajectories for humanoids
            </li>
            <li>Trained humanoid walking using Pure RL controller and Procedurally Generated RL controller from Laflan dataset</li>
            <li>
              Experimented with data scaling technologies and developed custom infrastructure for Universal Manipulation Interface
              pipeline to be used on a bimanual robot setup. Mimicked driver construction to use RobotIQ gripper. (2024)
            </li>
            <li>
              Porting real-world policy evaluation code for the Universal Manipulation Interface (UMI) to simulation by modifying
              low-level RTDE commands; refactored environment and controller infrastructure (eval_real.py,
              RTDEInterpolationController) for sim compatibility
            </li>
            <li>
              Debugged and reconfigured video input pipeline for UMI deployment; resolved multi-camera device conflicts by
              filtering v4l paths for Elgato cameras to enable real-time synchronized capture
            </li>
            <li>
              Replaced UMI’s hardcoded WSG50 gripper interface—which parsed serial commands from an action buffer—with a
              mock-compatible Robotiq driver using the Python API; maintained the original control pipeline by replicating WSG50
              method signatures and memory queuing structure for seamless integration
            </li>
            <li>Figure out how to write the stuff about Drake</li>
          </ul>
        </div>

        {/* Tangible Robotics */}
        <div className="mb-6">
          <p className="font-medium text-lg">Tangible Robotics, San Francisco, CA</p>
          <p className="text-sm text-gray-400">Robotics Intern • Jan 2025 – Feb 2025</p>
          <ul className="list-disc list-inside text-sm text-gray-300 mt-1 space-y-1">
            <li>
              Built a UDP-based streaming system to transmit MetaQuest controller poses from Unity to a ROS node over WiFi for
              real-time robot teleoperation
            </li>
            <li>
              Evaluated multiple ROS integration strategies for VR control, including direct ROS publishing, TCP bridging, and
              Unity-ROS socket communication
            </li>
            <li>
              Analyzed end-to-end round-trip latency using custom UDP benchmarking; achieved median pose streaming latency as low
              as 2.05 ms under local conditions
            </li>
            <li>
              Developed a simulated ROS1 environment for remote control of robot arms using VR joystick data; tuned servo timing
              to balance responsiveness and stability and used Inverse Kinematics and end-effector mapping
            </li>
            <li>
              Built and wired a full differential inverse kinematics controller stack in Drake for bimanual Realman RM-75 6F arm
              teleoperation in simulation; learned Drake’s diagram-based system abstraction by connecting PID, inverse dynamics,
              and MeshCat visualization components from scratch
            </li>
            <li>
              Researched and benchmarked low-cost teleoperation exoskeletons (e.g., GELLO, AirExo) for integration with custom
              bimanual robot platforms; evaluated hardware/software tradeoffs and encoder specs; also evaluated teleoperation
              hardware such as Inspire Hands and Manus teleoperation gloves
            </li>
            <li>
              Co-presented Tangible Robotics’ live demo at Founder’s Inc. “Cold Start” Demo Day, showcasing remote teleoperation
              of a mobile base and robotic arm via VR interface; presented alongside CTO and Head of Research to an audience of
              750+ investors, engineers, and VCs — one of only 5 startups selected for the Founder’s Inc. portfolio
            </li>
            <li>
              Regularly met with partners at Founder’s Inc. accelerator alongside the founders of Tangible Robotics and learned
              how to form a business plan, fundraise, and launch an early product
            </li>
          </ul>
        </div>

        {/* AutoUpLink */}
        <div className="mb-6">
          <p className="font-medium text-lg">AutoUpLink</p>
          <p className="text-sm text-gray-400">Software Engineering Intern • Jan 2024 – Feb 2024</p>
          <ul className="list-disc list-inside text-sm text-gray-300 mt-1 space-y-1">
            <li>
              Helped provide initial designs for UI/UX in revamp of AutoUpLink’s car inventory app in Figma; presented design flow
              and feature rationale directly to the (Fill in positions)
            </li>
          </ul>
        </div>
      </section>

      {/* Projects */}
      <section className="mb-14">
        <h2 className="text-3xl font-semibold mb-4">Projects</h2>

        <div className="mb-6">
          <p className="font-medium text-lg">Egocentric Baseball Detection using Simulation @ Improbable AI</p>
          <p className="text-sm text-gray-400">May 2025</p>
          <ul className="list-disc list-inside text-sm text-gray-300 mt-1 space-y-1">
            <li>
              Fine-tuned YOLOv8 on domain-randomized MuJoCo data (from Polycam scans) to detect baseballs from monocular RGB input
            </li>
            <li>
              Achieved +20 mAP@0.5 IoU threshold on real test data via early stopping; currently porting to IsaacLab for
              photorealism and reduced distractors
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <p className="font-medium text-lg">RISC-V Computer Processor</p>
          <p className="text-sm text-gray-400">May 2025</p>
          <ul className="list-disc list-inside text-sm text-gray-300 mt-1 space-y-1">
            <li>
              Designed a 4-stage processor with RISC-V architecture in MiniSpec. Learned about digital logic, caching, virtual
              memory, parallelization
            </li>
            <li>
              Accelerated MNIST inference via hardware multiplication, loop unrolling, and custom packed multiplication; received
              highest achievable score
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <p className="font-medium text-lg">
            A CNN-Based Automated Stuttering Identification System (First-author, IEEE ICMLA 22’)
          </p>
          <p className="text-sm text-gray-400">DATE 2022</p>
          <ul className="list-disc list-inside text-sm text-gray-300 mt-1 space-y-1">
            <li>
              Designed and trained multiple CNN classifiers in a full Tensorflow Pipeline using spectrograms derived from
              stuttered speech clips in the Sep-28k dataset, achieving F1 scores above 0.92 across disfluency types including
              blocks, repetitions, and prolongations.
            </li>
            <li>
              Proposed framework to support speech pathologists in low-resource settings; paper presented at 21st IEEE
              International Conference on Machine Learning and Applications (ICMLA)
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <p className="font-medium text-lg">Autonomous COVID-19 Screening with Deep Learning and Thermal Imaging (ISEF)</p>
          <p className="text-sm text-gray-400">DATE 2021</p>
          <ul className="list-disc list-inside text-sm text-gray-300 mt-1 space-y-1">
            <li>
              Built low-cost thermal mask/fever detection system using Faster R-CNN and FLIR Lepton 3.5. Evaluated multiple object
              detection models (SSD Mobilenet, Faster R-CNN) and thermal sensors (MLX90614, AMG8833, FLIR) for performance and
              accuracy
            </li>
            <li>
              Deployed prototype at public library; selected as ISEF Finalist in Robotics &amp; Intelligent Machines
            </li>
          </ul>
        </div>

        <div>
          <p className="font-medium text-lg">Low-Cost Firearm Detection with Mixed Deep Learning and Computer Vision</p>
          <p className="text-sm text-gray-400">DATE 2020</p>
          <ul className="list-disc list-inside text-sm text-gray-300 mt-1 space-y-1">
            <li>
              Developed and benchmarked three weapon detection pipelines (OpenCV, TensorFlow SSD, and hybrid), achieving up to 91%
              detection rate with low-latency real-time performance
            </li>
            <li>
              Engineered a custom mixed model combining classical CV and deep learning; improved detection rate by 10% while
              minimizing GPU usage and computation time, and validated results with bounding box accuracy, detection rate, and
              statistical significance
            </li>
          </ul>
        </div>
      </section>

      {/* Skills */}
      <section className="mb-14">
        <h2 className="text-3xl font-semibold mb-4">Skills</h2>
        <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
          <li>Technical Frameworks: Python, C, C++, Java, OpenCV, Tensorflow, Pytorch, Linux, Git, Bash, Conda, Matlab</li>
          <li>
            Experienced In: Data Structures, Algorithms, Computer Architecture, AI, Deep Learning, Computer Vision, Robotics,
            Strong Mathematics Skills, Operating Systems, Embedded Systems, Controls, Reinforcement Learning
          </li>
        </ul>
      </section>
    </main>
  );
}
