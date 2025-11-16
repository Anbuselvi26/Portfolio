import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Brain, Shield, BarChart, Code } from "lucide-react";

export const About = () => {
  const skills = [
    {
      category: "AI/ML",
      icon: Brain,
      items: ["PyTorch", "Scikit-learn", "Graph Neural Networks", "XAI Methods", "Model Fine-tuning"],
    },
    {
      category: "Data Science",
      icon: BarChart,
      items: ["Pandas", "NumPy", "Data Analytics", "Statistical Analysis", "Visualization"],
    },
    {
      category: "Cybersecurity",
      icon: Shield,
      items: ["Malware Detection", "Security Analytics", "Interpretable Models", "Trustworthy AI"],
    },
    {
      category: "Programming",
      icon: Code,
      items: ["Python", "JavaScript", "HTML/CSS", "MySQL", "Git/GitHub"],
    },
  ];

  return (
    <section id="about" className="py-20 scroll-mt-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.6, 
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="mb-16"
          >
            <Card className="p-8 bg-card/50 backdrop-blur">
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                I'm a <span className="text-foreground font-semibold">Research Scholar</span> at the{" "}
                <span className="text-foreground font-semibold">Ramanujan Computing Centre, Anna University</span>,
                pursuing a PhD in Interpretable Security-oriented Language Models for Cybersecurity.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                My research focuses on <span className="text-foreground font-semibold">interpretable AI</span>,{" "}
                <span className="text-foreground font-semibold">explainable AI (XAI)</span>, and{" "}
                <span className="text-foreground font-semibold">trustworthy AI systems</span>. I'm passionate about
                building AI models that are not only accurate but also transparent and understandable.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With a strong foundation in{" "}
                <span className="text-foreground font-semibold">machine learning</span>,{" "}
                <span className="text-foreground font-semibold">data science</span>, and{" "}
                <span className="text-foreground font-semibold">cybersecurity</span>, I work on projects ranging from
                graph neural networks for malware detection to IoT-based solutions and full-stack development.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.6, 
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            <h3 className="text-2xl font-bold mb-8 text-center">Skills & Expertise</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.category}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.1 * index,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                  >
                    <Card className="p-6 hover:shadow-lg transition-shadow h-full bg-card/50 backdrop-blur">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <h4 className="text-xl font-semibold">{skill.category}</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {skill.items.map((item) => (
                          <span
                            key={item}
                            className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
