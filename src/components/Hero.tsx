import { Button } from "@/components/ui/button";
import { Download, Mail, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.jpg";

export const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Profile Photo */}
          <motion.div 
            variants={item} 
            className="mb-8 flex justify-center"
          >
            <div className="relative">
              <img 
                src={profilePhoto} 
                alt="Anbuselvi S - Research Scholar" 
                className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover shadow-2xl ring-4 ring-primary/20"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-accent/20 mix-blend-overlay" />
            </div>
          </motion.div>

          <motion.div variants={item} className="mb-4">
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Research Scholar @ Anna University
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent"
          >
            Anbuselvi S
          </motion.h1>

          <motion.p
            variants={item}
            className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium"
          >
            AI | Data Science | Cybersecurity Enthusiast
          </motion.p>

          <motion.p
            variants={item}
            className="text-lg md:text-xl text-muted-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Where human creativity meets intelligent systems.
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-wrap gap-4 justify-center mb-12"
          >
            <Button
              size="lg"
              className="gap-2 shadow-lg hover:shadow-xl transition-shadow"
              asChild
            >
              <a href="/cv.pdf" download>
                <Download className="h-4 w-4" />
                Download CV
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2"
              onClick={() => {
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </Button>
          </motion.div>

          <motion.div variants={item} className="flex gap-4 justify-center">
            <a
              href="https://github.com/anbuselvi26"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-accent transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/anbuselvi26"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-accent transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};
