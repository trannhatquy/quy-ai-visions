import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Award } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior AI Engineer",
      company: "Tech Innovations Ltd.",
      period: "2022 - Present",
      location: "Remote",
      description: "Leading AI research and development initiatives, specializing in LLM applications and multi-agent systems.",
      achievements: [
        "Developed and deployed 5+ production-ready AI systems",
        "Improved model performance by 40% through novel fine-tuning techniques",
        "Led a team of 3 junior AI engineers"
      ],
      technologies: ["Python", "PyTorch", "Transformers", "LangChain", "AWS"]
    },
    {
      title: "AI Research Specialist",
      company: "AI Research Lab",
      period: "2021 - 2022",
      location: "Hanoi, Vietnam",
      description: "Focused on NLP research and generative AI model development with emphasis on Vietnamese language processing.",
      achievements: [
        "Published 2 research papers on Vietnamese NLP",
        "Developed state-of-the-art Vietnamese language models",
        "Collaborated with international research teams"
      ],
      technologies: ["TensorFlow", "BERT", "GPT", "Hugging Face", "Docker"]
    }
  ];

  const education = {
    degree: "Bachelor of Computer Science",
    school: "Hanoi University of Science and Technology (HUST)",
    period: "2018 - 2022",
    highlights: [
      "Specialized in Artificial Intelligence and Machine Learning",
      "Graduated with Distinction",
      "Thesis: 'Advanced NLP Techniques for Vietnamese Text Processing'"
    ]
  };

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Experience & Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A journey of continuous learning and innovation in the field of artificial intelligence.
          </p>
        </div>

        {/* Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Professional Experience</h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card 
                key={index} 
                className="hover:shadow-card transition-all duration-300 border-border/50 bg-card/80 backdrop-blur-sm"
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <p className="text-primary font-semibold">{exp.company}</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Award className="h-4 w-4 text-primary" />
                      Key Achievements
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Education</h3>
          <Card className="hover:shadow-card transition-all duration-300 border-border/50 bg-card/80 backdrop-blur-sm max-w-4xl mx-auto">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <CardTitle className="text-xl">{education.degree}</CardTitle>
                  <p className="text-primary font-semibold">{education.school}</p>
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {education.period}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {education.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;