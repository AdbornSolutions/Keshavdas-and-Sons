import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

// Import business partner images
import Distributors from "../assets/distributors.webp";
import Hospitals from "../assets/hospitals.webp";
import Pharmacies from "../assets/pharmacies.webp";
import Wholesalers from "../assets/wholesalers.webp";

const partners = [
  {
    id: 1,
    title: "Pharmaceutical Distributors",
    image: Distributors,
    link: "/partnership/distributors",
  },
  {
    id: 2,
    title: "Hospitals & Healthcare Institutions",
    image: Hospitals,
    link: "/partnership/hospitals",
  },
  {
    id: 3,
    title: "Medical Wholesalers",
    image: Wholesalers,
    link: "/partnership/wholesalers",
  },
  {
    id: 4,
    title: "Pharmacies & Healthcare Businesses",
    image: Pharmacies,
    link: "/partnership/pharmacies",
  },
];

// Reusable business partner image card
function PartnerCard({ partner }) {
  return (
    <article
      className="
        group relative h-full w-full
        min-w-0 overflow-hidden
        rounded-[20px]
        bg-[#29436D]
        sm:rounded-[24px]
        lg:rounded-[26px]
        xl:rounded-[28px]
      "
    >
      {/* Background image */}
      <img
        src={partner.image}
        alt={partner.title}
        loading="lazy"
        className="
          absolute inset-0
          h-full w-full
          object-cover object-center
          transition-transform
          duration-700 ease-out
          group-hover:scale-105
        "
      />

      {/* Image color overlay */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          bg-[#17365A]/15
        "
      />

      {/* Bottom navy gradient */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          bg-gradient-to-t
          from-[#081C3A]/95
          via-[#102B4B]/30
          to-transparent
        "
      />

      {/* Arrow icon */}
      <Link
        to={partner.link}
        aria-label={`Explore ${partner.title}`}
        className="
          absolute right-[18px] top-[18px]
          z-10 flex h-[40px] w-[40px]
          items-center justify-center
          rounded-full
          border border-white/20
          bg-white/25
          text-white
          backdrop-blur-[6px]
          transition-all duration-300
          hover:bg-[#FF9436]
          hover:border-[#FF9436]
          hover:rotate-45
          sm:right-[20px]
          sm:top-[20px]
          xl:h-[44px]
          xl:w-[44px]
        "
      >
        <ArrowUpRight size={19} strokeWidth={1.8} />
      </Link>

      {/* Bottom title */}
      <div
        className="
          absolute bottom-[20px]
          left-[20px] right-[20px]
          z-10
          sm:bottom-[24px]
          sm:left-[26px]
          sm:right-[26px]
          xl:bottom-[28px]
          xl:left-[28px]
        "
      >
        {/* Orange accent line */}
        <span
          className="
            mb-[13px] block
            h-[2px] w-[38px]
            bg-[#E8AE2A]
            xl:mb-[16px]
          "
        />

        {/* Card title */}
        <h3
          className="
            max-w-[650px]
            text-[17px]
            font-medium
            leading-[1.25]
            tracking-[-0.3px]
            text-white
            sm:text-[20px]
            lg:text-[23px]
            xl:text-[25px]
          "
        >
          {partner.title}
        </h3>
      </div>
    </article>
  );
}

export default function BusinessPartners() {
  return (
    <section id="business-partners" className="w-full bg-[#F7FAFC]">
      <div
        className="
          mx-auto w-full
          max-w-[1440px] lg:min-w-[90%]
          px-5 py-10
          sm:px-8 sm:py-12
          lg:px-[60px]
          xl:h-[1034px]
          xl:px-[78px]
          xl:pt-[8px]
          xl:pb-[12px]
        "
      >
        {/* Section heading */}
        <div className="mb-[30px] xl:mb-[20px]">
          {/* Eyebrow */}
          <span
            className="
              block text-[11px]
              font-semibold
              tracking-[1.5px]
              text-[#AC761D]
              sm:text-[12px]
              xl:text-[13px]
            "
          >
            Our Business Partners
          </span>

          {/* Main heading */}
          <h2
            className="
              mt-[15px]
              max-w-[820px]
              text-[30px]
              font-semibold
              leading-[1.08]
              tracking-[-0.8px]
              text-[#203650]
              sm:text-[40px]
              lg:text-[44px]
              xl:mt-[18px]
              xl:text-[48px]
              xl:tracking-[-1.2px]
            "
          >
            Supporting Different Healthcare
            <br className="hidden sm:block" /> Business Needs
          </h2>
        </div>

        {/* Business partners grid */}
        <div
          className="
            grid w-full
            grid-cols-1
            gap-[18px]
            sm:grid-cols-2
            lg:gap-[20px]
            xl:gap-y-[20px]
          "
        >
          {/* First row */}
          <div
            className="
              grid min-w-0
              grid-cols-1
              gap-[18px]
              sm:col-span-2
              sm:grid-cols-[7fr_5fr]
              lg:gap-[20px]
              xl:h-[452px]
            "
          >
            <div className="h-[260px] min-w-0 sm:h-[350px] xl:h-full">
              <PartnerCard partner={partners[0]} />
            </div>

            <div className="h-[260px] min-w-0 sm:h-[350px] xl:h-full">
              <PartnerCard partner={partners[1]} />
            </div>
          </div>

          {/* Second row */}
          <div
            className="
              grid min-w-0
              grid-cols-1
              gap-[18px]
              sm:col-span-2
              sm:grid-cols-[5fr_7fr]
              lg:gap-[20px]
              xl:h-[380px]
            "
          >
            <div className="h-[260px] min-w-0 sm:h-[320px] xl:h-full">
              <PartnerCard partner={partners[2]} />
            </div>

            <div className="h-[260px] min-w-0 sm:h-[320px] xl:h-full">
              <PartnerCard partner={partners[3]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
