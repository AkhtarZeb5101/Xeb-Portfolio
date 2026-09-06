import { MapPin, Mail, Phone, Briefcase, GraduationCap, Award, Globe, Wrench } from 'lucide-react';

const stats = [
  { icon: Briefcase, label: 'Experience', value: '2+ Years' },
  { icon: GraduationCap, label: 'CGPA', value: '3.5/4.0' },
  { icon: Award, label: 'Certifications', value: '16+' },
  { icon: Globe, label: 'Connections', value: '500+' },
];

const services = [
  'IT Systems Analysis',
  'Microsoft Power BI Reporting',
  'Document Control & EDMS',
  'Technical Support (L1/L2)',
  'IT Consulting',
  'Backup & Recovery Systems',
  'Technical Writing & SOPs',
  'Customer Support',
  'Administrative Assistance',
];

const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 px-4">
      <div className="container mx-auto">
        <h2 className="section-title text-center">
          About <span className="text-gradient">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-start">
          {/* About Text */}
          <div className="glass-card">
            <h3 className="text-xl font-semibold mb-4 text-gradient">Who I Am</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Computer Science graduate with 2+ years of hands-on experience in IT Systems Analysis, 
              Desktop Support, Document Control, and Service Desk operations across enterprise environments, 
              campus IT labs, and international client engagements.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Proficient in Microsoft Power BI dashboard development, advanced Excel data modeling, Windows/Linux 
              administration, Active Directory, MS365, and electronic document management systems (EDMS). 
              Practiced in ITIL-aligned incident management, ticket categorization, escalation, root cause analysis, 
              and SLA-driven service delivery.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Known for meticulous technical documentation, structured troubleshooting, and dependable user-first 
              support. Actively seeking an IT Analyst, Desktop Support Engineer, or Document Controller role 
              in Saudi Arabia (Riyadh, Jeddah) or globally.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2.5 sm:space-y-3">
              <div className="flex items-start gap-2.5 sm:gap-3 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm">Madyan, Swat, Khyber Pakhtunkhwa, Pakistan</span>
              </div>
              <div className="flex items-center gap-2.5 sm:gap-3 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="mailto:azaib5101@gmail.com" className="text-xs sm:text-sm hover:text-primary transition-colors break-all">
                  azaib5101@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2.5 sm:gap-3 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="https://wa.me/923495452856" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm hover:text-primary transition-colors">
                  +92-349-5452-856
                </a>
              </div>
              <div className="flex items-center gap-2.5 sm:gap-3 text-muted-foreground">
                <Globe className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="https://xebb.me" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm hover:text-primary transition-colors">
                  xebb.me
                </a>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="grid gap-4 sm:gap-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="glass-card flex items-center gap-2.5 sm:gap-4 p-3 sm:p-5 animate-fade-in min-w-0"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <stat.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-base sm:text-xl font-bold text-gradient leading-tight">{stat.value}</p>
                    <p className="text-muted-foreground text-xs sm:text-sm truncate">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Services Offered */}
            <div className="glass-card">
              <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
                <Wrench className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                <h4 className="font-semibold text-sm sm:text-base">Services Offered</h4>
              </div>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {services.map((service) => (
                  <span
                    key={service}
                    className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm hover:bg-primary/20 transition-colors cursor-default"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="glass-card">
              <h4 className="font-semibold text-sm sm:text-base mb-2.5 sm:mb-3">Languages</h4>
              <div className="flex flex-wrap gap-1.5 sm:gap-2 text-xs sm:text-sm">
                <span className="px-2.5 sm:px-3 py-1 rounded-full bg-primary/10 text-primary">
                  English (Professional Working)
                </span>
                <span className="px-2.5 sm:px-3 py-1 rounded-full bg-primary/10 text-primary">
                  Pashto (Native / Bilingual)
                </span>
                <span className="px-2.5 sm:px-3 py-1 rounded-full bg-primary/10 text-primary">
                  Urdu (Full Professional)
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
