import { X, ExternalLink, Calendar, Users, Target, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProjectDetailsProps {
  project: {
    title: string;
    website?: string;
    industry: string;
    services: string[];
    description: string;
    coreAreas: {
      title: string;
      description: string;
      outcomes: string[];
    }[];
    growth: string[];
    technologies: string[];
    impact: string[];
  };
  onClose: () => void;
}

const ProjectDetails = ({ project, onClose }: ProjectDetailsProps) => {
  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-lg z-50 flex items-center justify-center p-4">
      <div className="glass-card max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-xl neon-border">
        {/* Header */}
        <div className="sticky top-0 bg-background/95 backdrop-blur-sm p-6 border-b border-primary/20">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-orbitron text-2xl font-bold text-glow">{project.title}</h2>
              {project.website && (
                <a 
                  href={project.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-primary hover:text-primary-glow transition-colors mt-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span className="text-sm">{project.website}</span>
                </a>
              )}
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="hover:bg-destructive/20 hover:text-destructive"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-4">
            <Badge variant="outline" className="border-primary/30 text-primary">
              {project.industry}
            </Badge>
            {project.services.map((service, index) => (
              <Badge key={index} variant="secondary" className="bg-secondary/20 text-secondary border-secondary/30">
                {service}
              </Badge>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Description */}
          <div className="glass-card p-6 rounded-xl">
            <h3 className="font-orbitron text-xl font-bold mb-4 text-glow-secondary flex items-center">
              <Target className="w-5 h-5 mr-2 text-primary" />
              Project Overview
            </h3>
            <p className="text-muted-foreground leading-relaxed">{project.description}</p>
          </div>

          {/* Core Areas */}
          <div className="space-y-6">
            <h3 className="font-orbitron text-xl font-bold text-glow-secondary">Key Focus Areas</h3>
            {project.coreAreas.map((area, index) => (
              <div key={index} className="glass-card p-6 rounded-xl hover:scale-105 transition-all duration-300">
                <h4 className="font-orbitron text-lg font-bold text-primary mb-3">{area.title}</h4>
                <p className="text-muted-foreground mb-4">{area.description}</p>
                <div className="space-y-2">
                  <h5 className="font-semibold text-secondary">Outcomes:</h5>
                  <ul className="space-y-1">
                    {area.outcomes.map((outcome, outIndex) => (
                      <li key={outIndex} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 animate-pulse"></div>
                        <span className="text-sm text-muted-foreground">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Growth & Potential */}
          <div className="glass-card p-6 rounded-xl neon-border-secondary">
            <h3 className="font-orbitron text-xl font-bold mb-4 text-glow-secondary flex items-center">
              <Award className="w-5 h-5 mr-2 text-secondary" />
              Growth & Achievements
            </h3>
            <ul className="space-y-3">
              {project.growth.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 animate-pulse"></div>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="glass-card p-6 rounded-xl">
            <h3 className="font-orbitron text-xl font-bold mb-4 text-glow-accent">Technologies & Tools</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <Badge key={index} variant="outline" className="border-accent/30 text-accent bg-accent/10">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Impact */}
          <div className="glass-card p-6 rounded-xl neon-border-accent">
            <h3 className="font-orbitron text-xl font-bold mb-4 text-glow flex items-center">
              <Users className="w-5 h-5 mr-2 text-accent" />
              Impact & Results
            </h3>
            <ul className="space-y-3">
              {project.impact.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 animate-pulse"></div>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;