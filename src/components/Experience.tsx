import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      type: "education",
      icon: GraduationCap,
      title: "PhD in Interpretable SLM for Cybersecurity",
      organization: "Ramanujan Computing Centre, Anna University",
      location: "Chennai, India",
      period: "2025 – Present",
      description: "Research Guide: Dr. A. John Prakash, Associate Professor",
    },
    {
      type: "education",
      icon: GraduationCap,
      title: "Integrated M.Sc. Computer Science",
      organization: "College of Engineering Guindy, Anna University",
      location: "Chennai, India",
      period: "2020 – 2025",
      description: "CGPA: 8.25",
    },
    {
      type: "work",
      icon: Briefcase,
      title: "Software Developer Intern",
      organization: "Spheruler Solutions Pvt Ltd",
      location: "Chennai, India",
      period: "Feb 2025 – May 2025",
      description:
        "Captured spatial object data using Android-based acquisition pipelines. Extracted visual features for 3D modeling and structured data in SQLite for ML experiments.",
    },
    {
      type: "work",
      icon: Briefcase,
      title: "Algorithm Developer Intern",
      organization: "Spheruler Solutions Pvt Ltd, IIT-M Research Park",
      location: "Chennai, India",
      period: "Jun 2023 – Dec 2023",
      description:
        "Converted 3D spatial data between SHP and CSV formats. Designed preprocessing routines for geospatial datasets and improved data compatibility.",
    },
  ];

  const achievements = [
    {
      title: "Chairperson",
      organization: "Mathrix Symposium, Department of Mathematics, CEG",
      year: "2025",
      description: "Led event planning, coordination, and academic outreach",
    },
    {
      title: "Organizer",
      organization: "CEG Tech Forum (Initiatives Domain)",
      year: "2022–2023",
      description: "Led institute-wide E-waste collection and sustainability initiative",
    },
    {
      title: "Placement Representative",
      organization: "Department of Mathematics, CEG",
      year: "2022–2023",
      description: "Coordinated off-campus internship and placement processes",
    },
    {
      title: "Creative Head & Social Media Manager",
      organization: "CEG Spartanz Variety Club",
      year: "2022–2024",
      description: "Managed content, branding, and event promotions",
    },
  ];

  return (
    <section id="experience" className="py-20 scroll-mt-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Experience & Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full" />
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border" />

            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ 
                    opacity: 0, 
                    y: 50,
                    scale: 0.9
                  }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0,
                    scale: 1
                  }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.15 * index,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className={`relative mb-12 ${
                    index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-auto"
                  }`}
                >
                  <div className="flex items-center gap-4 md:gap-0">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary flex items-center justify-center z-10 md:absolute md:left-1/2 md:-translate-x-1/2">
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>

                    <Card className="p-6 flex-grow md:w-[calc(100%-4rem)] bg-card/80 backdrop-blur hover:shadow-lg transition-shadow">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                          {exp.period}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {exp.organization} • {exp.location}
                      </p>
                      <p className="text-muted-foreground">{exp.description}</p>
                    </Card>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-20"
          >
            <h3 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3">
              <Award className="h-8 w-8 text-primary" />
              Leadership & Achievements
            </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.1 * index,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                  <Card className="p-6 h-full hover:shadow-lg transition-shadow bg-card/50 backdrop-blur">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        {achievement.year}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold mb-1">{achievement.title}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{achievement.organization}</p>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
