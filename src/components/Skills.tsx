import { Search, Code, Shield, TrendingUp, Bot, Database, Phone, Users, BarChart3, Globe } from "lucide-react";

const skillCategories = [
  {
    title: "SEO & Marketing",
    icon: Search,
    skills: [
      "Technical SEO",
      "On-page & Off-page SEO", 
      "Keyword Research",
      "Content Strategy",
      "EEAT Implementation",
      "Social Media Marketing",
      "Email Marketing Campaigns"
    ],
    color: "primary",
    description: "Advanced SEO strategies and digital marketing expertise"
  },
  {
    title: "Web & App Development",
    icon: Code,
    skills: [
      "React & Tailwind CSS",
      "WordPress & Shopify",
      "High-Performance Websites",
      "Mobile-Friendly Applications",
      "Custom Solutions",
      "API Integration",
      "Database Management"
    ],
    color: "secondary",
    description: "Full-stack development with modern technologies"
  },
  {
    title: "Automation & Bots",
    icon: Bot,
    skills: [
      "Telegram Bot Development",
      "Workflow Automation",
      "Session Handling",
      "Admin Dashboards",
      "Python Automation",
      "Process Optimization",
      "Scalable Systems"
    ],
    color: "accent",
    description: "Intelligent automation and bot development"
  },
  {
    title: "Cybersecurity & Ethical Hacking",
    icon: Shield,
    skills: [
      "Penetration Testing",
      "Vulnerability Assessment",
      "WiFi Security Evaluation",
      "System Security Audits",
      "Ethical Hacking",
      "Security Automation",
      "Linux Systems"
    ],
    color: "primary",
    description: "Advanced cybersecurity and ethical hacking services"
  },
  {
    title: "Business & Leadership",
    icon: Users,
    skills: [
      "Project Management",
      "Client Relations",
      "Team Leadership",
      "Strategic Planning",
      "Bilingual Communication",
      "Quality Assurance",
      "Results Delivery"
    ],
    color: "secondary",
    description: "Business leadership and project management"
  },
  {
    title: "Marketing & Communication",
    icon: Phone,
    skills: [
      "Telecall & Telemarketing",
      "Social Media Advertising",
      "Lead Generation",
      "Conversion Optimization",
      "Brand Strategy",
      "Customer Engagement",
      "Campaign Management"
    ],
    color: "accent",
    description: "Advanced marketing and communication strategies"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-center mb-16 text-glow">
          Technical Expertise
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <div className={`inline-flex p-4 rounded-full mb-4 relative ${
                    category.color === 'primary' ? 'bg-primary/20' :
                    category.color === 'secondary' ? 'bg-secondary/20' :
                    'bg-accent/20'
                  }`}>
                    <div className="absolute inset-0 rounded-full animate-ping opacity-20 bg-current"></div>
                    <IconComponent 
                      className={`w-8 h-8 relative z-10 ${
                        category.color === 'primary' ? 'text-primary' :
                        category.color === 'secondary' ? 'text-secondary' :
                        'text-accent'
                      } group-hover:animate-pulse`}
                    />
                  </div>
                  <h3 className="font-orbitron text-xl font-bold mb-2">
                    {category.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {category.description}
                  </p>
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