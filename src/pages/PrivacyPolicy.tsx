import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background px-6 py-20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Button
            onClick={() => navigate(-1)}
            variant="outline"
            size="sm"
            className="mb-6 neon-border-secondary"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          
          <h1 className="font-orbitron text-3xl md:text-4xl font-bold text-glow mb-4">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Content */}
        <div className="glass-card p-8 rounded-xl space-y-8">
          <section>
            <h2 className="font-orbitron text-2xl font-bold text-glow-secondary mb-4">
              Information We Collect
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              When you visit our website or contact us through our forms, we may collect the following information:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Personal identification information (Name, email address, phone number)</li>
              <li>Technical information (IP address, browser type, device information)</li>
              <li>Usage data (pages visited, time spent on site, referring URLs)</li>
              <li>Communication data (messages sent through contact forms)</li>
            </ul>
          </section>

          <section>
            <h2 className="font-orbitron text-2xl font-bold text-glow-secondary mb-4">
              How We Use Your Information
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use the collected information for the following purposes:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>To respond to your inquiries and provide customer support</li>
              <li>To improve our website and services</li>
              <li>To send promotional emails about our services (with your consent)</li>
              <li>To comply with legal obligations</li>
              <li>To protect against fraudulent or illegal activities</li>
            </ul>
          </section>

          <section>
            <h2 className="font-orbitron text-2xl font-bold text-glow-secondary mb-4">
              Information Sharing
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share your information with trusted service providers who assist us in operating our website and conducting our business, provided they agree to keep this information confidential.
            </p>
          </section>

          <section>
            <h2 className="font-orbitron text-2xl font-bold text-glow-secondary mb-4">
              Data Security
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="font-orbitron text-2xl font-bold text-glow-secondary mb-4">
              Cookies
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Our website may use cookies to enhance your experience. Cookies are small files that a site or its service provider transfers to your computer's hard drive through your web browser. You can choose to disable cookies through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="font-orbitron text-2xl font-bold text-glow-secondary mb-4">
              Your Rights
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Access and receive a copy of your personal data</li>
              <li>Rectify inaccurate personal data</li>
              <li>Request deletion of your personal data</li>
              <li>Object to processing of your personal data</li>
              <li>Request restriction of processing</li>
              <li>Data portability</li>
            </ul>
          </section>

          <section>
            <h2 className="font-orbitron text-2xl font-bold text-glow-secondary mb-4">
              Contact Information
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-primary/10 rounded-lg border border-primary/20">
              <p className="text-primary font-medium">Email: Moinul@mibrand.agency</p>
              <p className="text-muted-foreground">MiBrand Agency</p>
              <p className="text-muted-foreground">Bangladesh</p>
            </div>
          </section>

          <section>
            <h2 className="font-orbitron text-2xl font-bold text-glow-secondary mb-4">
              Changes to This Policy
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "last updated" date at the top of this policy.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;