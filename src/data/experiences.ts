// src/data/experiences.ts

import {
  ArduinoSkill,
  AWSSkill,
  CircuitDesignSkill,
  CloudflareSkill,
  CloudflareWorkersSkill,
  CppSkill,
  CSkill,
  FigmaSkill,
  GithubSkill,
  GitSkill,
  LinuxSkill,
  NextjsSkill,
  PostHogSkill,
  PostmanSkill,
  PythonSkill,
  ReactSkill,
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
    image: "/experience/daydream.jpg",
    start_date: "August 2025",
    end_date: "Present",
    short_description: "Competitive VEX Robotics Programmer",
    location: "University of Central Florida",
    long_description: `As the programming lead over the 24" Robot Sunrise, I develop algorithms for autonomous pathing while navigating obstacles and completing goals. I interface with a variety of sensors to create a functional responsive system with higher precision. As an additional side portion of my role, I support in the development of the team's website.`, // TODO
    keypoints: [
      "Supporting firmware for a VEX competition robot, authoring C++ control software on the V5 platform to autonomously complete game objectives.",
      "Integrating encoders and IMU quaternion based odometry, to achieve sub-3 cm positional and sub-5 degree rotational accuracy over 90 second autonomous runs.",
      "Maintaining consistent repository and codebase to promote organization and comprehensibility",
    ],
    skills: [CppSkill, GithubSkill, VSCodeSkill],
  },
  {
    name: "Undergraduate Learning Assistant",
    organization: "University of Central Florida",
    image: "/experience/ula.jpg",
    start_date: "August 2025",
    end_date: "Present",
    short_description:
      "Tutoring students in an introductory Engineering C course",
    location: "University of Central Florida",
    long_description:
      "As a Learning Assistant, I tutoring sessions throughout the week. In these sessions, I go over programming concepts, best practices, and live debugging. Additionally, as part of my role I create study guides for students and occassionally proctor examinations.", // TODO
    keypoints: [
      "Leading 5+ weekly C programming help sessions and open office hours for 150+ students, diagnosing common pitfalls, fostering peer collaboration, and elevating assignment completion rates.",
      "Developing comprehensive C programming study guides with targeted challenges on data structures, pointers, and recursion, streamlining exam preparation and minimizing recurring errors.",
      "Conducting focused code-review workshops on efficiency, consistent styling, live debugging, and inline documentation, reaching 70% of target students and instilling lasting best practices.",
    ],
    skills: [CSkill, VSCodeSkill],
  },
  {
    name: "Software Engineering Intern",
    organization: "kinkofa",
    image: "/experience/kinkofa.png",
    start_date: "June 2025",
    end_date: "Present",
    short_description:
      "Fullstack development supporting database and cloud integration",
    location: "Virtual",
    long_description:
      "Over Summer 2025 and onwards, I have worked as a Software Engineering Intern at a startup called Kinkofa. Initially brought on as Backend Engineer, I found a bottleneck in our development and transitioned to a Full-Stack software engineering role on the fly. I took charge over the integration and development of our media-heavy archival web-app. I created components, wrote API routes, and organized data transfer for both our database and cloud storage.", // TODO: Description
    keypoints: [
      "Deploying and maintaining code for a media-heavy archival web app using Next.js, Node.js, and React, serving 500+ users with authentication and authorization through a CI/CD pipeline via Vercel and Github.",
      "Eliminated 90% of redundant API calls by implementing a data provider caching strategy using TypeScript wrapper components across layout files.",
      "Reduced monthly hosting and bandwidth costs by approximately 70% by improving an AWS S3 media streaming pipeline by routing through a Cloudflare Worker and utilizing signed URLs instead of natively routing through Vercel.",
      "Instrumented 25+ custom user events across PostHog, Customer.io, and Google Analytics to provide the product team with data-driven UX insights and faster QA troubleshooting.",
    ],
    skills: [
      TypeScriptSkill,
      NextjsSkill,
      ReactSkill,
      TailwindCSSSkill,
      FigmaSkill,
      GitSkill,
      VercelSkill,
      AWSSkill,
      CloudflareSkill,
      CloudflareWorkersSkill,
      PostHogSkill,
      PostmanSkill,
      SupabaseSkill,
    ],
  },
  {
    name: "Undergraduate Research Assistant",
    organization: "Laboratory for Interaction of Machine and Brain (LIMB)",
    image: "/experience/LIMB.jpg",
    start_date: "January 2025",
    end_date: "April 2025",
    short_description: "Fault Tolerant Robotics Research",
    location: "University of Central Florida",
    long_description:
      "As a research assistant, I was focused on the development of fault-tolerant movement policies for quadruped robotics. Specifically, I worked with the Unitree Go1 and devised potential methods for using Machine Learning to develop movement policies.",
    keypoints: [
      "Proposed novel fault-tolerant control policies for quadruped locomotion by synthesizing insights from 20+ robotics papers",
      "Researched prototype algorithms in Python and ROS using deep reinforcement learning inspired by animal neural patterns, enhancing gait stability under actuator failure.",
      "Initiated implementation of control strategies in simulation through Gazebo to demonstrate improvement in recovery time in response to stimulated leg faults.",
    ],
    skills: [PythonSkill, ROS2Skill, LinuxSkill],
  },
  {
    name: "Embedded Systems Division Lead",
    organization: "ACM-UCF: Project Kestrel",
    image: "/experience/kestrel.jpg",
    start_date: "September 2024",
    end_date: "April 2025",
    short_description: "Autonomous Videography Drone Project",
    location: "University of Central Florida",
    long_description:
      "I was the Embedded Systems Division Lead on the Hardware and Sensors Team of Project Kestrel. I took lead on setting up our sensor integration and data mapping with our micro controllers. As a division lead, I helped other team members in their progression and served as a point of contact when it came debugging questions.",
    keypoints: [
      "Developed object avoidance system for an autonomous videography drone leveraging a variety of sensors.",
      "Built sensor-fusion algorithms on ESP32 integrating 30+ LiDAR and ultrasonic sensors to generate real-time obstacle heat maps.",
      "Collaborated with the flight-design team to merge avoidance logic with autopilot, enabling seamless autonomous videography.",
    ],
    skills: [CSkill, ArduinoSkill, CircuitDesignSkill],
  },
];
