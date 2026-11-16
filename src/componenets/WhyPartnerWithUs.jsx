import { CircleCheck } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Broad Pharmaceutical Portfolio",
    image: "/images/partnership/portfolio.jpg",
    features: [
      "Specialty medicines",
      "Eye-care products",
      "Custom formulations",
    ],
    description:
      "Explore pharmaceutical categories ranging from specialty medicines to eye-care products and other formulations.",
    stats: [
      { value: "500+", label: "Active Products" },
      { value: "100+", label: "Therapeutic Categories" },
    ],
  },
  {
    id: 2,
    title: "International Supply Support",
    image: "/images/partnership/supply.jpg",
    features: ["Global logistics", "Customs clearance", "Timely delivery"],
    description:
      "We navigate complex international logistics to ensure your pharmaceutical supplies reach their global destinations safely and efficiently.",
    stats: [
      { value: "50+", label: "Countries Served" },
      { value: "99%+", label: "On-Time Delivery" },
    ],
  },
  {
    id: 3,
    title: "Wholesale-Focused Communication",
    image: "/images/partnership/communication.jpg",
    features: [
      "Dedicated account managers",
      "Quick response times",
      "Transparent updates",
    ],
    description:
      "Collaborative, bulk-oriented communication tailored to your procurement needs, helping you stay informed at every stage of the transaction.",
    stats: [
      { value: "24/7", label: "Countries Served" },
      { value: "15 min", label: "Average Response" },
    ],
  },
  {
    id: 4,
    title: "Requirement Coordination",
    image: "/images/partnership/coordination.jpg",
    features: [
      "Regulatory compliance",
      "Document preparation",
      "Customized logistics",
    ],
    description:
      "Seamless handling of all export compliance, documentation, and coordination required to ensure a smooth transition from our facility to your destination.",
    stats: [
      { value: "100%", label: "Compliance Rate" },
      { value: "10K+", label: "Shipments Coordinated" },
    ],
  },
];

function ServiceCard({ service }) {
  return (
    <article
      className="
        grid w-full grid-cols-1
        gap-6
        rounded-[20px]
        bg-[#EAF7FB]
        p-6
        sm:p-8
        lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)_minmax(0,1fr)]
        lg:items-center
        lg:gap-[42px]
        xl:h-[505px]
        xl:gap-[50px]
        xl:rounded-[28px]
        xl:px-[55px]
        xl:py-[42px]
      "
    >
      {/* Left column */}
      <div
        className="
          flex h-full min-w-0
          flex-col justify-between
          gap-7
          lg:py-4
        "
      >
        <h3
          className="
            max-w-[320px]
            text-[25px]
            font-semibold
            leading-[1.12]
            tracking-[-0.5px]
            text-[#111111]
            sm:text-[30px]
            xl:text-[39px]
          "
        >
          {service.title}
        </h3>

        <ul className="flex flex-col gap-[12px]">
          {service.features.map((feature, index) => (
            <li
              key={index}
              className="
                flex items-start
                gap-[10px]
                text-[13px]
                font-medium
                leading-[1.4]
                text-[#111111]
                sm:text-[15px]
                xl:text-[17px]
              "
            >
              <CircleCheck
                size={19}
                strokeWidth={1.7}
                className="mt-[1px] shrink-0"
              />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Middle image column */}
      <div
        className="
          relative w-full
          overflow-hidden
          rounded-[20px]
          bg-[#D9D9D9]
          aspect-[1.1/1]
          sm:aspect-[1.15/1]
          lg:aspect-auto
          lg:h-[78%]
          xl:h-[380px]
          xl:rounded-[23px]
        "
      >
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
          className="
            absolute inset-0
            h-full w-full
            object-cover
          "
        />
      </div>

      {/* Right column */}
      <div
        className="
          flex h-full min-w-0
          flex-col justify-between
          gap-8
          lg:py-4
        "
      >
        <p
          className="
            max-w-[330px]
            text-[14px]
            font-normal
            leading-[1.45]
            text-[#111111]
            sm:text-[15px]
            xl:text-[17px]
          "
        >
          {service.description}
        </p>

        {/* Statistics */}
        <div className="flex flex-col gap-[15px]">
          {service.stats.map((stat, index) => (
            <div key={index}>
              <h4
                className="
                  text-[30px]
                  font-bold
                  leading-[1.05]
                  tracking-[-0.8px]
                  text-[#111111]
                  sm:text-[34px]
                  xl:text-[43px]
                "
              >
                {stat.value}
              </h4>

              <p
                className="
                  mt-[3px]
                  text-[13px]
                  font-semibold
                  leading-[1.25]
                  text-[#111111]
                  sm:text-[15px]
                  xl:text-[17px]
                "
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function WhyPartnerWithUs() {
  return (
    <section className="w-full bg-[#F7FAFC]">
      <div
        className="
          mx-auto w-full
          max-w-[1440px]
          px-4 py-10
          sm:px-8 sm:py-12
          lg:px-[55px]
          xl:min-h-[2300px]
          xl:px-[73px]
          xl:pt-[14px]
          xl:pb-[30px]
        "
      >
        {/* Section heading */}
        <div
          className="
            mb-[32px]
            flex flex-col
            justify-between
            gap-5
            lg:flex-row
            lg:items-end
            xl:mb-[28px]
            xl:h-[134px]
            xl:items-end
          "
        >
          <div>
            <p
              className="
                mb-[7px]
                text-[12px]
                font-medium
                text-[#111111]
                sm:text-[14px]
              "
            >
              -Why Partner With Us
            </p>

            <h2
              className="
                max-w-[800px]
                text-[29px]
                font-semibold
                leading-[1.12]
                tracking-[-0.7px]
                text-[#111111]
                sm:text-[36px]
                lg:text-[42px]
                xl:text-[46px]
              "
            >
              Reliable{" "}
              <span className="text-[#FF8C2C]">Pharmaceutical Sourcing</span>
              <br className="hidden md:block" /> Starts With the{" "}
              <span className="text-[#FF8C2C]">Right Partner.</span>
            </h2>
          </div>

          <p
            className="
              max-w-[375px]
              text-[13px]
              font-medium
              leading-[1.3]
              text-[#111111]
              sm:text-[15px]
              xl:mb-[8px]
            "
          >
            We keep the export journey clear and direct — from first inquiry to
            shipment coordination.
          </p>
        </div>

        {/* Services */}
        <div className="flex flex-col gap-[30px]">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
