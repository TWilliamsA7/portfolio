import {
  HandMetal,
  Rotate3D,
  Puzzle,
  Cpu,
  Binary,
  Atom,
  CircleDollarSign,
  Folder,
  Ship,
  Carrot,
  BriefcaseBusiness,
  ListCheck,
  Wifi,
  Eye,
} from "lucide-react";

export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  image: string;
  icon: any;
  githubUrl?: string;
  liveUrl?: string;
  features: string[];
  date: Date;
}

export const projects: Project[] = [
  {
    id: "java-renderer",
    title: "Java 3D Renderer",
    description:
      "An introductory project utilizing OOP principles alongside matrix manipulation to render simple 3D models",
    fullDescription:
      "Built a 3D Viewport for visualizing simple models derived from triangles. Implemented Matrix and Point Classes to describe the object and perfomr the necessary option to render and manipulate the model in the viewport including lighting. For the demo, a tetrahedron was created and subdivided to create a sphere.",
    technologies: ["Java", "Swing"],
    image: "/Java3DRenderer.jpg",
    icon: Rotate3D,
    githubUrl: "https://github.com/TWilliamsA7/3DRenderer",
    features: [
      "Interactive 3D Viewport",
      "Inflate function for increasing resolution",
      "Depth-Based Vertex Shading",
    ],
    date: new Date("2025-05-02"),
  },
  {
    id: "asl-neural-app",
    title: "ASL Neural App",
    description:
      "A lightweight full stack application for transcribing real-time American Sign Language into text via a convolutional neural network.",
    fullDescription: "<Insert Full Description>", // TODO: FILL IN DESCRIPTION
    technologies: ["Python", "Jupyter", "OpenCV", "TensorFlow", "Google Colab"],
    image: "/globe.svg", // TODO: ADD IMAGE
    icon: HandMetal,
    githubUrl: "https://github.com/TWilliamsA7/asl-neural-app",
    features: [
      "Real-time Inference via CNN",
      "Inference-based transcription",
      "> 90% Accuracy across 25+ signs",
    ],
    date: new Date("2025-08-02"),
  },
  {
    id: "chess",
    title: "Chess",
    description:
      "A full implementation of the classic game of Chess with some extra helpful features.",
    fullDescription:
      "This project is an implementation of Chess in Java using Swing for the UI. This is a fully playable version of chess including promotion, castling, en passant, check, and checkmate. This project was a learning experience in Java but more importantly OOP design princples allowing for organized, safer code.",
    technologies: ["Java", "Swing"],
    image: "/ChessProj.jpg",
    icon: Puzzle,
    githubUrl: "https://github.com/TWilliamsA7/Chess",
    features: [
      "Move Validation for Check/Checkmate",
      "Special Moves: En Passant, Castling, Promotion",
      "Move Tracking",
    ],
    date: new Date("2025-05-02"),
  },
  {
    id: "chip8",
    title: "Chip 8 Emulator",
    description: "C-based implementation of the CHIP8 Virtual Machine",
    fullDescription:
      "This project is an implementation of the CHIP8 Virtual Machine following the original CHIP8 specification. Created a digital structure to recreate the opcode processing and memory interactions of the original Chip8. Using SDL2 to create a graphical interface for the operations taking place. As each opcode is processed, it is logged for debugging purposes and validation.",
    technologies: ["C", "SDL2"],
    image: "/Chip8.jpg",
    icon: Cpu,
    githubUrl: "https://github.com/TWilliamsA7/Chip8Emulator",
    features: [
      "Support for all 35 Chip8 Opcodes",
      "Controllable Frames per Second",
      "Accurate Chip8 Memory representation",
      "Hex Keyboard implementation",
    ],
    date: new Date("2025-02-02"),
  },
  {
    id: "digital-error-analysis",
    title: "Digital Error Analysis",
    description:
      "Implemented and analyzed various error correction algorithms in Verilog modules.",
    fullDescription:
      "This project was initially for my COT3100 Intro to Discrete Structures Final Project. The purpose of this work is to analyze and implement various methods to address errors in digital circuits. These methods were implemented in Verilog and validated through testbenches. Through these implementations and analysis, I wrote a paper on my findings and work.",
    technologies: ["Verilog", "SystemVerilog", "GTKWave", "Icarus"],
    image: "/ECDC.jpg",
    icon: Binary,
    githubUrl: "https://github.com/TWilliamsA7/DigitalErrorAnalysis",
    features: [
      "Linear Feedback Shift Register Data Generation",
      "Parameterizable Hamming Codes",
      "Cyclic Redundancy Checks",
      "Bose-Chaudhuri-Hocquenghem Codes",
    ],
    date: new Date("2025-03-02"),
  },
  {
    id: "emsim",
    title: "Electromagnetic Particle Simulator",
    description:
      "Created a simulator for electromagnetic interactions between particles.",
    fullDescription:
      "This project is a 3D renderer built using the SDL2 Library in C++. The objects placed within this renderer have physical properties and interactions. Static fields can also be imported into the scene for more complex interactions. A scene.json file must included in the command line to provide instructions on how to generate the scene.",
    technologies: ["C++", "SDL2", "CMake"],
    image: "/EMSim.jpg",
    icon: Atom,
    githubUrl: "https://github.com/TWilliamsA7/EMsim",
    features: [
      "Define Scenes via JSON configuration",
      "Various shaded meshes",
      "Full Range Customizable Camera",
      "Coulomb and Gravitational Force",
      "Electromagnetic Fields",
    ],
    date: new Date("2025-06-02"),
  },
  {
    id: "finance-tracker",
    title: "Finance Tracker",
    description:
      "Created Web Application for tracking finances, budgets, transactions, and fund allocation.",
    fullDescription:
      "This project was built to serve as a personal means for budgeting and tracking expenses. It is a web application built using the Django framework and uses a sqlite3 database given its scale. There is potential of furthering and deploying the project in the future.",
    technologies: ["Python", "Django", "Sqlite3", "HTML", "CSS"],
    image: "/financetracker.jpg",
    icon: CircleDollarSign,
    githubUrl: "https://github.com/TWilliamsA7/FinanceTracker",
    features: [
      "Track Transactions and associated metadata",
      "Multiple Account Organization",
      "Custom Budgets with fund allocation",
      "Authentication and Authorization",
    ],
    date: new Date("2025-05-02"),
  },
  {
    id: "folder-sort",
    title: "Foldersort",
    description: "<insert description>", // TODO: ADD DESCRIPTION
    fullDescription: "<insert full description>", // TODO: ADD FULL DESCRIPTION
    technologies: ["C++", "CMake", "GoogleTest", "Github Actions"],
    image: "", // TODO: ADD IMAGES
    icon: Folder,
    githubUrl: "https://github.com/TWilliamsA7/folder-sort",
    features: [
      "CLI",
      "Customizable rules via YAML",
      "Customizable file scanner",
    ],
    date: new Date("2025-12-02"),
  },
  {
    id: "gnor-boat",
    title: "Great Naval Orange Race Boat",
    description: "Team project developing an autonomous water vessel",
    fullDescription:
      "This is a repository for a school project in which a water vessel must travel across a fountain autonomously. Our boat used a twin motor differential drivetrain as opposed to a rudder. Using a gyroscope and arduino nano, the boat propelled itself along a predefined course.",
    technologies: ["Arduino", "OnShape", "Circuitry", "Breadboarding"],
    image: "/GNORBoat.jpg",
    icon: Ship,
    githubUrl: "https://github.com/TWilliamsA7/GNORBoat",
    features: [
      "Differential Drivetrain",
      "PID controlled motion via Gyroscope",
    ],
    date: new Date("2025-04-02"),
  },
  {
    id: "growcery",
    title: "Growcery",
    description:
      "An AI-powered crop & produce analyzer app made at KnightHacks VIII.",
    fullDescription:
      "Growcery uses AI and computer vision to analyze images of crops and produce. With a single photo, users can instantly learn about freshness, quality, or possible diseases, along with treatment advice or storage recommendations. Users can then keep track of these produce/crops within the app to make sure they are used before their expiration date.",
    technologies: [
      "Typescript",
      "Next.js",
      "Gemini API",
      "Supabase",
      "PyTorch",
      "FastAPI",
    ],
    image: "/project-images/Growcery.jpg",
    icon: Carrot,
    githubUrl: "https://github.com/TWilliamsA7/Growcery",
    liveUrl: "https://devpost.com/software/growcery",
    features: [
      "Quality inference on produce",
      "Produce recommendations based on analysis",
      "Authentication and Authorization separating user accounts",
    ],
    date: new Date("2025-10-02"),
  },
  {
    id: "portfolio",
    title: "This Portfolio!",
    description: "This portfolio is a showcase of my work and experience.",
    fullDescription: "<Insert Full Description>", // TODO: Add Full Description
    technologies: ["Typescript", "Next.js", "Vercel", "TailwindCSS", "Bash"],
    image: "", // TODO: ADD IMAGE
    icon: BriefcaseBusiness,
    githubUrl: "https://github.com/TWilliamsA7/portfolio",
    liveUrl: "", // TODO: ADD DEPLOYMENT URL
    features: ["Interactive animations", "Pre-commit linting hooks"],
    date: new Date("2025-12-02"),
  },
  {
    id: "python-task-manager",
    title: "Task Manager",
    description: "A simply app to manage tasks built in Python",
    fullDescription:
      "This project is a task management application with a simple GUI made with Tkinter. Tasks are formatted in saved within a text file for easy retrieval.",
    technologies: ["Python", "Tkinter"],
    image: "/project-images/taskcatalogue.jpg",
    icon: ListCheck,
    githubUrl: "https://github.com/TWilliamsA7/Task-Manager",
    features: ["Automatic Task Sorting", "Validation Console Messages"],
    date: new Date("2023-12-02"),
  },
  {
    id: "sight-speech",
    title: "SightSpeech",
    description:
      "A react app that orally reads processed words from a camera via hand signals from a legally blind user.",
    fullDescription:
      "A React app that reads words aloud from a camera feed, controlled by hand gestures from legally blind users. Based on MediaPipe, OCR, and custom gesture detection, this tool empowers visually impaired users to access visual text in their environment.",
    technologies: [
      "Javascript",
      "OpenCV",
      "Python",
      "Gemini API",
      "Flask",
      "Mediapipe",
    ],
    image: "", // TODO: ADD IMAGE
    icon: Eye,
    githubUrl: "https://github.com/groffbo/sight-to-speech",
    features: [
      "Gesture Controlled Interface",
      "Voice Controls",
      "Text-to-Speech & Speech-to-Text",
      "Text-Recognition",
    ],
    date: new Date("2025-09-02"),
  },
  {
    id: "wifi-analyze",
    title: "Wi-Fi Analysis",
    description:
      "An analysis of wi-fi signals on my college campus to determine potential variance",
    fullDescription: "<Insert Full Description>", // TODO: ADD FULL DESCRIPTION
    technologies: ["Python", "Numpy", "Matplotlib", "Pandas", "Excel"],
    image: "", // TODO: ADD IMAGE
    icon: Wifi,
    githubUrl: "https://github.com/TWilliamsA7/wifi-analyze-scripts",
    features: [],
    date: new Date("2025-11-02"),
  },
];
