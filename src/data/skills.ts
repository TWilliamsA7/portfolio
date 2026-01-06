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
  SiGooglecolab,
  SiHtml5,
  SiJavascript,
  SiJupyter,
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

export type SkillType =
  | "Languages"
  | "Frameworks & Libraries"
  | "Developer Tools"
  | "Hardware"
  | "Other";

export const SkillTypes: SkillType[] = [
  "Languages",
  "Frameworks & Libraries",
  "Developer Tools",
  "Hardware",
  "Other",
];

export interface Skill {
  name: string;
  icon: IconType;
  description: string;
  skill_type: SkillType;
  color: string;
}

export const CSkill: Skill = {
  name: "C",
  icon: SiC,
  description: "Emulators, DSA, and tutoring",
  skill_type: "Languages",
  color: "#A8B9CC",
};

export const CsSkill: Skill = {
  name: "C#",
  icon: TbBrandCSharp,
  description: "Game development in Unity",
  skill_type: "Languages",
  color: "#34d2eb",
};

export const CppSkill: Skill = {
  name: "C++",
  icon: SiCplusplus,
  description: "Simulators, Cross-system Toolss, and Robotics",
  skill_type: "Languages",
  color: "#00599C",
};

export const CssSkill: Skill = {
  name: "CSS",
  icon: SiCss3,
  description: "Styling for Websites and Web Apps",
  skill_type: "Languages",
  color: "#663399",
};

export const GoSkill: Skill = {
  name: "Go",
  icon: SiGo,
  description: "Backend Web Development",
  skill_type: "Languages",
  color: "#00ADD8",
};

export const HTMLSkill: Skill = {
  name: "HTML",
  icon: SiHtml5,
  description: "Structuring Websites and Web Apps",
  skill_type: "Languages",
  color: "#E34F26",
};

export const JavaSkill: Skill = {
  name: "Java",
  icon: FaJava,
  description: "Renderer Applications and Classic Games",
  skill_type: "Languages",
  color: "#F0951A",
};

export const JavaScriptSkill: Skill = {
  name: "JavaScript",
  icon: SiJavascript,
  description: "Web App Interactivity and Cloudflare Workers",
  skill_type: "Languages",
  color: "#F7DF1E",
};

export const MATLABSkill: Skill = {
  name: "MATLAB",
  icon: SiMatrix,
  description: "Numerical Methods, Matrix Manipulation, and Simulation",
  skill_type: "Languages",
  color: "#E86F39",
};

export const PythonSkill: Skill = {
  name: "Python",
  icon: SiPython,
  description: "Machine Learning, Web Applications, and Computer Vision",
  skill_type: "Languages",
  color: "#3776AB",
};

export const TypeScriptSkill: Skill = {
  name: "TypeScript",
  icon: SiTypescript,
  description: "Type Safe Full-Stack development",
  skill_type: "Languages",
  color: "#3178C6",
};

export const VerilogSkill: Skill = {
  name: "Verilog",
  icon: FaMicrochip,
  description: "RTL design and FPGA development",
  skill_type: "Languages",
  color: "#262627",
};

export const ArduinoSkill: Skill = {
  name: "Arduino",
  icon: SiArduino,
  description: "Autonomous vessels and robotics",
  skill_type: "Hardware",
  color: "#00878F",
};

export const GoogleColabSkill: Skill = {
  name: "Google Colab",
  icon: SiGooglecolab,
  description: "Machine Learning Pipeline and Training",
  skill_type: "Developer Tools",
  color: "F9AB00",
};

export const JupyterSkill: Skill = {
  name: "Jupyter",
  icon: SiJupyter,
  description: "Machine Learning and Processing Pipelines",
  skill_type: "Developer Tools",
  color: "F37626",
};

export const BootstrapCssSkill: Skill = {
  name: "BootstrapCSS",
  icon: SiBootstrap,
  description: "Styling Django Web Applications",
  skill_type: "Frameworks & Libraries",
  color: "#7952B3",
};

export const DjangoSkill: Skill = {
  name: "Django",
  icon: SiDjango,
  description: "Develop Full-Stack Web Applications",
  skill_type: "Frameworks & Libraries",
  color: "#092E20",
};

export const FastAPISkill: Skill = {
  name: "FastAPI",
  icon: SiFastapi,
  description: "Create Simple API Structure for Application Interaction",
  skill_type: "Frameworks & Libraries",
  color: "#009688",
};

export const FlaskSkill: Skill = {
  name: "Flask",
  icon: SiFlask,
  description: "Create Lightweight Full-Stack Applications and Backends",
  skill_type: "Frameworks & Libraries",
  color: "#3BABC3",
};

export const MySQLSkill: Skill = {
  name: "MySQL",
  icon: SiMysql,
  description: "Build and Query Databases for various Applications",
  skill_type: "Frameworks & Libraries",
  color: "#4479A1",
};

export const NextjsSkill: Skill = {
  name: "Next.js",
  icon: SiNextdotjs,
  description:
    "Build Full-Stack Web Applications with Internal APIs and Vercel",
  skill_type: "Frameworks & Libraries",
  color: "#000000",
};

export const NodejsSkill: Skill = {
  name: "Node.js",
  icon: SiNodedotjs,
  description: "Support Server Development using JavaScript and TypeScript",
  skill_type: "Frameworks & Libraries",
  color: "#5FA04E",
};

export const OpenCVSkill: Skill = {
  name: "OpenCV",
  icon: SiOpencv,
  description: "Support CNN Development, Text Recognition, and Edge Detection",
  skill_type: "Frameworks & Libraries",
  color: "#5C3EE8",
};

export const PostgreSQLSkill: Skill = {
  name: "PostgreSQL",
  icon: SiPostgresql,
  description:
    "Interact with Supabase Database Creating Queries, Functions, and Triggers",
  skill_type: "Frameworks & Libraries",
  color: "#4169E1",
};

export const ReactSkill: Skill = {
  name: "React",
  icon: SiReact,
  description: "Create Interactive Web Apps with Reusable Components",
  skill_type: "Frameworks & Libraries",
  color: "#61DAFB",
};

export const ROS2Skill: Skill = {
  name: "ROS2",
  icon: SiRos,
  description: "Interact with Robotics Systems and Create Control Models",
  skill_type: "Frameworks & Libraries",
  color: "#22314E",
};

export const SQLiteSkill: Skill = {
  name: "SQLite3",
  icon: SiSqlite,
  description:
    "Used in Development for Database Interaction and Smaller Applications",
  skill_type: "Frameworks & Libraries",
  color: "#003B57",
};

export const ScikitSkill: Skill = {
  name: "Scikit",
  icon: SiScikitlearn,
  description: "Used in Machine Learning Applications and Data Analysis",
  skill_type: "Frameworks & Libraries",
  color: "#F7931E",
};

export const TailwindCSSSkill: Skill = {
  name: "TailwindCSS",
  icon: SiTailwindcss,
  description: "Used to Style Web Apps using Combinational Classnames",
  skill_type: "Frameworks & Libraries",
  color: "#06B6D4",
};

export const TensorFlowSkill: Skill = {
  name: "TensorFlow",
  icon: SiTensorflow,
  description: "Used to Develop Neural Networks and Machine Learning Models",
  skill_type: "Frameworks & Libraries",
  color: "#FF6F00",
};

export const UnitySkill: Skill = {
  name: "Unity",
  icon: SiUnity,
  description: "Developed Video Games, Physics Simulations, and Prototypes",
  skill_type: "Frameworks & Libraries",
  color: "#FFFFFF",
};

export const ViteSkill: Skill = {
  name: "Vite",
  icon: SiVite,
  description: "Develop Interactive Web Applications",
  skill_type: "Frameworks & Libraries",
  color: "#646CFF",
};

export const AWSSkill: Skill = {
  name: "AWS",
  icon: SiAmazonwebservices,
  description:
    "Support Media Heavy Web Applications, Data Storage, and CORS Handling",
  skill_type: "Developer Tools",
  color: "#EA7A21",
};

export const BlenderSkill: Skill = {
  name: "Blender",
  icon: SiBlender,
  description: "Develop 3D Models, Animations, and Scenes",
  skill_type: "Developer Tools",
  color: "#E87D0D",
};

export const CloudflareSkill: Skill = {
  name: "Cloudflare",
  icon: SiCloudflare,
  description:
    "Routing Requests, Minimizing Data Egress, Setting Up Domain Security",
  skill_type: "Developer Tools",
  color: "#F38020",
};

export const CloudflareWorkersSkill: Skill = {
  name: "Cloudflare Workers",
  icon: SiCloudflareworkers,
  description:
    "Intercepting HTTP Requests, Routing Data Requests, Masking URLs",
  skill_type: "Developer Tools",
  color: "#F38020",
};

export const CMakeSkill: Skill = {
  name: "CMake",
  icon: SiCmake,
  description: "Create Build Systems for Cross System C++ Applications",
  skill_type: "Developer Tools",
  color: "#064F8C",
};

export const EclipseSkill: Skill = {
  name: "Eclipse",
  icon: SiEclipseide,
  description: "Used to create Java Packages",
  skill_type: "Developer Tools",
  color: "#2C2255",
};

export const FigmaSkill: Skill = {
  name: "Figma",
  icon: SiFigma,
  description:
    "Supports Design Process for Frontend Development and Project Organization",
  skill_type: "Developer Tools",
  color: "#F24E1E",
};

export const GitSkill: Skill = {
  name: "Git",
  icon: SiGit,
  description: "Version Controlled, Collaborative, Tracked Development",
  skill_type: "Developer Tools",
  color: "#F05032",
};

export const GithubSkill: Skill = {
  name: "GitHub",
  icon: SiGithub,
  description:
    "House Repositories, Display projects, and Organize Team Development",
  skill_type: "Developer Tools",
  color: "#181717",
};

export const GithubActionsSkill: Skill = {
  name: "Github Actions",
  icon: SiGithubactions,
  description:
    "Build Projects Cross System, Run Unit Tests, and Configure Releases",
  skill_type: "Developer Tools",
  color: "#2088FF",
};

export const LaTeXSkill: Skill = {
  name: "LaTeX",
  icon: SiLatex,
  description: "Create Parseable Visually Striking PDFs",
  skill_type: "Developer Tools",
  color: "#008080",
};

export const npmSkill: Skill = {
  name: "npm",
  icon: SiNpm,
  description: "Integrate Various Packages for Supporting Applications",
  skill_type: "Developer Tools",
  color: "#CB3837",
};

export const PostmanSkill: Skill = {
  name: "Postman",
  icon: SiPostman,
  description: "Simulate API Calls to Verify Functionality and Structure",
  skill_type: "Developer Tools",
  color: "#FF6C37",
};

export const PostHogSkill: Skill = {
  name: "PostHog",
  icon: SiPosthog,
  description: "Gather Web Statistics for Data Driven Insights",
  skill_type: "Developer Tools",
  color: "#000000",
};

export const PowershellSkill: Skill = {
  name: "Powershell",
  icon: VscTerminalPowershell,
  description: "Simple Scripting and Supporting Development Flows",
  skill_type: "Developer Tools",
  color: "#11c4d1",
};

export const PycharmSkill: Skill = {
  name: "Pycharm",
  icon: SiPycharm,
  description: "Environment used to Support Python Development and Testing",
  skill_type: "Developer Tools",
  color: "#000000",
};

export const SupabaseSkill: Skill = {
  name: "Supabase",
  icon: SiSupabase,
  description:
    "Database, Authetication, and Authorization for Full-Stack Development",
  skill_type: "Developer Tools",
  color: "#3FCF8E",
};

export const LinuxSkill: Skill = {
  name: "Linux",
  icon: SiLinux,
  description:
    "Used as Development Environment, Terminal Familiarity, and Built For",
  skill_type: "Developer Tools",
  color: "#FCC624",
};

export const VercelSkill: Skill = {
  name: "Vercel",
  icon: SiVercel,
  description:
    "Used for Application Deployment, Tracking Logs, and Integrating CI/CD",
  skill_type: "Developer Tools",
  color: "#000000",
};

export const VSCodeSkill: Skill = {
  name: "VS Code",
  icon: VscVscode,
  description:
    "Main Development Environment, Integrated Extensions accelerating development",
  skill_type: "Developer Tools",
  color: "#2F80ED",
};

export const WindowsSkill: Skill = {
  name: "Windows",
  icon: FaWindows,
  description: "Main OS, Built Toolss for, Familiar with Terminal, and Usage",
  skill_type: "Developer Tools",
  color: "#60E0FF",
};

export const GTestSkill: Skill = {
  name: "GTest",
  icon: GrTest,
  description: "Used to Create Unit and Integration Tests for C++ Applications",
  skill_type: "Frameworks & Libraries",
  color: "#67B4E7",
};

export const ExcelSkill: Skill = {
  name: "Excel",
  icon: RiFileExcel2Fill,
  description: "Used for Data Organization and Analysis",
  skill_type: "Developer Tools",
  color: "#064210",
};

export const RaspberryPiSkill: Skill = {
  name: "Raspberry Pi",
  icon: FaRaspberryPi,
  description: "Used for running AI models",
  skill_type: "Hardware",
  color: "#A22846",
};

export const CircuitDesignSkill: Skill = {
  name: "Circuit Design",
  icon: VscCircuitBoard,
  description: "Designed Circuits in Simulators, Breadboarding, etc.",
  skill_type: "Hardware",
  color: "#f7de1b",
};

export const FPGASkill: Skill = {
  name: "FPGAs",
  icon: HiCpuChip,
  description:
    "Wrote RTL, Synthesized, Implemented, and Generated Bitstream to Program",
  skill_type: "Hardware",
  color: "#7a80a3",
};

export const languageSkills: Skill[] = [
  CSkill,
  CsSkill,
  CppSkill,
  CssSkill,
  GoSkill,
  HTMLSkill,
  JavaSkill,
  JavaScriptSkill,
  MATLABSkill,
  PythonSkill,
  TypeScriptSkill,
  VerilogSkill,
];

export const libaryFrameworkSkills: Skill[] = [
  BootstrapCssSkill,
  DjangoSkill,
  FastAPISkill,
  FlaskSkill,
  MySQLSkill,
  NextjsSkill,
  NodejsSkill,
  OpenCVSkill,
  PostgreSQLSkill,
  ReactSkill,
  ROS2Skill,
  SQLiteSkill,
  ScikitSkill,
  TailwindCSSSkill,
  TensorFlowSkill,
  UnitySkill,
  ViteSkill,
  GTestSkill,
];

export const devToolSkills: Skill[] = [
  AWSSkill,
  BlenderSkill,
  CloudflareSkill,
  CloudflareWorkersSkill,
  CMakeSkill,
  EclipseSkill,
  FigmaSkill,
  GitSkill,
  GithubSkill,
  GithubActionsSkill,
  LaTeXSkill,
  npmSkill,
  PostmanSkill,
  PostHogSkill,
  PowershellSkill,
  PycharmSkill,
  SupabaseSkill,
  LinuxSkill,
  VercelSkill,
  VSCodeSkill,
  WindowsSkill,
  ExcelSkill,
  JupyterSkill,
  GoogleColabSkill,
];

export const hardwareSkills: Skill[] = [
  ArduinoSkill,
  RaspberryPiSkill,
  CircuitDesignSkill,
  FPGASkill,
];

export const skills: Skill[] = [
  ...languageSkills,
  ...libaryFrameworkSkills,
  ...devToolSkills,
  ...hardwareSkills,
];
