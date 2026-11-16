import { ArrowUpRight, Plus } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const faqData = [
  {
    id: 1,
    question: "What types of pharmaceutical products do you export?",
    answer:
      "Our catalogue spans anti-cancer medicines, steroid tablets and injectables, skin care, weight loss medicines, eye-care products and other pharmaceutical products.",
  },
  {
    id: 2,
    question: "Can pharmaceutical wholesalers submit bulk inquiries?",
    answer:
      "Yes. Pharmaceutical wholesalers, distributors and institutions can submit bulk inquiries with their required products, quantities and destination country.",
  },
  {
    id: 3,
    question: "How can I request a product quotation?",
    answer:
      "You can contact our team with your product requirements, quantities and destination. We will review your inquiry and discuss quotation details and availability.",
  },
  {
    id: 4,
    question: "What information is required for an export inquiry?",
    answer:
      "Please share the medicine name, specifications, required quantity, destination country and any relevant documentation requirements.",
  },
  {
    id: 5,
    question: "How are product availability and documentation confirmed?",
    answer:
      "Our team reviews product specifications, sourcing availability and applicable documentation before confirming supply details for your inquiry.",
  },
  {
    id: 6,
    question: "Do you support inquiries from different international markets?",
    answer:
      "Yes. We support inquiries from international business customers, subject to product availability, applicable regulations and destination-country requirements.",
  },
];

// Custom icon from your reference image
function CornerIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M5 19V5H19"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Single FAQ accordion item
function FAQItem({ faq, isOpen, onToggle }) {
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (!contentRef.current) return;

    const updateHeight = () => {
      setContentHeight(contentRef.current?.scrollHeight || 0);
    };

    updateHeight();

    if (typeof ResizeObserver === "undefined") return;

    const observer = new ResizeObserver(updateHeight);
    observer.observe(contentRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="border-b border-[#C9CDD0]">
      <h3>
        <button
          type="button"
          id={`faq-question-${faq.id}`}
          aria-expanded={isOpen}
          aria-controls={`faq-answer-${faq.id}`}
          onClick={onToggle}
          className="
            group flex w-full
            cursor-pointer
            items-center justify-between
            gap-5 py-[25px]
            text-left
            focus-visible:outline-2
            focus-visible:outline-offset-[-2px]
            focus-visible:outline-[#FF9436]
            xl:min-h-[94px]
          "
        >
          {/* Question */}
          <span
            className="
              text-[16px]
              font-semibold
              leading-[1.35]
              tracking-[-0.3px]
              text-[#101010]
              sm:text-[18px]
              lg:text-[20px]
              xl:text-[21px]
            "
          >
            {faq.question}
          </span>

          {/* Click-only FAQ icon */}
          <span
            className={`
              relative flex h-[36px] w-[36px]
              shrink-0 items-center justify-center
              rounded-full border
              transition-all duration-300 ease-in-out
              xl:h-[48px] xl:w-[48px]
              ${
                isOpen
                  ? "border-[#FF9436] bg-[#FF9436]"
                  : "border-[#AEB3B7] bg-transparent"
              }
            `}
          >
            {/* Plus icon when closed */}
            <Plus
              size={20}
              strokeWidth={2}
              aria-hidden="true"
              className={`
                absolute text-[#111111]
                transition-all duration-300 ease-in-out
                ${isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"}
              `}
            />

            {/* White L-shaped icon when open */}
            <span
              className={`
                absolute flex items-center justify-center
                transition-all duration-300 ease-in-out
                ${isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"}
              `}
            >
              <CornerIcon />
            </span>
          </span>
        </button>
      </h3>

      {/* Accordion answer */}
      <div
        id={`faq-answer-${faq.id}`}
        role="region"
        aria-labelledby={`faq-question-${faq.id}`}
        aria-hidden={!isOpen}
        className="
          overflow-hidden
          transition-[height] duration-300 ease-in-out
        "
        style={{
          height: isOpen ? `${contentHeight}px` : "0px",
        }}
      >
        <div ref={contentRef}>
          <p
            className="
              max-w-[680px]
              pb-[22px]
              text-[14px]
              font-normal
              leading-[1.65]
              text-[#697887]
              sm:text-[15px]
              xl:text-[16px]
            "
          >
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

// Main FAQ section
export default function FAQSection() {
  // All FAQ items start closed
  const [activeFAQ, setActiveFAQ] = useState(null);

  const handleToggle = (id) => {
    setActiveFAQ((previous) => (previous === id ? null : id));
  };

  return (
    <section id="faqs" className="w-full bg-[#F7FAFC]">
      <div
        className="
          mx-auto grid w-full
          max-w-[1440px]
          grid-cols-1
          gap-[40px]
          px-5 py-[45px]
          sm:px-8 sm:py-[60px]
          lg:grid-cols-[43%_57%]
          lg:gap-0
          lg:px-[60px]
          xl:min-h-[623px]
          xl:grid-cols-[45%_55%]
          xl:px-[80px]
          xl:pt-[8px]
          xl:pb-[15px]
        "
      >
        {/* LEFT - Heading section */}
        <div
          className="
            flex flex-col items-start
            lg:pr-[60px]
            xl:pr-[85px]
          "
        >
          {/* Eyebrow */}
          <div
            className="
              mb-[17px]
              flex items-center
              gap-[12px]
            "
          >
            <span className="h-px w-[25px] bg-[#8F969C]" />

            <span
              className="
                text-[12px]
                font-medium
                text-[#111111]
                sm:text-[13px]
              "
            >
              FAQs
            </span>
          </div>

          {/* Main heading */}
          <h2
            className="
              text-[34px]
              font-semibold
              leading-[1.12]
              tracking-[-1.3px]
              text-[#111111]
              sm:text-[44px]
              lg:text-[47px]
              xl:text-[52px]
            "
          >
            Frequently Asked
            <br className="hidden sm:block" /> Questions.
          </h2>

          {/* Description */}
          <p
            className="
              mt-[19px]
              max-w-[430px]
              text-[15px]
              font-normal
              leading-[1.6]
              text-[#62676B]
              sm:text-[16px]
              xl:text-[17px]
            "
          >
            Answers for wholesalers, distributors and institutions planning an
            export inquiry.
          </p>

          {/* Contact link */}
          <Link
            to="/contact"
            className="
              group mt-[17px]
              inline-flex items-center
              gap-[10px]
              text-[14px]
              font-medium
              text-[#111111]
              transition-colors
              hover:text-[#FF9436]
              sm:text-[15px]
            "
          >
            Still have a question? Contact our team
            <ArrowUpRight
              size={18}
              strokeWidth={2}
              className="
                transition-transform duration-200
                group-hover:translate-x-1
                group-hover:-translate-y-1
              "
            />
          </Link>
        </div>

        {/* RIGHT - FAQ Accordion */}
        <div className="w-full min-w-0">
          <div className="border-t border-[#C9CDD0]">
            {faqData.map((faq) => (
              <FAQItem
                key={faq.id}
                faq={faq}
                isOpen={activeFAQ === faq.id}
                onToggle={() => handleToggle(faq.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
