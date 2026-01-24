import { Mail, MessageCircle, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'azaib5101@gmail.com',
    href: 'mailto:azaib5101@gmail.com',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+92-349-5452-856',
    href: 'https://wa.me/923495452856',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Lahore, Punjab, Pakistan',
    href: null,
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/akhtar-zeb-bacha-155670236/',
    color: 'hover:bg-[hsl(210,100%,50%)] hover:text-white',
  },
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/AkhtarZeb5101',
    color: 'hover:bg-foreground hover:text-background',
  },
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:azaib5101@gmail.com',
    color: 'hover:bg-[hsl(340,80%,55%)] hover:text-white',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    href: 'https://wa.me/923495452856',
    color: 'hover:bg-[hsl(142,70%,45%)] hover:text-white',
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-12 sm:py-16 px-4">
      <div className="container mx-auto">
        <h2 className="section-title text-center">
          Get In <span className="text-gradient">Touch</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, collaborations, or just 
              having a friendly chat about IT and technology. Feel free to reach out!
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 mb-8">
            {contactInfo.map((info, index) => (
              <div
                key={info.label}
                className="glass-card text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 mb-4">
                  <info.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{info.label}</h3>
                {info.href ? (
                  <a
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-muted-foreground">{info.value}</p>
                )}
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="glass-card text-center">
            <h3 className="font-semibold mb-6">Connect With Me</h3>
            <div className="flex justify-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 rounded-xl glass transition-all duration-300 hover:scale-110 ${link.color}`}
                  aria-label={link.label}
                >
                  <link.icon className="h-6 w-6" />
                </a>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <Button size="lg" asChild>
                <a href="mailto:azaib5101@gmail.com">
                  <Send className="mr-2 h-4 w-4" />
                  Send Me an Email
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
