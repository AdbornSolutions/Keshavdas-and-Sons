import ProfessionalApproach from "../assets/professional-approach.webp";

const values = [
  {
    id: "01",
    title: "Product Information",
    description:
      "Providing relevant product and formulation details to support informed business enquiries.",
  },
  {
    id: "02",
    title: "Professional Communication",
    description:
      "Maintaining clear discussions around sourcing needs, product specifications, and next steps.",
  },
  {
    id: "03",
    title: "Destination Requirements",
    description:
      "Considering applicable import requirements and documentation needs during sourcing discussions.",
  },
];

export default function WhatWeValue() {
  return (
    <section id="what-we-value" className="w-full bg-[#F7FAFC]">
      <div
        className="
          mx-auto grid w-full
          max-w-[1440px] lg:min-w-[90%]
          grid-cols-1 items-center
          gap-[35px]
          px-5 py-10
          sm:px-8 sm:py-12
          md:grid-cols-2
          md:gap-[40px]
          lg:gap-[65px]
          lg:px-[70px]
          xl:min-h-[725px]
          xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]
          xl:gap-[80px]
          xl:px-[85px]
          xl:py-[10px]
        "
      >
        {/* LEFT - Professional laboratory image */}
        <div
          className="
            relative w-full
            max-w-[610px]
            justify-self-center
            md:justify-self-start
          "
        >
          <div
            className="
              relative aspect-[610/715]
              w-full overflow-hidden
              rounded-[22px]
              bg-[#DCE5EA]
              sm:rounded-[26px]
              xl:rounded-[28px]
            "
          >
            <img
              src={ProfessionalApproach}
              alt="Pharmaceutical professional reviewing product information in a laboratory"
              loading="lazy"
              className="
                block h-full w-full
                object-cover object-center
              "
            />
          </div>
        </div>

        {/* RIGHT - Content */}
        <div
          className="
            flex w-full min-w-0
            flex-col items-start
            text-left
          "
        >
          {/* Small eyebrow */}
          <span
            className="
              mb-[13px]
              text-[12px]
              font-medium
              leading-none
              text-[#A76A13]
              sm:text-[13px]
              xl:text-[14px]
            "
          >
            What We Value
          </span>

          {/* Main heading */}
          <h2
            className="
              max-w-[680px]
              text-[30px]
              font-semibold
              leading-[1.08]
              tracking-[-0.8px]
              text-[#203650]
              sm:text-[38px]
              lg:text-[46px]
              xl:tracking-[-1.2px]
            "
          >
            A Professional Approach to
            <br className="hidden lg:block" /> Every Enquiry
          </h2>

          {/* Introduction */}
          <p
            className="
              mt-[24px]
              max-w-[615px]
              text-[14px]
              font-normal
              leading-[1.65]
              text-[#64758B]
              sm:text-[16px]
              xl:mt-[27px]
              xl:text-[18px]
            "
          >
            Pharmaceutical sourcing requires clear information, responsible
            coordination, and an understanding of international business
            requirements.
          </p>

          {/* Numbered values */}
          <div
            className="
              mt-[36px]
              flex w-full flex-col
              gap-[20px]
              xl:mt-[43px]
              xl:gap-[25px]
            "
          >
            {values.map((item) => (
              <div
                key={item.id}
                className="
                  grid w-full
                  grid-cols-[70px_minmax(0,1fr)]
                  items-center
                  gap-[18px]
                  sm:grid-cols-[85px_minmax(0,1fr)]
                  sm:gap-[25px]
                  xl:grid-cols-[92px_minmax(0,1fr)]
                  xl:gap-[28px]
                "
              >
                {/* Number */}
                <span
                  className="
                    text-[43px]
                    font-semibold
                    leading-none
                    tracking-[-1.5px]
                    text-[#000000]
                    sm:text-[49px]
                    xl:text-[58px]
                  "
                >
                  {item.id}
                </span>

                {/* Vertical divider and text */}
                <div
                  className="
                    min-w-0
                    border-l border-[#394B60]
                    pl-[17px]
                    sm:pl-[20px]
                    xl:pl-[23px]
                  "
                >
                  <h3
                    className="
                      text-[17px]
                      font-semibold
                      leading-[1.3]
                      text-[#17365A]
                      sm:text-[19px]
                      xl:text-[21px]
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-[10px]
                      max-w-[370px]
                      text-[13px]
                      font-normal
                      leading-[1.65]
                      text-[#64758B]
                      sm:text-[14px]
                      xl:text-[16px]
                    "
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
