import { Github, Linkedin, Mail, MessageCircle, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/profile.png';

const socialLinks = [
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/akhtar-zeb-bacha-155670236/',
    color: 'hover:text-[hsl(210,100%,50%)]',
  },
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/AkhtarZeb5101',
    color: 'hover:text-foreground',
  },
  {
    name: 'Email',
    icon: Mail,
    href: 'mailto:azaib5101@gmail.com',
    color: 'hover:text-[hsl(340,80%,55%)]',
  },
  {
    name: 'WhatsApp',
    icon: MessageCircle,
    href: 'https://wa.me/923495452856',
    color: 'hover:text-[hsl(142,70%,45%)]',
  },
];

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 md:pt-16 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Profile Image */}
          <div className="relative animate-fade-in flex-shrink-0" style={{ animationDelay: '0.2s' }}>
            <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden glass-card p-1.5 sm:p-2">
              <img
                src={profileImage}
                alt="Akhtar Zeb"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            {/* Decorative ring */}
            <div className="absolute inset-0 rounded-full border-2 border-primary/30" />
          </div>

          {/* Content */}
          <div className="text-center lg:text-left max-w-2xl">
            <p 
              className="text-primary font-medium mb-2 animate-fade-in"
              style={{ animationDelay: '0.3s' }}
            >
              Hello, I'm
            </p>
            <h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 animate-fade-in"
              style={{ animationDelay: '0.4s' }}
            >
              <span className="text-gradient">Akhtar Zeb</span> Bacha
            </h1>
            <h2 
              className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-4 sm:mb-6 animate-fade-in"
              style={{ animationDelay: '0.5s' }}
            >
              L1/L2 IT Support, Desktop Engineer, Computer Operator, Data Operator, Computer Science Graduate
            </h2>
            <p 
              className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 leading-relaxed animate-fade-in"
              style={{ animationDelay: '0.6s' }}
            >
              Optimistic and detail-oriented Computer Science graduate with hands-on experience 
              in L1/L2 IT Support, Desktop Support & Data-Entry. Proficient in system troubleshooting, 
              Windows, MacOS & Linux OS configuration, and virtual machine management.
            </p>

            {/* CTA Buttons */}
            <div 
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8 animate-fade-in"
              style={{ animationDelay: '0.7s' }}
            >
              <Button size="lg" asChild>
                <a href="#contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Get In Touch
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="glass">
                <a href="/Akhtar_Zeb_CV.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div 
              className="flex gap-4 justify-center lg:justify-start animate-fade-in"
              style={{ animationDelay: '0.8s' }}
            >
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 glass rounded-xl transition-all duration-300 hover:scale-110 ${link.color}`}
                  aria-label={link.name}
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
