import { useEffect } from "react";
import { X, ExternalLink, Check, FolderGit } from "lucide-react";
import { type Project } from "@/data/projects";
import Image from "next/image";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const Icon = project.icon;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-xs"
      onClick={handleBackdropClick}
    >
      <div className="bg-popover rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-card-foreground shadow-2xl">
        <div className="sticky top-0 bg-popover border-b border-card-foreground p-4 flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-accent rounded-lg">
              <Icon className="w-5 h-5 text-foreground" />
            </div>
            <h2 className="text-2xl text-card-foreground font-bold">
              {project.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-accent/80 rounded-lg transition-colors ease-in duration-100"
            aria-label="Close modal"
          >
            <X className="w-6 h-6 text-secondary-foreground" />
          </button>
        </div>

        <div className="p-6">
          <div className="relative h-64 sm:h-80 rounded-xl overflow-hidden mb-6">
            <Image
              src={project.image ? project.image : "/globe.svg"}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="group-hover:scale-110 transition-transform duration-300"
            />
          </div>

          <div className="mb-6">
            <h3 className="text-lg text-popover-foreground font-semibold mb-3 underline">
              Overview
            </h3>
            <p className="text-muted-foreground text-md leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg text-popover-foreground font-semibold mb-3 underline">
              Key Features
            </h3>
            <ul className="space-y-2">
              {project.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-muted-foreground font-semibold"
                >
                  <Check className="w-5 h-5 text-secondary-foreground flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-lg text-popover-foreground font-semibold mb-3">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-border text-primary rounded-lg border border-purple-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-accent hover:bg-sidebar-foreground/70 text-card-foreground rounded-lg transition-colors"
              >
                <FolderGit className="w-5 h-5" />
                View on GitHub
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-primary hover:bg-purple-700 text-white rounded-lg transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
                View Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
