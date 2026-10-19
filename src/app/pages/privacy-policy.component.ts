
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [RouterLink],
  template: `
    <main class="legal-page">
      <section class="legal-content">
        <a routerLink="/" class="back-link">← Back to Home</a>

        <p class="eyebrow">HIRELY SAAS</p>
        <h1>Privacy Policy</h1>
        <p class="updated">Effective Date: July 4, 2025</p>

        <p>
          Welcome to Hirely. This Privacy Policy explains how
          we collect, use, store and protect information when
          you use our website and services.
        </p>

        <h2>1. Information We Collect</h2>
        <p>
          We may collect information you provide directly,
          including your name, email address, contact details,
          organization information and account details.
          We may also collect technical information such as
          browser type, device information and usage data.
        </p>

        <h2>2. How We Use Your Information</h2>
        <p>We may use information to:</p>
        <ul>
          <li>Provide and maintain our services.</li>
          <li>Create and manage user accounts.</li>
          <li>Respond to questions and support requests.</li>
          <li>Improve website functionality and performance.</li>
          <li>Maintain security and prevent misuse.</li>
        </ul>

        <h2>3. Third-Party Integrations</h2>
        <p>
          If you connect Hirely with third-party applications,
          we may process the information needed to provide
          those integrations, subject to the permissions
          granted and the relevant service terms.
        </p>

        <h2>4. Cookies and Analytics</h2>
        <p>
          Our website may use cookies and similar technologies
          to support functionality, understand usage and
          improve the user experience.
        </p>

        <h2>5. Sharing of Information</h2>
        <p>
          We may share information with service providers
          when necessary to operate our services, or when
          required by law. We do not sell personal information.
        </p>

        <h2>6. Data Security and Retention</h2>
        <p>
          We take reasonable technical and organizational
          measures to protect information. Information is
          retained for as long as reasonably necessary for
          the purposes described in this policy or as
          required by applicable law.
        </p>

        <h2>7. Your Privacy Rights</h2>
        <p>
          Depending on applicable law, you may have rights
          to request access to, correction of or deletion of
          your personal information.
        </p>

        <h2>8. Third-Party Websites</h2>
        <p>
          Our website may contain links to third-party
          websites. Their privacy practices are governed
          by their own policies.
        </p>

        <h2>9. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time.
          Changes will be published on this page.
        </p>

        <h2>10. Contact Us</h2>
        <p>
          For privacy-related questions, contact us at
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
export class PrivacyPolicyComponent {}
