import { Link } from "react-router-dom";
import KNSLogo from "../assets/kns-logo.png";

const footerLinks = [
  {
    title: "Company",
    links: [
      { name: "About Us", path: "/about" },
      { name: "Global Reach", path: "/global-reach" },
      { name: "Quality & Compliance", path: "/quality-compliance" },
      { name: "Contact Us", path: "/contact" },
    ],
  },
  {
    title: "Products",
    links: [
      { name: "Anti-Cancer Medicines", path: "/products/anti-cancer" },
      { name: "Steroid Formulations", path: "/products/steroids" },
      { name: "Skin Care Products", path: "/products/skin-care" },
      { name: "Weight Loss Medicines", path: "/products/weight-loss" },
      { name: "Eye Care Products", path: "/products/eye-care" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Insights", path: "/insights" },
      { name: "Export Process", path: "/export-process" },
      { name: "FAQs", path: "/faqs" },
      { name: "Regulatory Information", path: "/regulatory-information" },
    ],
  },
];

const contactDetails = [
  {
    label: "+91 80427 55758",
    href: "tel:+918042755758",
  },
  {
    label: "onlinenglobalpharmacy.com",
    href: "https://onlinenglobalpharmacy.com",
  },
  {
    label: "India",
    href: null,
  },
];

export default function Footer() {
  return (
    <footer
      className="
        w-full overflow-hidden
        bg-[#F7FAFC]
        text-[#111111]
      "
    >
      <div
        className="
          mx-auto flex w-full
          max-w-[1440px] flex-col
          px-5 pt-12 pb-6
          sm:px-10
          lg:px-[72px]
          xl:h-[550px]
          xl:px-[94px]
          xl:pt-[36px]
          xl:pb-[30px]
        "
      >
        {/* TOP FOOTER */}
        <div
          className="
            grid grid-cols-1
            gap-x-8 gap-y-10
            sm:grid-cols-2
            lg:grid-cols-[2.05fr_1fr_1fr_1fr_1fr]
            lg:gap-x-[28px]
            xl:gap-x-[30px]
          "
        >
          {/* Logo and description */}
          <div className="flex flex-col items-start">
            <Link
              to="/"
              aria-label="Keshavdas & Sons Home"
              className="inline-block"
            >
              <img
                src={KNSLogo}
                alt="Keshavdas & Sons"
                className="
                  block h-auto
                  w-[150px]
                  object-contain
                  sm:w-[165px]
                  xl:w-[175px]
                "
              />
            </Link>

            <p
              className="
                mt-[18px]
                max-w-[300px]
                text-[15px]
                font-normal
                leading-[1.65]
                text-[#66798A]
                sm:text-[16px]
                xl:text-[17px]
              "
            >
              Connecting international pharmaceutical
              <br className="hidden xl:block" /> buyers with medicines sourced
              from India.
            </p>
          </div>

          {/* Navigation links */}
          {footerLinks.map((section) => (
            <div key={section.title} className="flex flex-col items-start">
              <h3
                className="
                  mb-[24px]
                  text-[14px]
                  font-semibold
                  leading-none
                  text-[#111111]
                  xl:mb-[28px]
                "
              >
                {section.title}
              </h3>

              <ul className="flex flex-col gap-[17px]">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="
                        text-[14px]
                        font-normal
                        leading-[1.4]
                        text-[#66798A]
                        transition-colors duration-200
                        hover:text-[#FF8C2C]
                        sm:text-[15px]
                        xl:text-[16px]
                      "
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div className="flex flex-col items-start">
            <h3
              className="
                mb-[24px]
                text-[14px]
                font-semibold
                leading-none
                text-[#111111]
                xl:mb-[28px]
              "
            >
              Contact
            </h3>

            <ul className="flex flex-col gap-[17px]">
              {contactDetails.map((item) => (
                <li key={item.label}>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="
                        break-words
                        text-[14px]
                        leading-[1.4]
                        text-[#66798A]
                        transition-colors
                        hover:text-[#FF8C2C]
                        sm:text-[15px]
                        xl:text-[16px]
                      "
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span
                      className="
                        text-[14px]
                        text-[#66798A]
                        sm:text-[15px]
                        xl:text-[16px]
                      "
                    >
                      {item.label}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* LARGE BRAND NAME */}
        <div
          className="
            mt-[55px]
            flex w-full
            items-center justify-center
            sm:mt-[70px]
            lg:mt-auto
          "
        >
          <p
            className="
              w-full whitespace-nowrap
              text-center
              text-[clamp(28px,9.25vw,134px)]
              font-bold
              leading-[1]
              tracking-[-0.075em]
              text-[#999999]
            "
          >
            Keshavdas &amp; Sons
          </p>
        </div>

        {/* DIVIDER */}
        <div
          className="
            mt-[32px]
            h-px w-full
            bg-[#E1E8EE]
            lg:mt-[34px]
          "
        />

        {/* BOTTOM FOOTER */}
        <div
          className="
            mt-[26px]
            grid grid-cols-1
            items-center
            gap-5
            text-center
            md:grid-cols-3
            md:gap-[25px]
            md:text-left
            xl:mt-[30px]
          "
        >
          {/* Copyright */}
          <p
            className="
              text-[12px]
              leading-[1.5]
              text-[#788998]
              sm:text-[13px]
            "
          >
            © 2026 Keshavdas &amp; Sons Pharma Exporter. All rights reserved.
          </p>

          {/* Disclaimer */}
          <p
            className="
              text-center
              text-[12px]
              leading-[1.5]
              text-[#788998]
              sm:text-[13px]
            "
          >
            All product inquiries are subject to applicable regulations in the
            destination country.
          </p>

          {/* Legal links */}
          <div
            className="
              flex items-center
              justify-center gap-[24px]
              md:justify-end
            "
          >
            <Link
              to="/privacy-policy"
              className="
                whitespace-nowrap
                text-[12px]
                text-[#788998]
                transition-colors
                hover:text-[#FF8C2C]
                sm:text-[13px]
              "
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms-of-use"
              className="
                whitespace-nowrap
                text-[12px]
                text-[#788998]
                transition-colors
                hover:text-[#FF8C2C]
                sm:text-[13px]
              "
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
