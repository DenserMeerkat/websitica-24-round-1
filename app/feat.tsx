import React from "react";

const Feat = () => {
  return (
    <section id="features" className="section">
      <h2 className="py-12 text-center text-4xl font-bold">
        Our Hosting Features
      </h2>
      <div className="mx-auto flex max-w-7xl justify-center gap-6">
        <div className="flex max-w-xs flex-col items-center gap-4 rounded-3xl border-2 border-muted bg-gradient-to-b from-muted/50 to-muted/20 px-6 py-8">
          <div className="feature-icon text-4xl">🚀</div>
          <h3 className="text-2xl font-medium">99.9% Uptime</h3>
          <p className="text-center">
            We guarantee high availability for your website.
          </p>
        </div>
        <div className="flex max-w-xs flex-col items-center gap-4 rounded-3xl border-2 border-muted bg-gradient-to-b from-muted/50 to-muted/20 px-6 py-8">
          <div className="feature-icon text-4xl">🔒</div>
          <h3 className="text-2xl font-medium">Free SSL</h3>
          <p className="text-center">
            Secure your site with free SSL certificates.
          </p>
        </div>
        <div className="flex max-w-xs flex-col items-center gap-4 rounded-3xl border-2 border-muted bg-gradient-to-b from-muted/50 to-muted/20 px-6 py-8">
          <div className="feature-icon text-4xl">💬</div>
          <h3 className="text-2xl font-medium">24/7 Support</h3>
          <p className="text-center">Our team is always here to help you.</p>
        </div>
        <div className="flex max-w-xs flex-col items-center gap-4 rounded-3xl border-2 border-muted bg-gradient-to-b from-muted/50 to-muted/20 px-6 py-8">
          <div className="feature-icon text-4xl">💾</div>
          <h3 className="text-2xl font-medium">Daily Backups</h3>
          <p className="text-center">
            Your data is safe with our daily backup service.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Feat;
