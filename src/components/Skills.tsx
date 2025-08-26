import { Search, Code, Shield, TrendingUp, Bot, Database } from "lucide-react";

const skillCategories = [
  {
    title: "SEO & Marketing Skills",
    icon: Search,
    skills: [
      "Technical SEO",
      "On-page SEO", 
      "Backlinking",
      "Google Ads",
      "Social Marketing"
    ],
    color: "primary"
  },
  {
    title: "Development Skills",
    icon: Code,
    skills: [
      "Python",
      "Telethon Bots",
      "React",
      "Tailwind CSS",
      "MySQL"
    ],
    color: "secondary"
  },
  {
    title: "Security & Tech Skills",
    icon: Shield,
    skills: [
      "Ethical Hacking",
      "Pentesting",
      "Linux Systems",
      "Automation",
      "System Security"
    ],
    color: "accent"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-center mb-16 text-glow">
          Technical Expertise
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            const glowClass = category.color === 'primary' ? 'neon-border' : 
                            category.color === 'secondary' ? 'neon-border-secondary' : 
                            'neon-border-accent';
            
            return (
              <div
                key={index}
                className={`glass-card p-6 rounded-xl hover:scale-105 transition-all duration-300 ${glowClass} group`}
              >
                <div className="text-center mb-6">
                  <div className={`inline-flex p-4 rounded-full mb-4 ${
                    category.color === 'primary' ? 'bg-primary/20' :
                    category.color === 'secondary' ? 'bg-secondary/20' :
                    'bg-accent/20'
                  }`}>
                    <IconComponent 
                      className={`w-8 h-8 ${
                        category.color === 'primary' ? 'text-primary' :
                        category.color === 'secondary' ? 'text-secondary' :
                        'text-accent'
                      } group-hover:animate-pulse`}
                    />
                  </div>
                  <h3 className="font-orbitron text-xl font-bold mb-4">
                    {category.title}
                  </h3>
                </div>

                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li
                      key={skillIndex}
                      className="flex items-center space-x-3 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <div className={`w-2 h-2 rounded-full ${
                        category.color === 'primary' ? 'bg-primary' :
                        category.color === 'secondary' ? 'bg-secondary' :
                        'bg-accent'
                      } animate-pulse`}></div>
                      <span className="text-sm font-medium">{skill}</span>
                    </li>
                  ))}
                </ul>

                {/* Skill-specific alt text for SEO */}
                <div className="sr-only">
                  {category.title} - {category.skills.join(', ')} expertise by M. Moinul Islam
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { number: "3+", label: "Years Experience", icon: TrendingUp },
            { number: "50+", label: "Projects Completed", icon: Code },
            { number: "100%", label: "Client Satisfaction", icon: Search },
            { number: "24/7", label: "Security Monitoring", icon: Shield }
          ].map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="glass-card p-4 rounded-lg text-center hover:scale-105 transition-all duration-300"
              >
                <IconComponent className="w-6 h-6 mx-auto mb-2 text-primary animate-pulse" />
                <div className="font-orbitron text-2xl font-bold text-glow mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;