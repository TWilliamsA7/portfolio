"use client";

import { ProjectCard } from "@/components/projects/project-card";
import { projects, type Project } from "@/data/projects";
import { useState } from "react";
import { ProjectModal } from "@/components/projects/project-modal";

export function FeaturedProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const FEATURED_PROJECT_IDS: number[] = [1, 3, 4, 5];

  return (
    <>
      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-white mb-4 text-center">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            A selection of projects showcasing my skills in full-stack
            development, embedded systems, and software engineering
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {projects
              .filter((p) => FEATURED_PROJECT_IDS.includes(p.id))
              .map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onClick={() => setSelectedProject(project)}
                />
              ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}
