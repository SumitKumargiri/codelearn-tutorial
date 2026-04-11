export function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-5xl mb-4">Privacy Policy</h1>
        <p className="text-gray-600 mb-8">Last updated: April 7, 2026</p>

        <div className="bg-white rounded-2xl p-8 shadow-sm space-y-8">
          <section>
            <h2 className="text-2xl mb-4">1. Information We Collect</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We collect information you provide directly to us when you create an account, enroll in courses,
              or interact with our platform. This includes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Name, email address, and profile information</li>
              <li>Course progress and completion data</li>
              <li>Payment and billing information</li>
              <li>Communications with our support team</li>
              <li>Usage data and analytics</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Provide, maintain, and improve our services</li>
              <li>Process your transactions and send related information</li>
              <li>Send you technical notices and support messages</li>
              <li>Respond to your comments and questions</li>
              <li>Personalize your learning experience</li>
              <li>Monitor and analyze trends and usage</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl mb-4">3. Information Sharing</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We do not sell your personal information. We may share your information only in these situations:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>With your consent</li>
              <li>With service providers who assist in our operations</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and prevent fraud</li>
              <li>In connection with a merger or acquisition</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl mb-4">4. Data Security</h2>
            <p className="text-gray-700 leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal information
              against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission
              over the internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4">5. Your Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Access and receive a copy of your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
              <li>Request restriction of processing</li>
              <li>Data portability</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl mb-4">6. Cookies</h2>
            <p className="text-gray-700 leading-relaxed">
              We use cookies and similar tracking technologies to collect information about your browsing activities
              and to personalize your experience. You can control cookies through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4">7. Children's Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              Our services are not directed to children under 13. We do not knowingly collect personal information
              from children under 13. If you become aware that a child has provided us with personal information,
              please contact us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4">8. Changes to This Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this privacy policy from time to time. We will notify you of any changes by posting
              the new policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4">9. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have questions about this privacy policy, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-700">Email: privacy@codelearn.com</p>
              <p className="text-gray-700">Address: 123 Learning Street, San Francisco, CA 94105</p>
            </div>
          </section>
        </div>
      </div>

    </div>
  );
}
