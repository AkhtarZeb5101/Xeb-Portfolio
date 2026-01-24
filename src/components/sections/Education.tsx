import { GraduationCap, Award, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const certifications = [
  { 
    name: 'Google IT Support', 
    date: 'Oct 2025',
    link: 'https://coursera.org/share/d2bce92d583a47d8861b0065444e38dd'
  },
  { 
    name: 'Advanced Diploma in Technology Management', 
    date: 'Sep 2025',
    link: 'https://www.udemy.com/certificate/UC-32d32edc-a4e8-4b6d-a99f-6befc6f91ce0/'
  },
  { 
    name: 'Computer Networking Basics for Desktop Support Technicians', 
    date: 'Sep 2025',
    link: 'https://www.udemy.com/certificate/UC-d913a245-acbc-4238-9945-c9c3e32ac41e/'
  },
  { 
    name: 'Advanced IT Troubleshooting for Helpdesk Support Technicians', 
    date: 'Sep 2025',
    link: 'https://www.udemy.com/certificate/UC-fb7b8bd9-e100-4444-88b1-cdd91b5fee4e/'
  },
  { 
    name: 'IT & Technical Support Guide to Helpdesk, Desktop & Servers', 
    date: 'Sep 2025',
    link: 'https://www.udemy.com/certificate/UC-9764173b-84ed-470d-849a-f55e5fc3a1d2/'
  },
  { 
    name: 'Microsoft Office Mastery: Learn Word, Excel and PowerPoint', 
    date: 'Sep 2025',
    link: 'https://www.udemy.com/certificate/UC-0df92f6a-2a04-4bee-a0cd-45eb04d82a98/'
  },
];

const Education = () => {
  return (
    <section id="education" className="py-12 sm:py-16 px-4">
      <div className="container mx-auto">
        <h2 className="section-title text-center">
          Education & <span className="text-gradient">Certifications</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-5 sm:gap-6 max-w-6xl mx-auto">
          {/* Education Card */}
          <div className="glass-card animate-fade-in">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-primary to-accent">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Education</h3>
                <p className="text-muted-foreground">Academic Background</p>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-muted/30 border border-border/50">
              <h4 className="text-lg font-semibold mb-2">Bachelor of Computer Science</h4>
              <p className="text-gradient font-medium mb-4">University of Swat</p>
              
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>2021 - 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Swat, Pakistan</span>
                </div>
              </div>

              <div className="flex items-center gap-2 p-3 rounded-lg bg-primary/10">
                <Award className="h-5 w-5 text-primary" />
                <span className="font-medium">CGPA: 3.5 / 4.0</span>
              </div>
            </div>
          </div>

          {/* Certifications Card */}
          <div className="glass-card animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-accent to-primary">
                <Award className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Certifications</h3>
                <p className="text-muted-foreground">Professional Credentials</p>
              </div>
            </div>

            <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
              {certifications.map((cert) => (
                <a
                  key={cert.name}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-4 rounded-xl bg-muted/30 border border-border/50 hover:border-primary/30 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-primary/10 mt-0.5">
                    <Award className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm leading-tight mb-1">{cert.name}</p>
                    <p className="text-xs text-muted-foreground">{cert.date}</p>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
