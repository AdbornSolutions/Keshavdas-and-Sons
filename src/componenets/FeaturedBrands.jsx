import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// Updated pharmaceutical brand logos
import Centurion from "../assets/centurion.webp";
import DrMorepen from "../assets/dr-morepen.webp";
import Evolve from "../assets/evolve.webp";
import Healing from "../assets/healing.webp";
import Jeerima from "../assets/jeerima.webp";
import Signature from "../assets/signature.webp";

const brands = [
  {
    id: 1,
    name: "Jeerima",
    logo: Jeerima,
    link: "/brands/jeerima",
  },
  {
    id: 2,
    name: "Evolve",
    logo: Evolve,
    link: "/brands/evolve",
  },
  {
    id: 3,
    name: "Centurion",
    logo: Centurion,
    link: "/brands/centurion",
  },
  {
    id: 4,
    name: "Healing",
    logo: Healing,
    link: "/brands/healing",
  },
  {
    id: 5,
    name: "Signature",
    logo: Signature,
    link: "/brands/signature",
  },
  {
    id: 6,
    name: "Dr. Morepen",
    logo: DrMorepen,
    link: "/brands/dr-morepen",
  },
];

export default function FeaturedBrands() {
  return (
    <section
      className="
        w-full bg-[#F7F9FC]
        xl:h-[345px]
      "
    >
      <div
        className="
          mx-auto flex h-full w-full
          max-w-[1440px] flex-col
          px-4 py-8
          sm:px-8
          lg:px-[60px]
          xl:px-[80px]
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
                leading-[1.42]
                tracking-[-0.6px]
                text-[#111111]
                sm:text-[31px]
                xl:text-[35px]
              "
            >
              Featured Pharmaceutical
              <br />
              <span className="text-[#FF9436]">Brands</span>
            </h2>

            <p
              className="
                mt-[7px] max-w-[525px]
                text-[13px] font-normal
                leading-[1.7]
                text-[#77889D]
                sm:text-[15px]
                xl:text-[16px]
              "
            >
              Discover a wide selection of pharmaceutical and healthcare brands
              <br className="hidden sm:block" /> in one place.
            </p>
          </div>

          {/* Explore button */}
          <Link
            to="/brands"
            className="
              inline-flex h-[46px]
              shrink-0 items-center
              justify-center gap-[10px]
              rounded-[9px]
              border border-[#C5CBD1]
              bg-transparent px-[13px]
              text-[15px] font-semibold
              text-[#151515]
              transition-all duration-300
              hover:border-[#FF9436]
              hover:bg-[#FF9436]
              hover:text-white
              xl:mt-[109px]
            "
          >
            Explore All Brands
            <ArrowRight size={16} strokeWidth={1.8} />
          </Link>
        </div>

        {/* Brand logos - responsive slider */}
        <div
          className="
            mt-[24px] w-full
            overflow-x-auto
            scroll-smooth
            pb-3
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
            xl:mt-[30px]
            xl:overflow-visible
            xl:pb-0
          "
        >
          <div
            className="
              flex w-max
              items-center gap-[18px]
              sm:gap-[24px]
              xl:w-full
              xl:justify-between
              xl:gap-0
            "
          >
            {brands.map((brand) => (
              <Link
                key={brand.id}
                to={brand.link}
                aria-label={`Explore ${brand.name}`}
                className={`
      group flex shrink-0
      h-[110px] w-[110px]
      items-center justify-center
      overflow-hidden rounded-full
      transition-all duration-300
      hover:-translate-y-[4px]
      sm:h-[130px] sm:w-[130px]
      xl:h-[160px] xl:w-[160px]
      ${brand.id === 5 ? "bg-[#666]" : "bg-transparent"}
    `}
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
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
