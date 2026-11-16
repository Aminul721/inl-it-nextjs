"use client";
/* eslint-disable @next/next/no-img-element -- External WordPress assets are intentionally preserved as supplied. */

import Link from "next/link";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";

import styles from "./Header.module.css";

type NavItem = {
  href: string;
  label: string;
  links?: ReadonlyArray<{ href: string; label: string }>;
  menuClassName?: "domainMenu" | "businessMenu" | "brandingMenu";
};

type Product = {
  title: ReactNode;
  description?: string;
  href: string;
  image: string;
};

const navigation: ReadonlyArray<NavItem> = [
  {
    href: "/domain-hosting/",
    label: "Domain & AI Hosting",
    menuClassName: "domainMenu",
    links: [
      { href: "/domain-registration/", label: "Domain Registration" },
      { href: "/transfer-domain/", label: "Transfer a domain to us" },
      { href: "/domain-pricing/", label: "Domain Pricing & Renewal fees" },
      { href: "/starter-hosting/", label: "5 GB Starter Hosting" },
      { href: "/pro-hosting/", label: "10 GB Pro Hosting" },
      { href: "/business-hosting/", label: "25 GB Business Hosting" },
      { href: "/e-commerce-hosting/", label: "50 GB E-commerce Hosting" },
      { href: "/vps-servers/", label: "VPS Servers" },
      { href: "/managed-server/", label: "Managed Server" },
    ],
  },
  {
    href: "/web-design/",
    label: "Business Solution",
    menuClassName: "businessMenu",
    links: [
      { href: "/starter-website/", label: "1 Page Starter Website" },
      { href: "/standard-website/", label: "5 Page Standard Website" },
      { href: "/pro-website/", label: "10 Pages Pro Company Website" },
      { href: "/e-commerce/", label: "E-commerce Web Development" },
      {
        href: "/travel-website/",
        label: "Tour & Travel Website Design & Development",
      },
      { href: "/custom-dashboard/", label: "Custom Dashboard" },
      {
        href: "/accounting-software/",
        label: "Accounting Software Development",
      },
      { href: "/drone-software/", label: "Drone Tech Software Solutions" },
      { href: "/wordpress/", label: "WordPress Web Design" },
      { href: "/ai-agent/", label: "AI Agent / AI Chat Solutions" },
      { href: "/ai-booking/", label: "AI Booking System" },
      { href: "/ai-custom-software/", label: "AI Custom Software & Solutions" },
    ],
  },
  {
    href: "/branding/",
    label: "Branding Solutions",
    menuClassName: "brandingMenu",
    links: [
      { href: "/logo-design/", label: "Logo Design" },
      { href: "/ui-ux-branding/", label: "UI/UX Design" },
      { href: "/company-profile/", label: "Company Profile" },
      { href: "/video-editing/", label: "Video Editing" },
    ],
  },
];

const products: ReadonlyArray<Product> = [
  {
    title: (
      <>
        Empower Your <strong>Business</strong> With Our Online{" "}
        <strong>Appointments</strong> App
      </>
    ),
    href: "https://miyn.netmow.com/",
    image:
      "https://inl.on-forge.com/wp-content/uploads/2025/12/products1-1.png",
  },
  {
    title: "Boost Your Sports Business",
    description: "All-In-One Sports Academy Management Software",
    href: "https://squaddeck.com/",
    image:
      "https://inl.on-forge.com/wp-content/uploads/2025/12/products1-2.png",
  },
  {
    title: "Empowering Legal Access for Everyone",
    description: "Making Legal Services Simple, Accessible & Efficient",
    href: "https://thelawapp.com.au/",
    image:
      "https://inl.on-forge.com/wp-content/uploads/2025/12/products1-3.png",
  },
];

function Chevron() {
  return (
    <svg aria-hidden="true" viewBox="0 0 12 8">
      <path
        d="m1.41 0L6 4.58 10.59 0 12 1.41 6 7.41 0 1.41 1.41 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 32 25">
      <path
        d="M1.56 1.69h28.88M1.56 12.69h28.88M1.56 23.69h28.88"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16">
      <path
        d="M2.15 2.85a.5.5 0 0 1 .7-.7L8 7.29l5.15-5.15a.5.5 0 0 1 .7.7L8.71 8l5.15 5.15a.5.5 0 0 1-.7.7L8 8.71l-5.15 5.15a.5.5 0 0 1-.7-.7L7.29 8 2.15 2.85Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMobileMenuOpen(false);
    };

    document.body.classList.add(styles.bodyLocked);
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.classList.remove(styles.bodyLocked);
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenMobileMenu(null);
  };
  const toggleMobileSubmenu = (label: string) => {
    setOpenMobileMenu((current) => (current === label ? null : label));
  };

  return (
    <header className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.headerWrap}>
          <div className={styles.container}>
            <Link className={styles.logo} href="/" aria-label="Inleads IT home">
              <img
                src="https://inleadsit.com.my/wp-content/uploads/2026/05/Inleads-Logo.svg"
                alt="Inleads IT"
              />
            </Link>

            <nav
              className={styles.desktopNavigation}
              aria-label="Primary navigation"
            >
              <ul className={styles.desktopList}>
                {navigation.map((item) => (
                  <li className={styles.desktopDropdown} key={item.label}>
                    <a href={item.href}>
                      <span>{item.label}</span>
                      <span className={styles.chevron}>
                        <Chevron />
                      </span>
                    </a>
                    <ul
                      className={`${styles.submenu} ${styles[item.menuClassName ?? "brandingMenu"]}`}
                    >
                      {item.links?.map((link) => (
                        <li key={link.href}>
                          <a href={link.href}>{link.label}</a>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
                <li className={styles.enterpriseDropdown}>
                  <button type="button">
                    <span>Enterprise</span>
                    <span className={styles.chevron}>
                      <Chevron />
                    </span>
                  </button>
                  <div className={styles.megamenu}>
                    {products.map((product) => (
                      <article className={styles.product} key={product.href}>
                        <div className={styles.productContent}>
                          <h6>{product.title}</h6>
                          {product.description && <p>{product.description}</p>}
                          <a
                            href={product.href}
                            target="_blank"
                            rel="noreferrer"
                          >
                            Try Demo
                          </a>
                        </div>
                        <div className={styles.productImage}>
                          <img src={product.image} alt="Inleads IT product" />
                        </div>
                      </article>
                    ))}
                  </div>
                </li>
                <li>
                  <a href="/portfolio/">Portfolio</a>
                </li>
                <li>
                  <a href="/figma-to-wordpress/">Figma to WordPress</a>
                </li>
              </ul>
            </nav>

            <div className={styles.actions}>
              <a
                className={`${styles.button} ${styles.offerButton}`}
                href="#offers"
              >
                Latest offer
              </a>
              <a
                className={styles.button}
                href="https://bill.inleadsit.com.my/index.php?rp=/login"
              >
                Client Area
              </a>
              <button
                className={styles.menuToggle}
                type="button"
                aria-label="Open navigation menu"
                aria-expanded={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
              >
                <MenuIcon />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className={styles.mobileDrawer}
        aria-hidden={!isMobileMenuOpen}
        data-open={isMobileMenuOpen}
      >
        <button
          className={styles.overlay}
          type="button"
          aria-label="Close navigation menu"
          onClick={closeMobileMenu}
          tabIndex={isMobileMenuOpen ? 0 : -1}
        />
        <aside
          className={styles.drawerContent}
          aria-label="Mobile navigation"
          role="dialog"
          aria-modal="true"
        >
          <button
            className={styles.closeButton}
            type="button"
            aria-label="Close navigation menu"
            onClick={closeMobileMenu}
          >
            <CloseIcon />
          </button>
          <Link
            className={styles.mobileLogo}
            href="/"
            aria-label="Inleads IT home"
            onClick={closeMobileMenu}
          >
            <img
              src="https://inleadsit.com.my/wp-content/uploads/2026/05/Inleads-Logo.svg"
              alt="Inleads IT"
            />
          </Link>
          <nav
            className={styles.mobileNavigation}
            aria-label="Mobile primary navigation"
          >
            <ul>
              {navigation.map((item) => {
                const isOpen = openMobileMenu === item.label;
                return (
                  <li
                    className={isOpen ? styles.mobileItemOpen : ""}
                    key={item.label}
                  >
                    <a href={item.href} onClick={closeMobileMenu}>
                      {item.label}
                    </a>
                    <button
                      type="button"
                      aria-label={`Toggle ${item.label} submenu`}
                      aria-expanded={isOpen}
                      onClick={() => toggleMobileSubmenu(item.label)}
                    >
                      <Chevron />
                    </button>
                    <ul className={styles.mobileSubmenu} hidden={!isOpen}>
                      {item.links?.map((link) => (
                        <li key={link.href}>
                          <a href={link.href} onClick={closeMobileMenu}>
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              })}
              <li>
                <a href="/portfolio/" onClick={closeMobileMenu}>
                  Portfolio
                </a>
              </li>
              <li>
                <a href="/about/" onClick={closeMobileMenu}>
                  About
                </a>
              </li>
              <li>
                <a href="/contact/" onClick={closeMobileMenu}>
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </aside>
      </div>
    </header>
  );
}
