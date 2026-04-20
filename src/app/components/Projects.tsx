import { motion } from "motion/react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with real-time inventory management, payment integration, and advanced analytics dashboard.",
    image:
      "https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBzaG9wcGluZyUyMHdlYnNpdGV8ZW58MXx8fHwxNzc1NzM0NDgyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "https://www.fiverr.com/users/ahmadzia533/seller_dashboard",
    githubUrl: "https://www.fiverr.com/users/ahmadzia533/seller_dashboard",
    featured: true,
  },
  // {
  //   title: "Analytics Dashboard",
  //   description:
  //     "Real-time data visualization platform with customizable widgets, advanced filtering, and export capabilities.",
  //   image:
  //     "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc3NTc1MzkxOXww&ixlib=rb-4.1.0&q=80&w=1080",
  //   tags: ["Next.js", "TypeScript", "Recharts", "Tailwind"],
  //   liveUrl: "https://www.fiverr.com/users/ahmadzia533/seller_dashboard",
  //   githubUrl: "https://github.com/Ahmadzai533/Elerna-vip-project",
  //   featured: true,
  // },
  // {
  //   title: "Mobile Banking App",
  //   description:
  //     "Cross-platform mobile banking application with biometric authentication, instant transfers, and budget tracking.",
  //   image:
  //     "https://images.unsplash.com/photo-1661246627162-feb0269e0c07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzc1NzEzMDc2fDA&ixlib=rb-4.1.0&q=80&w=1080",
  //   tags: ["React Native", "Firebase", "Redux", "Expo"],
  //   liveUrl: "https://www.fiverr.com/users/ahmadzia533/seller_dashboard",
  //   githubUrl: "https://github.com/Ahmadzai533/Elerna-vip-project",
  //   featured: false,
  // },
  // {
  //   title: "Developer Portfolio CMS",
  //   description:
  //     "Content management system for developers to showcase their work with blog, project galleries, and contact forms.",
  //   image:
  //     "https://images.unsplash.com/photo-1760548425425-e42e77fa38f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZyUyMHNjcmVlbnxlbnwxfHx8fDE3NzU3MjU1MzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
  //   tags: ["Next.js", "Sanity.io", "Vercel", "MDX"],
  //   liveUrl: "https://www.fiverr.com/users/ahmadzia533/seller_dashboard",
  //   githubUrl: "https://github.com/Ahmadzai533/Elerna-vip-project",
  //   featured: false,
  // },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm uppercase tracking-wider">
            Portfolio
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-2 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A selection of my recent work showcasing expertise in modern web
            development and user experience design.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={project.featured ? "md:col-span-2" : ""}
            >
              <motion.div
                whileHover={{ y: -8 }}
                className="group relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 hover:border-cyan-400/30 transition-all h-full"
              >
                {/* Project image */}
                <div className="relative overflow-hidden aspect-video">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Overlay buttons */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <motion.a
                      href={project.liveUrl}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-cyan-400 hover:border-cyan-400 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-purple-400 hover:border-purple-400 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                  </div>

                  {/* Featured badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-xs font-semibold shadow-lg">
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                {/* Project details */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-cyan-400 text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Learn more link */}
                  <div className="flex items-center text-cyan-400 text-sm group-hover:gap-2 transition-all">
                    <span>View Project</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* Card glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity -z-10" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* View all projects button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            variant="outline"
            className="border-cyan-400/30 hover:bg-cyan-400/10 text-cyan-400 group"
          >
            View All Projects
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
