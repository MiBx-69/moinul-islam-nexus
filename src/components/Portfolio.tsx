import { ExternalLink, Globe, Bot, Shield, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import mibrandLogo from "@/assets/mibrand-logo.png";
import midxLogo from "@/assets/midx-logo.png";

const projects = [
  {
    title: "MiBrand SEO Agency",
    description: "Scaling brands with comprehensive SEO & marketing strategies. Full-service digital marketing agency specializing in technical SEO, content optimization, and growth hacking.",
    logo: mibrandLogo,
    category: "SEO & Marketing",
    technologies: ["Technical SEO", "Google Ads", "Content Marketing", "Analytics"],
    link: "#",
    icon: TrendingUp,
    color: "primary"
  },
  {
    title: "Telegram Session Bots",
    description: "Secure, automated Telegram bot development using Python and Telethon. Custom bot solutions for business automation and customer engagement.",
    logo: null,
    category: "Development",
    technologies: ["Python", "Telethon", "Automation", "APIs"],
    link: "#",
    icon: Bot,
    color: "secondary"
  },
  {
    title: "MiBx Security Solutions", 
    description: "Futuristic cybersecurity and penetration testing services. Comprehensive security audits and ethical hacking solutions for businesses.",
    logo: midxLogo,
    category: "Security",
    technologies: ["Penetration Testing", "Linux", "Security Audits", "Ethical Hacking"],
    link: "#",
    icon: Shield,
    color: "accent"
  },
  {
    title: "Custom SEO Growth Projects",
    description: "Data-driven SEO strategies that delivered measurable results. Case studies showing 300%+ traffic growth and first-page rankings for competitive keywords.",
    logo: null,
    category: "SEO Results",
    technologies: ["Technical SEO", "Link Building", "Content Strategy", "Analytics"],
    link: "#",
    icon: Globe,
    color: "primary"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-center mb-16 text-glow">
          Portfolio Showcase
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            const glowClass = project.color === 'primary' ? 'neon-border' : 
                            project.color === 'secondary' ? 'neon-border-secondary' : 
                            'neon-border-accent';
            
            return (
              <div
                key={index}
                className={`glass-card p-6 rounded-xl hover:scale-105 transition-all duration-300 ${glowClass} group cursor-pointer`}
                onClick={() => project.link !== "#" && window.open(project.link, '_blank')}
              >
                {/* Project Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    {project.logo ? (
                      <img
                        src={project.logo}
                        alt={`${project.title} logo`}
                        className="w-12 h-12 object-contain rounded-lg"
                        loading="lazy"
                      />
                    ) : (
                      <div className={`p-3 rounded-lg ${
                        project.color === 'primary' ? 'bg-primary/20' :
                        project.color === 'secondary' ? 'bg-secondary/20' :
                        'bg-accent/20'
                      }`}>
                        <IconComponent 
                          className={`w-6 h-6 ${
                            project.color === 'primary' ? 'text-primary' :
                            project.color === 'secondary' ? 'text-secondary' :
                            'text-accent'
                          }`}
                        />
                      </div>
                    )}
                    <div>
                      <h3 className="font-orbitron text-xl font-bold group-hover:text-glow transition-all">
                        {project.title}
                      </h3>
                      <span className={`text-sm ${
                        project.color === 'primary' ? 'text-primary' :
                        project.color === 'secondary' ? 'text-secondary' :
                        'text-accent'
                      }`}>
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>

                {/* Project Description */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 text-xs rounded-full border ${
                        project.color === 'primary' ? 'border-primary/30 text-primary bg-primary/10' :
                        project.color === 'secondary' ? 'border-secondary/30 text-secondary bg-secondary/10' :
                        'border-accent/30 text-accent bg-accent/10'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Call to Action */}
                <Button
                  variant="outline"
                  size="sm"
                  className={`w-full group-hover:scale-105 transition-all ${
                    project.color === 'secondary' ? 'neon-border-secondary' :
                    project.color === 'accent' ? 'neon-border-accent' :
                    'neon-border'
                  }`}
                >
                  View Project Details
                </Button>

                {/* Hover glitch effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-primary opacity-5 animate-glitch"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Portfolio Statistics */}
        <div className="mt-16 glass-card p-8 rounded-xl text-center">
          <h3 className="font-orbitron text-2xl font-bold mb-6 text-glow-secondary">
            Portfolio Impact
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { metric: "300%+", label: "Traffic Growth" },
              { metric: "50+", label: "Successful Projects" },
              { metric: "100%", label: "Client Retention" },
              { metric: "24/7", label: "Support Available" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-orbitron text-3xl font-bold text-glow mb-2">
                  {stat.metric}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;