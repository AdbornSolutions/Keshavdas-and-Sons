import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
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
  const scrollRef = useRef(null);

  const scrollBrands = (direction) => {
    scrollRef.current?.scrollBy({
      left: direction * 170,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full bg-[#F7F9FC]">
      <div
        className="
          relative mx-auto w-full
          max-w-[1440px]
          px-4 py-7
          sm:px-8
          lg:px-[60px]
          xl:h-[357px]
          xl:px-[78px]
          xl:py-0
        "
      >
        {/* Heading and description */}
        <div
          className="
            flex flex-col
            items-start justify-between
            gap-5
            sm:flex-row
            xl:block
          "
        >
          <div className="xl:absolute xl:left-[78px] xl:top-[8px]">
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
              xl:absolute
              xl:right-[78px]
              xl:top-[145px]
            "
          >
            Explore All Brands
            <ArrowRight size={16} strokeWidth={1.8} />
          </a>
        </div>

        {/* Brand logos section */}
        <div
          className="
            relative mt-[30px]
            w-full
            xl:absolute
            xl:top-[222px]
            xl:left-[78px]
            xl:mt-0
            xl:w-[calc(100%-156px)]
          "
        >
          {/* Previous arrow */}
          <button
            type="button"
            aria-label="Previous brands"
            onClick={() => scrollBrands(-1)}
            className="
              absolute -left-2 top-1/2 z-10
              flex h-8 w-8
              -translate-y-1/2
              items-center justify-center
              rounded-full bg-white
              text-[#173B68]
              shadow-md
              cursor-pointer
              xl:hidden
            "
          >
            <ChevronLeft size={18} />
          </button>

          {/* Scrollable logo row */}
          <div
            ref={scrollRef}
            className="
              flex w-full items-center
              gap-[18px]
              overflow-x-auto
              scroll-smooth
              pb-2
              snap-x snap-mandatory
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
              sm:gap-[25px]
              xl:justify-between
              xl:gap-0
              xl:overflow-visible
              xl:pb-0
            "
          >
            {brands.map((brand) => (
              <a
                key={brand.id}
                href={brand.link}
                aria-label={`Explore ${brand.name}`}
                className="
                    h-[133px] w-[133px]
                "
              >
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  loading="lazy"
                  className="
                    object-contain
                    transition-transform duration-300
                    group-hover:scale-105
                  "
                />
              </a>
            ))}
          </div>

          {/* Next arrow */}
          <button
            type="button"
            aria-label="Next brands"
            onClick={() => scrollBrands(1)}
            className="
              absolute -right-2 top-1/2 z-10
              flex h-8 w-8
              -translate-y-1/2
              items-center justify-center
              rounded-full bg-white
              text-[#173B68]
              shadow-md
              cursor-pointer
              xl:hidden
            "
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
