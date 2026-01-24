import { Calendar, MapPin, Building } from 'lucide-react';

const experiences = [
  {
    title: 'Service Desk Intern',
    company: 'Forage (Datacom)',
    location: 'Remote',
    period: 'Nov 2025 – Dec 2025',
    responsibilities: [
      'Provided remote IT support and incident management for Datacom\'s managed services team, honing skills in critical issue prioritisation and resolution.',
      'Developed expertise in ITIL processes, specifically in categorising, logging, and escalating incidents.',
      'Enhanced problem-solving abilities by diagnosing and resolving complex network outage issues.',
      'Strengthened communication skills by crafting empathetic and clear follow-up communications to affected users.',
    ],
  },
  {
    title: 'L1/L2 IT Support & System Administrator',
    company: 'Suvastu Tech',
    location: 'Swat KPK - On-site',
    period: 'Sep 2023 – Aug 2025',
    responsibilities: [
      'Provided Desktop Support, End-User Support & assisted users with hardware/software troubleshooting with experience in Active Directory & MS365.',
      'Gained hands-on experience in system troubleshooting, OS installation/configuration (Windows, MacOS & Linux), managing virtual machines (VMware, VirtualBox) & RDPs.',
      'Practiced networking fundamentals including TCP/IP, DNS, DHCP, and VPN setup for simulated IT environments.',
      'Applied Office Automation skills including MS Word, Excel, and PowerPoint for reports and documentation.',
      'Practiced entry-level scripting and DevOps tools including Git, Linux, Bash, and PowerShell.',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-12 sm:py-16 px-4">
      <div className="container mx-auto">
        <h2 className="section-title text-center">
          Professional <span className="text-gradient">Experience</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary transform md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className={`relative mb-8 md:mb-10 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12 md:ml-auto' : 'md:pl-12'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-auto md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background hidden md:block"
                  style={{ [index % 2 === 0 ? 'left' : 'right']: '-2rem' }}
                />

                <div 
                  className="glass-card ml-6 md:ml-0 animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <h3 className="text-xl font-bold text-gradient mb-2">{exp.title}</h3>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Building className="h-4 w-4" />
                      <span>{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1">▹</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
