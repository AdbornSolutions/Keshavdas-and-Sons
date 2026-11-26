import WorldMap from "../assets/international-world-map.webp";

export default function InternationalMarkets() {
  return (
    <section
      id="international-markets"
      className="
        relative w-full overflow-hidden
        bg-[#29436D] text-white
      "
    >
      <div
        className="
          relative mx-auto w-full
          max-w-[1440px] lg:min-w-[90%]
          px-5 py-12
          sm:px-8 sm:py-16
          lg:px-[80px]
          xl:h-[1086px]
          xl:px-[76px]
          xl:pt-[106px]
          xl:pb-[75px]
        "
      >
        {/* TOP HEADING AND DESCRIPTION */}
        <div
          className="
            relative z-10
            flex flex-col
            items-start justify-between
            gap-6
            md:flex-row md:items-end
            md:gap-10
            xl:items-end
          "
        >
          {/* Left heading */}
          <div className="w-full max-w-[650px]">
            {/* Eyebrow */}
            <p
              className="
                mb-[18px]
                text-[10px]
                font-medium
                tracking-[2px]
                text-[#F5D18E]
                sm:text-[12px]
                xl:text-[13px]
              "
            >
              An International Perspective
            </p>

            {/* Main heading */}
            <h2
              className="
                text-[30px]
                font-semibold
                leading-[1.08]
                tracking-[-0.8px]
                text-white
                sm:text-[40px]
                lg:text-[45px]
                xl:text-[49px]
                xl:tracking-[-1.2px]
              "
            >
              Connecting Indian
              <br className="hidden sm:block" /> Pharmaceuticals With
              <br className="hidden sm:block" /> International Markets
            </h2>
          </div>

          {/* Right description */}
          <p
            className="
              max-w-[440px]
              text-[13px]
              font-normal
              leading-[1.7]
              text-[#BDCCE0]
              sm:text-[15px]
              lg:text-[16px]
              xl:mb-[8px]
            "
          >
            Exploring business opportunities across international healthcare
            markets through pharmaceutical exports and product sourcing.
          </p>
        </div>

        {/* WORLD MAP AREA */}
        <div
          className="
            relative mt-[45px]
            w-full
            sm:mt-[55px]
            lg:mt-[60px]
            xl:mt-[50px]
          "
        >
          {/* World map image */}
          <div
            className="
              relative w-full
              aspect-[1288/650]
            "
          >
            <img
              src={WorldMap}
              alt="World map illustrating international pharmaceutical sourcing connections from India"
              loading="lazy"
              className="
                absolute inset-0
                block h-full w-full
                object-contain
                object-center
              "
            />

            {/* Perspective glass card */}
            <div
              className="
                absolute
                bottom-[6%] left-[0%]
                z-10
                w-[38%]
                max-w-[300px]
                rounded-[12px]
                border border-white/10
                bg-white/[0.08]
                p-[12px]
                shadow-[0_8px_24px_rgba(0,0,0,0.06)]
                backdrop-blur-[8px]

                sm:bottom-[7%]
                sm:w-[32%]
                sm:p-[17px]

                lg:bottom-[8%]
                lg:w-[290px]
                lg:p-[20px]

                xl:bottom-[10%]
                xl:left-[0%]
                xl:w-[300px]
                xl:rounded-[14px]
                xl:p-[22px]
              "
            >
              {/* Card eyebrow */}
              <span
                className="
                  block
                  text-[8px]
                  font-medium
                  tracking-[0.8px]
                  text-[#F5D18E]
                  sm:text-[10px]
                  lg:text-[11px]
                  xl:text-[12px]
                "
              >
                Our perspective
              </span>

              {/* Card heading */}
              <p
                className="
                  mt-[7px]
                  text-[10px]
                  font-medium
                  leading-[1.3]
                  tracking-[-0.1px]
                  text-white

                  sm:text-[13px]
                  lg:text-[17px]
                  xl:mt-[9px]
                  xl:text-[19px]
                "
              >
                From Product Enquiries to
                <br className="hidden sm:block" /> International Sourcing
                <br className="hidden sm:block" /> Conversations
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
