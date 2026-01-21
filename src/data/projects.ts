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
  Eye,
  LucideIcon,
} from "lucide-react";

import {
  ArduinoSkill,
  BashSkill,
  CircuitDesignSkill,
  CMakeSkill,
  CppSkill,
  CSkill,
  CssSkill,
  DjangoSkill,
  EclipseSkill,
  FastAPISkill,
  FlaskSkill,
  GeminiAPISkill,
  GithubActionsSkill,
  GoogleColabSkill,
  GTestSkill,
  HTMLSkill,
  JavaScriptSkill,
  JavaSkill,
  JupyterSkill,
  MediapipeSkill,
  NextjsSkill,
  OpenCVSkill,
  PythonSkill,
  SDL2Skill,
  Skill,
  SQLiteSkill,
  SupabaseSkill,
  TailwindCSSSkill,
  TensorFlowSkill,
  TypeScriptSkill,
  VercelSkill,
  VerilogSkill,
} from "@/data/skills";

export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  technologies: Skill[];
  image: string;
  icon: LucideIcon;
  githubUrl?: string;
  liveUrl?: string;
  features: string[];
  date: Date;
}

export const Java3DRenderer: Project = {
  id: "java-renderer",
  title: "Java 3D Renderer",
  description:
    "An introductory project utilizing OOP principles alongside matrix manipulation to render simple 3D models",
  fullDescription:
    "Built a 3D Viewport for visualizing simple models derived from triangles. Implemented Matrix and Point Classes to describe the object and perfomr the necessary option to render and manipulate the model in the viewport including lighting. For the demo, a tetrahedron was created and subdivided to create a sphere.",
  technologies: [JavaSkill, EclipseSkill],
  image: "/project-images/Java3DRenderer.jpg",
  icon: Rotate3D,
  githubUrl: "https://github.com/TWilliamsA7/3DRenderer",
  features: [
    "Interactive 3D Viewport",
    "Inflate function for increasing resolution",
    "Depth-Based Vertex Shading",
  ],
  date: new Date("2025-05-02"),
};

export const ASLNeuralApp: Project = {
  id: "asl-neural-app",
  title: "ASL Neural App",
  description:
    "A lightweight full stack application for transcribing real-time American Sign Language into text via a convolutional neural network.",
  fullDescription:
    "This project utilizes a full structured machine learning pipeline via Google Colab to create an ASL recognizing Convolutional Neural Network. This model was then integrated into a lightweight flask application for live inference.",
  technologies: [
    PythonSkill,
    JupyterSkill,
    OpenCVSkill,
    TensorFlowSkill,
    GoogleColabSkill,
    FlaskSkill,
  ],
  image: "/project-images/ASLNeuralApp.jpg",
  icon: HandMetal,
  githubUrl: "https://github.com/TWilliamsA7/asl-neural-app",
  features: [
    "Real-time Inference via CNN",
    "Inference-based transcription",
    "> 90% Accuracy across 25+ signs",
  ],
  date: new Date("2025-08-02"),
};

export const ChessProject: Project = {
  id: "chess",
  title: "Chess",
  description:
    "A full implementation of the classic game of Chess with some extra helpful features.",
  fullDescription:
    "This project is an implementation of Chess in Java using Swing for the UI. This is a fully playable version of chess including promotion, castling, en passant, check, and checkmate. This project was a learning experience in Java but more importantly OOP design princples allowing for organized, safer code.",
  technologies: [JavaSkill, EclipseSkill],
  image: "/project-images/ChessProj.jpg",
  icon: Puzzle,
  githubUrl: "https://github.com/TWilliamsA7/Chess",
  features: [
    "Move Validation for Check/Checkmate",
    "Special Moves: En Passant, Castling, Promotion",
    "Move Tracking",
  ],
  date: new Date("2025-05-02"),
};

export const CHIP8Emulator: Project = {
  id: "chip8",
  title: "Chip 8 Emulator",
  description: "C-based implementation of the CHIP8 Virtual Machine",
  fullDescription:
    "This project is an implementation of the CHIP8 Virtual Machine following the original CHIP8 specification. Created a digital structure to recreate the opcode processing and memory interactions of the original Chip8. Using SDL2 to create a graphical interface for the operations taking place. As each opcode is processed, it is logged for debugging purposes and validation.",
  technologies: [CSkill, SDL2Skill],
  image: "/project-images/Chip8.jpg",
  icon: Cpu,
  githubUrl: "https://github.com/TWilliamsA7/Chip8Emulator",
  features: [
    "Support for all 35 Chip8 Opcodes",
    "Controllable Frames per Second",
    "Accurate Chip8 Memory representation",
    "Hex Keyboard implementation",
  ],
  date: new Date("2025-02-02"),
};

export const DigitalErrorAnalysis: Project = {
  id: "digital-error-analysis",
  title: "Digital Error Analysis",
  description:
    "Implemented and analyzed various error correction algorithms in Verilog modules.",
  fullDescription:
    "This project was initially for my COT3100 Intro to Discrete Structures Final Project. The purpose of this work is to analyze and implement various methods to address errors in digital circuits. These methods were implemented in Verilog and validated through testbenches. Through these implementations and analysis, I wrote a paper on my findings and work.",
  technologies: [VerilogSkill],
  image: "/project-images/ECDC.jpg",
  icon: Binary,
  githubUrl: "https://github.com/TWilliamsA7/DigitalErrorAnalysis",
  features: [
    "Linear Feedback Shift Register Data Generation",
    "Parameterizable Hamming Codes",
    "Cyclic Redundancy Checks",
    "Bose-Chaudhuri-Hocquenghem Codes",
  ],
  date: new Date("2025-03-02"),
};

export const EMSim: Project = {
  id: "emsim",
  title: "Electromagnetic Particle Simulator",
  description:
    "Created a simulator for electromagnetic interactions between particles.",
  fullDescription:
    "This project is a 3D renderer built using the SDL2 Library in C++. The objects placed within this renderer have physical properties and interactions. Static fields can also be imported into the scene for more complex interactions. A scene.json file must included in the command line to provide instructions on how to generate the scene.",
  technologies: [CppSkill, SDL2Skill, CMakeSkill],
  image: "/project-images/EMSim.jpg",
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
};

export const FinanceTracker: Project = {
  id: "finance-tracker",
  title: "Finance Tracker",
  description:
    "Created Web Application for tracking finances, budgets, transactions, and fund allocation.",
  fullDescription:
    "This project was built to serve as a personal means for budgeting and tracking expenses. It is a web application built using the Django framework and uses a sqlite3 database given its scale. There is potential of furthering and deploying the project in the future.",
  technologies: [PythonSkill, DjangoSkill, SQLiteSkill, HTMLSkill, CssSkill],
  image: "/project-images/financetracker.jpg",
  icon: CircleDollarSign,
  githubUrl: "https://github.com/TWilliamsA7/FinanceTracker",
  features: [
    "Track Transactions and associated metadata",
    "Multiple Account Organization",
    "Custom Budgets with fund allocation",
    "Authentication and Authorization",
  ],
  date: new Date("2025-05-02"),
};

export const FolderSort: Project = {
  id: "folder-sort",
  title: "Foldersort",
  description:
    "A rule-based CLI tool for automatically organizing files and directories using a recursive filesystem scanner, YAML-defined rules, and pluggable actions with a verbose logging system.",
  fullDescription:
    "Manually organizing influxes of files (specifically directories like Downloads) is tedious and can be error-prone. This tool provides a configurable, rule-based system that can be used to automatically categorize and act on the filesystem using simple conditions and actions to implement complex rules. This tool could be set to be executed on a schedule to consistently clean up a target directory.", // TODO: ADD FULL DESCRIPTION
  technologies: [CppSkill, CMakeSkill, GTestSkill, GithubActionsSkill],
  image: "/project-images/foldersort.jpg",
  icon: Folder,
  githubUrl: "https://github.com/TWilliamsA7/folder-sort",
  liveUrl: "https://github.com/TWilliamsA7/folder-sort/releases",
  features: [
    "Command Line Interface",
    "Customizable rules via YAML",
    "Customizable file scanner",
    "Safe Dry-run and Verbose Logging",
  ],
  date: new Date("2025-12-02"),
};

export const GNORBoat: Project = {
  id: "gnor-boat",
  title: "Great Naval Orange Race Boat",
  description: "Team project developing an autonomous water vessel",
  fullDescription:
    "This is a repository for a school project in which a water vessel must travel across a fountain autonomously. Our boat used a twin motor differential drivetrain as opposed to a rudder. Using a gyroscope and arduino nano, the boat propelled itself along a predefined course.",
  technologies: [ArduinoSkill, CircuitDesignSkill],
  image: "/project-images/GNORBoat.jpg",
  icon: Ship,
  githubUrl: "https://github.com/TWilliamsA7/GNORBoat",
  features: ["Differential Drivetrain", "PID controlled motion via Gyroscope"],
  date: new Date("2025-04-02"),
};

export const Growcery: Project = {
  id: "growcery",
  title: "Growcery",
  description:
    "An AI-powered crop & produce analyzer app made at KnightHacks VIII.",
  fullDescription:
    "Growcery uses AI and computer vision to analyze images of crops and produce. With a single photo, users can instantly learn about freshness, quality, or possible diseases, along with treatment advice or storage recommendations. Users can then keep track of these produce/crops within the app to make sure they are used before their expiration date.",
  technologies: [
    TypeScriptSkill,
    NextjsSkill,
    GeminiAPISkill,
    SupabaseSkill,
    FastAPISkill,
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
};

export const Portfolio: Project = {
  id: "portfolio",
  title: "This Portfolio!",
  description: "This portfolio is a showcase of my work and experience.",
  fullDescription:
    "This is version 2 of my professional portfolio. My initial portfolio was a static site via Github Pages. For the next iteration, I wanted to go even further and utilize the skills that I developed at my internship to create an even stronger profile!",
  technologies: [
    TypeScriptSkill,
    NextjsSkill,
    VercelSkill,
    TailwindCSSSkill,
    BashSkill,
  ],
  image: "/project-images/portfolio.jpg",
  icon: BriefcaseBusiness,
  githubUrl: "https://github.com/TWilliamsA7/portfolio",
  liveUrl: "/",
  features: ["Interactive animations", "Pre-commit linting hooks"],
  date: new Date("2025-12-02"),
};

export const TaskManager: Project = {
  id: "python-task-manager",
  title: "Task Manager",
  description: "A simply app to manage tasks built in Python",
  fullDescription:
    "This project is a task management application with a simple GUI made with Tkinter. Tasks are formatted in saved within a text file for easy retrieval.",
  technologies: [PythonSkill],
  image: "/project-images/taskcatalogue.jpg",
  icon: ListCheck,
  githubUrl: "https://github.com/TWilliamsA7/Task-Manager",
  features: ["Automatic Task Sorting", "Validation Console Messages"],
  date: new Date("2023-12-02"),
};

export const SightSpeech: Project = {
  id: "sight-speech",
  title: "SightSpeech",
  description:
    "A react app that orally reads processed words from a camera via hand signals from a legally blind user.",
  fullDescription:
    "A React app that reads words aloud from a camera feed, controlled by hand gestures from legally blind users. Based on MediaPipe, OCR, and custom gesture detection, this tool empowers visually impaired users to access visual text in their environment.",
  technologies: [
    JavaScriptSkill,
    OpenCVSkill,
    PythonSkill,
    GeminiAPISkill,
    FlaskSkill,
    MediapipeSkill,
  ],
  image: "/project-images/SightSpeech.jpg",
  icon: Eye,
  githubUrl: "https://github.com/groffbo/sight-to-speech",
  features: [
    "Gesture Controlled Interface",
    "Voice Controls",
    "Text-to-Speech & Speech-to-Text",
    "Text-Recognition",
  ],
  date: new Date("2025-09-02"),
};

export const projects: Project[] = [
  Java3DRenderer,
  ASLNeuralApp,
  ChessProject,
  CHIP8Emulator,
  DigitalErrorAnalysis,
  EMSim,
  FinanceTracker,
  FolderSort,
  GNORBoat,
  Growcery,
  Portfolio,
  TaskManager,
  SightSpeech,
];
