import { motion } from "motion/react";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Senior Full Stack Developer",
    company: "TechCorp Solutions",
    period: "2022 - Present",
    description:
      "Leading development of enterprise-scale web applications, mentoring junior developers, and architecting scalable solutions using modern technologies.",
    achievements: [
      "Reduced application load time by 40% through optimization",
      "Led a team of 5 developers on critical projects",
      "Implemented CI/CD pipeline improving deployment efficiency",
    ],
  },
  {
    type: "work",
    title: "Full Stack Developer",
    company: "Digital Innovations Inc",
    period: "2020 - 2022",
    description:
      "Developed and maintained multiple client projects, focusing on React-based front-ends and Node.js backends.",
    achievements: [
      "Built 15+ production-ready web applications",
      "Introduced TypeScript adoption across the team",
      "Improved code quality with comprehensive testing",
    ],
  },
  {
    type: "education",
    title: "Bachelor of Computer Science",
    company: "State University",
    period: "2016 - 2020",
    description:
      "Graduated with honors. Specialized in Software Engineering and Web Technologies.",
    achievements: [
      "GPA: 3.8/4.0",
      "Dean's List all semesters",
      "Led university coding club",
    ],
  },
  {
    type: "work",
    title: "Junior Web Developer",
    company: "StartupHub",
    period: "2019 - 2020",
    description:
      "Part-time role during final year of university. Built responsive websites and learned modern development practices.",
    achievements: [
      "Developed 10+ client websites",
      "Learned React and modern JavaScript",
      "Collaborated with design team",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm uppercase tracking-wider">
            Career Path
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-2 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Experience & Education
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative mb-12 md:mb-16 ${
                  index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2 md:text-right"
                }`}
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? "" : "ml-auto"}`}>
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full ${
                      exp.type === "work"
                        ? "bg-gradient-to-r from-blue-500 to-cyan-400"
                        : "bg-gradient-to-r from-purple-500 to-pink-400"
                    } shadow-lg`}
                  >
                    <div className="absolute inset-0 rounded-full animate-ping opacity-20 bg-current" />
                  </div>

                  {/* Icon */}
                  <div
                    className={`absolute left-0 md:left-auto ${
                      index % 2 === 0 ? "md:right-0" : ""
                    } top-0 w-16 h-16 rounded-xl bg-gradient-to-br ${
                      exp.type === "work"
                        ? "from-blue-500/20 to-cyan-500/20"
                        : "from-purple-500/20 to-pink-500/20"
                    } backdrop-blur-sm border border-white/10 flex items-center justify-center`}
                  >
                    {exp.type === "work" ? (
                      <Briefcase className="w-6 h-6 text-cyan-400" />
                    ) : (
                      <GraduationCap className="w-6 h-6 text-purple-400" />
                    )}
                  </div>

                  {/* Content card */}
                  <motion.div
                    whileHover={{ y: -5 }}
                    className={`ml-24 md:ml-0 ${
                      index % 2 === 0 ? "md:mr-12" : "md:ml-12"
                    } p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-cyan-400/30 transition-all group`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className={index % 2 === 0 ? "" : "md:text-right"}>
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-gray-300 font-medium">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    <div className="mb-3">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs ${
                          exp.type === "work"
                            ? "bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 text-cyan-400"
                            : "bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 text-purple-400"
                        }`}
                      >
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <ul
                      className={`space-y-2 ${
                        index % 2 === 0 ? "" : "md:text-right"
                      }`}
                    >
                      {exp.achievements.map((achievement, achIndex) => (
                        <li
                          key={achIndex}
                          className="text-gray-400 text-sm flex items-start gap-2"
                        >
                          <span className="text-cyan-400 mt-1">▹</span>
                          <span className="flex-1">{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Card glow */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-10 transition-opacity -z-10" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center text-white mb-8">
            Certifications & Awards
          </h3>
          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              "AWS Certified Solutions Architect",
              "Google Cloud Professional",
              "Meta React Advanced Certification",
            ].map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 text-center"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🏆</span>
                </div>
                <p className="text-gray-300 text-sm">{cert}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
