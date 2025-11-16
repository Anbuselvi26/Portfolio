import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { motion } from "framer-motion";

export const Blog = () => {
  const blogPosts = [
    {
      title: "Understanding Graph Neural Networks for Cybersecurity",
      excerpt:
        "Exploring how graph-based representations can revolutionize malware detection and security analytics through deep learning.",
      date: "Mar 15, 2024",
      readTime: "8 min read",
      category: "AI & Security",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    },
    {
      title: "The Future of Interpretable AI in Security",
      excerpt:
        "Why explainability and transparency matter in building trustworthy AI systems for cybersecurity applications.",
      date: "Feb 28, 2024",
      readTime: "6 min read",
      category: "Research",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    },
    {
      title: "Building IoT Solutions for Real-World Problems",
      excerpt:
        "A deep dive into designing and implementing IoT-based systems, from hardware selection to cloud integration.",
      date: "Jan 20, 2024",
      readTime: "10 min read",
      category: "IoT",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    },
  ];

  return (
    <section id="blog" className="py-20 scroll-mt-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Blog & Insights</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full" />
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card className="overflow-hidden h-full flex flex-col hover:shadow-xl transition-all duration-300 group bg-card">
                <div className="relative overflow-hidden h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 flex-grow">{post.excerpt}</p>

                  <Button variant="ghost" className="gap-2 self-start group/btn">
                    Read More
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button size="lg" variant="outline">
            View All Posts
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
