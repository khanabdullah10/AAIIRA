import React from 'react';
import type { Metadata } from 'next';
import SubpageNavbar from '@/components/SubpageNavbar';
import SubpageFooter from '@/components/SubpageFooter';
import { Scale, FileCheck, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms & Conditions | AAIIRA MARBLES — Natural Stone Supply & Fabrication Terms',
  description:
    'Commercial, procurement, and fabrication terms of Aaiira Marbles Private Limited governing natural stone block supply, bookmatching, and 5-axis precision machining.',
};

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0c] text-secondary flex flex-col justify-between selection:bg-white selection:text-black">
      <SubpageNavbar currentPage="Terms & Conditions" />

      <main className="pt-28 pb-20 px-6 sm:px-12 md:px-20 lg:px-28 max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4 border-b border-white/10 pb-8">
          <div className="inline-flex items-center gap-2 text-xs font-extended tracking-[0.25em] uppercase text-secondary/40">
            <Scale className="w-3.5 h-3.5 text-white/80" />
            <span>COMMERCIAL & FABRICATION PROTOCOLS • EFFECTIVE 2026</span>
          </div>
          <h1 className="font-extended text-3xl sm:text-5xl md:text-6xl font-light uppercase tracking-tight text-white leading-tight">
            TERMS & CONDITIONS
          </h1>
          <p className="font-sans text-xs sm:text-sm text-secondary/60 font-light max-w-2xl leading-relaxed">
            These Terms & Conditions govern all quotations, sample deliveries, quarry block allocations,
            five-axis CNC fabrications, and stone deliveries provided by Aaiira Marbles Private Limited.
          </p>
        </div>

        {/* Legal Body Sections */}
        <div className="space-y-10 font-sans text-xs sm:text-sm text-secondary/70 font-light leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="font-extended text-base sm:text-lg uppercase tracking-wider text-white flex items-center gap-2">
              <span className="text-secondary/40 font-mono text-xs">01.</span>
              <span>Inherent Nature of Geological Stone</span>
            </h2>
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-white font-extended text-xs uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4 text-white/80" />
                <span>Geological Authenticity Notice</span>
              </div>
              <p className="text-secondary/70 text-xs leading-relaxed">
                Natural marble, quartzite, granite, and onyx are products of nature formed over millions of years of
                tectonic metamorphic processes. Naturally occurring geological variations—including tonal gradations,
                vein density, fossilized sediment, calcite fissures, micro-crystalline clustering, and pitting—are
                intrinsic characteristics of authentic natural stone and do not constitute material defects.
              </p>
            </div>
            <p>
              Samples provided are indicative of tone and general character only. No two monolithic slabs are identical;
              variation is the definitive hallmark of authentic geological luxury.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="font-extended text-base sm:text-lg uppercase tracking-wider text-white flex items-center gap-2">
              <span className="text-secondary/40 font-mono text-xs">02.</span>
              <span>Block Reservation & Procurement</span>
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-white">Quotation Validity:</strong> Price quotations on imported Italian
                and Mediterranean quarry blocks are subject to fluctuating currency exchange rates, quarry extraction
                schedules, and international freight charges, and remain valid for 14 calendar days unless specified in writing.
              </li>
              <li>
                <strong className="text-white">Block Booking Deposits:</strong> Quarry block reservations and gangsaw slab
                lots are secured only upon receipt of formal contract execution and non-refundable procurement deposit.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="font-extended text-base sm:text-lg uppercase tracking-wider text-white flex items-center gap-2">
              <span className="text-secondary/40 font-mono text-xs">03.</span>
              <span>Dry-Lay Verification & Bookmatching Approval</span>
            </h2>
            <p>
              For monumental bookmatched installations (e.g. Statuario, Calacatta, or Ceppo di Gré wall claddings),
              Aaiira Marbles provides high-resolution photographic dry-lay composites or on-site atelier inspection
              in Mumbai. Client or appointed architect sign-off on the dry-lay layout constitutes definitive authorization
              for five-axis waterjet cutting.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="font-extended text-base sm:text-lg uppercase tracking-wider text-white flex items-center gap-2">
              <span className="text-secondary/40 font-mono text-xs">04.</span>
              <span>Five-Axis Precision & Dimensional Tolerances</span>
            </h2>
            <p>
              Bespoke fabrication is executed using high-precision diamond wire saws, robotic five-axis CNC machining,
              and abrasive waterjet systems. Standard dimensional fabrication tolerances are ±1.0mm to ±2.0mm on linear
              cuts and edge chamfers, compliant with international architectural stone standards.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="font-extended text-base sm:text-lg uppercase tracking-wider text-white flex items-center gap-2">
              <span className="text-secondary/40 font-mono text-xs">05.</span>
              <span>Site Delivery, Crane Offloading & Handling</span>
            </h2>
            <p>
              Due to the monumental weight and fragile tensile nature of monolithic natural stone, deliveries are executed
              in custom reinforced A-frames and wooden crates. The purchasing client is solely responsible for ensuring:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Adequate heavy vehicle and hydraulic crane site access.</li>
              <li>Structural load-bearing capacity of staging zones, elevator hoists, and slabs.</li>
              <li>Proper weather-sheltered storage on rubber or timber supports prior to installation.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="font-extended text-base sm:text-lg uppercase tracking-wider text-white flex items-center gap-2">
              <span className="text-secondary/40 font-mono text-xs">06.</span>
              <span>Inspection, Pre-Installation Claims & Limitation</span>
            </h2>
            <p>
              All stone consignments must be inspected upon delivery. Any claims regarding transit breakage, quantity
              discrepancy, or fabrication error must be lodged in writing within 48 hours of physical receipt and prior
              to installation. <strong className="text-white">Installation of stone constitutes final and irrevocable acceptance.</strong> Under
              no circumstances shall Aaiira Marbles be liable for labor costs, installation expenses, or consequential damages.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="font-extended text-base sm:text-lg uppercase tracking-wider text-white flex items-center gap-2">
              <span className="text-secondary/40 font-mono text-xs">07.</span>
              <span>Governing Law & Exclusive Jurisdiction</span>
            </h2>
            <p>
              These Terms & Conditions, and all contractual relations arising hereunder, shall be governed by and
              construed in accordance with the laws of the Republic of India. The competent Courts of <strong className="text-white">Mumbai,
              Maharashtra</strong> shall have exclusive jurisdiction over any disputes.
            </p>
          </section>
        </div>
      </main>

      <SubpageFooter />
    </div>
  );
}
