import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const TermsOfService = () => {
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
            Terms of Service
          </h1>
          <p className="text-muted-foreground">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Content */}
        <div className="glass-card p-8 rounded-xl space-y-8">
          <section>
            <h2 className="font-orbitron text-2xl font-bold text-glow-secondary mb-4">
              Agreement to Terms
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section>
            <h2 className="font-orbitron text-2xl font-bold text-glow-secondary mb-4">
              Use License
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Permission is granted to temporarily download one copy of the materials on MiBrand Agency's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
            </ul>
          </section>

          <section>
            <h2 className="font-orbitron text-2xl font-bold text-glow-secondary mb-4">
              Services Description
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              MiBrand Agency provides digital marketing, SEO, web development, and cybersecurity services. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="font-orbitron text-2xl font-bold text-glow-secondary mb-4">
              User Responsibilities
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              As a user of our services, you agree to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Provide accurate and complete information</li>
              <li>Use our services only for lawful purposes</li>
              <li>Respect intellectual property rights</li>
              <li>Not engage in any activity that could harm our systems or other users</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="font-orbitron text-2xl font-bold text-glow-secondary mb-4">
              Payment Terms
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Payment terms for our services will be specified in individual service agreements. Generally, payments are due within 30 days of invoice date unless otherwise specified. Late payments may incur additional fees.
            </p>
          </section>

          <section>
            <h2 className="font-orbitron text-2xl font-bold text-glow-secondary mb-4">
              Disclaimer
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The materials on MiBrand Agency's website are provided on an 'as is' basis. MiBrand Agency makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2 className="font-orbitron text-2xl font-bold text-glow-secondary mb-4">
              Limitations
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              In no event shall MiBrand Agency or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website, even if MiBrand Agency or its authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section>
            <h2 className="font-orbitron text-2xl font-bold text-glow-secondary mb-4">
              Revisions and Errata
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The materials appearing on MiBrand Agency's website could include technical, typographical, or photographic errors. MiBrand Agency does not warrant that any of the materials on its website are accurate, complete, or current.
            </p>
          </section>

          <section>
            <h2 className="font-orbitron text-2xl font-bold text-glow-secondary mb-4">
              Governing Law
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              These terms and conditions are governed by and construed in accordance with the laws of Bangladesh and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>

          <section>
            <h2 className="font-orbitron text-2xl font-bold text-glow-secondary mb-4">
              Contact Information
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-primary/10 rounded-lg border border-primary/20">
              <p className="text-primary font-medium">Email: Moinul@mibrand.agency</p>
              <p className="text-muted-foreground">MiBrand Agency</p>
              <p className="text-muted-foreground">Bangladesh</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;