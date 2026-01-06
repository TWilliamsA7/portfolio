// src/data/experiences.ts

import {
  ArduinoSkill,
  CircuitDesignSkill,
  CppSkill,
  CSkill,
  GithubSkill,
  LinuxSkill,
  NextjsSkill,
  PythonSkill,
  ROS2Skill,
  Skill,
  SupabaseSkill,
  TailwindCSSSkill,
  TypeScriptSkill,
  VercelSkill,
  VSCodeSkill,
} from "@/data/skills";

export interface Experience {
  name: string;
  organization: string;
  image: string;
  start_date: string;
  end_date: string;
  short_description: string;
  long_description: string;
  location: string;
  keypoints: string[];
  skills: Skill[];
}

export const experiences: Experience[] = [
  {
    name: "Co-Programming Lead",
    organization: "RCCF: Daydream7",
    image: "/project-images/Chip8.jpg",
    start_date: "August 2025",
    end_date: "Present",
    short_description: "Competitive Robotics",
    location: "University of Central Florida",
    long_description: "Insert long description here", // TODO
    keypoints: ["keypoint 1", "keypoint 2", "keypoint 3"], // TODO
    skills: [CppSkill, GithubSkill, VSCodeSkill],
  },
  {
    name: "Undergraduate Learning Assistant",
    organization: "University of Central Florida",
    image: "/project-images/Chip8.jpg",
    start_date: "August 2025",
    end_date: "Present",
    short_description: "Tutoring students in an introductory C course",
    location: "University of Central Florida",
    long_description: "Insert long description here", // TODO
    keypoints: ["keypoint 1", "keypoint 2", "keypoint 3"], // TODO
    skills: [CSkill, VSCodeSkill],
  },
  {
    name: "Software Engineering Intern",
    organization: "kinkofa",
    image: "/project-images/Chip8.jpg",
    start_date: "June 2025",
    end_date: "Present",
    short_description:
      "Fullstack development supporting database and cloud integration",
    location: "Virtual",
    long_description: "Insert long description here", // TODO: Description
    keypoints: ["keypoint 1", "keypoint 2", "keypoint 3"], // TODO: Keypoints
    skills: [
      TypeScriptSkill,
      NextjsSkill,
      TailwindCSSSkill,
      VercelSkill,
      SupabaseSkill,
    ],
  },
  {
    name: "Undergraduate Research Assistant",
    organization: "Laboratory for Interaction of Machine and Brain (LIMB)",
    image: "/project-images/EMSim.jpg",
    start_date: "January 2025",
    end_date: "April 2025",
    short_description: "Robotics Research",
    location: "University of Central Florida",
    long_description: "Insert long description here", // TODO
    keypoints: ["keypoint 1", "keypoint 2", "keypoint 3"], // TODO
    skills: [PythonSkill, ROS2Skill, LinuxSkill],
  },
  {
    name: "Embedded Systems Division Lead",
    organization: "ACM-UCF: Project Kestrel",
    image: "/project-images/Chip8.jpg",
    start_date: "September 2024",
    end_date: "April 2025",
    short_description: "Drone Project",
    location: "University of Central Florida",
    long_description: "Insert long description here", // TODO
    keypoints: ["keypoint 1", "keypoint 2", "keypoint 3"], // TODO
    skills: [CSkill, ArduinoSkill, CircuitDesignSkill],
  },
];
