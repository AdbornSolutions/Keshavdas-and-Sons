import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

// Product category images
import EyeDropsImage from "../assets/eye-drops.webp";
import GenericImage from "../assets/generic-medicines.webp";
import InjectionsImage from "../assets/injections.webp";
import SkinCareImage from "../assets/skin-care.webp";
import SpecialtyImage from "../assets/specialty-medicines.webp";
import TabletsImage from "../assets/tablets-capsules.webp";

const categories = [
  {
    id: 1,
    number: "01",
    title: "Specialty Medicines",
    image: SpecialtyImage,
    description:
      "Specialised and oncology medicines for hospital and specialist supply, available to appropriately licensed organisations.",
    link: "/products/specialty-medicines",
  },
  {
    id: 2,
    number: "02",
    title: "Tablets & Capsules",
    image: TabletsImage,
    description:
      "A wide range of pharmaceutical tablets and capsules for international wholesale and healthcare requirements.",
    link: "/products/tablets-capsules",
  },
  {
    id: 3,
    number: "03",
    title: "Injections & Infusions",
    image: InjectionsImage,
    description:
      "Explore injectable medicines and infusion products for professional healthcare supply requirements.",
    link: "/products/injections-infusions",
  },
  {
    id: 4,
    number: "04",
    title: "Eye Drops & Ophthalmic Products",
    image: EyeDropsImage,
    description:
      "Ophthalmic formulations and eye-care products for international healthcare and pharmaceutical enquiries.",
    link: "/products/ophthalmic-products",
  },
  {
    id: 5,
    number: "05",
    title: "Skin Care & Dermatology",
    image: SkinCareImage,
    description:
      "Explore dermatological products and skin-care formulations for different healthcare requirements.",
    link: "/products/dermatology",
  },
  {
    id: 6,
    number: "06",
    title: "Generic & Branded Medicines",
    image: GenericImage,
    description:
      "Generic and branded pharmaceutical medicines across multiple therapeutic categories and dosage forms.",
    link: "/products/generic-branded",
  },
];

export default function PharmaceuticalExpertise() {
  const [activeCategory, setActiveCategory] = useState(1);

  const selectedCategory =
    categories.find((item) => item.id === activeCategory) || categories[0];

  return (
    <section id="pharmaceutical-expertise" className="w-full bg-[#F7FAFC]">
      <div
        className="
          mx-auto w-full max-w-[1440px]
          px-5 py-10
          sm:px-8 sm:py-12
          lg:px-[60px]
          xl:min-h-[750px]
          xl:px-[82px]
          xl:pt-[12px]
          xl:pb-[45px]
        "
      >
        {/* SECTION HEADING */}
        <div
          className="
            flex flex-col
            items-start justify-between
            gap-5
            lg:flex-row
            lg:items-end
            lg:gap-[40px]
          "
        >
          {/* Left heading */}
          <h2
            className="
              max-w-[750px]
              text-[24px]
              font-bold
              leading-[1.12]
              tracking-[-0.8px]
              text-[#111111]
              sm:text-[36px]
              lg:text-[40px]
              xl:text-[44px]
            "
          >
            Expertise Across{" "}
            <span className="text-[#FF9436]">Pharmaceutical</span>
            <br className="hidden sm:block" />
            <span className="text-[#FF9436]">Categories</span>
          </h2>

          {/* Right description */}
          <p
            className="
              max-w-[550px]
              text-[14px]
              font-normal
              leading-[1.45]
              text-[#111111]
              sm:text-[16px]
              lg:max-w-[480px]
              xl:mb-[5px]
              xl:text-[17px]
            "
          >
            Explore product categories and pharmaceutical formulations relevant
            to international healthcare markets.
          </p>
        </div>

        {/* CATEGORY CONTENT */}
        <div
          className="
            mt-[40px]
            grid grid-cols-1
            items-start
            gap-[35px]
            lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]
            lg:gap-[55px]
            xl:mt-[52px]
            xl:grid-cols-[550px_minmax(0,1fr)]
            xl:gap-[65px]
          "
        >
          {/* LEFT - Category navigation */}
          <div className="w-full min-w-0">
            <div
              className="
                flex w-full flex-col
                border-t border-[#E0E5E9]
              "
            >
              {categories.map((category) => {
                const isActive = activeCategory === category.id;

                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => setActiveCategory(category.id)}
                    aria-pressed={isActive}
                    className={`
                      group relative
                      flex min-h-[80px]
                      w-full cursor-pointer
                      items-center gap-[30px]
                      border-b
                      px-0 py-[15px]
                      text-left
                      transition-all duration-300
                      sm:min-h-[88px]
                      lg:min-h-[93px]
                      xl:min-h-[94px]
                      ${isActive ? "border-[#D89817]" : "border-[#E0E5E9]"}
                    `}
                  >
                    {/* Category number */}
                    <span
                      className={`
                        w-[42px] shrink-0
                        text-[24px] font-semibold
                        leading-none
                        transition-colors duration-300
                        sm:text-[28px]
                        xl:text-[30px]
                        ${isActive ? "text-[#D89817]" : "text-[#C8D0D7]"}
                      `}
                    >
                      {category.number}
                    </span>

                    {/* Category name */}
                    <span
                      className={`
                        text-[16px]
                        font-medium
                        leading-[1.3]
                        tracking-[-0.2px]
                        transition-colors duration-300
                        sm:text-[18px]
                        lg:text-[20px]
                        xl:text-[22px]
                        ${
                          isActive
                            ? "text-[#173B68]"
                            : "text-[#8190A2] group-hover:text-[#173B68]"
                        }
                      `}
                    >
                      {category.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT - Selected category */}
          <div
            className="
              flex w-full min-w-0
              flex-col
            "
          >
            {/* Image container */}
            <div
              className="
                relative w-full
                overflow-hidden
                rounded-[22px]
                bg-[#DCE5EB]
                aspect-[675/540]
                sm:rounded-[26px]
                xl:rounded-[30px]
              "
            >
              <img
                key={selectedCategory.id}
                src={selectedCategory.image}
                alt={selectedCategory.title}
                loading="lazy"
                className="
                  block h-full w-full
                  object-cover object-center
                  animate-[fadeIn_0.35s_ease-in-out]
                "
              />

              {/* Category label overlay */}
              <div
                className="
                  absolute left-[20px] top-[20px]
                  flex max-w-[calc(100%-40px)]
                  items-center gap-[8px]
                  rounded-full
                  bg-[#17365A]
                  px-[13px] py-[9px]
                  text-white
                  sm:left-[22px]
                  sm:top-[22px]
                "
              >
                <span
                  className="
                    text-[11px]
                    font-medium
                    text-[#E7B546]
                    sm:text-[12px]
                  "
                >
                  {selectedCategory.number}
                </span>

                <span className="h-[12px] w-px bg-white/40" />

                <span
                  className="
                    truncate
                    text-[11px]
                    font-medium
                    sm:text-[12px]
                  "
                >
                  {selectedCategory.title}
                </span>
              </div>
            </div>

            {/* Image bottom description */}
            <div
              className="
                mt-[24px]
                flex flex-col
                items-start justify-between
                gap-[18px]
                sm:flex-row
                sm:items-start
                xl:mt-[28px]
              "
            >
              <p
                className="
                  max-w-[470px]
                  text-[13px]
                  font-normal
                  leading-[1.65]
                  text-[#718298]
                  sm:text-[14px]
                  xl:text-[16px]
                "
              >
                {selectedCategory.description}
              </p>

              {/* Explore Products */}
              <Link
                to={selectedCategory.link}
                className="
                  group inline-flex
                  shrink-0 items-center
                  gap-[10px]
                  whitespace-nowrap
                  text-[13px]
                  font-semibold
                  text-[#17365A]
                  transition-colors duration-300
                  hover:text-[#FF9436]
                  sm:text-[14px]
                  xl:text-[15px]
                "
              >
                Explore Products
                <ArrowUpRight
                  size={17}
                  strokeWidth={2}
                  className="
                    text-[#D89817]
                    transition-transform duration-300
                    group-hover:translate-x-[3px]
                    group-hover:-translate-y-[3px]
                  "
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Image transition */}
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
        `}
      </style>
    </section>
  );
}
