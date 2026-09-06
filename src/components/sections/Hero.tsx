import { Github, Linkedin, Mail, MessageCircle, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/profile.png';

const socialLinks = [
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/akhtar-zeb-bacha-155670236/',
    color: 'hover:text-primary',
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
    color: 'hover:text-primary',
  },
  {
    name: 'WhatsApp',
    icon: MessageCircle,
    href: 'https://wa.me/923495452856',
    color: 'hover:text-emerald-500',
  },
];

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 md:pt-16 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Profile Image */}
          <div className="relative animate-fade-in flex-shrink-0" style={{ animationDelay: '0.2s' }}>
            <div className="w-36 h-36 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden glass-card p-1 sm:p-1.5">
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
          <div className="text-center lg:text-left max-w-2xl w-full">
            <p
              className="text-primary font-medium text-xs sm:text-sm mb-1 sm:mb-2 animate-fade-in"
              style={{ animationDelay: '0.3s' }}
            >
              Hello, I'm
            </p>
            <h1
              className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4 animate-fade-in"
              style={{ animationDelay: '0.4s' }}
            >
              <span className="text-gradient">Akhtar Zeb</span> Bacha
            </h1>
            <h2
              className="text-xs sm:text-base md:text-xl text-muted-foreground mb-3 sm:mb-6 animate-fade-in leading-snug font-medium"
              style={{ animationDelay: '0.5s' }}
            >
              IT Analyst | Desktop Support & SysAdmin | Document Controller | L1/L2 Technical Support
            </h2>
            <p
              className="text-xs sm:text-base text-muted-foreground mb-5 sm:mb-8 leading-relaxed animate-fade-in"
              style={{ animationDelay: '0.6s' }}
            >
              Detail-oriented Computer Science graduate with 2+ years of hands-on experience in IT Systems Analysis, 
              Desktop Support, System Administration, and Document Control. Skilled in troubleshooting, Power BI 
              analytics dashboards, Active Directory, MS365, EDMS digital archiving, and ITIL-aligned service desk operations.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-6 sm:mb-8 animate-fade-in w-full sm:w-auto"
              style={{ animationDelay: '0.7s' }}
            >
              <Button size="lg" className="w-full sm:w-auto" asChild>
                <a href="#contact">
                  <Mail className="mr-2 h-4 w-4 flex-shrink-0" />
                  Get In Touch
                </a>
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto glass" asChild>
                <a href="/Akhtar_Zeb_CV.pdf" download>
                  <Download className="mr-2 h-4 w-4 flex-shrink-0" />
                  Download CV
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div
              className="flex gap-2.5 sm:gap-4 justify-center lg:justify-start animate-fade-in"
              style={{ animationDelay: '0.8s' }}
            >
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2.5 sm:p-3 glass rounded-xl transition-all duration-300 hover:scale-110 flex-shrink-0 ${link.color}`}
                  aria-label={link.name}
                >
                  <link.icon className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
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
