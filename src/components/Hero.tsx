import { Button } from "@/components/ui/button";
import { Download, Rocket, Code, Zap, Shield } from "lucide-react";

const Hero = () => {
  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadCV = () => {
    // In a real implementation, this would trigger a download
    // For now, we'll just show an alert
    alert('CV download would trigger here');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Cyberpunk Background */}
      <div className="absolute inset-0 bg-gradient-hero">
        {/* Floating orbs with enhanced animations */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/30 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-secondary/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-32 h-32 bg-accent/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
          <div className="absolute top-1/2 right-1/3 w-40 h-40 bg-primary/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '6s' }}></div>
        </div>
        
        {/* Enhanced grid overlay with glitch effect */}
        <div className="absolute inset-0 opacity-15 animate-glitch" style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>

        {/* Diagonal cyberpunk lines */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `
              linear-gradient(45deg, transparent 40%, hsl(var(--primary))/20 50%, transparent 60%),
              linear-gradient(-45deg, transparent 40%, hsl(var(--secondary))/20 50%, transparent 60%)
            `,
            backgroundSize: '200px 200px',
            animation: 'slide 20s linear infinite'
          }}></div>
        </div>

        {/* Enhanced particle effect overlay */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Futuristic illustrations */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-primary rounded-full animate-spin-slow"></div>
          <div className="absolute top-20 right-20 w-24 h-24 border border-secondary rounded-lg rotate-45 animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-16 h-16 bg-accent/20 rounded-full animate-bounce"></div>
          <div className="absolute bottom-10 right-10 w-20 h-20 border-t-2 border-l-2 border-primary rounded-tl-full animate-ping"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Enhanced Header with Glitch Animation */}
        <div className="mb-8">
          <h1 className="font-orbitron text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-glow animate-glitch-text">
            Moinul Islam
          </h1>
          
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary text-sm font-medium animate-pulse">
              <Code className="w-4 h-4 mr-2" />
              SEO Specialist
            </span>
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/20 border border-secondary/30 text-secondary text-sm font-medium animate-pulse" style={{ animationDelay: '0.5s' }}>
              <Zap className="w-4 h-4 mr-2" />
              Web Developer
            </span>
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-accent/20 border border-accent/30 text-accent text-sm font-medium animate-pulse" style={{ animationDelay: '1s' }}>
              <Shield className="w-4 h-4 mr-2" />
              Cybersecurity Expert
            </span>
          </div>
        </div>
        
        <p className="font-orbitron text-xl md:text-2xl mb-4 text-primary-glow">
          Digital Marketing Expert & Futuristic Technology Innovator
        </p>
        
        <h2 className="text-lg md:text-xl mb-8 text-muted-foreground max-w-4xl mx-auto leading-relaxed">
          "Founder of MiBrand Agency — Delivering SEO, digital marketing, web development, and cybersecurity solutions to businesses worldwide. Based in Bangladesh, working globally."
        </h2>

        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            onClick={scrollToPortfolio}
            variant="default"
            size="lg"
            className="group relative overflow-hidden neon-border animate-glow-pulse font-orbitron px-8 py-4"
          >
            <Rocket className="w-5 h-5 mr-2 transition-transform group-hover:rotate-12" />
            Explore Portfolio
            <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity"></div>
          </Button>
          
          <Button
            onClick={downloadCV}
            variant="outline"
            size="lg"
            className="group neon-border-secondary font-orbitron hover:bg-secondary/10 transition-all duration-300 px-8 py-4"
          >
            <Download className="w-5 h-5 mr-2 transition-transform group-hover:translate-y-1" />
            Download CV
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          {[
            { number: "3+", label: "Years Experience" },
            { number: "50+", label: "Projects Completed" },
            { number: "100%", label: "Client Satisfaction" },
            { number: "24/7", label: "Support Available" }
          ].map((stat, index) => (
            <div key={index} className="glass-card p-4 rounded-lg text-center hover:scale-105 transition-transform">
              <div className="font-orbitron text-2xl font-bold text-glow mb-1">
                {stat.number}
              </div>
              <div className="text-xs text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced scroll indicator with smooth scrolling */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer group"
        onClick={() => {
          const aboutSection = document.getElementById('about');
          if (aboutSection) {
            aboutSection.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
          }
        }}
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center backdrop-blur-sm bg-background/10 group-hover:border-primary-glow transition-colors">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse group-hover:bg-primary-glow"></div>
        </div>
        <p className="text-xs text-muted-foreground mt-2 text-center opacity-0 group-hover:opacity-100 transition-opacity">
          Scroll to explore
        </p>
      </div>
    </section>
  );
};

export default Hero;