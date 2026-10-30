import { PageHero } from '../components/ui/PageHero'

export function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="How this demonstration website handles information. Update this policy before connecting analytics or a live form backend."
      />

      <section className="section-pad pt-10">
        <div className="container-shell prose-nexora max-w-3xl space-y-8 text-nexora-muted">
          <div>
            <h2 className="font-display text-2xl font-semibold text-white">
              Overview
            </h2>
            <p className="mt-3 leading-relaxed">
              Nexora Digital is presented as a portfolio demonstration website.
              This React frontend does not operate a production backend by
              default. If you connect analytics, hosting logs, or a form service,
              update this policy to match those tools.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-white">
              Information we collect
            </h2>
            <p className="mt-3 leading-relaxed">
              The contact form validates input in the browser and simulates a
              successful submission. Form data is not transmitted to a server
              unless you add an integration. Your hosting provider may collect
              standard technical logs such as IP address and browser type.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-white">
              Cookies and analytics
            </h2>
            <p className="mt-3 leading-relaxed">
              This demo does not ship with third-party analytics cookies. If you
              later add analytics, disclose the tools used and provide opt-out
              information where required.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-white">
              Third-party links
            </h2>
            <p className="mt-3 leading-relaxed">
              Social and external links may lead to third-party sites with their
              own privacy practices. Review those policies separately.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-white">
              Contact
            </h2>
            <p className="mt-3 leading-relaxed">
              For privacy questions related to this demonstration site, use the
              email listed on the Contact page once a real business address is
              configured.
            </p>
          </div>

          <p className="text-sm">Last updated: [PLACEHOLDER: Date]</p>
        </div>
      </section>
    </>
  )
}
