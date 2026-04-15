import { motion } from "motion/react";
import {
  Code2,
  Palette,
  Database,
  Cloud,
  Smartphone,
  GitBranch,
} from "lucide-react";
import { Progress } from "./ui/progress";

const skillCategories = [
  {
    icon: Code2,
    title: "Frontend Development",
    skills: [
      { name: "React / Next.js", level: 90 },
      { name: "JavaScript", level: 80 },
      { name: "TypeScript", level: 75 },
      { name: "Tailwind CSS", level: 92 },
      { name: "HTML/CSS", level: 95 },
    ],
  },
  {
    icon: Database,
    title: "Backend Development",
    skills: [
      { name: "Node.js / Express", level: 92 },
      { name: "Python / Django", level: 72 },
      { name: "REST APIs", level: 90 },
      { name: "php / laravel", level: 80 },
    ],
  },
  {
    icon: Database,
    title: "Database & Storage",
    skills: [
      { name: "PostgreSQL", level: 75 },
      { name: "MongoDB", level: 90 },
      { name: "SQL", level: 78 },
      { name: "MySQL", level: 75 },
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS / Azure", level: 62 },
      { name: "Docker", level: 70 },
      { name: "CI/CD", level: 60 },
      { name: "Kubernetes", level: 75 },
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    skills: [
      { name: "React Native", level: 75 },
      { name: "Flutter", level: 80 },
      { name: "Responsive Design", level: 93 },
      { name: "PWA", level: 60 },
    ],
  },
  {
    icon: GitBranch,
    title: "Tools & Others",
    skills: [
      { name: "Git / GitHub", level: 92 },
      { name: "Figma / Design", level: 85 },
      { name: "Testing (Jest)", level: 87 },
      { name: "Agile / Scrum", level: 75 },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm uppercase tracking-wider">
            Skills & Expertise
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-2 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Technologies I Work With
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-cyan-400/30 transition-all group"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <category.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-white font-semibold">{category.title}</h3>
              </div>

              {/* Skills list */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 text-sm">
                        {skill.name}
                      </span>
                      <span className="text-cyan-400 text-sm font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                        }}
                        className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional tech stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-6">Also experienced with:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Redux",
              "Vue.js",
              "Angular",
              "Webpack",
              "Vite",
              "Prisma",
              "Supabase",
              "Vercel",
              "Netlify",
              "Stripe",
              "WebSockets",
              "Socket.io",
            ].map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-4 py-2 rounded-full bg-gradient-to-r from-white/5 to-white/0 border border-white/10 text-gray-300 text-sm hover:border-cyan-400/50 hover:text-cyan-400 transition-all cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
