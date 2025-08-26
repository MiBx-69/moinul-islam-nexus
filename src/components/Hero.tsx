import { Button } from "@/components/ui/button";
import { Download, Rocket } from "lucide-react";

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
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-hero">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        </div>
        
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="font-orbitron text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-glow">
          M. Moinul Islam
        </h1>
        
        <p className="font-orbitron text-xl md:text-2xl mb-4 text-primary-glow">
          SEO Specialist, Developer & Futuristic Digital Marketer
        </p>
        
        <h2 className="text-lg md:text-xl mb-8 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          "Founder of MiBrand & MiBx — helping businesses grow with SEO, automation, and futuristic digital strategies."
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={scrollToPortfolio}
            variant="default"
            size="lg"
            className="group relative overflow-hidden neon-border animate-glow-pulse font-orbitron"
          >
            <Rocket className="w-5 h-5 mr-2 transition-transform group-hover:rotate-12" />
            View Portfolio
          </Button>
          
          <Button
            onClick={downloadCV}
            variant="outline"
            size="lg"
            className="group neon-border-secondary font-orbitron hover:bg-secondary/10 transition-all duration-300"
          >
            <Download className="w-5 h-5 mr-2 transition-transform group-hover:translate-y-1" />
            Download CV
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;