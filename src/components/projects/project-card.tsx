import { type Project } from "@/data/projects";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  const Icon = project.icon;

  return (
    <div
      onClick={onClick}
      className="group bg-primary rounded-xl overflow-hidden border-muted border-2 hover:border-4 hover:border-purple-500/50 transition-all cursor-pointer hover:shadow-xl hover:shadow-purple-500/20 hover:-translate-y-1"
    >
      <div className="relative h-48 overflow-hidden bg-primary">
        <Image
          src={project.image ? project.image : "/globe.svg"}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-10"></div>
        <div className="absolute bottom-4 left-4">
          <div className="p-2 bg-accent rounded-lg">
            <Icon className="w-5 h-5 text-foreground" />
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl text-card font-semibold mb-2 group-hover:text-purple-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-muted mb-4 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-border text-primary rounded text-sm"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 bg-border text-primary rounded text-sm">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
