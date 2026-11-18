import React from 'react';
import type { Metadata } from 'next';
import SubpageNavbar from '@/components/SubpageNavbar';
import SubpageFooter from '@/components/SubpageFooter';
import { Landmark, Building2, FileText, Phone, Mail, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Legal Notice & Impressum | AAIIRA MARBLES — Corporate Disclosures',
  description:
    'Official corporate and legal disclosures for Aaiira Marbles Private Limited. Company registration details, CIN, registered office, and intellectual property statements.',
};

export default function LegalNoticePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0c] text-secondary flex flex-col justify-between selection:bg-white selection:text-black">
      <SubpageNavbar currentPage="Legal Notice" />

      <main className="pt-28 pb-20 px-6 sm:px-12 md:px-20 lg:px-28 max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4 border-b border-white/10 pb-8">
          <div className="inline-flex items-center gap-2 text-xs font-extended tracking-[0.25em] uppercase text-secondary/40">
            <Landmark className="w-3.5 h-3.5 text-white/80" />
            <span>STATUTORY CORPORATE DISCLOSURES • IMPRESSUM</span>
          </div>
          <h1 className="font-extended text-3xl sm:text-5xl md:text-6xl font-light uppercase tracking-tight text-white leading-tight">
            LEGAL NOTICE
          </h1>
          <p className="font-sans text-xs sm:text-sm text-secondary/60 font-light max-w-2xl leading-relaxed">
            Corporate information published in accordance with the Companies Act, 2013 and applicable statutory regulations
            of the Ministry of Corporate Affairs, Republic of India.
          </p>
        </div>

        {/* Legal Grid & Identification */}
        <div className="space-y-10 font-sans text-xs sm:text-sm text-secondary/70 font-light leading-relaxed">
          {/* Corporate Entity Details */}
          <section className="space-y-4">
            <h2 className="font-extended text-base sm:text-lg uppercase tracking-wider text-white flex items-center gap-2">
              <span className="text-secondary/40 font-mono text-xs">01.</span>
              <span>Entity Identification</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-white font-extended text-xs uppercase tracking-wider">
                  <Building2 className="w-4 h-4 text-white/80" />
                  <span>Company Incorporation</span>
                </div>
                <div className="space-y-1.5 text-xs">
                  <p><strong className="text-white">Legal Name:</strong> Aaiira Marbles Private Limited</p>
                  <p><strong className="text-white">Corporate Identity Number (CIN):</strong> U45309MH2018PTC317009</p>
                  <p><strong className="text-white">Heritage Year:</strong> Founded in 2008 (Incorporated 13 Nov 2018)</p>
                  <p><strong className="text-white">Registrar:</strong> RoC - Mumbai, Maharashtra</p>
                  <p><strong className="text-white">Company Category:</strong> Company limited by Shares (Private)</p>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-white font-extended text-xs uppercase tracking-wider">
                  <MapPin className="w-4 h-4 text-white/80" />
                  <span>Registered & Atelier Office</span>
                </div>
                <div className="space-y-1.5 text-xs">
                  <p className="text-white font-medium">Headquarters & Showroom:</p>
                  <p>402, B-Wing, Oshiwara Vaibhav Palace CHSL, Code No. 180 (Opposite Mega Mall), New Link Road, Oshiwara, Jogeshwari West, Mumbai - 400102, Maharashtra, India.</p>
                  <p><strong className="text-white">Email:</strong> aaiiramarbles@gmail.com</p>
                  <p><strong className="text-white">Telephone:</strong> 097690 21534 (+91 97690 21534)</p>
                </div>
              </div>
            </div>
          </section>

          {/* Board of Directors */}
          <section className="space-y-3">
            <h2 className="font-extended text-base sm:text-lg uppercase tracking-wider text-white flex items-center gap-2">
              <span className="text-secondary/40 font-mono text-xs">02.</span>
              <span>Board of Directors</span>
            </h2>
            <p>Aaiira Marbles Private Limited is steered by the following executive directors:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong className="text-white">Akbar Naqvi</strong> — Director (DIN: 08234573)</li>
              <li><strong className="text-white">Shanam Naqvi Akbar</strong> — Director</li>
            </ul>
          </section>

          {/* Intellectual Property Statements */}
          <section className="space-y-3">
            <h2 className="font-extended text-base sm:text-lg uppercase tracking-wider text-white flex items-center gap-2">
              <span className="text-secondary/40 font-mono text-xs">03.</span>
              <span>Intellectual Property, Trademarks & Media</span>
            </h2>
            <p>
              The Aaiira wordmark, the geometric brand monogram seal (&quot;SINCE 2008&quot;), 3D WebGL interactive models,
              custom kinetic animations, code assets, and high-resolution architectural photography displayed across this
              platform are protected under Indian and international copyright and trademark conventions.
            </p>
            <p>
              Any reproduction, modification, distribution, or unauthorized commercial exploitation without prior
              written consent from Aaiira Marbles Private Limited is strictly prohibited.
            </p>
          </section>

          {/* External Links & Content Liability */}
          <section className="space-y-3">
            <h2 className="font-extended text-base sm:text-lg uppercase tracking-wider text-white flex items-center gap-2">
              <span className="text-secondary/40 font-mono text-xs">04.</span>
              <span>External References & Content Liability</span>
            </h2>
            <p>
              While we exercise rigorous diligence in curating digital content, our platform may contain outbound hyperlinks
              to third-party services (e.g. Google Maps, Instagram, LinkedIn). Aaiira Marbles accepts no responsibility
              for the accuracy or privacy practices of external platforms.
            </p>
          </section>
        </div>
      </main>

      <SubpageFooter />
    </div>
  );
}
