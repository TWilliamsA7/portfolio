"use client";

import { ProjectCard } from "@/components/projects/project-card";
import { ProjectModal } from "@/components/projects/project-modal";
import { Project, projects } from "@/data/projects";
import { useState } from "react";

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <main>
      <div className="max-w-7xl mx-auto py-20 px-4">
        <h1 className="text-4xl sm:text-5xl text-primary mb-4 text-center">
          My Projects
        </h1>

        <p className="text-foreground text-center mb-12 max-w-2xl mx-auto">
          A showcase of many of my projects from recent times!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects
            .sort((a, b) => {
              return a.date < b.date ? 1 : -1;
            })
            .map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
        </div>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </main>
  );
}
