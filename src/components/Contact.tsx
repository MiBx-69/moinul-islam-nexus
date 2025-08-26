import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send, Terminal } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Transmitted Successfully",
        description: "Your message has been sent. I'll get back to you soon!",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-center mb-16 text-glow">
          Initiate Contact
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass-card p-6 rounded-xl">
              <h3 className="font-orbitron text-2xl font-bold mb-6 text-glow-secondary">
                Get In Touch
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                Ready to scale your business with cutting-edge SEO strategies and futuristic digital solutions? 
                Let's discuss how I can help you dominate your market.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">moinul@mibrand.com</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Terminal className="w-5 h-5 text-secondary" />
                  <span className="text-muted-foreground">Available for consultation</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card p-6 rounded-xl">
              <h4 className="font-orbitron text-lg font-bold mb-4 text-glow-accent">
                Connect With Me
              </h4>
              <div className="flex space-x-4">
                {[
                  { name: 'LinkedIn', url: '#' },
                  { name: 'GitHub', url: '#' },
                  { name: 'Twitter', url: '#' }
                ].map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="neon-border-secondary hover:bg-secondary/10"
                    onClick={() => window.open(social.url, '_blank')}
                  >
                    {social.name}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-6 rounded-xl neon-border">
            {/* Console-style header */}
            <div className="flex items-center space-x-2 mb-6 pb-4 border-b border-primary/20">
              <Terminal className="w-5 h-5 text-primary" />
              <span className="font-orbitron text-primary">contact_form.exe</span>
              <div className="flex space-x-1 ml-auto">
                <div className="w-3 h-3 rounded-full bg-destructive"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-primary">
                  {'> '} Name
                </label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="bg-background/50 border-primary/30 focus:border-primary"
                  placeholder="Enter your name..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-primary">
                  {'> '} Email
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="bg-background/50 border-primary/30 focus:border-primary"
                  placeholder="Enter your email..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-primary">
                  {'> '} Message
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="bg-background/50 border-primary/30 focus:border-primary resize-none"
                  placeholder="Enter your message..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full neon-border animate-glow-pulse font-orbitron group"
              >
                {isSubmitting ? (
                  <>
                    <Terminal className="w-5 h-5 mr-2 animate-spin" />
                    Transmitting...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2 transition-transform group-hover:translate-x-1" />
                    Send Transmission
                  </>
                )}
              </Button>
            </form>

            {/* Console output simulation */}
            <div className="mt-6 p-4 bg-background/30 rounded border border-primary/20">
              <div className="text-xs text-primary font-mono">
                {'> '} System ready for incoming transmission...
              </div>
              <div className="text-xs text-muted-foreground font-mono">
                {'> '} Secure connection established
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;