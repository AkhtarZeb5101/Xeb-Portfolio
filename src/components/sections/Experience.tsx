import { Calendar, MapPin, Building } from 'lucide-react';

const experiences = [
  {
    title: 'Digital Operations, IT Support & Document Controller',
    company: 'Gandhara Wooden Art',
    type: 'Part-time',
    location: 'Swat, KPK, Pakistan · On-site',
    period: 'Jul 2026 – Present',
    responsibilities: [
      'Implement digital record-keeping and inventory tracking systems, replacing manual paper-based processes with structured digital workflows.',
      'Act as Document Controller: oversee digital product catalogs, customer records, technical documentation, and compliance file structures.',
      'Support point-of-sale (POS) and billing systems to ensure seamless business operations and data integrity.',
      'Manage the gallery\'s social media strategy, content planning, and customer engagement across digital platforms.',
      'Design promotional graphics and product visuals using Canva to support branding and online outreach.',
      'Serve as primary point of contact for all IT, systems, and digital needs of the gallery, reporting directly to ownership.',
    ],
  },
  {
    title: 'Jr IT Trainee',
    company: 'Suvastu Tech',
    type: 'Internship',
    location: 'Lahore, Punjab, Pakistan · On-site',
    period: 'Feb 2026 – Jul 2026',
    responsibilities: [
      'Trained under senior engineers in a live enterprise service desk environment.',
      'Handled company ticketing workflows, incident logging, and escalation procedures.',
      'Diagnosed and repaired hardware faults on printers, laptops, and desktop PCs.',
      'Supported multi-OS environments (Windows, macOS, Linux) and managed virtual machines and RDP sessions.',
      'Produced reports and documentation using MS Word, Excel, and PowerPoint, with Canva for visual assets.',
    ],
  },
  {
    title: 'Technical Support Trainee',
    company: 'Sybrid Private Limited - A Lakson Group Company',
    type: 'Internship',
    location: 'Lahore, Punjab, Pakistan · On-site',
    period: 'Jan 2026',
    responsibilities: [
      'Completed onboarding and hands-on technical support training under senior engineers in an enterprise service desk environment.',
      'Gained exposure to company ticketing workflows, incident logging, and escalation procedures.',
      'Shadowed senior staff on hardware/software troubleshooting and end-user support best practices.',
    ],
  },
  {
    title: 'Service Desk Intern',
    company: 'Datacom',
    type: 'Internship',
    location: 'Virtual · Remote',
    period: 'Nov 2025 – Dec 2025',
    responsibilities: [
      'Practiced remote IT support and incident management for Datacom\'s managed services team, honing skills in critical issue prioritisation and resolution in a high-stakes environment.',
      'Practiced developing expertise in ITIL processes, specifically in categorising, logging, and escalating incidents, ensuring alignment with industry best practices for efficient service management.',
      'Enhanced problem-solving abilities by diagnosing and resolving a complex network outage issue, employing analytical thinking to assess impact and urgency across multiple client tickets.',
      'Strengthened communication skills by crafting empathetic and clear follow-up communications to affected users, demonstrating a commitment to maintaining customer satisfaction and trust during IT crises.',
    ],
  },
  {
    title: 'Remote Support Engineer',
    company: 'Upwork',
    type: 'Freelance',
    location: 'Remote',
    period: 'Apr 2025 – Present',
    responsibilities: [
      'Delivering remote technical support to international clients, resolving hardware, software, and connectivity issues via remote access tools (AnyDesk, TeamViewer, RDP).',
      'Diagnosing and resolving OS-level issues across Windows and Linux environments to minimize client downtime.',
      'Managing client communication end-to-end, from issue intake to resolution, maintaining clear, professional support.',
    ],
  },
  {
    title: 'Information Technology Help Desk Technician',
    company: 'Fiverr',
    type: 'Freelance',
    location: 'Remote',
    period: 'Apr 2025 – Present',
    responsibilities: [
      'Providing on-demand help desk support to clients worldwide, handling tickets spanning hardware, software, networking, and account access issues.',
      'Logging, categorizing, and prioritizing incidents following ITIL-aligned best practices for timely resolution.',
      'Guiding non-technical users through step-by-step troubleshooting for OS, application, and connectivity issues.',
      'Delivering fast-turnaround support within gig-based service windows, maintaining strong client satisfaction.',
      'Documenting recurring issues and fixes to streamline future support delivery.',
    ],
  },
  {
    title: 'IT Lab Trainee | Desktop Support L1 Trainee',
    company: 'University of Swat',
    type: 'Full-time',
    location: 'Swat District, Khyber Pakhtunkhwa, Pakistan · On-site',
    period: 'Sep 2023 – Aug 2025',
    responsibilities: [
      'Provided Desktop Support, End-User Support & assisting users with hardware/software troubleshooting and resolving common system errors with experience in Active Directory & MS365.',
      'Gained hands-on experience in system troubleshooting, OS installation/configuration (Windows, MacOS & Linux), managing virtual machines (VMware, VirtualBox) & RDPs.',
      'Practiced networking fundamentals including TCP/IP, DNS, DHCP, and VPN setup for simulated IT environments with Hardware & Software Asset Tracking.',
      'Applied Office Automation skills including MS Word, Excel, and PowerPoint for reports, documentation, and data handling; created visual content with Canva and practiced prompt engineering for productivity.',
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
            <div className="absolute left-3 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-border to-primary/50 transform md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <div
                key={`${exp.company}-${exp.title}`}
                className={`relative mb-6 sm:mb-8 md:mb-10 pl-8 md:pl-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12 md:ml-auto' : 'md:pl-12'
                }`}
              >
                {/* Timeline dot */}
                <div 
                  className={`absolute w-3 h-3 md:w-4 md:h-4 rounded-full bg-primary border-2 md:border-4 border-background top-5 ${
                    index % 2 === 0
                      ? 'left-3 -translate-x-1/2 md:left-auto md:translate-x-0 md:-left-2'
                      : 'left-3 -translate-x-1/2 md:left-auto md:translate-x-0 md:-right-2'
                  }`}
                />

                <div 
                  className="glass-card animate-fade-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <h3 className="text-lg sm:text-xl font-bold text-gradient mb-2 leading-snug">
                    {exp.title}
                  </h3>
                  
                  <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground mb-4">
                    <div className="flex items-start sm:items-center gap-1.5 min-w-0">
                      <Building className="h-4 w-4 text-primary flex-shrink-0 mt-0.5 sm:mt-0" />
                      <span className="font-medium text-foreground">{exp.company}</span>
                      <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs flex-shrink-0">
                        {exp.type}
                      </span>
                    </div>
                    <div className="flex items-start sm:items-center gap-1.5 min-w-0">
                      <MapPin className="h-4 w-4 text-primary/70 flex-shrink-0 mt-0.5 sm:mt-0" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5 min-w-0">
                      <Calendar className="h-4 w-4 text-primary/70 flex-shrink-0" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        <span className="text-primary mt-1 font-bold text-xs flex-shrink-0 select-none">▹</span>
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
