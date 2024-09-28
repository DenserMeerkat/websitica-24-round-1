import React from "react";

const Pricing = () => {
  return (
    <div>
      <section id="pricing" className="section">
        <h2 className="py-12 pt-40 text-center text-4xl font-bold">
          Flexible Pricing Plans
        </h2>

        <div className="mx-auto flex max-w-7xl justify-center gap-6">
          <div className="relative flex min-w-[300px] flex-col items-center gap-4 overflow-hidden rounded-3xl border-2 border-muted bg-gradient-to-b from-muted/50 to-muted/20 px-6 py-4 pt-12">
            <div className="feature-icon absolute left-0 top-0 rounded-br-2xl border-b-2 border-r-2 bg-primary px-4 py-0.5 pl-6">
              Basic
            </div>
            <h3 className="text-3xl font-bold text-primary">$4.99/mo</h3>
            <ul>
              <li>1 Website</li>
              <li>10 GB Storage</li>
              <li>Free SSL</li>
            </ul>
          </div>
          <div className="relative flex min-w-[300px] flex-col items-center gap-4 overflow-hidden rounded-3xl border-2 border-muted bg-gradient-to-b from-muted/50 to-muted/20 px-6 py-4 pt-12">
            <div className="feature-icon absolute left-0 top-0 rounded-br-2xl border-b-2 border-r-2 bg-primary px-4 py-0.5 pl-6">
              Pro
            </div>
            <h3 className="text-3xl font-bold text-primary">$9.99/mo</h3>
            <ul>
              <li>Unlimited Websites</li>
              <li>50 GB Storage</li>
              <li>Free SSL</li>
              <li>Free Domain</li>
            </ul>
          </div>
          <div className="relative flex min-w-[300px] flex-col items-center gap-4 overflow-hidden rounded-3xl border-2 border-muted bg-gradient-to-b from-muted/50 to-muted/20 px-6 py-4 pt-12">
            <div className="feature-icon absolute left-0 top-0 rounded-br-2xl border-b-2 border-r-2 bg-primary px-4 py-0.5 pl-6">
              Enterprise
            </div>
            <h3 className="text-3xl font-bold text-primary">$19.99/mo</h3>
            <ul>
              <li>Unlimited Websites</li>
              <li>100 GB Storage</li>
              <li>Free SSL</li>
              <li>Free Domain</li>
              <li>24/7 Priority Support</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
