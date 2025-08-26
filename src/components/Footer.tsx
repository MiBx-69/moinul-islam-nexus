import { Terminal } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-primary/20">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Terminal className="w-6 h-6 text-primary" />
              <span className="font-orbitron text-xl font-bold text-glow">M. Moinul Islam</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              SEO Specialist, Developer & Futuristic Digital Marketer. 
              Founder of MiBrand & MiBx, helping businesses grow with cutting-edge digital strategies.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-orbitron font-bold mb-4 text-glow-secondary">Services</h4>
            <ul className="space-y-2 text-sm">
              {[
                'Technical SEO',
                'Digital Marketing',
                'Web Development',
                'Automation Solutions',
                'Security Consulting'
              ].map((service, index) => (
                <li key={index} className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
                  <div className="w-1 h-1 bg-primary rounded-full"></div>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Links */}
          <div>
            <h4 className="font-orbitron font-bold mb-4 text-glow-accent">Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'Privacy Policy', href: '/privacy-policy' },
                { label: 'Terms of Service', href: '/terms-of-service' },
                { label: 'Sitemap', href: '/sitemap.xml' },
                { label: 'Contact', href: '#contact' }
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-accent transition-colors flex items-center space-x-2"
                    rel={link.href.startsWith('http') ? 'nofollow' : undefined}
                  >
                    <div className="w-1 h-1 bg-accent rounded-full"></div>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground">
                © {currentYear} M. Moinul Islam | SEO Specialist & Developer | 
                <span className="text-primary mx-1">MiBrand</span> & 
                <span className="text-secondary mx-1">MiBx</span>
              </p>
            </div>

            {/* Build Info */}
            <div className="text-center md:text-right">
              <p className="text-xs text-muted-foreground font-mono">
                Built with React + TypeScript • Optimized for SEO • 
                <span className="text-accent"> Futuristic Design</span>
              </p>
            </div>
          </div>
        </div>

        {/* Schema.org Organization Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "MiBrand Agency",
            "founder": {
              "@type": "Person",
              "name": "M. Moinul Islam"
            },
            "description": "Digital marketing agency specializing in SEO, web development, and automation solutions",
            "url": typeof window !== 'undefined' ? window.location.origin : '',
            "sameAs": [
              "https://www.linkedin.com/in/moinulislam",
              "https://github.com/moinulislam"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "Business",
              "email": "moinul@mibrand.com"
            }
          })}
        </script>
      </div>
    </footer>
  );
};

export default Footer;