// src/pages/PrivacyPolicy.jsx
import React from "react";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 px-6 py-16">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-10">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl  text-teal-600">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500 mt-2">Last Updated: 10 December 2025</p>
          <p className="text-sm text-gray-500 mt-1 font-light">
            SK Ji Computer Coaching Classes & Institute — 7X8M+F4J, Shookhy Tola, Kharam Seda, Satna, Madhya Pradesh 485775
          </p>
        </header>

        <section className="space-y-6">
          <h2 className="text-xl ">1. Introduction</h2>
          <p className="text-gray-700 leading-relaxed font-light">
            SK Ji Computer Coaching Classes & Institute ("we", "us", "our") respects your privacy.
            This Privacy Policy explains what information we collect from students, parents and visitors,
            how we use it, and how we protect it. By using our website or services you accept this policy.
          </p>

          <h2 className="text-xl">2. Information We Collect</h2>
          <div className="pl-4">
            <h3 className="f mt-2">A. Information you provide directly</h3>
            <ul className="list-disc ml-6 font-light text-gray-700 space-y-1">
              <li>Name, email, phone number, postal address</li>
              <li>Admission/enrolment form details and education history</li>
              <li>Payment & billing information (note: full card details not stored)</li>
              <li>Support messages, uploaded documents (ID, resume etc.)</li>
            </ul>

            <h3 className=" mt-3">B. Information collected automatically</h3>
            <ul className="list-disc ml-6 font-light text-gray-700 space-y-1">
              <li>IP address, device & browser details</li>
              <li>Pages visited, session logs and analytics</li>
              <li>Coarse location from IP (if applicable)</li>
            </ul>
          </div>

          <h2 className="text-xl ">3. Why We Collect Data</h2>
          <p className="text-gray-700  font-light leading-relaxed">
            We collect data to:
          </p>
          <ul className="list-disc ml-6 font-light text-gray-700 space-y-1">
            <li>Process admissions and manage student records</li>
            <li>Handle payments, receipts and accounting</li>
            <li>Send course updates, notifications and support replies</li>
            <li>Improve the website and learning experience</li>
            <li>Prevent fraud and comply with legal requirements</li>
          </ul>

          <h2 className="text-xl ">4. Sharing & Third Parties</h2>
          <p className="text-gray-700 font-light leading-relaxed">
            We never sell your personal data. We may share required data with:
          </p>
          <ul className="list-disc font-light ml-6 text-gray-700 space-y-1">
            <li>Payment processors (PCI-compliant gateways) for handling payments</li>
            <li>SMS / Email providers for sending OTPs and notifications</li>
            <li>Analytics or hosting providers to run and improve the service</li>
          </ul>

          <h2 className="text-xl ">5. Payments & Billing</h2>
          <p className="text-gray-700 font-light leading-relaxed">
            We do not store complete card numbers or sensitive payment credentials on our servers.
            Payment processing is done via secure third-party gateways. Billing records and receipts are
            stored for accounting purposes.
          </p>

          <h2 className="text-xl ">6. Cookies & Tracking</h2>
          <p className="text-gray-700 font-light leading-relaxed">
            We use cookies and similar technologies for:
          </p>
          <ul className="list-disc ml-6 font-light text-gray-700 space-y-1">
            <li>Session management and core site functionality</li>
            <li>Performance & analytics to improve the site</li>
            <li>Optional marketing cookies (used only with consent)</li>
          </ul>

          <h2 className="text-xl ">7. Data Security</h2>
          <p className="text-gray-700  font-light leading-relaxed">
            We apply reasonable security measures such as SSL (HTTPS), access controls and secure hosting.
            While we try to protect your data, no system is completely invulnerable. In case of a data breach
            we will follow applicable legal steps to notify affected users.
          </p>

          <h2 className="text-xl ">8. Retention</h2>
          <p className="text-gray-700 font-light leading-relaxed">
            We retain personal information as necessary to provide services, meet legal obligations (e.g., accounting),
            and for legitimate business purposes. Example retention guidelines:
          </p>
          <ul className="list-disc ml-6 text-gray-700 font-light space-y-1">
            <li>Student records: while account active + reasonable archival period</li>
            <li>Payment records: retained for accounting/tax compliance (as required)</li>
            <li>Support logs: kept for troubleshooting & quality for a limited time</li>
          </ul>

          <h2 className="text-xl ">9. Minors</h2>
          <p className="text-gray-700 font-light leading-relaxed">
            If a student is under 18, we collect and process data only with parental/guardian consent.
            Contact us immediately if you believe your child’s data was collected without proper consent.
          </p>

          <h2 className="text-xl ">10. Your Rights</h2>
          <p className="text-gray-700 font-light leading-relaxed">
            You may request:
          </p>
          <ul className="list-disc ml-6 font-light text-gray-700 space-y-1">
            <li>Access to personal data we hold about you</li>
            <li>Correction or update of inaccurate data</li>
            <li>Deletion of personal data (subject to legal/contractual exceptions)</li>
            <li>Opt-out of marketing communications</li>
          </ul>

          <h2 className="text-xl font-light">11. Cookies & Browser Controls</h2>
          <p className="text-gray-700 font-light leading-relaxed">
            You can disable or manage cookies via your browser settings, but some site features may not work properly.
          </p>

          <h2 className="text-xl font-light">12. International Transfers</h2>
          <p className="text-gray-700 leading-relaxed">
            Your data may be processed on servers located in India or in other countries used by our trusted providers.
            We take steps (contracts, safeguards) to protect your data during transfers.
          </p>

          <h2 className="text-xl ">13. Changes to This Policy</h2>
          <p className="text-gray-700 font-light leading-relaxed">
            We may update this Policy occasionally. The latest version and effective date will be available on this page.
          </p>

    
        </section>

        <footer className="mt-8 text-sm text-gray-500">
          <p>
            Note: This Privacy Policy is provided for convenience and general guidance. It is not legal advice.
            For legal compliance in specific jurisdictions (e.g., GDPR/CCPA), consult a qualified attorney.
          </p>
        </footer>
      </div>
    </main>
  );
}
