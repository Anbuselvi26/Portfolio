import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

export const Projects = () => {
  const projects = [
    {
      title: "GNN-based Malware Detection",
      description:
        "Built a Graph Neural Network to classify malware from API-call graphs, achieving 98.67% accuracy. Demonstrates the value of graph-based representations for security analytics.",
      tech: ["PyTorch", "Graph Neural Networks", "Python", "Security Analytics"],
      github: "#",
      demo: null,
      year: "2024",
      type: "Research Project",
    },
    {
      title: "20-20 Challenge",
      description:
        "Developed a MERN-based mobile platform for interactive challenges with a focus on UI/UX, back-end API design, and database structuring.",
      tech: ["MongoDB", "Express.js", "React", "Node.js", "Full-Stack"],
      github: "#",
      demo: null,
      year: "2023",
      type: "Full-Stack Development",
    },
    {
      title: "Food Spoilage Monitor",
      description:
        "Designed an ESP32 + MQ4 gas-sensing system for real-time spoilage detection, featuring LED alerts and automated email notifications.",
      tech: ["ESP32", "IoT", "C++", "Gas Sensors", "Email Integration"],
      github: null,
      demo: null,
      year: "2024",
      type: "IoT Project",
    },
  ];

  return (
    <section id="projects" className="py-20 scroll-mt-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full" />
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.5, 
                delay: 0.15 * index,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <Card className="p-6 h-full flex flex-col hover:shadow-xl transition-all duration-300 bg-card/80 backdrop-blur group">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-xs font-medium text-primary">{project.type}</span>
                    <h3 className="text-2xl font-bold mt-1 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <span className="text-xs text-muted-foreground">{project.year}</span>
                </div>

                <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.github && (
                    <Button variant="outline" size="sm" className="gap-2" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button variant="outline" size="sm" className="gap-2" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
