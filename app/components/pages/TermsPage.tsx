export function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-5xl mb-4">Terms of Service</h1>
        <p className="text-gray-600 mb-8">Last updated: April 7, 2026</p>

        <div className="bg-white rounded-2xl p-8 shadow-sm space-y-8">
          <section>
            <h2 className="text-2xl mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              By accessing and using CodeLearn's services, you accept and agree to be bound by these Terms of Service.
              If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4">2. Description of Service</h2>
            <p className="text-gray-700 leading-relaxed">
              CodeLearn provides an online learning platform offering courses, tutorials, and educational content
              in various technology subjects. We reserve the right to modify, suspend, or discontinue any part
              of our service at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4">3. User Accounts</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To access certain features, you must create an account. You agree to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Notify us immediately of any unauthorized access</li>
              <li>Be responsible for all activities under your account</li>
              <li>Not share your account with others</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl mb-4">4. Acceptable Use</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You agree not to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Violate any laws or regulations</li>
              <li>Infringe on intellectual property rights</li>
              <li>Share course content without authorization</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with other users' experience</li>
              <li>Use automated systems to access our services</li>
              <li>Engage in any fraudulent activity</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl mb-4">5. Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed">
              All content on CodeLearn, including courses, text, graphics, logos, and software, is the property
              of CodeLearn or its licensors and is protected by copyright and intellectual property laws.
              You may not reproduce, distribute, or create derivative works without our permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4">6. Payment and Subscriptions</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              For paid services:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Fees are charged in advance on a recurring basis</li>
              <li>You authorize us to charge your payment method</li>
              <li>Subscriptions automatically renew unless cancelled</li>
              <li>Refunds are subject to our refund policy</li>
              <li>We may change pricing with 30 days notice</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl mb-4">7. Cancellation and Refunds</h2>
            <p className="text-gray-700 leading-relaxed">
              You may cancel your subscription at any time. Cancellations take effect at the end of your current
              billing period. We offer refunds within 14 days of purchase if you're not satisfied with our service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4">8. Disclaimers</h2>
            <p className="text-gray-700 leading-relaxed">
              Our services are provided "as is" without warranties of any kind. We do not guarantee that our
              services will be uninterrupted, secure, or error-free. We are not responsible for any employment
              outcomes or career advancement resulting from use of our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4">9. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed">
              To the maximum extent permitted by law, CodeLearn shall not be liable for any indirect, incidental,
              special, or consequential damages arising from your use of our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4">10. Termination</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to suspend or terminate your account if you violate these terms or engage
              in fraudulent or illegal activities. Upon termination, your right to access our services will
              immediately cease.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4">11. Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              We may modify these terms at any time. We will notify you of material changes via email or
              through our service. Continued use of our services after changes constitutes acceptance of
              the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4">12. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed">
              For questions about these terms, contact us at:
            </p>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-700">Email: legal@codelearn.com</p>
              <p className="text-gray-700">Address: 123 Learning Street, San Francisco, CA 94105</p>
            </div>
          </section>
        </div>
      </div>

    </div>
  );
}
