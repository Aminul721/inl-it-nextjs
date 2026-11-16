/* eslint-disable @next/next/no-img-element -- External WordPress media preserved per live design */
import Link from "next/link";
import styles from "./Footer.module.css";

const designLinks = [
  { href: "/starter-website/", label: "Starter Website" },
  { href: "/pro-website/", label: "Pro Company Website" },
  {
    href: "/travel-website/",
    label: "Tour & Travel Website Design & Development",
  },
  { href: "/custom-dashboard/", label: "Custom Dashboard" },
  {
    href: "/accounting-software/",
    label: "Accounting Software Development",
  },
  {
    href: "/drone-software/",
    label: "Drone Tech Software Solutions",
  },
  { href: "/wordpress/", label: "WordPress Web Design" },
  { href: "/ai-agent/", label: "AI Agent / AI Chat Solutions" },
  { href: "/ai-booking/", label: "AI Booking System" },
  {
    href: "/ai-custom-software/",
    label: "AI Custom Software & Solutions",
  },
];

const hostingLinks = [
  { href: "/domain-registration/", label: "Domain Registration" },
  { href: "/transfer-domain/", label: "Transfer A Domain To Us" },
  {
    href: "/domain-pricing/",
    label: "Domain Pricing & Renewal Fees",
  },
  { href: "/pro-hosting/", label: "10 GB Pro Hosting" },
  {
    href: "/business-hosting/",
    label: "25GB Business Hosting Plan",
  },
  { href: "/vps-servers/", label: "VPS Servers" },
  {
    href: "/managed-server/",
    label: "Managed Dedicated Servers",
  },
];

const quickLinks = [
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
  { href: "/privacy-policy/", label: "Privacy Policy" },
  { href: "/terms-conditions/", label: "Terms & Conditions" },
];

function DocumentIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <line x1="10" y1="9" x2="8" y2="9" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function BehanceIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-4.726 3-3.159 0-5.5-2.28-5.5-5.5 0-3.328 2.457-5.5 5.5-5.5 3.393 0 5.25 2.463 5 5.918h-8.481c.074 1.839 1.488 3.082 3.481 3.082 1.458 0 2.417-.679 2.726-1.5zm-5.023-4.594c-.035-1.503-.997-2.406-2.477-2.406-1.398 0-2.399.882-2.523 2.406h5zm-10.703 6.594h-8v-14h7.525c2.478 0 4.475 1.096 4.475 3.656 0 1.583-.807 2.766-2.052 3.344 1.637.609 2.552 2.016 2.552 3.656 0 2.656-2.115 3.344-4.5 3.344zm-5.5-8.5h4.725c1.199 0 2.275-.516 2.275-1.75 0-1.125-.801-1.75-2.275-1.75h-4.725v3.5zm0 6h5.05c1.336 0 2.45-.641 2.45-1.938 0-1.25-.976-2.062-2.45-2.062h-5.05v4z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Top CTA: Let's talk now */}
        <div className={styles.ctaWrapper}>
          <h2 className={styles.ctaTitle}>
            <span>Let’s</span>
            <span>talk now</span>
          </h2>

          <a
            href="/contact/"
            className={styles.circleBadge}
            aria-label="Get in touch"
          >
            <div className={styles.circleSpin}>
              <img
                src="https://inleadsit.com.my/wp-content/uploads/2025/06/circle-footer.svg"
                alt="Get in touch"
                width={150}
                height={150}
              />
            </div>
            <span className={styles.circleArrow}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 45 18"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M34.8995 17.4752C34.8995 17.3737 34.9398 17.2736 35.0199 17.1988L43.9208 9.00173L35.0199 0.802745C34.8682 0.662247 34.8572 0.42483 34.9978 0.273274C35.1384 0.121718 35.3761 0.110661 35.5278 0.251159L44.7268 8.72529C44.8037 8.79554 44.8473 8.89571 44.8473 8.99978C44.8473 9.10386 44.8037 9.20403 44.7268 9.27428L35.5278 17.7478C35.3761 17.8883 35.1384 17.8791 34.9978 17.7256C34.9327 17.658 34.8995 17.5676 34.8995 17.4752Z"
                  fill="currentColor"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.847633 9.00161C0.847633 8.79412 1.01496 8.62695 1.22266 8.62695L44.4661 8.62695C44.6738 8.62695 44.8411 8.79412 44.8411 9.00161C44.8411 9.2091 44.6738 9.37628 44.4661 9.37628L1.22266 9.37628C1.01496 9.37628 0.847633 9.2091 0.847633 9.00161Z"
                  fill="currentColor"
                />
              </svg>
            </span>
          </a>
        </div>

        {/* 5 Columns Grid */}
        <div className={styles.grid}>
          {/* Column 1: Brand */}
          <div className={styles.col}>
            <Link href="/" className={styles.brandLogo} aria-label="Inleads IT">
              <img
                src="https://inleadsit.com.my/wp-content/uploads/2025/08/Logo-with-new-slogan_white.svg"
                alt="Inleads IT Logo"
              />
            </Link>
            <p className={styles.brandDesc}>
              Unlock Digital Excellence with Inleads IT Solution Sdn. Bhd.
              Trusted by 1200+ Satisfied Customers Since 2008, We Redefine
              Digital Experiences.
            </p>
            <a
              href="https://inleadsit.com.my/wp-content/uploads/2026/08/Inleadsit_Corporate_Profile_2026.pdf"
              target="_blank"
              rel="noreferrer"
              className={styles.profileBtn}
            >
              <DocumentIcon />
              <span>Company Profile</span>
            </a>
          </div>

          {/* Column 2: Design & Development */}
          <div className={styles.col}>
            <h3 className={styles.colTitle}>Design &amp; Development</h3>
            <ul className={styles.linkList}>
              {designLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Domain & Hosting */}
          <div className={styles.col}>
            <h3 className={styles.colTitle}>Domain &amp; Hosting</h3>
            <ul className={styles.linkList}>
              {hostingLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Quick Link */}
          <div className={styles.col}>
            <h3 className={styles.colTitle}>Quick Link</h3>
            <ul className={styles.linkList}>
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Addresses & Contact */}
          <div className={styles.col}>
            <h3 className={styles.colTitle}>Addresses</h3>
            <div className={styles.addressCard}>
              <div className={styles.countryHeader}>
                <img
                  src="https://inleadsit.com.my/wp-content/uploads/2025/08/KLCC.svg"
                  alt="KLCC Malaysia"
                />
                <span className={styles.countryName}>Malaysia</span>
              </div>
              <div className={styles.companyName}>
                Inleads IT Solution Sdn. Bhd. (1180491-A)
              </div>
              <div className={styles.companyReg}>Reg: 201601009563</div>
              <a
                href="https://maps.app.goo.gl/ryA25urS8fgN5UZn9"
                target="_blank"
                rel="noreferrer"
                className={styles.addressText}
              >
                Room 1, A2-13A-2, Soho Suites KLCC, 20 Jalan Perak, Kuala
                Lumpur, Malaysia, 50450
              </a>
            </div>

            <div className={styles.contactSection}>
              <div className={styles.contactSubtitle}>Contact Us</div>
              <ul className={styles.contactList}>
                <li>
                  <a href="tel:+60321611977">
                    <PhoneIcon />
                    <span>+60 3 2161 1977</span>
                  </a>
                </li>
                <li>
                  <a href="tel:+601155563384">
                    <PhoneIcon />
                    <span>+60 1 1555 63384</span>
                  </a>
                </li>
                <li>
                  <a href="tel:+601155563394">
                    <PhoneIcon />
                    <span>+60 1 1555 63394</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:hello@inleadsit.com.my">
                    <MailIcon />
                    <span>hello@inleadsit.com.my</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Social */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            Copyright &copy; {new Date().getFullYear()} Inleads IT Solution Sdn.
            Bhd. All rights reserved.
          </p>

          <ul className={styles.socialList}>
            <li>
              <a
                href="https://www.facebook.com/InleadsIT"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/inleadsit"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/inleads-it-solution-sdn-bhd/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
            </li>
            <li>
              <a
                href="https://www.behance.net/inleadsit"
                target="_blank"
                rel="noreferrer"
                aria-label="Behance"
              >
                <BehanceIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
