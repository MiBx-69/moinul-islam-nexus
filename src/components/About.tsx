import profilePhoto from "@/assets/profile-photo.png";

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-center mb-16 text-glow">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-xl opacity-30 animate-glow-pulse"></div>
              <img
                src={profilePhoto}
                alt="M. Moinul Islam - SEO Specialist and Developer"
                className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full neon-border"
                loading="lazy"
              />
            </div>
          </div>

          {/* Bio */}
          <div className="glass-card p-8 rounded-xl">
            <h3 className="font-orbitron text-2xl font-bold mb-6 text-glow-secondary">
              Digital Innovator & SEO Specialist
            </h3>
            
            <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
              Hello! I'm <strong className="text-primary">Moinul Islam</strong>, a Digital Marketing Specialist, SEO Expert, Web Developer, and Cybersecurity Professional based in Bangladesh. Over the past three years, I have built a strong career dedicated to helping businesses grow online while mastering SEO, digital marketing, web development, automation, and cybersecurity.
            </p>
            
            <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
              I am the Founder of <strong className="text-secondary">MiBrand Agency</strong>, a results-driven digital marketing agency delivering SEO, content strategy, social media marketing, and business growth solutions to clients both locally and internationally. I am actively involved in technology-driven projects, automation tools, and cybersecurity solutions, applying my skills across a wide range of industries.
            </p>

            <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
              I am open to job opportunities, collaborations, and freelance projects worldwide, where I can leverage my expertise to help companies grow, optimize their digital presence, and strengthen their technology systems.
            </p>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span>3+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                <span>MiBrand Agency Founder</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                <span>SEO & Digital Marketing</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span>Cybersecurity Expert</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                <span>Web Development</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                <span>Automation Specialist</span>
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