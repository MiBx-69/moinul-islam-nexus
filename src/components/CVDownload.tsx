import { Button } from "@/components/ui/button";
import { Download, FileText, Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CVDownload = () => {
  const { toast } = useToast();

  const handleDownload = () => {
    // In a real implementation, this would trigger an actual CV download
    // For demo purposes, we'll show a toast
    toast({
      title: "CV Download Initiated",
      description: "M.MoinulIslam_CV.pdf will be downloaded shortly.",
    });
    
    // Simulate download analytics tracking
    console.log('CV Download Event Tracked');
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="glass-card p-8 md:p-12 rounded-xl neon-border-accent relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-accent/30 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-primary/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          </div>

          <div className="relative z-10">
            {/* Icon */}
            <div className="inline-flex p-6 bg-accent/20 rounded-full mb-6 neon-border-accent">
              <FileText className="w-12 h-12 text-accent animate-pulse" />
            </div>

            {/* Heading */}
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4 text-glow-accent">
              Download My CV
            </h2>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Get instant access to my complete professional profile, including detailed experience, 
              certifications, and portfolio highlights. Perfect for HR teams and potential collaborators.
            </p>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                {
                  icon: Zap,
                  title: "Instant Download",
                  description: "PDF format, optimized for all devices"
                },
                {
                  icon: FileText,
                  title: "Complete Profile",
                  description: "Skills, experience, and achievements"
                },
                {
                  icon: Download,
                  title: "Always Updated",
                  description: "Latest version with recent projects"
                }
              ].map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="text-center">
                    <IconComponent className="w-8 h-8 mx-auto mb-3 text-accent" />
                    <h3 className="font-orbitron font-bold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                );
              })}
            </div>

            {/* Download Button */}
            <Button
              onClick={handleDownload}
              size="lg"
              className="group relative overflow-hidden neon-border-accent animate-glow-pulse font-orbitron text-lg px-8 py-4"
            >
              <Download className="w-6 h-6 mr-3 transition-transform group-hover:translate-y-1" />
              Download CV (PDF)
              
              {/* Button glow effect */}
              <div className="absolute inset-0 bg-gradient-secondary opacity-0 group-hover:opacity-20 transition-opacity"></div>
            </Button>

            <p className="text-xs text-muted-foreground mt-4">
              File: M.MoinulIslam_CV.pdf • Size: ~2MB • Last Updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-8 h-8 border-2 border-accent/30 rounded-full"></div>
          <div className="absolute -bottom-4 -left-4 w-6 h-6 border-2 border-primary/30 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default CVDownload;