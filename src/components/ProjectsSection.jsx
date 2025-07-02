import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Diabetes Predictor",
    description: "AI-powered Diabetes Predictor with a sleek React + Tailwind landing page for real-time health risk analysis.",
    image: "/projects/Diabetes Predictor.webp",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "React Query"],
    demoUrl: "https://diabetes-predictor-jade.vercel.app",
    githubUrl: "https://github.com/vishnusankar2203/Diabetes-Predictor",
  },
  {
    id: 2,
    title: "Ore Classification System",
    description:
      "AI-powered Ore Classification System with a sleek React + Tailwind landing page for real-time mineral analysis.",
    image: "/projects/ore.png",
    tags: ["React", "TypeScript", "Vite", "Tailwind", "TensorFlow"],
    demoUrl: "https://ore-vision-ensemble-classify.vercel.app",
    githubUrl: "https://github.com/vishnusankar2203/ore-vision-ensemble-classify",
  },
  {
    id: 3,
    title: "AI-Powered SQL Generator",
    description:
      "AI-powered web app that converts natural language to SQL queries with a modern UI, real-time results, schema viewer, and query history.",
    image: "/projects/sql.png",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "SQL"],
    demoUrl: "https://ai-powered-sql-generator.vercel.app",
    githubUrl: "https://github.com/vishnusankar2203/AI-Powered-SQL-Generator",
  },

  {
    id: 4,
    title: "AI-Powered SEO Content Rewriter",
    description:
      "Developed an AI-powered SEO analysis web app offering real-time content optimization, technical audits, and a responsive analytics dashboard.",
    image: "/projects/AI seo.png",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "React Query"],
    demoUrl: "https://ai-powered-seo-content-rewriter-rns.vercel.app",
    githubUrl: "https://github.com/vishnusankar2203/AI-Powered-SEO-Content-Rewriter",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/vishnusankar2203"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
