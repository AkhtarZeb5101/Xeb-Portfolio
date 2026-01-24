import { MapPin, Mail, Phone, Briefcase, GraduationCap, Award } from 'lucide-react';

const stats = [
  { icon: Briefcase, label: 'Experience', value: '2+ Years' },
  { icon: GraduationCap, label: 'CGPA', value: '3.5/4.0' },
  { icon: Award, label: 'Certifications', value: '6+' },
];

const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 px-4">
      <div className="container mx-auto">
        <h2 className="section-title text-center">
          About <span className="text-gradient">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
          {/* About Text */}
          <div className="glass-card">
            <h3 className="text-xl font-semibold mb-4 text-gradient">Who I Am</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm a detail-oriented Computer Science graduate from the University of Swat with 
              hands-on experience in L1/L2 IT Support and System Administration. My expertise 
              spans system troubleshooting, OS configuration across Windows, MacOS, and Linux, 
              hardware and software diagnostics, and virtual machine management.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm passionate about Cloud Computing, DevOps, and exploring different Linux distributions. 
              When I'm not troubleshooting systems, you'll find me enjoying cricket or hiking through 
              the beautiful mountains of Swat.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Lahore District, Punjab, Pakistan</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:azaib5101@gmail.com" className="hover:text-primary transition-colors">
                  azaib5101@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <a href="https://wa.me/923495452856" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  +92-349-5452-856
                </a>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="glass-card flex items-center gap-6 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="skill-icon bg-primary/10">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gradient">{stat.value}</p>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            ))}

            {/* Languages */}
            <div className="glass-card">
              <h4 className="font-semibold mb-3">Languages</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                  English (Intermediate)
                </span>
                <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm">
                  Pashto (Native)
                </span>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                  Urdu (Professional)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
