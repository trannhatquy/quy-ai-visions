import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "tran.nhatquy@email.com",
      href: "mailto:tran.nhatquy@email.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+84 xxx xxx xxx",
      href: "tel:+84xxxxxxxxx"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Hanoi, Vietnam",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      title: "GitHub",
      href: "https://github.com/",
      color: "hover:text-gray-800"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      href: "https://linkedin.com/in/",
      color: "hover:text-blue-600"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-2 h-2 bg-primary rounded-full animate-ping"></div>
        <div className="absolute top-40 right-1/3 w-1 h-1 bg-primary/60 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-32 left-1/3 w-3 h-3 bg-primary/40 rounded-full animate-bounce delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate on your next AI project? I'd love to hear about your ideas 
            and discuss how we can bring them to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <p className="text-muted-foreground mb-8">
                Whether you're looking for an AI consultant, want to discuss research 
                opportunities, or have an exciting project in mind, I'm always open to 
                meaningful conversations.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-accent/50 transition-colors group"
                >
                  <contact.icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-medium">{contact.title}</p>
                    <p className="text-muted-foreground">{contact.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-lg bg-secondary hover:bg-accent transition-all transform hover:scale-110 ${social.color}`}
                    title={social.title}
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-border/50 bg-card/80 backdrop-blur-sm relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
            <CardHeader className="relative z-10">
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="What's this about?" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell me about your project or idea..."
                    className="min-h-32"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;