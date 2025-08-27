import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send, Terminal, MapPin, Clock, Github, Linkedin, MessageCircle, Facebook } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

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
    
    try {
      // EmailJS configuration - Replace with your actual service ID, template ID, and public key
      await emailjs.send(
        'service_mibrand', // Replace with your EmailJS service ID
        'template_portfolio', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Moinul Islam',
          to_email: 'Moinul@mibrand.agency'
        },
        'public_key_mibrand' // Replace with your EmailJS public key
      );

      toast({
        title: "Message Transmitted Successfully",
        description: "Your message has been sent via EmailJS. I'll get back to you soon!",
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Transmission Failed",
        description: "Failed to send message. Please try again or contact directly at Moinul@mibrand.agency",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-center mb-16 text-glow">
          Initiate Contact
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            {/* Email */}
            <div className="glass-card p-6 rounded-xl hover:scale-105 transition-transform">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg bg-primary/20">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-orbitron font-bold text-glow-secondary">Email</h4>
                  <a href="mailto:Moinul@mibrand.agency" className="text-muted-foreground hover:text-primary transition-colors">
                    Moinul@mibrand.agency
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="glass-card p-6 rounded-xl hover:scale-105 transition-transform">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg bg-secondary/20">
                  <MessageCircle className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-orbitron font-bold text-glow-accent">WhatsApp</h4>
                  <a 
                    href="https://wa.me/+8801605956421?text=Hello%20Moinul!%20I%20came%20from%20your%20portfolio%20website%20and%20would%20like%20to%20discuss%20a%20project%20with%20you."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-secondary transition-colors"
                  >
                    +880 1605-956421
                  </a>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="glass-card p-6 rounded-xl hover:scale-105 transition-transform">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg bg-accent/20">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-orbitron font-bold text-glow">Location</h4>
                  <p className="text-muted-foreground">Bangladesh (Working Globally)</p>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="glass-card p-6 rounded-xl hover:scale-105 transition-transform">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg bg-primary/20">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-orbitron font-bold text-glow-secondary">Availability</h4>
                  <p className="text-muted-foreground">24/7 Support Available</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card p-6 rounded-xl">
              <h4 className="font-orbitron font-bold text-glow-secondary mb-4">Connect with Me</h4>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://github.com/mibx-69"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 p-3 rounded-lg bg-primary/20 hover:bg-primary/30 transition-colors group"
                >
                  <Github className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">GitHub</span>
                </a>
                <a
                  href="https://facebook.com/m.moinul69"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 p-3 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-colors group"
                >
                  <Facebook className="w-5 h-5 text-secondary group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">Facebook</span>
                </a>
                <a
                  href="https://linkedin.com/in/moinulislam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 p-3 rounded-lg bg-accent/20 hover:bg-accent/30 transition-colors group"
                >
                  <Linkedin className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
                <a
                  href="https://wa.me/+8801605956421?text=Hello%20Moinul!%20I%20came%20from%20your%20portfolio%20website."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 p-3 rounded-lg bg-primary/20 hover:bg-primary/30 transition-colors group"
                >
                  <MessageCircle className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">WhatsApp</span>
                </a>
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