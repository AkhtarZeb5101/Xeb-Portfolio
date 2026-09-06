import { 
  Monitor, 
  Server, 
  Network, 
  Cloud, 
  Code, 
  FileText, 
  Users, 
  Headphones, 
  Terminal, 
  Shield, 
  Settings, 
  Box, 
  GitBranch, 
  BarChart3, 
  Wrench,
  FileCheck2,
  FolderTree,
  FileSpreadsheet,
  Activity,
  Layers,
  HardDrive,
  Wifi,
  Lock,
  Workflow
} from 'lucide-react';

const skillCategories = [
  {
    title: 'IT Analysis & Business Intelligence',
    icon: BarChart3,
    badgeColor: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
    skills: [
      { name: 'Microsoft Power BI (Dashboards & DAX)', icon: BarChart3 },
      { name: 'Advanced Microsoft Excel (Power Query)', icon: FileSpreadsheet },
      { name: 'Systems Analysis & Requirements Gathering', icon: Activity },
      { name: 'Workflow Mapping & Process Diagrams', icon: Workflow },
      { name: 'IT Metrics, KPI & SLA Reporting', icon: BarChart3 },
      { name: 'Root Cause Analysis (RCA)', icon: Wrench },
    ],
  },
  {
    title: 'Document Control & Information Systems',
    icon: FileCheck2,
    badgeColor: 'bg-cyan-500/10 text-cyan-500 border-cyan-500/20',
    skills: [
      { name: 'Electronic Document Management (EDMS)', icon: FolderTree },
      { name: 'Document Version Control & Archiving', icon: FileCheck2 },
      { name: 'Records Lifecycle & Retention Compliance', icon: Layers },
      { name: 'Standard Operating Procedures (SOPs)', icon: FileText },
      { name: 'Technical Documentation & Knowledge Base', icon: FileText },
      { name: 'Data Classification & Integrity', icon: Lock },
    ],
  },
  {
    title: 'IT Service Management & Support (ITIL)',
    icon: Headphones,
    badgeColor: 'bg-sky-500/10 text-sky-500 border-sky-500/20',
    skills: [
      { name: 'ITIL v4 Framework & Best Practices', icon: FileText },
      { name: 'Incident, Problem & Request Management', icon: Activity },
      { name: 'Help Desk & L1/L2 Technical Support', icon: Headphones },
      { name: 'Ticketing Systems (Jira & ServiceNow)', icon: Monitor },
      { name: 'Remote Desktop Support (AnyDesk, RDP)', icon: Monitor },
      { name: 'Customer Service & User Communication', icon: Users },
    ],
  },
  {
    title: 'Systems & Cloud Administration',
    icon: Server,
    badgeColor: 'bg-indigo-500/10 text-indigo-500 border-indigo-500/20',
    skills: [
      { name: 'Active Directory (AD DS) & Group Policy', icon: Server },
      { name: 'Microsoft Entra ID (Azure AD)', icon: Cloud },
      { name: 'Microsoft 365 Admin Center', icon: Cloud },
      { name: 'Microsoft Intune (Endpoint Management)', icon: Settings },
      { name: 'Windows & Linux Administration', icon: Terminal },
      { name: 'Virtualization (VMware & VirtualBox)', icon: Box },
    ],
  },
  {
    title: 'Network Infrastructure & IT Security',
    icon: Shield,
    badgeColor: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
    skills: [
      { name: 'TCP/IP, DNS, DHCP & Subnetting', icon: Network },
      { name: 'VPN Configuration & Secure Remote Access', icon: Wifi },
      { name: 'Network Troubleshooting & Diagnostics', icon: Settings },
      { name: 'Hardware & Software Asset Tracking (CMDB)', icon: HardDrive },
      { name: 'Cybersecurity Fundamentals & Endpoint Defense', icon: Shield },
      { name: 'Data Backup & Recovery Systems', icon: HardDrive },
    ],
  },
  {
    title: 'Automation, DevOps & Web Tools',
    icon: Terminal,
    badgeColor: 'bg-slate-500/10 text-slate-400 border-slate-500/20',
    skills: [
      { name: 'PowerShell Scripting & Automation', icon: Terminal },
      { name: 'Bash Scripting & Linux CLI', icon: Terminal },
      { name: 'Git, GitHub & GitLab (Version Control)', icon: GitBranch },
      { name: 'Azure DevOps Services', icon: Cloud },
      { name: 'Jira Workflows & Project Tracking', icon: Layers },
      { name: 'Web Technologies (HTML, CSS, JavaScript)', icon: Code },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-12 sm:py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="section-title text-center mb-3">
            Technical & <span className="text-gradient">Analytical Skills</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Comprehensive skill set spanning IT Systems Analysis, Power BI, Document Control, ITIL Service Desk, and Enterprise Administration.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="glass-card animate-fade-in flex flex-col justify-between"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-5">
                  <div className={`p-2 sm:p-2.5 rounded-xl border ${category.badgeColor} flex-shrink-0`}>
                    <category.icon className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                  </div>
                  <h3 className="font-semibold text-sm sm:text-base md:text-lg leading-snug">{category.title}</h3>
                </div>

                {/* Skills Grid */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg bg-card/60 hover:bg-primary/10 border border-border/80 hover:border-primary/30 transition-all duration-200 group cursor-default shadow-xs"
                    >
                      <skill.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                      <span className="text-xs sm:text-sm font-medium">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
