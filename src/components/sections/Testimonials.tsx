import { Quote, Linkedin } from 'lucide-react';

const testimonials = [
  {
    name: 'MINA ASIF',
    title: 'Aspiring Entrepreneur',
    relationship: 'Remote Professional Collaborator',
    date: 'February 2026',
    quote:
      'I had the pleasure of collaborating with Akhtar Zeb Bacha in a remote professional setting, and he consistently performed at a top-tier level. With strong expertise in L1 IT Support, Desktop Support, Active Directory, MS365, and remote troubleshooting, along with a background in Front-End Development, Akhtar bridges user experience and technical operations seamlessly. He is structured, dependable, and highly effective in distributed teams. A disciplined and high-impact professional, I confidently recommend him for IT Support and Technical Operations roles.',
    linkedinUrl: 'https://www.linkedin.com/in/akhtar-zeb-bacha-155670236/',
  },
  {
    name: 'Rizwan Hussain',
    title: 'Data Analyst | Azure Data Engineer',
    relationship: 'University Peer — BSCS, University of Swat',
    date: 'February 2026',
    quote:
      'I worked with Akhtar Zeb Bacha during our BSCS at the University of Swat, where he consistently demonstrated strong end-user support and troubleshooting capabilities. He has hands-on experience in Windows/Linux OS configuration, MS365, Active Directory basics, ticketing systems, and remote support tools. His structured incident handling, clear documentation, and professional communication make him highly suitable for L1/L2 IT Support roles.',
    linkedinUrl: 'https://www.linkedin.com/in/akhtar-zeb-bacha-155670236/',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-12 sm:py-16 px-4">
      <div className="container mx-auto">
        <h2 className="section-title text-center">
          What People <span className="text-gradient">Say</span>
        </h2>

        <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
          Recommendations from colleagues and peers on LinkedIn
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="glass-card animate-fade-in relative"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Testimonial Header with Quote and Date */}
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className="p-2 sm:p-2.5 rounded-xl bg-primary/10 border border-primary/20 text-primary flex-shrink-0">
                  <Quote className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <span className="text-xs text-muted-foreground/70 font-medium">{testimonial.date}</span>
              </div>

              {/* Testimonial Content */}
              <p className="text-muted-foreground leading-relaxed text-xs sm:text-sm italic mb-4 sm:mb-6">
                "{testimonial.quote}"
              </p>

              {/* Author Info */}
              <div className="flex items-center justify-between border-t border-border/70 pt-3 sm:pt-4 gap-2">
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-sm sm:text-base text-gradient truncate">{testimonial.name}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground truncate">{testimonial.title}</p>
                  <p className="text-[11px] sm:text-xs text-muted-foreground/70 mt-0.5 truncate">{testimonial.relationship}</p>
                </div>
                <a
                  href={testimonial.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg glass hover:text-primary transition-colors flex-shrink-0"
                  aria-label={`${testimonial.name}'s LinkedIn`}
                >
                  <Linkedin className="h-4 w-4 flex-shrink-0" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
