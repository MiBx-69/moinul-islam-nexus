import profilePhoto from "@/assets/profile-photo.png";
import { User, Briefcase, Globe, Target, Rocket, Star } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden">
      {/* Enhanced Cyberpunk Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, hsl(var(--primary))/20 2px, transparent 2px),
            radial-gradient(circle at 75% 75%, hsl(var(--secondary))/20 2px, transparent 2px)
          `,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-center mb-16 text-glow">
          About Me
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Photo Section */}
          <div className="flex justify-center lg:justify-end order-2 lg:order-1">
            <div className="relative group">
              {/* Multiple glow layers for depth */}
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-20 animate-glow-pulse group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-secondary rounded-full blur-xl opacity-15 animate-glow-pulse" style={{ animationDelay: '1s' }}></div>
              
              {/* Rotating cyberpunk ring */}
              <div className="absolute -inset-4 rounded-full border-2 border-primary/30 animate-spin-slow"></div>
              <div className="absolute -inset-8 rounded-full border border-secondary/20 animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>
              
              {/* Profile image */}
              <img
                src={profilePhoto}
                alt="M. Moinul Islam - Digital Marketing Specialist, SEO Expert, and Cybersecurity Professional"
                className="relative w-72 h-72 md:w-96 md:h-96 object-cover rounded-full neon-border group-hover:scale-105 transition-all duration-500"
                loading="lazy"
              />
              
              {/* Floating stats around image */}
              <div className="absolute -top-4 -right-4 glass-card p-3 rounded-lg animate-float">
                <div className="text-primary font-orbitron font-bold text-sm">3+ Years</div>
                <div className="text-xs text-muted-foreground">Experience</div>
              </div>
              <div className="absolute -bottom-4 -left-4 glass-card p-3 rounded-lg animate-float" style={{ animationDelay: '2s' }}>
                <div className="text-secondary font-orbitron font-bold text-sm">50+ Projects</div>
                <div className="text-xs text-muted-foreground">Completed</div>
              </div>
            </div>
          </div>

          {/* Enhanced Bio Section */}
          <div className="space-y-8 order-1 lg:order-2">
            {/* Main title with animated background */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-xl blur-xl"></div>
              <div className="relative glass-card p-6 rounded-xl neon-border">
                <div className="flex items-center space-x-3 mb-4">
                  <User className="w-6 h-6 text-primary animate-pulse" />
                  <h3 className="font-orbitron text-2xl font-bold text-glow-secondary">
                    Digital Innovator & SEO Specialist
                  </h3>
                </div>
                <div className="h-1 w-20 bg-gradient-primary rounded-full"></div>
              </div>
            </div>

            {/* Enhanced description cards */}
            <div className="space-y-6">
              <div className="glass-card p-6 rounded-xl hover:scale-105 transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <Briefcase className="w-6 h-6 text-primary mt-1 group-hover:animate-pulse" />
                  <div>
                    <h4 className="font-orbitron font-bold text-primary mb-2">Professional Background</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Hello! I'm <strong className="text-primary">Moinul Islam</strong>, a Digital Marketing Specialist, SEO Expert, Web Developer, and Cybersecurity Professional based in Bangladesh. Over the past three years, I have built a strong career dedicated to helping businesses grow online while mastering SEO, digital marketing, web development, automation, and cybersecurity.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 rounded-xl hover:scale-105 transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <Rocket className="w-6 h-6 text-secondary mt-1 group-hover:animate-pulse" />
                  <div>
                    <h4 className="font-orbitron font-bold text-secondary mb-2">MiBrand Agency Founder</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      I am the Founder of <strong className="text-secondary">MiBrand Agency</strong>, a results-driven digital marketing agency delivering SEO, content strategy, social media marketing, telecall telemarketing, social media advertising, and business growth solutions to clients both locally and internationally. I am actively involved in technology-driven projects, automation tools, and cybersecurity solutions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 rounded-xl hover:scale-105 transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <Globe className="w-6 h-6 text-accent mt-1 group-hover:animate-pulse" />
                  <div>
                    <h4 className="font-orbitron font-bold text-accent mb-2">Global Opportunities</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      I am open to job opportunities, collaborations, and freelance projects worldwide, where I can leverage my expertise to help companies grow, optimize their digital presence, and strengthen their technology systems with innovative solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced expertise grid */}
            <div className="glass-card p-6 rounded-xl neon-border-accent">
              <div className="flex items-center space-x-3 mb-6">
                <Target className="w-6 h-6 text-accent animate-pulse" />
                <h4 className="font-orbitron font-bold text-accent">Core Expertise</h4>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "3+ Years Experience", icon: "🚀" },
                  { label: "MiBrand Agency Founder", icon: "🏢" },
                  { label: "SEO & Digital Marketing", icon: "📈" },
                  { label: "Cybersecurity Expert", icon: "🛡️" },
                  { label: "Web Development", icon: "💻" },
                  { label: "Automation Specialist", icon: "🤖" },
                  { label: "Telecall & Telemarketing", icon: "📞" },
                  { label: "Social Media Advertising", icon: "📱" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-accent/10 hover:bg-accent/20 transition-colors group">
                    <span className="text-lg group-hover:scale-110 transition-transform">{item.icon}</span>
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Schema.org structured data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "M. Moinul Islam",
          "jobTitle": "SEO Specialist, Developer & Digital Marketer",
          "description": "SEO Specialist, Developer, and Founder of MiBrand Agency with 3+ years of experience in digital marketing, automation, and Linux-based development.",
          "url": window.location.origin,
          "sameAs": [
            "https://www.linkedin.com/in/moinulislam",
            "https://github.com/moinulislam"
          ],
          "worksFor": {
            "@type": "Organization",
            "name": "MiBrand Agency"
          },
          "knowsAbout": [
            "SEO",
            "Digital Marketing", 
            "Web Development",
            "Automation",
            "Ethical Hacking",
            "Linux Systems"
          ]
        })}
      </script>
    </section>
  );
};

export default About;