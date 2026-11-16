import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AboutLab from "../assets/about-lab.png";

export default function AboutSection() {
  return (
    <section
      className="
        relative w-full
        overflow-hidden
        bg-[#29436D]
        text-white
      "
    >
      <div
        className="
          mx-auto flex w-full
          max-w-[1440px]
          min-h-[752px]
          flex-col items-center
          justify-center
          gap-[40px]
          px-[20px] py-[55px]

          sm:px-[40px]
          md:gap-[50px]

          lg:flex-row
          lg:gap-[45px]
          lg:px-[75px]
          lg:py-[45px]

          xl:gap-[45px]
          xl:px-[80px]
          xl:py-0
        "
      >
        {/* LEFT SIDE - SINGLE COMBINED IMAGE */}
        <div
          className="
            flex w-full
            shrink-0
            items-center
            justify-center

            lg:w-[48%]
            lg:justify-start

            xl:w-[48%]
          "
        >
          <img
            src={AboutLab}
            alt="Keshavdas and Sons pharmaceutical laboratory"
            loading="lazy"
            className="
              block h-auto
              w-full max-w-[600px]
              object-contain
            "
          />
        </div>

        {/* RIGHT SIDE - CONTENT */}
        <div
          className="
            flex w-full
            flex-col items-start
            text-left

            lg:w-[52%]
            lg:max-w-[610px]
          "
        >
          {/* Eyebrow text */}
          <p
            className="
              mb-[9px]
              text-[13px]
              font-normal
              leading-[1.4]
              text-white/90

              sm:text-[14px]
              xl:text-[15px]
            "
          >
            -About Keshavdas &amp; Sons
          </p>

          {/* Heading */}
          <h2
            className="
              max-w-[650px]
              text-[29px]
              font-bold
              leading-[1.15]
              tracking-[-0.6px]

              sm:text-[36px]
              md:text-[40px]
              lg:text-[36px]
              xl:text-[42px]
            "
          >
            Connecting Indian
            <br className="hidden sm:block" />
            <span className="text-[#FF9436]">
              {" "}
              Pharmaceuticals with Global
              <br className="hidden sm:block" /> Healthcare
            </span>{" "}
            Needs.
          </h2>

          {/* Description 1 */}
          <p
            className="
              mt-[15px]
              max-w-[600px]
              text-[14px]
              font-normal
              leading-[1.45]
              text-white/95

              sm:text-[15px]
              xl:text-[17px]
            "
          >
            Keshavdas &amp; Sons is an India-based pharmaceutical export
            business focused on supporting international buyers with access to
            pharmaceutical product information and sourcing opportunities.
          </p>

          {/* Description 2 */}
          <p
            className="
              mt-[20px]
              max-w-[600px]
              text-[14px]
              font-normal
              leading-[1.45]
              text-white/95

              sm:text-[15px]
              xl:text-[17px]
            "
          >
            Through our pharmaceutical portfolio and export-oriented approach,
            we work with international business customers seeking medicines from
            India.
          </p>

          {/* CTA BUTTON */}
          <Link
            to="/about"
            className="
              mt-[22px]
              inline-flex
              min-h-[48px]
              items-center justify-center
              gap-[5px]
              rounded-[15px]
              bg-[#FF9436]
              px-[12px]
              text-[18px]
              font-bold
              text-white

              shadow-[0_5px_12px_rgba(0,0,0,0.2)]
              transition-all duration-300

              hover:-translate-y-[2px]
              hover:bg-[#F47C17]
              hover:shadow-lg

              sm:text-[18px]
              xl:min-h-[50px]
            "
          >
            Discover our Company
            <ArrowRight
              size={22}
              strokeWidth={3}
              className="
                transition-transform
                group-hover:translate-x-1
              "
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
