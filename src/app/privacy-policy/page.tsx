import React from 'react';
import type { Metadata } from 'next';
import SubpageNavbar from '@/components/SubpageNavbar';
import SubpageFooter from '@/components/SubpageFooter';
import { Shield, Lock, FileText, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | AAIIRA MARBLES — Natural Stone & Client Confidentiality',
  description:
    'Privacy Policy of Aaiira Marbles Private Limited. Details on how we protect client data, architectural drawings, project confidentiality, and digital privacy.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0c] text-secondary flex flex-col justify-between selection:bg-white selection:text-black">
      <SubpageNavbar currentPage="Privacy Policy" />

      <main className="pt-28 pb-20 px-6 sm:px-12 md:px-20 lg:px-28 max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4 border-b border-white/10 pb-8">
          <div className="inline-flex items-center gap-2 text-xs font-extended tracking-[0.25em] uppercase text-secondary/40">
            <Shield className="w-3.5 h-3.5 text-white/80" />
            <span>LEGAL & COMPLIANCE • LAST UPDATED NOVEMBER 2026</span>
          </div>
          <h1 className="font-extended text-3xl sm:text-5xl md:text-6xl font-light uppercase tracking-tight text-white leading-tight">
            PRIVACY POLICY
          </h1>
          <p className="font-sans text-xs sm:text-sm text-secondary/60 font-light max-w-2xl leading-relaxed">
            Aaiira Marbles Private Limited (&quot;Aaiira Marbles&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to
            protecting the privacy, discretion, and confidential architectural data of our clients, architects,
            and website visitors.
          </p>
        </div>

        {/* Legal Body Sections */}
        <div className="space-y-10 font-sans text-xs sm:text-sm text-secondary/70 font-light leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="font-extended text-base sm:text-lg uppercase tracking-wider text-white flex items-center gap-2">
              <span className="text-secondary/40 font-mono text-xs">01.</span>
              <span>Corporate Identity & Scope</span>
            </h2>
            <p>
              This Privacy Policy governs the collection, processing, and protection of personal and proprietary
              information gathered through our website (<strong className="text-white">aaiiramarbles.com</strong>),
              direct correspondence, private showroom consultations, sample dispatch requests, and contractual
              stone supply agreements managed by:
            </p>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-1 text-xs">
              <p className="text-white font-extended tracking-wider uppercase">Aaiira Marbles Private Limited</p>
              <p>CIN: U45309MH2018PTC317009</p>
              <p>Registered Office: 402, B-Wing, Oshiwara Vaibhav Palace CHSL, Code No. 180, New Link Road, Oshiwara, Jogeshwari West, Mumbai 400102, Maharashtra, India.</p>
              <p>Direct Inquiries: aaiiramarbles@gmail.com | +91 97690 21534</p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="font-extended text-base sm:text-lg uppercase tracking-wider text-white flex items-center gap-2">
              <span className="text-secondary/40 font-mono text-xs">02.</span>
              <span>Information We Collect</span>
            </h2>
            <p>
              Depending on your interactions with our atelier, we may collect the following categories of information:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-white">Client & Contact Identification:</strong> Name, professional title,
                architectural firm name, email address, telephone number, and physical billing/delivery address.
              </li>
              <li>
                <strong className="text-white">Architectural Project Specifications:</strong> Blueprints, CAD/BIM drawings,
                stone quantity schedules, slab cutting lists, dry-lay configurations, and site crane access specifications.
              </li>
              <li>
                <strong className="text-white">Commercial & Transactional Data:</strong> Quarry block reservation deposits,
                invoicing records, customs export declarations, and shipping bills.
              </li>
              <li>
                <strong className="text-white">Technical Device & Interactive Telemetry:</strong> Anonymized browser type,
                screen resolution, WebGL performance data (for smooth 3D stone monolith interaction), and access timestamps.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="font-extended text-base sm:text-lg uppercase tracking-wider text-white flex items-center gap-2">
              <span className="text-secondary/40 font-mono text-xs">03.</span>
              <span>Client Non-Disclosure & Project Discretion</span>
            </h2>
            <p>
              Aaiira Marbles regularly executes commissions for high-profile private residences, presidential estates,
              diplomatic missions, and private superyachts. We treat all floor plans, structural layouts, and client
              identities with uncompromising confidentiality. We execute formal Non-Disclosure Agreements (NDAs)
              upon request and never publish site installation photography without explicit written authorization.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="font-extended text-base sm:text-lg uppercase tracking-wider text-white flex items-center gap-2">
              <span className="text-secondary/40 font-mono text-xs">04.</span>
              <span>Purpose & Legal Basis of Processing</span>
            </h2>
            <p>We process your information strictly for legitimate commercial and contractual purposes:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Fulfilling stone procurement, bookmatching, 5-axis fabrication, and delivery commitments.</li>
              <li>Providing customized quarry block availability schedules and physical sample delivery.</li>
              <li>Issuing tax invoices, complying with Indian GST regulations, and international export compliances.</li>
              <li>Maintaining and optimizing high-performance 165Hz interactive 3D WebGL experiences on our digital platform.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="font-extended text-base sm:text-lg uppercase tracking-wider text-white flex items-center gap-2">
              <span className="text-secondary/40 font-mono text-xs">05.</span>
              <span>Cookies & WebGL Optimization</span>
            </h2>
            <p>
              Our website uses essential performance cookies to ensure fluid momentum scrolling and WebGL rendering.
              We do not sell, rent, or trade your personal information to third-party data brokers or advertising networks.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="font-extended text-base sm:text-lg uppercase tracking-wider text-white flex items-center gap-2">
              <span className="text-secondary/40 font-mono text-xs">06.</span>
              <span>Your Statutory Rights</span>
            </h2>
            <p>
              In accordance with India’s Digital Personal Data Protection Act (DPDP) and relevant global standards
              including the European General Data Protection Regulation (GDPR) for our international clientele, you hold
              the right to access, rectify, or request erasure of your personal data. Requests can be submitted directly
              to our grievance desk.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="font-extended text-base sm:text-lg uppercase tracking-wider text-white flex items-center gap-2">
              <span className="text-secondary/40 font-mono text-xs">07.</span>
              <span>Grievance Officer & Inquiries</span>
            </h2>
            <p>
              For privacy inquiries, data deletion requests, or formal NDA documentation, please contact our designated
              Grievance Officer:
            </p>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-1 text-xs">
              <p className="text-white font-medium">Compliance & Data Privacy Desk</p>
              <p>Aaiira Marbles Private Limited</p>
              <p>Email: <a href="mailto:aaiiramarbles@gmail.com" className="text-white underline">aaiiramarbles@gmail.com</a></p>
              <p>Phone: <a href="tel:09769021534" className="text-white underline">097690 21534</a> / +91 97690 21534</p>
              <p>Office: Oshiwara, New Link Road, Jogeshwari West, Mumbai 400102, Maharashtra, India.</p>
            </div>
          </section>
        </div>
      </main>

      <SubpageFooter />
    </div>
  );
}
