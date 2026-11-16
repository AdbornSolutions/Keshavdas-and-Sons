import { ArrowRight } from "lucide-react";
import Cetaphil from "../assets/cetaphil.png";
import CIR from "../assets/cir.png";
import Dabur from "../assets/dabur.png";
import Himalaya from "../assets/himalaya.png";
import Moov from "../assets/moov.png";
import MuscleBlaze from "../assets/muscleblaze.png";
import Tejasya from "../assets/tejasya.png";

const brands = [
  {
    id: 1,
    name: "Tata 1mg Tejasya",
    logo: Tejasya,
    link: "/brands/tejasya",
  },
  {
    id: 2,
    name: "MuscleBlaze",
    logo: MuscleBlaze,
    link: "/brands/muscleblaze",
  },
  {
    id: 3,
    name: "CIR",
    logo: CIR,
    link: "/brands/cir",
  },
  {
    id: 4,
    name: "Dabur",
    logo: Dabur,
    link: "/brands/dabur",
  },
  {
    id: 5,
    name: "Himalaya",
    logo: Himalaya,
    link: "/brands/himalaya",
  },
  {
    id: 6,
    name: "Cetaphil",
    logo: Cetaphil,
    link: "/brands/cetaphil",
  },
  {
    id: 7,
    name: "Moov",
    logo: Moov,
    link: "/brands/moov",
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
          <a
            href="/brands"
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
              hover:border-[#FF8C2C]
              hover:bg-[#FF9436]
              hover:text-white
              xl:mt-[109px]
            "
          >
            Explore All Brands
            <ArrowRight size={16} strokeWidth={1.8} />
          </a>
        </div>

        {/* Brand logos */}
        <div
          className="
            mt-[24px] w-full
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
              flex w-max
              items-center gap-[18px]
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
                  h-[160px] w-[160px]
                  transition-all duration-300
                  hover:-translate-y-[4px]
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
        </div>
      </div>
    </section>
  );
}
