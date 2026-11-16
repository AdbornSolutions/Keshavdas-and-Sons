import WorldMap from "../assets/world-map.webp";

export default function GlobalReach() {
  return (
    <section
      id="global-reach"
      className="w-full overflow-hidden bg-[#29436D] text-white"
    >
      <div
        className="
          mx-auto w-full max-w-[1440px]
          px-5 py-12
          sm:px-10 sm:py-16
          lg:px-[80px]
          xl:min-h-[1284px]
          xl:px-[100px]
          xl:pt-[140px]
          xl:pb-[90px]
        "
      >
        {/* Heading Section */}
        <div
          className="
            flex flex-col justify-between
            gap-6
            lg:flex-row lg:items-end
          "
        >
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-6 bg-white/70" />
              <span className="text-[12px] font-medium">Our Global Reach</span>
            </div>

            <h2
              className="
                text-[32px] font-semibold
                leading-[1.12] tracking-[-1px]
                sm:text-[45px]
                lg:text-[55px]
                xl:text-[59px]
              "
            >
              Connecting <span className="text-[#FF9436]">Healthcare</span>
              <br />
              <span className="text-[#FF9436]">Markets</span> Worldwide.
            </h2>
          </div>

          <p
            className="
              max-w-[390px]
              text-[13px] leading-[1.6]
              text-[#CDD8E8]
              sm:text-[15px]
              lg:mb-2
              xl:text-[17px]
            "
          >
            Supporting pharmaceutical sourcing and export inquiries across
            international markets.
          </p>
        </div>

        {/* World Map Image */}
        <div
          className="
            mt-10 w-full
            sm:mt-14
            xl:mt-[85px]
          "
        >
          <img
            src={WorldMap}
            alt="Global pharmaceutical sourcing network"
            className="
              block h-auto w-full
              object-contain
              xl:aspect-[1240/645.83]
            "
            loading="lazy"
          />
        </div>

        {/* Disclaimer */}
        <div className="mt-10 sm:mt-14 xl:mt-[30px]">
          <div className="mb-6 h-px w-[60%] max-w-[625px] bg-[#466084]" />

          <p
            className="
              max-w-[1100px]
              text-[11px] leading-[1.7]
              text-[#A9BDD6]
              sm:text-[12px]
              xl:text-[13px]
            "
          >
            Markets shown are those referenced in our existing website. Service
            coverage is confirmed for each inquiry and remains subject to
            destination-country regulations.
          </p>
        </div>
      </div>
    </section>
  );
}
