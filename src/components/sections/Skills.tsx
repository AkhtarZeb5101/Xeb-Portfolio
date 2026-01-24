import { 
  Monitor, 
  Server, 
  Network, 
  Cloud, 
  Code, 
  FileText, 
  Users, 
  Headphones,
  Database,
  Terminal,
  Shield,
  Settings,
  Laptop,
  HardDrive,
  Wifi,
  Box
} from 'lucide-react';

const skillCategories = [
  {
    title: 'IT Support & Service Desk',
    icon: Headphones,
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'Desktop Support', icon: Monitor },
      { name: 'End-User Support', icon: Users },
      { name: 'IT Help Desk', icon: Headphones },
      { name: 'Remote Support', icon: Laptop },
    ],
  },
  {
    title: 'System Administration',
    icon: Server,
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'MS365', icon: FileText },
      { name: 'Windows', icon: Monitor },
      { name: 'Linux', icon: Terminal },
      { name: 'MacOS', icon: Laptop },
      { name: 'Active Directory', icon: Shield },
    ],
  },
  {
    title: 'Networking Fundamentals',
    icon: Network,
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'Network Protocols', icon: Wifi },
      { name: 'TCP/IP', icon: Network },
      { name: 'DNS', icon: Database },
      { name: 'DHCP', icon: Server },
      { name: 'VPN Setup', icon: Shield },
      { name: 'Routers & Switches', icon: Box },
    ],
  },
  {
    title: 'Ticketing & Virtualization',
    icon: Settings,
    color: 'from-orange-500 to-red-500',
    skills: [
      { name: 'Jira', icon: FileText },
      { name: 'ZenDesk', icon: Headphones },
      { name: 'RDPs', icon: Monitor },
      { name: 'VMware', icon: HardDrive },
      { name: 'VirtualBox', icon: Box },
    ],
  },
  {
    title: 'Cloud & Scripting',
    icon: Cloud,
    color: 'from-cyan-500 to-blue-500',
    skills: [
      { name: 'Git', icon: Code },
      { name: 'Azure', icon: Cloud },
      { name: 'Bash', icon: Terminal },
      { name: 'PowerShell', icon: Terminal },
    ],
  },
  {
    title: 'Programming & Productivity',
    icon: Code,
    color: 'from-pink-500 to-purple-500',
    skills: [
      { name: 'Python', icon: Code },
      { name: 'JavaScript', icon: Code },
      { name: 'Office365', icon: FileText },
      { name: 'Microsoft Excel', icon: FileText },
      { name: 'Canva', icon: Monitor },
    ],
  },
  {
    title: 'Soft Skills',
    icon: Users,
    color: 'from-emerald-500 to-teal-500',
    skills: [
      { name: 'Problem-solving', icon: Settings },
      { name: 'Communication', icon: Users },
      { name: 'Teamwork', icon: Users },
      { name: 'Documentation', icon: FileText },
      { name: 'Time Management', icon: Settings },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-12 sm:py-16 px-4">
      <div className="container mx-auto">
        <h2 className="section-title text-center">
          Technical <span className="text-gradient">Skills</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="glass-card animate-fade-in"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color}`}>
                  <category.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-semibold text-lg">{category.title}</h3>
              </div>

              {/* Skills Grid */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/50 hover:bg-primary/10 transition-colors group cursor-default"
                  >
                    <skill.icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    <span className="text-sm">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
