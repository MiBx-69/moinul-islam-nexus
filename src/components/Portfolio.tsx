import { useState } from "react";
import { ExternalLink, Globe, Bot, Shield, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import mibrandLogo from "@/assets/mibrand-logo.png";
import midxLogo from "@/assets/midx-logo.png";
import ProjectDetails from "./ProjectDetails";

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
    title: "Telegram & Automation Bots Development",
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

const projectDetails = {
  "MiBrand SEO Agency": {
    title: "MiBrand SEO Agency",
    website: "https://mibrand.agency",
    industry: "Digital Marketing & SEO",
    services: ["SEO", "Social Media Marketing", "Digital Strategy", "Brand Growth"],
    description: "MiBrand SEO Agency is a full-service digital marketing and SEO agency I founded to help businesses amplify their online presence, increase visibility, and achieve measurable growth. Over the course of this project, I personally led strategy development, implementation, and performance analysis, demonstrating my capability to build and scale a professional digital brand from the ground up.",
    coreAreas: [
      {
        title: "Search Engine Optimization (SEO)",
        description: "Implemented advanced on-page and off-page SEO strategies tailored to each client's niche.",
        outcomes: [
          "Performed in-depth keyword research and competitive analysis to identify high-impact opportunities",
          "Optimized website structure, metadata, content, and technical SEO to improve organic rankings",
          "Clients achieved consistent improvements in Google rankings, with some seeing up to 200% growth in organic traffic over a 6–12 month period"
        ]
      },
      {
        title: "Digital Marketing & Brand Growth",
        description: "Designed and executed social media campaigns across platforms like Facebook, Instagram, LinkedIn, and TikTok.",
        outcomes: [
          "Managed paid advertising campaigns with measurable ROI, including retargeting strategies and conversion optimization",
          "Developed content strategies aligned with brand messaging to build authority and trust",
          "Increased client social engagement by 150%+, while driving significant growth in leads and sales"
        ]
      },
      {
        title: "Strategic Business Development & Analytics",
        description: "Monitored performance using tools like Google Analytics, Search Console, SEMrush, and Ahrefs.",
        outcomes: [
          "Generated actionable insights for clients, improving campaign efficiency and ROI",
          "Scaled internal processes to handle multiple clients simultaneously while maintaining high-quality results"
        ]
      }
    ],
    growth: [
      "Build a professional agency from scratch with measurable business outcomes",
      "Deliver real, quantifiable growth for clients through strategic digital marketing and SEO",
      "Develop leadership, project management, and technical skills, including advanced SEO, analytics, and marketing automation",
      "Adapt strategies to different industries, proving versatility and problem-solving skills"
    ],
    technologies: [
      "SEMrush", "Ahrefs", "Moz", "Google Search Console", "Google Analytics", "Data Studio", 
      "Excel/Sheets", "WordPress", "Shopify", "WooCommerce", "Meta Business Suite", "Buffer", 
      "Hootsuite", "Canva", "Grammarly", "AI tools for content optimization"
    ],
    impact: [
      "MiBrand SEO Agency has helped businesses grow their digital presence, increase traffic, improve lead generation, and enhance brand authority",
      "This project demonstrates technical expertise in SEO and digital marketing",
      "Highlights strategic thinking, leadership, and ability to deliver results that matter"
    ]
  },
  "Telegram & Automation Bots Development": {
    title: "Telegram & Automation Bots Development",
    industry: "Software Development / Automation / Digital Solutions",
    services: ["Bot Development", "Automation", "AI Integration", "Workflow Optimization"],
    description: "I develop high-performance Telegram bots and automation systems designed to streamline workflows, enhance user engagement, and deliver scalable digital solutions. These bots are engineered for reliability, speed, and security, leveraging Python, Telethon, and other advanced tools to automate tasks, manage accounts, and provide custom solutions for businesses and personal projects.",
    coreAreas: [
      {
        title: "Telegram Automation Bots",
        description: "Bots capable of automating repetitive tasks like messaging, notifications, content distribution, and session management.",
        outcomes: [
          "Integration with Telegram API for advanced functionalities, including channel/group management and user engagement tracking",
          "Intelligent workflows that allow bots to respond dynamically based on user actions and triggers"
        ]
      },
      {
        title: "Account & Session Management",
        description: "Automation of Telegram account login with OTP verification and 2FA setup.",
        outcomes: [
          "Session file creation and management for multiple accounts securely",
          "Anti-spam and device check mechanisms to maintain account safety and reliability"
        ]
      },
      {
        title: "Admin & User Panels",
        description: "Three-panel admin dashboards for monitoring bot activity, user management, and data analytics.",
        outcomes: [
          "Real-time updates on user interactions, session statuses, and task progress",
          "Customizable settings for pricing, limits, country restrictions, and bot features"
        ]
      },
      {
        title: "High-Performance & Scalable Automation",
        description: "Capable of handling hundreds to thousands of operations per second.",
        outcomes: [
          "Optimized error handling, logging, and process monitoring for uninterrupted operation",
          "Scalable architecture to support growth and new features without downtime"
        ]
      }
    ],
    growth: [
      "Created efficient, reliable, and intelligent automation systems that save time and increase productivity",
      "Demonstrated ability to handle complex workflows and design scalable digital solutions",
      "Showcased technical expertise, problem-solving skills, and delivery of real-world value"
    ],
    technologies: [
      "Python (Telethon, Pyrogram)", "PostgreSQL / MySQL", "API Integration (Telegram, other web services)",
      "Automation & Task Scheduling (Celery, Cron Jobs)", "Cloud Deployment & Scalability (Heroku, Railway, AWS)"
    ],
    impact: [
      "Streamlined business processes through intelligent automation",
      "Reduced manual workload by up to 80% for clients",
      "Delivered scalable solutions that grow with business needs"
    ]
  },
  "MiBx Security Solutions": {
    title: "MiBx Security Solutions",
    industry: "Cybersecurity / IT Security",
    services: ["Security Audits", "Ethical Hacking", "Vulnerability Assessment", "Penetration Testing"],
    description: "MiBx Security Solutions is a specialized cybersecurity initiative under my brand, focused on providing advanced digital security services for businesses and individuals. The project demonstrates my expertise in identifying vulnerabilities, preventing cyber threats, and implementing robust security measures to protect sensitive data and digital assets.",
    coreAreas: [
      {
        title: "Ethical Hacking & Penetration Testing",
        description: "Conducting controlled ethical hacking to identify system vulnerabilities.",
        outcomes: [
          "Simulating real-world attacks to strengthen system defenses",
          "Providing actionable recommendations to mitigate risks"
        ]
      },
      {
        title: "Security Audits & Vulnerability Assessment",
        description: "Comprehensive analysis of networks, applications, and systems.",
        outcomes: [
          "Identifying potential weaknesses in infrastructure and processes",
          "Ensuring compliance with cybersecurity standards and best practices"
        ]
      },
      {
        title: "Digital Threat Protection",
        description: "Implementing firewall configurations, intrusion detection, and monitoring systems.",
        outcomes: [
          "Protecting sensitive data from unauthorized access, breaches, and leaks",
          "Continuous monitoring to prevent emerging threats"
        ]
      }
    ],
    growth: [
      "Designed and implemented professional cybersecurity strategies",
      "Demonstrated technical expertise and analytical thinking",
      "Showcased commitment to safeguarding digital systems"
    ],
    technologies: [
      "Kali Linux", "Wireshark", "Nmap", "Metasploit", "Burp Suite", "OWASP Tools",
      "Custom Python scripts for automation and monitoring", "Cloud & network security solutions"
    ],
    impact: [
      "Protected client systems from potential security breaches",
      "Improved overall security posture for businesses",
      "Delivered high-value security solutions combining technical skills with strategic planning"
    ]
  },
  "Custom SEO Growth Projects": {
    title: "Custom SEO Growth Projects",
    industry: "Digital Marketing / SEO",
    services: ["SEO Strategy", "Organic Traffic Growth", "Content Optimization", "Conversion Optimization"],
    description: "Custom SEO Growth Projects showcase my ability to design and implement tailored SEO strategies that deliver measurable growth for businesses. Each project is customized to the client's goals, industry, and target audience, emphasizing real results through data-driven techniques.",
    coreAreas: [
      {
        title: "Comprehensive SEO Strategy",
        description: "Conducting deep keyword research and competitor analysis to identify growth opportunities.",
        outcomes: [
          "Developing personalized on-page, off-page, and technical SEO plans",
          "Crafting optimized content strategies aligned with brand messaging"
        ]
      },
      {
        title: "Organic Traffic & Ranking Growth",
        description: "Implementing strategies that improve Google search rankings for high-value keywords.",
        outcomes: [
          "Monitoring analytics and search console metrics to adjust campaigns in real-time",
          "Many clients experienced 50–200% growth in organic traffic within months"
        ]
      },
      {
        title: "Conversion & Engagement Optimization",
        description: "Enhancing website UX/UI and content structure to boost conversions.",
        outcomes: [
          "Implementing tracking and analytics to monitor user behavior and campaign performance",
          "Integrating SEO with social media and marketing campaigns for maximum impact"
        ]
      }
    ],
    growth: [
      "Delivered measurable SEO results and improved brand visibility",
      "Grew client businesses online through strategic thinking and technical expertise",
      "Demonstrated results-driven approach with quantifiable outcomes"
    ],
    technologies: [
      "Google Analytics", "Search Console", "Google Data Studio", "SEMrush", "Ahrefs", "Moz",
      "WordPress", "Shopify", "WooCommerce", "Grammarly", "Canva", "AI-powered SEO tools"
    ],
    impact: [
      "Consistently delivered 50-200% growth in organic traffic for clients",
      "Improved search rankings for competitive keywords",
      "Enhanced overall digital presence and brand authority"
    ]
  }
};

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
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
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProject(project.title);
                  }}
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

      {/* Project Details Modal */}
      {selectedProject && projectDetails[selectedProject as keyof typeof projectDetails] && (
        <ProjectDetails
          project={projectDetails[selectedProject as keyof typeof projectDetails]}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Portfolio;