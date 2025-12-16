import { type Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  const Icon = project.icon;

  return (
    <div
      onClick={onClick}
      className="group bg-[#0f0f1e] rounded-xl overflow-hidden border border-gray-800 hover:border-purple-500/50 transition-all cursor-pointer hover:shadow-xl hover:shadow-purple-500/20 hover:-translate-y-1"
    >
      <div className="relative h-48 overflow-hidden bg-gray-900">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f1e] to-transparent opacity-60"></div>
        <div className="absolute bottom-4 left-4">
          <div className="p-2 bg-purple-600 rounded-lg">
            <Icon className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl text-white mb-2 group-hover:text-purple-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-sm"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-sm">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
