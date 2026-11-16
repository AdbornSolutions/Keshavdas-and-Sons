import { ArrowRight } from "lucide-react";

import Baidyanath from "../assets/baidyanath.png";
import Dabur from "../assets/daburtree.png";
import Dhootapapeshwar from "../assets/dhootapapeshwar.png";
import Himalaya from "../assets/himalaya1930.png";

const brands = [
  {
    id: 1,
    name: "Dabur",
    logo: Dabur,
    link: "/brands/dabur",
  },
  {
    id: 2,
    name: "Baidyanath",
    logo: Baidyanath,
    link: "/brands/baidyanath",
  },
  {
    id: 3,
    name: "Dhootapapeshwar",
    logo: Dhootapapeshwar,
    link: "/brands/dhootapapeshwar",
  },
  {
    id: 4,
    name: "Himalaya",
    logo: Himalaya,
    link: "/brands/himalaya",
  },
  {
    id: 5,
    name: "Dabur",
    logo: Dabur,
    link: "/brands/dabur",
  },
  {
    id: 6,
    name: "Baidyanath",
    logo: Baidyanath,
    link: "/brands/baidyanath",
  },
  {
    id: 7,
    name: "Dhootapapeshwar",
    logo: Dhootapapeshwar,
    link: "/brands/dhootapapeshwar",
  },
  {
    id: 8,
    name: "Himalaya",
    logo: Himalaya,
    link: "/brands/himalaya",
  },
];

export default function AyurvedicBrands() {
  return (
    <section className="w-full bg-[#F7F9FC]">
      <div
        className="
          relative mx-auto flex h-full w-full
          max-w-[1440px] flex-col
          px-4 py-7
          sm:px-8
          lg:px-[60px]
          xl:h-[357px]
          xl:px-[78px]
          xl:pt-[8px]
          xl:pb-0
        "
      >
        {/* Heading and button */}
        <div
          className="
            flex flex-col
            items-start justify-between
            gap-5
            sm:flex-row sm:items-end
            xl:items-start
          "
        >
          {/* Left content */}
          <div className="max-w-[560px]">
            <h2
              className="
                text-[27px] font-bold
                leading-[1.45]
                tracking-[-0.6px]
                text-[#111111]
                sm:text-[30px]
                xl:text-[35px]
              "
            >
              Discover Trusted Ayurvedic
              <br />
              <span className="text-[#FF8C2C]">Brands</span>
            </h2>

            <p
              className="
                mt-[6px] max-w-[535px]
                text-[13px] font-normal
                leading-[1.7]
                text-[#74859B]
                sm:text-[14px]
                xl:text-[16px]
              "
            >
              Explore a wide range of Ayurvedic and herbal wellness products
              from India's leading brands, bringing traditional wellness to
              global markets.
            </p>
          </div>

          {/* Explore All Brands button */}
          <a
            href="/brands"
            className="
              inline-flex h-[46px]
              shrink-0 items-center
              justify-center gap-[10px]
              rounded-[9px]
              border border-[#BFC6CD]
              bg-transparent px-[12px]
              text-[14px] font-semibold
              text-[#111111]
              transition-all duration-300
              hover:border-[#FF8C2C]
              hover:bg-[#FF8C2C]
              hover:text-white
              xl:mt-[109px]
            "
          >
            Explore All Brands
            <ArrowRight size={16} strokeWidth={1.8} />
          </a>
        </div>

        {/* Brand logos - Responsive scroll */}
        <div
          className="
            mt-[30px] w-full
            overflow-x-auto
            scroll-smooth
            pb-3
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
            xl:mt-[20px]
            xl:overflow-visible
            xl:pb-0
          "
        >
          <div
            className="
              flex w-max items-center
              gap-[18px]
              sm:gap-[24px]
              xl:w-full
              xl:justify-between
              xl:gap-0
            "
          >
            {brands.map((brand) => (
              <a
                key={brand.id}
                href={brand.link}
                aria-label={`Explore ${brand.name}`}
                className="
                  group flex shrink-0
                  h-[105px] w-[105px]
                  items-center justify-center
                  overflow-hidden
                  rounded-full
                  transition-all duration-300
                  hover:-translate-y-[4px]
                  sm:h-[120px] sm:w-[120px]
                  xl:h-[133px] xl:w-[133px]
                "
              >
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  loading="lazy"
                  className="
                    block h-full w-full
                    object-contain
                    transition-transform duration-300
                    group-hover:scale-105
                  "
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
