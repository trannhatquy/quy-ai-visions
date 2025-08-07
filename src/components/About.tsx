import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Code, Database, Zap, Users, BookOpen } from "lucide-react";

const About = () => {
  const skills = [
    { icon: Brain, title: "Natural Language Processing", description: "Advanced expertise in text processing, understanding, and generation" },
    { icon: Zap, title: "Large Language Models", description: "Fine-tuning, prompt engineering, and optimization of LLMs" },
    { icon: Users, title: "Multi-Agent Systems", description: "Designing and implementing intelligent agent architectures" },
    { icon: Code, title: "Generative AI", description: "Creating innovative AI solutions for content generation" },
    { icon: Database, title: "Diffusion Models", description: "Deep understanding of probabilistic generative models" },
    { icon: BookOpen, title: "Research & Development", description: "Translating cutting-edge research into practical applications" }
  ];

  const technologies = [
    "Python", "PyTorch", "TensorFlow", "Transformers", "LangChain", 
    "OpenAI", "Anthropic", "Docker", "AWS", "GCP", "FastAPI", "React"
  ];

  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-primary opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-primary/5 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Computer Science graduate from HUST with a passion for artificial intelligence. 
            I specialize in building intelligent systems that solve real-world problems through 
            cutting-edge AI technologies.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skills.map((skill, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-card transition-all duration-500 hover:scale-105 hover:-translate-y-2 border-border/50 bg-card/50 backdrop-blur-sm relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              <CardContent className="p-6 relative z-10">
                <div className="p-3 rounded-full bg-primary/10 w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                  <skill.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{skill.title}</h3>
                <p className="text-muted-foreground">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technologies */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8">Technologies & Tools</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="px-4 py-2 text-sm hover:bg-accent transition-colors cursor-default"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;