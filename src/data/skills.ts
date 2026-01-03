// src/data/skills.ts

import { IconType } from "react-icons";
import { FaJava, FaMicrochip, FaRaspberryPi, FaWindows } from "react-icons/fa";
import { GrTest } from "react-icons/gr";
import { HiCpuChip } from "react-icons/hi2";
import { RiFileExcel2Fill } from "react-icons/ri";
import {
  SiAmazonwebservices,
  SiArduino,
  SiBlender,
  SiBootstrap,
  SiC,
  SiCloudflare,
  SiCloudflareworkers,
  SiCmake,
  SiCplusplus,
  SiCss3,
  SiDjango,
  SiEclipseide,
  SiFastapi,
  SiFigma,
  SiFlask,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiGo,
  SiHtml5,
  SiJavascript,
  SiLatex,
  SiLinux,
  SiMatrix,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiNpm,
  SiOpencv,
  SiPostgresql,
  SiPosthog,
  SiPostman,
  SiPycharm,
  SiPython,
  SiReact,
  SiRos,
  SiScikitlearn,
  SiSqlite,
  SiSupabase,
  SiTailwindcss,
  SiTensorflow,
  SiTypescript,
  SiUnity,
  SiVercel,
  SiVite,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import {
  VscCircuitBoard,
  VscTerminalPowershell,
  VscVscode,
} from "react-icons/vsc";

export interface Skill {
  name: string;
  icon: IconType;
  description: string;
  skill_type:
    | "Language"
    | "Framework"
    | "Developer Tool"
    | "Hardware"
    | "Other";
}

export const skills: Skill[] = [
  {
    name: "C",
    icon: SiC,
    description: "Emulators, DSA, and tutoring",
    skill_type: "Language",
  },
  {
    name: "C#",
    icon: TbBrandCSharp,
    description: "Game development in Unity",
    skill_type: "Language",
  },
  {
    name: "C++",
    icon: SiCplusplus,
    description: "Simulators, Cross-system tools, and Robotics",
    skill_type: "Language",
  },
  {
    name: "CSS",
    icon: SiCss3,
    description: "Styling for Websites and Web Apps",
    skill_type: "Language",
  },
  {
    name: "Go",
    icon: SiGo,
    description: "Backend Web Development",
    skill_type: "Language",
  },
  {
    name: "HTML",
    icon: SiHtml5,
    description: "Structuring Websites and Web Apps",
    skill_type: "Language",
  },
  {
    name: "Java",
    icon: FaJava,
    description: "Renderer Applications and Classic Games",
    skill_type: "Language",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    description: "Web App Interactivity and Cloudflare Workers",
    skill_type: "Language",
  },
  {
    name: "MATLAB",
    icon: SiMatrix,
    description: "Numerical Methods, Matrix Manipulation, and Simulation",
    skill_type: "Language",
  },
  {
    name: "Python",
    icon: SiPython,
    description: "Machine Learning, Web Applications, and Computer Vision",
    skill_type: "Language",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    description: "Type Safe Full-Stack development",
    skill_type: "Language",
  },
  {
    name: "Verilog",
    icon: FaMicrochip,
    description: "RTL design and FPGA development",
    skill_type: "Language",
  },
  {
    name: "Arduino",
    icon: SiArduino,
    description: "Autonomous vessels and robotics",
    skill_type: "Hardware",
  },
  {
    name: "BootstrapCSS",
    icon: SiBootstrap,
    description: "Styling Django Web Applications",
    skill_type: "Framework",
  },
  {
    name: "Django",
    icon: SiDjango,
    description: "Develop Full-Stack Web Applications",
    skill_type: "Framework",
  },
  {
    name: "FastAPI",
    icon: SiFastapi,
    description: "Create Simple API Structure for Application Interaction",
    skill_type: "Framework",
  },
  {
    name: "Flask",
    icon: SiFlask,
    description: "Create Lightweight Full-Stack Applications and Backends",
    skill_type: "Framework",
  },
  {
    name: "MySQL",
    icon: SiMysql,
    description: "Build and Query Databases for various Applications",
    skill_type: "Framework",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    description:
      "Build Full-Stack Web Applications with Internal APIs and Vercel",
    skill_type: "Framework",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    description: "Support Server Development using JavaScript and TypeScript",
    skill_type: "Framework",
  },
  {
    name: "OpenCV",
    icon: SiOpencv,
    description:
      "Support CNN Development, Text Recognition, and Edge Detection",
    skill_type: "Framework",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    description:
      "Interact with Supabase Database Creating Queries, Functions, and Triggers",
    skill_type: "Framework",
  },
  {
    name: "React",
    icon: SiReact,
    description: "Create Interactive Web Apps with Reusable Components",
    skill_type: "Framework",
  },
  {
    name: "ROS2",
    icon: SiRos,
    description: "Interact with Robotics Systems and Create Control Models",
    skill_type: "Framework",
  },
  {
    name: "SQLite3",
    icon: SiSqlite,
    description:
      "Used in Development for Database Interaction and Smaller Applications",
    skill_type: "Framework",
  },
  {
    name: "Scikit",
    icon: SiScikitlearn,
    description: "Used in Machine Learning Applications and Data Analysis",
    skill_type: "Framework",
  },
  {
    name: "TailwindCSS",
    icon: SiTailwindcss,
    description: "Used to Style Web Apps using Combinational Classnames",
    skill_type: "Framework",
  },
  {
    name: "TensorFlow",
    icon: SiTensorflow,
    description: "Used to Develop Neural Networks and Machine Learning Models",
    skill_type: "Framework",
  },
  {
    name: "Unity",
    icon: SiUnity,
    description: "Developed Video Games, Physics Simulations, and Prototypes",
    skill_type: "Framework",
  },
  {
    name: "Vite",
    icon: SiVite,
    description: "Develop Interactive Web Applications",
    skill_type: "Framework",
  },
  {
    name: "AWS",
    icon: SiAmazonwebservices,
    description:
      "Support Media Heavy Web Applications, Data Storage, and CORS Handling",
    skill_type: "Developer Tool",
  },
  {
    name: "Blender",
    icon: SiBlender,
    description: "Develop 3D Models, Animations, and Scenes",
    skill_type: "Developer Tool",
  },
  {
    name: "Cloudflare",
    icon: SiCloudflare,
    description:
      "Routing Requests, Minimizing Data Egress, Setting Up Domain Security",
    skill_type: "Developer Tool",
  },
  {
    name: "Cloudflare Workers",
    icon: SiCloudflareworkers,
    description:
      "Intercepting HTTP Requests, Routing Data Requests, Masking URLs",
    skill_type: "Developer Tool",
  },
  {
    name: "CMake",
    icon: SiCmake,
    description: "Create Build Systems for Cross System C++ Applications",
    skill_type: "Developer Tool",
  },
  {
    name: "Eclipse",
    icon: SiEclipseide,
    description: "Used to create Java Packages",
    skill_type: "Developer Tool",
  },
  {
    name: "Figma",
    icon: SiFigma,
    description:
      "Supports Design Process for Frontend Development and Project Organization",
    skill_type: "Developer Tool",
  },
  {
    name: "Git",
    icon: SiGit,
    description: "Version Controlled, Collaborative, Tracked Development",
    skill_type: "Developer Tool",
  },
  {
    name: "GitHub",
    icon: SiGithub,
    description:
      "House Repositories, Display projects, and Organize Team Development",
    skill_type: "Developer Tool",
  },
  {
    name: "Github Actions",
    icon: SiGithubactions,
    description:
      "Build Projects Cross System, Run Unit Tests, and Configure Releases",
    skill_type: "Developer Tool",
  },
  {
    name: "LaTeX",
    icon: SiLatex,
    description: "Create Parseable Visually Striking PDFs",
    skill_type: "Developer Tool",
  },
  {
    name: "npm",
    icon: SiNpm,
    description: "Integrate Various Packages for Supporting Applications",
    skill_type: "Developer Tool",
  },
  {
    name: "Postman",
    icon: SiPostman,
    description: "Simulate API Calls to Verify Functionality and Structure",
    skill_type: "Developer Tool",
  },
  {
    name: "PostHog",
    icon: SiPosthog,
    description: "Gather Web Statistics for Data Driven Insights",
    skill_type: "Developer Tool",
  },
  {
    name: "Powershell",
    icon: VscTerminalPowershell,
    description: "Simple Scripting and Supporting Development Flows",
    skill_type: "Developer Tool",
  },
  {
    name: "Pycharm",
    icon: SiPycharm,
    description: "Environment used to Support Python Development and Testing",
    skill_type: "Developer Tool",
  },
  {
    name: "Supabase",
    icon: SiSupabase,
    description:
      "Database, Authetication, and Authorization for Full-Stack Development",
    skill_type: "Developer Tool",
  },
  {
    name: "Linux",
    icon: SiLinux,
    description:
      "Used as Development Environment, Terminal Familiarity, and Built For",
    skill_type: "Developer Tool",
  },
  {
    name: "Vercel",
    icon: SiVercel,
    description:
      "Used for Application Deployment, Tracking Logs, and Integrating CI/CD",
    skill_type: "Developer Tool",
  },
  {
    name: "VS Code",
    icon: VscVscode,
    description:
      "Main Development Environment, Integrated Extensions accelerating development",
    skill_type: "Developer Tool",
  },
  {
    name: "Windows",
    icon: FaWindows,
    description: "Main OS, Built Tools for, Familiar with Terminal, and Usage",
    skill_type: "Developer Tool",
  },
  {
    name: "GTest",
    icon: GrTest,
    description:
      "Used to Create Unit and Integration Tests for C++ Applications",
    skill_type: "Framework",
  },
  {
    name: "Excel",
    icon: RiFileExcel2Fill,
    description: "Used for Data Organization and Analysis",
    skill_type: "Developer Tool",
  },
  {
    name: "Raspberry Pi",
    icon: FaRaspberryPi,
    description: "Used for running AI models",
    skill_type: "Hardware",
  },
  {
    name: "Circuit Design",
    icon: VscCircuitBoard,
    description: "Designed Circuits in Simulators, Breadboarding, etc.",
    skill_type: "Hardware",
  },
  {
    name: "FPGAs",
    icon: HiCpuChip,
    description:
      "Wrote RTL, Synthesized, Implemented, and Generated Bitstream to Program",
    skill_type: "Hardware",
  },
];
