import { GraduationCap, Award, Calendar, MapPin, ExternalLink } from 'lucide-react';

const certifications = [
  { 
    name: 'Google IT Support Professional Certificate (v.3)', 
    issuer: 'Coursera / Google',
    date: 'Dec 2025',
    credentialId: 'Credly Badge',
    link: 'https://www.credly.com/badges/ba00cbd8-8f23-43d4-8a72-cdcae5da8edb/linked_in_profile'
  },
  { 
    name: 'Google IT Support', 
    issuer: 'Google',
    date: 'Nov 2025',
    credentialId: '165MB8V8ZZFP',
    link: 'https://coursera.org/share/d2bce92d583a47d8861b0065444e38dd'
  },
  { 
    name: 'Accelerate Your Job Search with AI', 
    issuer: 'Google',
    date: 'Nov 2025',
    credentialId: 'BGNGWX8XJFZG',
    link: ''
  },
  { 
    name: 'IT Security: Defense against the digital dark arts', 
    issuer: 'Google',
    date: 'Nov 2025',
    credentialId: '6VHRDAG9OW8G',
    link: ''
  },
  { 
    name: 'System Administration and IT Infrastructure Services', 
    issuer: 'Google',
    date: 'Nov 2025',
    credentialId: 'TH3MUK80MYA4',
    link: ''
  },
  { 
    name: 'Operating Systems and You: Becoming a Power User', 
    issuer: 'Google',
    date: 'Nov 2025',
    credentialId: '1AK188SUS7O2',
    link: ''
  },
  { 
    name: 'The Bits and Bytes of Computer Networking', 
    issuer: 'Google',
    date: 'Oct 2025',
    credentialId: 'MA2506WPWD62',
    link: ''
  },
  { 
    name: 'Technical Support Fundamentals', 
    issuer: 'Google',
    date: 'Oct 2025',
    credentialId: '63ZU3GID414R',
    link: ''
  },
  { 
    name: 'Advanced IT Troubleshooting for Helpdesk Support Technicians', 
    issuer: 'Udemy',
    date: 'Oct 2025',
    credentialId: 'UC-fb7b8bd9',
    link: 'https://www.udemy.com/certificate/UC-fb7b8bd9-e100-4444-88b1-cdd91b5fee4e/'
  },
  { 
    name: 'IT & Technical Support Guide to Helpdesk, Desktop & Servers', 
    issuer: 'Udemy',
    date: 'Sep 2025',
    credentialId: 'UC-9764173b',
    link: 'https://www.udemy.com/certificate/UC-9764173b-84ed-470d-849a-f55e5fc3a1d2/'
  },
  { 
    name: 'Computer Networking Basics for Desktop Support Technicians', 
    issuer: 'Udemy',
    date: 'Sep 2025',
    credentialId: 'UC-d913a245',
    link: 'https://www.udemy.com/certificate/UC-d913a245-acbc-4238-9945-c9c3e32ac41e/'
  },
  { 
    name: 'Microsoft Office Mastery: Learn Word, Excel and PowerPoint', 
    issuer: 'Udemy',
    date: 'Sep 2025',
    credentialId: 'UC-0df92f6a',
    link: 'https://www.udemy.com/certificate/UC-0df92f6a-2a04-4bee-a0cd-45eb04d82a98/'
  },
  { 
    name: 'Microsoft Certified: Azure Fundamentals', 
    issuer: 'Simplilearn',
    date: 'Sep 2025',
    credentialId: '7974064',
    link: ''
  },
  { 
    name: 'GIT, GitLab, GitHub Fundamentals for Software Developers', 
    issuer: 'Udemy',
    date: 'Feb 2025',
    credentialId: 'UC-3d89a4ae',
    link: 'https://www.udemy.com/certificate/UC-3d89a4ae-bb3f-4964-a820-5631a27d529e/'
  },
  { 
    name: 'Essentials of MS Excel - Formulas and Functions', 
    issuer: 'UniAthena',
    date: 'Feb 2025',
    credentialId: '5976-5072-3009',
    link: ''
  },
  { 
    name: 'JavaScript Fundamentals to Advanced: Full Stack Development', 
    issuer: 'Udemy',
    date: 'Feb 2025',
    credentialId: 'UC-90cc4975',
    link: 'https://www.udemy.com/certificate/UC-90cc4975-12e3-475b-9043-c5c502bf1335/'
  },
];

const Education = () => {
  return (
    <section id="education" className="py-12 sm:py-16 px-4">
      <div className="container mx-auto">
        <h2 className="section-title text-center">
          Education & <span className="text-gradient">Certifications</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {/* Education Card */}
          <div className="glass-card animate-fade-in">
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary to-accent flex-shrink-0">
                <GraduationCap className="h-6 w-6 sm:h-8 sm:w-8 text-white flex-shrink-0" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold">Education</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">Academic Background</p>
              </div>
            </div>

            <div className="p-4 sm:p-6 rounded-xl bg-muted/30 border border-border/50">
              <h4 className="text-base sm:text-lg font-semibold mb-2 leading-snug">Bachelor's Degree, Computer Science</h4>
              <p className="text-gradient font-medium text-sm sm:text-base mb-3 sm:mb-4">University of Swat</p>
              
              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>Sep 2021 – Sep 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>Swat, KPK, Pakistan</span>
                </div>
              </div>

              <div className="flex items-center gap-2 p-2.5 sm:p-3 rounded-lg bg-primary/10">
                <Award className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                <span className="font-medium text-xs sm:text-sm">CGPA: 3.5 / 4.0</span>
              </div>
            </div>
          </div>

          {/* Certifications Card */}
          <div className="glass-card animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-accent to-primary flex-shrink-0">
                <Award className="h-6 w-6 sm:h-8 sm:w-8 text-white flex-shrink-0" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold">Certifications</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">16 Professional Credentials</p>
              </div>
            </div>

            <div className="space-y-2.5 sm:space-y-3 max-h-[420px] sm:max-h-[500px] overflow-y-auto pr-1.5 sm:pr-2">
              {certifications.map((cert) => {
                const content = (
                  <>
                    <div className="p-1.5 sm:p-2 rounded-lg bg-primary/10 mt-0.5 flex-shrink-0">
                      <Award className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary flex-shrink-0" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-xs sm:text-sm leading-tight mb-1 break-words">{cert.name}</p>
                      <p className="text-[11px] sm:text-xs text-muted-foreground">{cert.issuer} · {cert.date}</p>
                      {cert.credentialId && (
                        <p className="text-[10px] sm:text-xs text-muted-foreground/70 mt-0.5 break-all">ID: {cert.credentialId}</p>
                      )}
                    </div>
                    {cert.link && (
                      <ExternalLink className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 ml-1.5" />
                    )}
                  </>
                );

                const itemClass = "flex items-start gap-2.5 sm:gap-3 p-3 sm:p-4 rounded-xl bg-muted/30 border border-border/50 hover:border-primary/30 transition-colors group";

                return cert.link ? (
                  <a
                    key={cert.name}
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={itemClass}
                  >
                    {content}
                  </a>
                ) : (
                  <div key={cert.name} className={itemClass}>
                    {content}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
