
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-terms-conditions',
  standalone: true,
  imports: [RouterLink],
  template: `
    <main class="legal-page">
      <section class="legal-content">
        <a routerLink="/" class="back-link">← Back to Home</a>

        <p class="eyebrow">HIRELY SAAS</p>
        <h1>Terms &amp; Conditions</h1>
        <p class="updated">Effective Date: July 4, 2025</p>

        <p>
          Welcome to Hirely. These Terms and Conditions govern
          your access to and use of our website and services.
          By using the platform, you agree to these terms.
        </p>

        <h2>1. Eligibility</h2>
        <p>
          You must have the legal capacity and authority
          required to use the services. If you use Hirely
          on behalf of an organization, you confirm that
          you are authorized to represent that organization.
        </p>

        <h2>2. Account Registration</h2>
        <p>
          You agree to provide accurate and current
          registration information and to update it when
          necessary.
        </p>

        <h2>3. Account Security</h2>
        <p>
          You are responsible for keeping your credentials
          secure and for activities conducted through your
          account. Notify the service team if you suspect
          unauthorized access.
        </p>

        <h2>4. Acceptable Use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Use the platform for unlawful activities.</li>
          <li>Attempt unauthorized access to systems or accounts.</li>
          <li>Disrupt or interfere with platform operations.</li>
          <li>Upload malicious code or harmful content.</li>
          <li>Misuse another person's personal information.</li>
        </ul>

        <h2>5. Services and Integrations</h2>
        <p>
          Features may change or depend on your subscription
          and configuration. Third-party integrations may
          be governed by separate terms and privacy policies.
        </p>

        <h2>6. Intellectual Property</h2>
        <p>
          Unless otherwise stated, the platform's branding,
          design, software and content are owned by or
          licensed to their respective rights holders.
          You may not reproduce or redistribute protected
          materials without appropriate permission.
        </p>

        <h2>7. User Information</h2>
        <p>
          You are responsible for ensuring that information
          you submit to the platform is accurate and that
          you have the necessary rights and permissions
          to provide it.
        </p>

        <h2>8. Availability and Changes</h2>
        <p>
          We aim to maintain reliable services but cannot
          guarantee uninterrupted availability. We may
          update, maintain or modify features when needed.
        </p>

        <h2>9. Limitation of Liability</h2>
        <p>
          To the extent permitted by applicable law, liability
          arising from the use of the platform is limited
          as permitted by law. Nothing in these terms
          excludes liability that cannot legally be excluded.
        </p>

        <h2>10. Suspension or Termination</h2>
        <p>
          Access may be restricted or suspended where
          reasonably necessary because of misuse, security
          concerns or violations of these terms.
        </p>

        <h2>11. Changes to These Terms</h2>
        <p>
          We may update these terms from time to time.
          Updated terms will be published on this page.
        </p>

        <h2>12. Contact Us</h2>
        <p>
          For questions about these terms, contact us at
          <a href="mailto:support@hirely.com">
            support&#64;hirely.com
          </a>.
        </p>
      </section>
    </main>
  `,
  styles: [`
    :host { display: block; }

    .legal-page {
      background: #f7f7f5;
      color: #292929;
      padding: 76px 24px 110px;
      min-height: 70vh;
    }

    .legal-content {
      max-width: 850px;
      margin: 0 auto;
    }

    .back-link {
      display: inline-block;
      margin-bottom: 42px;
      color: #555;
      text-decoration: none;
      font-size: 14px;
    }

    .back-link:hover { color: #000; }

    .eyebrow {
      font-size: 11px;
      letter-spacing: 2px;
      color: #777;
      font-weight: 600;
    }

    h1 {
      font-size: clamp(38px, 5vw, 58px);
      line-height: 1.12;
      letter-spacing: -2px;
      font-weight: 500;
      margin: 18px 0;
      color: #171717;
    }

    .updated {
      font-size: 13px;
      color: #777;
      margin-bottom: 42px;
    }

    h2 {
      font-size: 23px;
      font-weight: 500;
      margin: 38px 0 14px;
      letter-spacing: -0.4px;
    }

    p, li {
      font-size: 15px;
      line-height: 1.9;
      color: #62625e;
    }

    ul { padding-left: 24px; }

    a:not(.back-link) {
      color: inherit;
      text-underline-offset: 3px;
    }

    @media (max-width: 600px) {
      .legal-page { padding: 45px 20px 70px; }
      h1 { letter-spacing: -1px; }
      h2 { font-size: 21px; }
    }
  `]
})
export class TermsConditionsComponent {}
