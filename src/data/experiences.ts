// src/data/experiences.ts

import { Skill } from "@/data/skills";

export interface Experience {
  name: string;
  organization: string;
  start_date: Date;
  end_date: Date | null;
  short_description: string;
  long_description: string;
  location: string;
  keypoints: string[];
  skills: Skill[];
}

export const experiences: Experience[] = [
  {
    name: "Software Engineering Intern",
    organization: "kinkofa",
    start_date: new Date(2025, 5),
    end_date: null,
    short_description:
      "Fullstack development supporting database and cloud integration",
    location: "Virtual",
    long_description: "Insert long description here", // TODO: Description
    keypoints: ["keypoint 1, keypoint 2, keypoint 3"], // TODO: Keypoints
    skills: [],
  },
];
