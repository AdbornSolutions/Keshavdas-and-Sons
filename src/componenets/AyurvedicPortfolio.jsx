import { ArrowUpRight, Send } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

// Product images
import ArogyavardhiniVati from "../assets/arogyavardhini-vati.webp";
import AshwagandhaCapsules from "../assets/ashwagandha-capsules.webp";
import Ashwagandha from "../assets/ashwagandha.webp";
import DhanwantharamThailam from "../assets/dhanwantharam-thailam.webp";
import MahanarayanTail from "../assets/mahanarayan-tail.webp";
import NeemFaceWash from "../assets/neem-face-wash.webp";
import SeptilinSyrup from "../assets/septilin-syrup.webp";
import TriphalaChurna from "../assets/triphala-churna.webp";

const filters = [
  "All Products",
  "Tablets",
  "Capsules",
  "Oils",
  "Powders",
  "Syrups",
  "Herbal Care",
];

const products = [
  {
    id: 1,
    brand: "Himalaya",
    name: "Ashwagandha",
    category: "Tablets",
    dosage: "Tablets",
    packSize: "60 tablets",
    description:
      "Single-herb tablet formulation prepared from ashwagandha root.",
    image: Ashwagandha,
    slug: "ashwagandha",
  },
  {
    id: 2,
    brand: "Sri Sri Tattva",
    name: "Ashwagandha Capsules",
    category: "Capsules",
    dosage: "Capsules",
    packSize: "On request",
    description: "Capsule formulation containing ashwagandha root extract.",
    image: AshwagandhaCapsules,
    slug: "ashwagandha-capsules",
  },
  {
    id: 3,
    brand: "Dabur",
    name: "Mahanarayan Tail",
    category: "Oils",
    dosage: "Oils",
    packSize: "100 ml",
    description:
      "Classical multi-herb oil preparation intended for external use.",
    image: MahanarayanTail,
    slug: "mahanarayan-tail",
  },
  {
    id: 4,
    brand: "Baidyanath",
    name: "Triphala Churna",
    category: "Powders",
    dosage: "Powders",
    packSize: "On request",
    description: "Traditional powder blend of amalaki, bibhitaki and haritaki.",
    image: TriphalaChurna,
    slug: "triphala-churna",
  },
  {
    id: 5,
    brand: "Himalaya",
    name: "Septilin Syrup",
    category: "Syrups",
    dosage: "Syrups",
    packSize: "200 ml",
    description: "Multi-ingredient herbal syrup formulation.",
    image: SeptilinSyrup,
    slug: "septilin-syrup",
  },
  {
    id: 6,
    brand: "Kerala Ayurveda",
    name: "Dhanwantharam Thailam",
    category: "Oils",
    dosage: "Oils",
    packSize: "200 ml",
    description: "Classical Kerala-style herbal oil for external application.",
    image: DhanwantharamThailam,
    slug: "dhanwantharam-thailam",
  },
  {
    id: 7,
    brand: "Dhootapapeshwar",
    name: "Arogyavardhini Vati",
    category: "Tablets",
    dosage: "Tablets",
    packSize: "On request",
    description:
      "Classical vati formulation described in traditional Ayurvedic texts.",
    image: ArogyavardhiniVati,
    slug: "arogyavardhini-vati",
  },
  {
    id: 8,
    brand: "Himalaya",
    name: "Purifying Neem Face Wash",
    category: "Herbal Care",
    dosage: "Herbal Care",
    packSize: "150 ml",
    description: "Herbal face wash formulated with neem and turmeric.",
    image: NeemFaceWash,
    slug: "purifying-neem-face-wash",
  },
];

// Reusable product card
function ProductCard({ product }) {
  return (
    <article
      className="
        group flex h-full min-w-0
        flex-col overflow-hidden
        rounded-[17px]
        bg-white
        shadow-[0_4px_16px_rgba(25,45,72,0.055)]
        transition-all duration-300
        hover:-translate-y-[3px]
        hover:shadow-[0_12px_24px_rgba(25,45,72,0.10)]
      "
    >
      {/* PRODUCT IMAGE */}
      <Link
        to={`/ayurveda/products/${product.slug}`}
        aria-label={`View ${product.name}`}
        className="
          relative block w-full
          shrink-0 overflow-hidden
          bg-[#EAE6DE]
          aspect-square
        "
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="
            h-full w-full
            object-cover object-center
            transition-transform duration-500
            group-hover:scale-105
          "
        />

        {/* Category label */}
        <span
          className="
            absolute left-[18px] top-[17px]
            text-[11px] font-medium
            leading-none
            text-[#244D45]
            sm:text-[12px]
            xl:left-[20px]
            xl:top-[20px]
          "
        >
          {product.category}
        </span>
      </Link>

      {/* PRODUCT INFORMATION */}
      <div
        className="
          flex flex-1 flex-col
          px-[16px] pt-[18px] pb-[17px]
          sm:px-[18px]
          xl:px-[20px]
          xl:pt-[19px]
          xl:pb-[18px]
        "
      >
        {/* Brand name */}
        <p
          className="
            text-[10px] font-medium
            leading-[1.4]
            text-[#315E50]
            sm:text-[11px]
            xl:text-[12px]
          "
        >
          {product.brand}
        </p>

        {/* Product title */}
        <Link
          to={`/ayurveda/products/${product.slug}`}
          className="
            mt-[3px]
            min-h-[42px]
            text-[17px] font-semibold
            leading-[1.25]
            tracking-[-0.3px]
            text-[#153462]
            transition-colors duration-200
            hover:text-[#FF9436]
            sm:text-[18px]
            xl:text-[19px]
          "
        >
          {product.name}
        </Link>

        {/* DOSAGE AND PACK SIZE */}
        <div
          className="
            mt-[21px]
            grid grid-cols-2
            gap-x-[12px]
            text-[#111111]
            xl:mt-[23px]
          "
        >
          {/* Dosage */}
          <div className="min-w-0">
            <p
              className="
                text-[11px] font-medium
                leading-[1.4]
                text-[#424C55]
                xl:text-[12px]
              "
            >
              Dosage form
            </p>

            <p
              className="
                mt-[3px]
                text-[12px] font-semibold
                leading-[1.4]
                text-[#171717]
                xl:text-[13px]
              "
            >
              {product.dosage}
            </p>
          </div>

          {/* Pack size */}
          <div className="min-w-0">
            <p
              className="
                text-[11px] font-medium
                leading-[1.4]
                text-[#424C55]
                xl:text-[12px]
              "
            >
              Pack size
            </p>

            <p
              className="
                mt-[3px]
                text-[12px] font-semibold
                leading-[1.4]
                text-[#171717]
                xl:text-[13px]
              "
            >
              {product.packSize}
            </p>
          </div>
        </div>

        {/* Description */}
        <p
          className="
            mt-[20px]
            min-h-[52px]
            text-[12px] font-normal
            leading-[1.5]
            text-[#75849A]
            sm:text-[13px]
            xl:mt-[21px]
            xl:text-[14px]
          "
        >
          {product.description}
        </p>

        {/* CARD ACTIONS */}
        <div
          className="
            mt-auto flex flex-wrap
            items-center justify-between
            gap-x-[8px] gap-y-[10px]
            pt-[16px]
            xl:pt-[18px]
          "
        >
          {/* View details */}
          <Link
            to={`/ayurveda/products/${product.slug}`}
            className="
              inline-flex items-center
              gap-[4px]
              whitespace-nowrap
              text-[11px] font-semibold
              text-[#153462]
              transition-colors duration-200
              hover:text-[#FF9436]
              sm:text-[12px]
            "
          >
            View Details
            <ArrowUpRight size={12} strokeWidth={1.8} />
          </Link>

          {/* Send enquiry */}
          <Link
            to={`/contact?product=${encodeURIComponent(product.name)}`}
            aria-label={`Send enquiry for ${product.name}`}
            className="
              inline-flex h-[34px]
              shrink-0 items-center
              justify-center gap-[6px]
              rounded-full
              bg-[#194C3C]
              px-[12px]
              text-[10px] font-semibold
              whitespace-nowrap
              text-white
              transition-colors duration-300
              hover:bg-[#153462]
              sm:h-[36px]
              sm:text-[11px]
              xl:h-[37px]
              xl:px-[14px]
            "
          >
            <Send size={13} strokeWidth={1.8} />
            Send Enquiry
          </Link>
        </div>
      </div>
    </article>
  );
}

// Main portfolio section
export default function AyurvedicPortfolio() {
  const [activeFilter, setActiveFilter] = useState("All Products");

  const filteredProducts =
    activeFilter === "All Products"
      ? products
      : products.filter((product) => product.category === activeFilter);

  return (
    <section id="ayurvedic-portfolio" className="w-full bg-[#F7F9FC]">
      <div
        className="
          mx-auto w-full
          max-w-[1440px]
          lg:min-w-[90%]
          px-5 py-[45px]
          sm:px-8 sm:py-[60px]
          lg:px-[65px]
          xl:min-h-[1550px]
          xl:px-[78px]
        "
      >
        {/* SECTION HEADING */}
        <div className="max-w-[800px]">
          {/* Eyebrow */}
          <p
            className="
              text-[11px] font-semibold
              leading-[1.4]
              text-[#244D45]
              sm:text-[12px]
              xl:text-[13px]
            "
          >
            Our Ayurveda Portfolio
          </p>

          {/* Heading */}
          <h2
            className="
              mt-[13px]
              text-[30px] font-bold
              leading-[1.18]
              tracking-[-0.7px]
              text-[#153462]
              sm:text-[39px]
              lg:text-[44px]
              xl:text-[46px]
              xl:tracking-[-1px]
            "
          >
            Explore Ayurvedic &amp; Herbal
            <br className="hidden sm:block" /> Formulations
          </h2>

          {/* Description */}
          <p
            className="
              mt-[20px]
              max-w-[650px]
              text-[13px] font-normal
              leading-[1.6]
              text-[#718097]
              sm:text-[15px]
              xl:text-[16px]
            "
          >
            Discover product information across our Ayurvedic catalogue and
            connect with us
            <br className="hidden sm:block" /> for relevant international
            sourcing enquiries.
          </p>
        </div>

        {/* CATEGORY FILTERS */}
        <div
          className="
            mt-[35px]
            w-full overflow-x-auto
            scroll-smooth
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
            xl:mt-[42px]
          "
        >
          <div
            className="
              flex w-max min-w-max
              items-center
              gap-[3px]
              rounded-full bg-white
              p-[4px]
            "
            role="group"
            aria-label="Filter Ayurvedic products"
          >
            {filters.map((filter) => {
              const isActive = activeFilter === filter;

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  aria-pressed={isActive}
                  className={`
                    inline-flex h-[34px]
                    shrink-0 cursor-pointer
                    items-center justify-center
                    rounded-full
                    px-[15px]
                    text-[11px] font-medium
                    whitespace-nowrap
                    transition-all duration-300
                    sm:text-[12px]
                    xl:h-[36px]
                    xl:px-[17px]
                    ${
                      isActive
                        ? "bg-[#153462] text-white"
                        : "bg-transparent text-[#64748B] hover:bg-[#EDF2F7] hover:text-[#153462]"
                    }
                  `}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>

        {/* PRODUCT GRID */}
        <div
          className="
            mt-[30px]
            grid w-full
            grid-cols-1
            gap-[18px]
            sm:grid-cols-2
            lg:grid-cols-3
            xl:mt-[32px]
            xl:grid-cols-4
            xl:gap-[20px]
          "
        >
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Empty results */}
        {filteredProducts.length === 0 && (
          <div
            className="
              py-20 text-center
              text-[15px]
              text-[#718097]
            "
          >
            No products found in this category.
          </div>
        )}
      </div>
    </section>
  );
}
