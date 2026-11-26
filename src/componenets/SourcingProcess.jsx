import { BookOpen, FileCheck2, FileText, Package } from "lucide-react";

const steps = [
  {
    id: 1,
    number: "01",
    title: "Product Discovery",
    description:
      "Explore our product categories or share details of the medicines you are looking for.",
    cardTitle: "Medicine catalogue",
    icon: BookOpen,
  },
  {
    id: 2,
    number: "02",
    title: "Requirement Discussion",
    description:
      "Provide relevant product names, formulations, quantities, and destination-market information.",
    cardTitle: "Enquiry document",
    icon: FileText,
  },
  {
    id: 3,
    number: "03",
    title: "Availability & Documentation Review",
    description:
      "Discuss product availability, sourcing details, and applicable documentation or regulatory considerations.",
    cardTitle: "Product documentation",
    icon: FileCheck2,
  },
  {
    id: 4,
    number: "04",
    title: "Business Coordination",
    description:
      "Review potential sourcing arrangements, communication, and next steps with our team.",
    cardTitle: "International shipping carton",
    icon: Package,
  },
];

// Floating illustration card
function DocumentCard({ step }) {
  const Icon = step.icon;

  return (
    <div
      className="
        w-full max-w-[345px]
        rounded-[22px]
        bg-white
        px-[22px] py-[19px]
        shadow-[0_16px_28px_rgba(20,43,76,0.25)]
        sm:px-[25px]
        lg:h-[164px]
        lg:max-w-[347px]
        lg:rounded-[23px]
        lg:py-[23px]
      "
    >
      {/* Icon and label */}
      <div className="flex items-center gap-[14px]">
        <div
          className="
            flex h-[44px] w-[44px]
            shrink-0 items-center justify-center
            rounded-[12px]
            bg-[#102C5D] text-white
            lg:h-[50px] lg:w-[50px]
          "
        >
          <Icon size={22} strokeWidth={1.6} />
        </div>

        <span
          className="
            text-[12px] font-medium
            leading-[1.4]
            text-[#14223B]
            sm:text-[13px]
          "
        >
          {step.cardTitle}
        </span>
      </div>

      {/* Decorative lines */}
      <div className="mt-[18px] space-y-[8px]">
        <div className="h-[6px] w-full rounded-full bg-[#F4F7FA]" />
        <div className="h-[6px] w-[78%] rounded-full bg-[#F4F7FA]" />
        <div className="h-[6px] w-[58%] rounded-full bg-[#FCE9B3]" />
      </div>
    </div>
  );
}

// Outlined number and step information
function StepInformation({ step, alignment = "left" }) {
  return (
    <div
      className={`
        flex w-full max-w-[430px] flex-col
        ${
          alignment === "right"
            ? "lg:items-end lg:text-right"
            : "lg:items-start lg:text-left"
        }
      `}
    >
      <span
        className="
          block text-[65px]
          font-medium leading-none
          tracking-[-3px]
          text-transparent
          [-webkit-text-stroke:1.3px_#E2A000]
          sm:text-[75px]
          lg:text-[86px]
        "
      >
        {step.number}
      </span>

      <h3
        className="
          mt-[8px]
          text-[19px] font-semibold
          leading-[1.3]
          tracking-[-0.4px]
          text-[#111111]
          sm:text-[22px]
          lg:text-[24px]
        "
      >
        {step.title}
      </h3>

      <p
        className="
          mt-[12px]
          max-w-[420px]
          text-[13px]
          leading-[1.55]
          text-[#74849A]
          sm:text-[14px]
          lg:text-[15px]
        "
      >
        {step.description}
      </p>
    </div>
  );
}

export default function SourcingProcess() {
  return (
    <section id="sourcing-process" className="w-full bg-[#F7FAFC]">
      <div
        className="
          mx-auto w-full max-w-[1440px] lg:min-w-[90%]
          px-5
          sm:px-8
          lg:px-[75px]
          xl:min-h-[1297px]
          xl:px-[100px]
        "
      >
        {/* Section heading */}
        <div className="mx-auto text-center">
          <span
            className="
              block text-[12px]
              font-medium
              text-[#CC9218]
              sm:text-[12px]
            "
          >
            How We Work
          </span>

          <h2
            className="
              mx-auto mt-[10px]
              max-w-[790px]
              text-[30px] font-semibold
              leading-[1.12]
              tracking-[-0.9px]
              text-[#203650]
              sm:text-[40px]
              lg:text-[48px]
            "
          >
            A Clear Approach to
            <span className="block text-[#FF9436]">
              Pharmaceutical Sourcing
            </span>
          </h2>

          <p
            className="
              mx-auto mt-[18px]
              max-w-[710px]
              text-[13px]
              leading-[1.6]
              text-[#74849A]
              sm:text-[15px]
            "
          >
            Our process begins with understanding the products, quantities, and
            destination requirements of prospective international business
            partners.
          </p>
        </div>

        {/* Timeline */}
        <div
          className="
            relative mx-auto
            mt-[65px] w-full
            max-w-[1040px]
            lg:mt-[72px]
            xl:mt-[78px]
          "
        >
          {/* Vertical gold line */}
          <div
            aria-hidden="true"
            className="
              absolute bottom-[20px]
              left-[10px] top-[25px]
              w-px bg-[#E5B94A]
              sm:left-[13px]
              lg:bottom-[20px]
              lg:left-1/2
              lg:top-[4px]
              lg:-translate-x-1/2
            "
          />

          {/* Four timeline steps */}
          <div className="relative">
            {steps.map((step, index) => {
              const textOnLeft = index % 2 === 0;

              return (
                <div
                  key={step.id}
                  className="
                    relative grid grid-cols-1
                    pb-[65px] pl-[43px]
                    last:pb-0
                    sm:pl-[55px]
                    lg:min-h-[250px]
                    lg:grid-cols-2
                    lg:items-center
                    lg:gap-x-[120px]
                    lg:p-0
                    xl:min-h-[258px]
                  "
                >
                  {/* Timeline dot */}
                  <span
                    aria-hidden="true"
                    className="
                      absolute left-[4px]
                      top-[34px] z-10
                      h-[13px] w-[13px]
                      rounded-full bg-[#DCA500]
                      sm:left-[7px]
                      lg:left-1/2
                      lg:top-1/2
                      lg:-translate-x-1/2
                      lg:-translate-y-1/2
                    "
                  />

                  {/* Mobile and tablet */}
                  <div className="flex flex-col gap-7 lg:hidden">
                    <StepInformation step={step} />
                    <DocumentCard step={step} />
                  </div>

                  {/* Desktop alternating columns */}
                  {textOnLeft ? (
                    <>
                      <div className="hidden min-w-0 items-center justify-end lg:flex">
                        <StepInformation step={step} alignment="right" />
                      </div>

                      <div className="hidden min-w-0 items-center justify-start lg:flex">
                        <DocumentCard step={step} />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="hidden min-w-0 items-center justify-end lg:flex">
                        <DocumentCard step={step} />
                      </div>

                      <div className="hidden min-w-0 items-center justify-start lg:flex">
                        <StepInformation step={step} alignment="left" />
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
