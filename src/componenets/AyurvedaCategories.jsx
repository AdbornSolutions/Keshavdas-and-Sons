
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

// Ayurveda category images
import Tablets from "../assets/ayurvedic-tablets.webp";
import Powders from "../assets/herbal-powders.webp";
import Oils from "../assets/ayurvedic-oils.webp";
import Syrups from "../assets/herbal-syrups.webp";
import Traditional from "../assets/traditional-ayurveda.webp";
import PersonalCare from "../assets/herbal-personal-care.webp";

const categories = [
  {
    id: 1,
    number: "01",
    title: "Ayurvedic Tablets & Capsules",
    description:
      "Vati, gutika and capsule formulations in measured unit doses.",
    image: Tablets,
    link: "/ayurveda/tablets-capsules",
    layout: "large-left",
    background: "#E7EFE6",
  },
  {
    id: 2,
    number: "02",
    title: "Herbal Powders & Churna",
    description:
      "Single-herb and classical blended churna preparations.",
    image: Powders,
    link: "/ayurveda/herbal-powders",
    layout: "small-top",
    background: "#F5EFE4",
  },
  {
    id: 3,
    number: "03",
    title: "Ayurvedic Oils",
    description:
      "Thailam and botanical oils for external application.",
    image: Oils,
    link: "/ayurveda/oils",
    layout: "small-top",
    background: "#F5EFE4",
  },
  {
    id: 4,
    number: "04",
    title: "Herbal Syrups & Juices",
    description:
      "Liquid formulations, arishta and herbal juices.",
    image: Syrups,
    link: "/ayurveda/syrups-juices",
    layout: "small-middle",
    background: "#E7EFE6",
  },
  {
    id: 5,
    number: "05",
    title: "Traditional Ayurvedic Formulations",
    description:
      "Avaleha, bhasma and classical text-based preparations.",
    image: Traditional,
    link: "/ayurveda/traditional-formulations",
    layout: "large-right",
    background: "#F5EFE4",
  },
  {
    id: 6,
    number: "06",
    title: "Herbal Personal Care",
    description:
      "Herbal skincare, haircare and everyday personal care.",
    image: PersonalCare,
    link: "/ayurveda/personal-care",
    layout: "wide-bottom",
    background: "#F5EFE4",
  },
];

function CategoryArrow({ category }) {
  return (
    <Link
      to={category.link}
      aria-label={`Explore ${category.title}`}
      className="
        flex h-[34px] w-[34px]
        shrink-0 items-center justify-center
        rounded-full bg-white
        text-[#16335E]
        transition-all duration-300
        hover:bg-[#16335E]
        hover:text-white
        group-hover:rotate-45
        xl:h-[36px] xl:w-[36px]
      "
    >
      <ArrowUpRight size={17} strokeWidth={1.8} />
    </Link>
  );
}

function CategoryContent({ category }) {
  return (
    <div className="flex min-w-0 flex-1 flex-col">
      <span
        className="
          text-[11px] font-medium
          leading-none
          text-[#956817]
          xl:text-[12px]
        "
      >
        {category.number}
      </span>

      <h3
        className="
          mt-[10px]
          text-[18px] font-semibold
          leading-[1.3]
          tracking-[-0.35px]
          text-[#142F5D]
          xl:text-[19px]
        "
      >
        {category.title}
      </h3>

      <p
        className="
          mt-[7px]
          text-[12px] font-normal
          leading-[1.45]
          text-[#65748A]
          xl:text-[13px]
        "
      >
        {category.description}
      </p>
    </div>
  );
}

function CategoryCard({ category }) {
  const isLarge =
    category.layout === "large-left" ||
    category.layout === "large-right";

  const isWide = category.layout === "wide-bottom";

  return (
    <article
      className={`
        group relative flex min-w-0
        overflow-hidden rounded-[20px]
        transition-all duration-300
        hover:shadow-[0_12px_30px_rgba(18,45,77,0.10)]

        ${
          isWide
            ? "flex-col sm:flex-row lg:flex-row"
            : "flex-col"
        }

        ${
          category.layout === "large-left"
            ? "lg:col-start-1 lg:row-start-1 lg:row-span-2"
            : ""
        }

        ${
          category.layout === "small-top"
            ? "lg:col-start-2 lg:row-start-1"
            : ""
        }

        ${
          category.layout === "small-middle"
            ? "lg:col-start-2 lg:row-start-2"
            : ""
        }

        ${
          category.layout === "large-right"
            ? "lg:col-start-3 lg:row-start-2 lg:row-span-2"
            : ""
        }

        ${
          category.layout === "wide-bottom"
            ? "lg:col-start-1 lg:row-start-3 lg:col-span-2"
            : ""
        }

        ${
          category.id === 3
            ? "lg:col-start-3 lg:row-start-1"
            : ""
        }
      `}
      style={{
        backgroundColor: category.background,
      }}
    >
      {/* CATEGORY IMAGE */}
      <Link
        to={category.link}
        aria-label={`View ${category.title}`}
        className={`
          relative block shrink-0
          overflow-hidden
          rounded-[16px]

          ${
            isWide
              ? `
                h-[225px] w-full
                sm:h-full sm:w-[50%]
                lg:h-full lg:w-[50%]
              `
              : isLarge
                ? `
                  h-[280px] w-full
                  sm:h-[320px]
                  lg:h-[65%]
                `
                : `
                  h-[190px] w-full
                  lg:h-[46%]
                `
          }
        `}
      >
        <img
          src={category.image}
          alt={category.title}
          loading="lazy"
          className="
            block h-full w-full
            object-cover object-center
            transition-transform duration-700
            group-hover:scale-105
          "
        />
      </Link>

      {/* CATEGORY INFORMATION */}
      <div
        className={`
          relative flex flex-1
          min-w-0 flex-col
          p-[16px]
          sm:p-[18px]
          xl:p-[20px]

          ${
            isWide
              ? "justify-center"
              : "justify-start"
          }
        `}
      >
        <div className="flex items-start justify-between gap-2">
          <CategoryContent category={category} />

          {/* Desktop arrow for compact cards */}
          {!isLarge && !isWide && (
            <div className="mt-[2px]">
              <CategoryArrow category={category} />
            </div>
          )}
        </div>

        {/* Arrow at bottom of larger cards */}
        {(isLarge || isWide) && (
          <div
            className={`
              ${
                isLarge
                  ? "absolute right-[17px] top-[17px] lg:top-[15px]"
                  : "mt-[18px]"
              }
            `}
          >
            <CategoryArrow category={category} />
          </div>
        )}
      </div>
    </article>
  );
}

export default function AyurvedaCategories() {
  return (
    <section
      id="ayurveda-categories"
      className="w-full overflow-hidden bg-[#F8F5EC]"
    >
      <div
        className="
          mx-auto w-full
          max-w-[1440px] 
          lg:min-w-[90%]
          px-5 py-[45px]
          sm:px-8 sm:py-[60px]
          lg:px-[60px]
          xl:min-h-[1166px]
          xl:px-[78px]
          xl:pt-[86px]
          xl:pb-[65px]
        "
      >
        {/* SECTION HEADER */}
        <div
          className="
            mb-[42px]
            flex flex-col
            items-start justify-between
            gap-6
            md:flex-row md:items-end
            xl:mb-[48px]
          "
        >
          {/* Heading */}
          <div className="max-w-[750px]">
            <span
              className="
                text-[11px] font-semibold
                leading-none
                text-[#203D36]
                sm:text-[12px]
              "
            >
              Explore Our Collection
            </span>

            <h2
              className="
                mt-[16px]
                text-[30px] font-bold
                leading-[1.13]
                tracking-[-0.8px]
                text-[#153462]
                sm:text-[39px]
                lg:text-[43px]
                xl:text-[45px]
              "
            >
              Discover Ayurveda in Every Form
            </h2>

            <p
              className="
                mt-[20px]
                max-w-[575px]
                text-[14px] font-normal
                leading-[1.7]
                text-[#63748B]
                sm:text-[16px]
                xl:text-[17px]
              "
            >
              Browse Ayurvedic and herbal products by formulation to
              discover options relevant to your sourcing requirements.
            </p>
          </div>

          {/* Explore all button */}
          <Link
            to="/ayurveda/categories"
            className="
              inline-flex h-[46px]
              shrink-0 items-center
              justify-center
              rounded-full
              border border-[#173C70]
              bg-transparent
              px-[23px]
              text-[13px] font-semibold
              text-[#173C70]
              transition-all duration-300
              hover:bg-[#173C70]
              hover:text-white
              xl:mb-[2px]
            "
          >
            Explore All Ayurveda Categories
          </Link>
        </div>

        {/* CATEGORY GRID */}
        <div
          className="
            grid w-full
            grid-cols-1
            gap-[20px]
            sm:grid-cols-2
            lg:grid-cols-3
            lg:grid-rows-[238px_238px_238px]
            xl:gap-[20px]
          "
        >
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
