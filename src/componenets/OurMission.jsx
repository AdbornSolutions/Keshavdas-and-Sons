const values = [
  {
    id: "02",
    label: "OUR VISION",
    title: "Healthcare Without Boundaries",
    description:
      "To contribute to stronger international pharmaceutical connections through professional sourcing communication and a broad healthcare product portfolio.",
  },
  {
    id: "03",
    label: "OUR APPROACH",
    title: "Built Around Trust & Clarity",
    description:
      "Clear communication, responsible product information, professional coordination, and attention to business requirements guide our approach.",
  },
];

export default function OurMission() {
  return (
    <section
      id="mission-vision"
      className="w-full overflow-hidden bg-[#F7FAFC]"
    >
      <div
        className="
          mx-auto w-full max-w-[1440px]
          px-5
          pb-5
          lg:pb-[7rem]
          sm:px-8
          lg:px-[70px]
          xl:px-[80px]
          xl:pt-[14px]
        "
      >
        {/* Section heading */}
        <h2
          className="
            max-w-[850px]
            text-[28px] font-bold
            leading-[1.18]
            tracking-[-0.6px]
            text-[#111111]
            sm:text-[36px]
            lg:text-[42px]
            xl:text-[44px]
          "
        >
          More Than <span className="text-[#FF9436]">Products.</span> A Purpose
          That
          <br className="hidden sm:block" />
          <span className="text-[#FF9436]"> Connects.</span>
        </h2>

        {/* Cards composition */}
        <div
          className="
            relative mt-[35px]
            flex w-full flex-col
            gap-5
            lg:mt-[45px]
            lg:h-[490px]
            lg:block
            xl:mt-[40px]
            xl:h-[510px]
          "
        >
          {/* 01 - Mission card */}
          <div
            className="
              relative flex w-full
              flex-col
              rounded-[26px]
              bg-[#29436D]
              px-[28px] py-[30px]
              text-white
              sm:px-[40px] sm:py-[38px]
              lg:absolute
              lg:left-0 lg:top-0
              lg:h-[425px]
              lg:w-[57%]
              lg:px-[55px] lg:py-[45px]
              xl:h-[425px]
              xl:w-[57%]
            "
          >
            {/* Mission number */}
            <span
              className="
                text-[13px]
                font-bold
                uppercase
                tracking-[0.3px]
                text-[#FF9436]
                xl:text-[15px]
              "
            >
              01 / OUR MISSION
            </span>

            {/* Mission heading */}
            <h3
              className="
                mt-[45px]
                text-[30px]
                font-bold
                leading-[1.12]
                tracking-[-0.5px]
                sm:text-[36px]
                lg:mt-[48px]
                xl:text-[39px]
              "
            >
              Global Health.
              <br />
              <span className="text-[#FF9436]">Our Mission.</span>
            </h3>

            {/* Mission description */}
            <div className="mt-[40px] lg:mt-auto">
              <div className="mb-[20px] h-[2px] w-[55px] bg-[#D9E4F3]" />

              <p
                className="
                  max-w-[480px]
                  text-[14px]
                  font-normal
                  leading-[1.5]
                  text-[#E5EDF7]
                  sm:text-[16px]
                  xl:text-[17px]
                "
              >
                To support international healthcare markets by making
                pharmaceutical sourcing information more accessible and
                connecting prospective buyers with relevant medicine supply
                opportunities from India.
              </p>
            </div>
          </div>

          {/* 02 and 03 - Overlapping cards */}
          {values.map((item, index) => (
            <article
              key={item.id}
              className={`
                relative z-10
                flex w-full flex-col
                rounded-[22px]
                border-r-[10px]
                border-[#FF9436]
                bg-[#F4F4F4]
                px-[25px] py-[25px]
                shadow-[0_5px_10px_rgba(0,0,0,0.18)]
                sm:px-[35px] sm:py-[30px]
                lg:absolute
                lg:w-[42%]
                lg:rounded-[20px]
                lg:px-[32px]
                lg:py-[25px]
                ${
                  index === 0
                    ? "lg:right-[9%] lg:top-[70px] lg:min-h-[245px]"
                    : "lg:right-0 lg:top-[335px] lg:min-h-[210px]"
                }
                ${
                  index === 0
                    ? "xl:right-[9%] xl:top-[70px]"
                    : "xl:right-0 xl:top-[335px]"
                }
              `}
            >
              {/* Card number */}
              <span
                className="
                  text-[12px]
                  font-bold
                  uppercase
                  tracking-[0.2px]
                  text-[#FF9436]
                  sm:text-[13px]
                "
              >
                {item.id} / {item.label}
              </span>

              {/* Card heading */}
              <h3
                className="
                  mt-[23px]
                  text-[23px]
                  font-semibold
                  leading-[1.2]
                  tracking-[-0.3px]
                  text-[#111111]
                  sm:text-[26px]
                  xl:text-[28px]
                "
              >
                {item.title}
              </h3>

              {/* Card description */}
              <p
                className="
                  mt-[20px]
                  max-w-[500px]
                  text-[14px]
                  font-normal
                  leading-[1.35]
                  text-[#111111]
                  sm:text-[15px]
                  xl:text-[16px]
                "
              >
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
