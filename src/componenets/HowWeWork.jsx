import { ClipboardList, FileText, Search, Ship } from "lucide-react";

const steps = [
  {
    id: "01",
    label: "Step 01:",
    title: "Submit Your Requirements",
    description:
      "Share the required medicines, quantities and destination country.",
    icon: ClipboardList,
  },
  {
    id: "02",
    label: "Step 02:",
    title: "Product & Availability Review",
    description:
      "Our team reviews product specifications, sourcing requirements and availability.",
    icon: Search,
  },
  {
    id: "03",
    label: "Step 03:",
    title: "Quotation & Documentation",
    description:
      "Discuss commercial terms, applicable export documents and compliance requirements.",
    icon: FileText,
  },
  {
    id: "04",
    label: "Step 04:",
    title: "Shipment Coordination",
    description:
      "Coordinate shipping arrangements subject to relevant product and destination regulations.",
    icon: Ship,
  },
];

export default function HowWeWork() {
  return (
    <section id="how-we-work" className="w-full bg-[#F7FAFC]">
      <div
        className="
          mx-auto w-full max-w-[1440px] lg:min-w-[90%]
          px-5 py-[45px]
          sm:px-8 sm:py-[55px]
          lg:px-[80px]
          xl:h-[644px]
          xl:px-[100px]
          xl:pt-[18px]
          xl:pb-0
        "
      >
        {/* Heading */}
        <div className="text-center">
          {/* Small heading */}
          <div
            className="
              mb-[12px]
              flex items-center
              justify-center gap-[12px]
            "
          >
            <span
              className="
                h-px w-[25px]
                bg-[#8C939C]
              "
            />

            <span
              className="
                text-[12px]
                font-medium
                text-[#111111]
                sm:text-[13px]
              "
            >
              How We Work
            </span>
          </div>

          {/* Main heading */}
          <h2
            className="
              mx-auto max-w-[900px]
              text-[30px]
              font-semibold
              leading-[1.12]
              tracking-[-0.8px]
              text-[#111111]
              sm:text-[42px]
              lg:text-[54px]
              xl:text-[59px]
            "
          >
            A Structured Approach to
            <span
              className="
                block text-[#FF9436]
              "
            >
              Pharmaceutical Export
              <br className="hidden sm:block" /> Inquiries.
            </span>
          </h2>
        </div>

        {/* Timeline */}
        <div
          className="
            relative mt-[65px]
            sm:mt-[85px]
            lg:mt-[105px]
            xl:mt-[94px]
          "
        >
          {/* Horizontal line - desktop */}
          <div
            className="
              absolute left-[2%] right-[2%]
              top-[24px]
              hidden h-px
              bg-[#74B7CC]
              lg:block
            "
          />

          {/* Four steps */}
          <div
            className="
              grid grid-cols-1
              gap-[45px]
              sm:grid-cols-2
              sm:gap-x-[50px]
              sm:gap-y-[65px]
              lg:grid-cols-4
              lg:gap-[45px]
              xl:gap-[62px]
            "
          >
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.id}
                  className="
                    relative flex
                    min-w-0 flex-col
                    items-start
                  "
                >
                  {/* Circle icon */}
                  <div
                    className="
                      relative z-10
                      flex h-[48px] w-[48px]
                      shrink-0
                      items-center justify-center
                      rounded-full
                      bg-[#0787A4]
                      text-white
                      shadow-none
                      xl:h-[55px]
                      xl:w-[55px]
                    "
                  >
                    <Icon size={21} strokeWidth={1.6} />
                  </div>

                  {/* Step number */}
                  <span
                    className="
                      mt-[27px]
                      block text-[45px]
                      font-medium
                      leading-none
                      tracking-[-1.5px]
                      text-[#101010]
                      sm:text-[50px]
                      xl:mt-[30px]
                      xl:text-[60px]
                    "
                  >
                    {step.id}
                  </span>

                  {/* Step content */}
                  <div className="mt-[30px] xl:mt-[32px]">
                    <h3
                      className="
                        text-[17px]
                        font-semibold
                        leading-[1.3]
                        text-[#111111]
                        xl:text-[19px]
                      "
                    >
                      {step.label}
                      <br />
                      {step.title}
                    </h3>

                    <p
                      className="
                        mt-[11px]
                        max-w-[240px]
                        text-[13px]
                        font-normal
                        leading-[1.42]
                        text-[#53565D]
                        sm:text-[14px]
                        xl:text-[15px]
                      "
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
