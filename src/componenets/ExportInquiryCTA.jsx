import { ArrowRight, ArrowUpRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import PharmaceuticalVials from "../assets/pharmaceutical-vials.webp";

export default function ExportInquiryCTA() {
  const phoneNumber = "+918042755758";

  return (
    <section
      id="export-inquiry"
      className="w-full overflow-hidden bg-[#29436D] text-white"
    >
      <div
        className="
          mx-auto grid w-full max-w-[1440px] lg:min-w-[90%]
          grid-cols-1 items-center
          gap-12 px-5 py-14
          sm:px-10 sm:py-16
          lg:min-h-[650px]
          lg:grid-cols-[minmax(0,1fr)_minmax(0,488px)]
          lg:gap-[60px]
          lg:px-[80px]
          xl:h-[803px]
          xl:gap-[70px]
          xl:px-[104px]
          xl:py-0
        "
      >
        {/* LEFT SIDE - CONTENT */}
        <div className="flex min-w-0 flex-col items-start">
          {/* Small eyebrow */}
          <div className="mb-[16px] flex items-center gap-[12px]">
            <span className="h-px w-[24px] bg-[#7CC3E1]" />

            <span
              className="
                text-[12px] font-medium
                tracking-[0.2px] text-[#83C8E6]
                sm:text-[13px]
              "
            >
              Start an Export Inquiry
            </span>
          </div>

          {/* Main heading */}
          <h2
            className="
              max-w-[720px]
              text-[40px] font-medium
              leading-[1.08]
              tracking-[-1.6px]
              text-white
              sm:text-[52px]
              md:text-[62px]
              lg:text-[60px]
              xl:text-[74px]
              xl:tracking-[-2px]
            "
          >
            Let's Build Stronger
            <br className="hidden lg:block" /> Global Healthcare
            <br className="hidden lg:block" />{" "}
            <span className="text-[#FF9436]">Connections.</span>
          </h2>

          {/* Description */}
          <p
            className="
              mt-[28px]
              max-w-[560px]
              text-[14px]
              font-normal
              leading-[1.75]
              text-[#C6D3E4]
              sm:text-[16px]
              lg:text-[17px]
              xl:mt-[32px]
            "
          >
            Connect with Keshavdas &amp; Sons Pharma Exporter to discuss
            pharmaceutical product availability, wholesale requirements and
            export inquiries.
          </p>

          {/* CTA Buttons */}
          <div
            className="
              mt-[35px]
              flex w-full flex-wrap
              items-center gap-[12px]
              sm:w-auto
              xl:mt-[42px]
            "
          >
            {/* Primary CTA */}
            <Link
              to="/contact"
              className="
                group inline-flex
                min-h-[54px]
                items-center justify-between
                gap-[20px]
                rounded-full
                bg-white
                py-[6px] pl-[26px] pr-[6px]
                text-[14px] font-medium
                text-[#29436D]
                transition-all duration-300
                hover:bg-[#F3F7FB]
                hover:shadow-lg
                sm:text-[15px]
              "
            >
              Request an Export Quote
              <span
                className="
                  flex h-[42px] w-[42px]
                  shrink-0 items-center
                  justify-center rounded-full
                  bg-[#FF9436]
                  text-white
                  transition-transform duration-300
                  group-hover:rotate-45
                "
              >
                <ArrowUpRight size={20} strokeWidth={2} />
              </span>
            </Link>

            {/* Secondary CTA */}
            <Link
              to="/contact"
              className="
                group inline-flex
                min-h-[54px]
                items-center justify-between
                gap-[20px]
                rounded-full
                border border-[#607697]
                bg-transparent
                py-[6px] pl-[26px] pr-[6px]
                text-[14px] font-medium
                text-white
                transition-all duration-300
                hover:border-white
                hover:bg-white/10
                sm:text-[15px]
              "
            >
              Contact Our Team
              <span
                className="
                  flex h-[42px] w-[42px]
                  shrink-0 items-center
                  justify-center rounded-full
                  bg-[#D9E3ED]
                  text-[#FF9436]
                  transition-transform duration-300
                  group-hover:translate-x-1
                "
              >
                <ArrowRight size={19} strokeWidth={2} />
              </span>
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE - IMAGE */}
        <div
          className="
            relative mx-auto
            w-full max-w-[488px]
            lg:mx-0
          "
        >
          <div
            className="
              relative aspect-[488/540]
              w-full overflow-hidden
              rounded-[28px]
              bg-[#B9DBE1]
              sm:rounded-[30px]
            "
          >
            {/* Single pharmaceutical image */}
            <img
              src={PharmaceuticalVials}
              alt="Pharmaceutical glass vials"
              loading="lazy"
              className="
                block h-full w-full
                object-cover object-center
              "
            />

            {/* Contact card overlay */}
            <a
              href={`tel:${phoneNumber}`}
              aria-label="Call our export team"
              className="
                absolute bottom-[20px] left-[18px]
                inline-flex max-w-[calc(100%-36px)]
                items-center gap-[13px]
                rounded-[16px]
                bg-white
                px-[14px] py-[12px]
                shadow-[0_5px_18px_rgba(0,0,0,0.08)]
                transition-all duration-300
                hover:-translate-y-[3px]
                hover:shadow-lg
                sm:bottom-[22px]
                sm:left-[20px]
              "
            >
              {/* Phone icon */}
              <span
                className="
                  flex h-[44px] w-[44px]
                  shrink-0 items-center
                  justify-center
                  rounded-[12px]
                  bg-[#FF9436]
                  text-white
                "
              >
                <Phone size={21} strokeWidth={2} />
              </span>

              {/* Contact information */}
              <span className="flex min-w-0 flex-col">
                <span
                  className="
                    text-[12px]
                    leading-[1.4]
                    text-[#89929C]
                    sm:text-[13px]
                  "
                >
                  Talk to our export team
                </span>

                <span
                  className="
                    text-[16px]
                    font-semibold
                    leading-[1.5]
                    text-[#141414]
                    sm:text-[18px]
                  "
                >
                  +91 80427 55758
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
