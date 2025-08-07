import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-primary/5 rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-primary/10 rounded-full animate-ping delay-700"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-primary/5 rounded-full animate-pulse delay-1000"></div>
      </div>
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="animate-fade-in">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/20 shadow-glow animate-glow">
                <img 
                  src="/lovable-uploads/10f78cc9-a3ec-4853-b98b-484fb8669af5.png" 
                  alt="Tran Nhat Quy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-background animate-pulse"></div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Tran Nhat Quy
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6">
            AI Engineer & Research Specialist
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Transforming ideas into intelligent solutions with 3+ years of expertise in 
            <span className="text-primary font-semibold"> NLP, LLM, Generative AI, Multi-Agent Systems, and Diffusion Models</span>
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
            >
              View My Work
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/20 hover:border-primary/40 hover:bg-accent/50 transition-all duration-300"
            >
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a href="https://github.com/trannhatquy" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-2 hover:scale-110 transform transition-transform">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/tran-nhat-quy-16b25720b/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-2 hover:scale-110 transform transition-transform">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:quymyhungill@gmail.com" className="text-muted-foreground hover:text-primary transition-colors p-2 hover:scale-110 transform transition-transform">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;