import Documentation from "../assets/documentation.webp";
import Packaging from "../assets/packaging.webp";
import Regulatory from "../assets/regulatory.webp";

const commitments = [
  {
    id: 1,
    title: "Packaging & Handling Coordination",
    description:
      "Packaging and handling requirements reviewed before shipment arrangements are made.",
    image: Packaging,
    alt: "Pharmaceutical warehouse packaging and handling",
  },
  {
    id: 2,
    title: "Regulatory Requirements Review",
    description:
      "Destination-country regulations checked for each product before supply is confirmed.",
    image: Regulatory,
    alt: "Pharmaceutical professional working in a laboratory",
  },
  {
    id: 3,
    title: "Product Information & Documentation",
    description:
      "Product details and applicable documents shared for every inquiry, aligned to the medicine and destination market.",
    image: Documentation,
    alt: "Pharmaceutical products and medical documentation",
  },
];

export default function OurCommitment() {
  return (
    <section id="our-commitment" className="w-full bg-[#F7FAFC]">
      <div
        className="
          mx-auto w-full max-w-[1440px] lg:min-w-[90%]
          px-5 py-10
          sm:px-8 sm:py-12
          lg:px-[60px]
          xl:h-[628px]
          xl:px-[78px]
          xl:pt-[12px]
          xl:pb-0
        "
      >
        {/* Section heading */}
        <div
          className="
            flex flex-col
            items-start justify-between
            gap-5
            md:flex-row md:items-end
            xl:items-start
          "
        >
          {/* Left heading */}
          <div className="max-w-[650px]">
            <div className="mb-[5px] flex items-center gap-1">
              <span className="h-px w-[12px] bg-[#111111]" />

              <span className="text-[12px] font-medium text-[#111111]">
                Our Commitment
              </span>
            </div>

            <h2
              className="
                text-[24px] font-semibold
                leading-[1.12]
                tracking-[-0.7px]
                text-[#111111]
                sm:text-[36px]
                lg:text-[40px]
                xl:text-[43px]
              "
            >
              Committed to Responsible
              <br className="hidden sm:block" />
              <span className="text-[#FF9436]">Pharmaceutical Supply.</span>
            </h2>
          </div>

          {/* Right description */}
          <p
            className="
              max-w-[475px]
              text-[13px] font-normal
              leading-[1.4]
              text-[#151515]
              sm:text-[15px]
              lg:text-[16px]
              xl:mt-[54px]
            "
          >
            Supporting international buyers with product documentation, supply
            information and coordination of relevant quality and regulatory
            requirements.
          </p>
        </div>

        {/* Commitment Cards */}
        <div
          className="
            mt-[35px]
            grid grid-cols-1
            gap-[22px]
            sm:grid-cols-2
            lg:grid-cols-3
            lg:gap-[38px]
            xl:mt-[40px]
            xl:gap-[52px]
          "
        >
          {commitments.map((item) => (
            <article
              key={item.id}
              className="
                group flex min-w-0
                flex-col overflow-hidden
                rounded-t-[22px]
                rounded-b-[12px]
                border border-[#E8EEF2]
                bg-white
                transition-all duration-300
                hover:shadow-[0_8px_24px_rgba(0,0,0,0.07)]
              "
            >
              {/* Card image */}
              <div
                className="
                  h-[220px] w-full
                  overflow-hidden
                  sm:h-[240px]
                  xl:h-[245px]
                "
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="
                    block h-full w-full
                    object-cover object-center
                    transition-transform duration-500
                    group-hover:scale-105
                  "
                />
              </div>

              {/* Card content */}
              <div
                className="
                  flex flex-1 flex-col
                  px-[20px] pt-[18px] pb-[25px]
                  sm:px-[24px]
                  xl:px-[30px]
                  xl:pt-[20px]
                "
              >
                <h3
                  className="
                    text-[19px] font-semibold
                    leading-[1.3]
                    tracking-[-0.3px]
                    text-[#111111]
                    xl:text-[22px]
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-[12px]
                    text-[13px]
                    font-normal
                    leading-[1.55]
                    text-[#575C62]
                    sm:text-[14px]
                    xl:text-[16px]
                  "
                >
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
