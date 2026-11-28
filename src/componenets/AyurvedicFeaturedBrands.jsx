import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const brands = [
  {
    id: 1,
    name: "Dabur",
    letter: "D",
    category: "Churna, oils, avaleha",
    link: "/brands/dabur",
  },
  {
    id: 2,
    name: "Baidyanath",
    letter: "B",
    category: "Classical formulations",
    link: "/brands/baidyanath",
  },
  {
    id: 3,
    name: "Dhootapapeshwar",
    letter: "D",
    category: "Vati, bhasma, asava",
    link: "/brands/dhootapapeshwar",
  },
  {
    id: 4,
    name: "Himalaya",
    letter: "H",
    category: "Tablets, syrups, care",
    link: "/brands/himalaya",
  },
  {
    id: 5,
    name: "Jiva Ayurveda",
    letter: "JA",
    category: "Herbal supplements",
    link: "/brands/jiva-ayurveda",
  },
  {
    id: 6,
    name: "Kerala Ayurveda",
    letter: "KA",
    category: "Thailam, kashayam",
    link: "/brands/kerala-ayurveda",
  },
  {
    id: 7,
    name: "Sri Sri Tattva",
    letter: "SS",
    category: "Wellness & personal care",
    link: "/brands/sri-sri-tattva",
  },
];

// Individual brand card
function BrandCard({ brand }) {
  return (
    <article
      className="
        group flex h-full min-w-0
        flex-col items-center
        text-center
      "
    >
      {/* Brand lettermark */}
      <Link
        to={brand.link}
        aria-label={`Explore ${brand.name}`}
        className="
          flex h-[105px] w-full
          items-center justify-center
          text-[#153462]
          transition-transform duration-300
          group-hover:-translate-y-[3px]
          sm:h-[125px]
          lg:h-[135px]
        "
      >
        <span
          className="
            font-serif text-[25px]
            font-bold leading-none
            tracking-[-0.7px]
            sm:text-[27px]
            xl:text-[28px]
          "
        >
          {brand.letter}
        </span>
      </Link>

      {/* Brand name */}
      <h3
        className="
          mt-[12px]
          text-[13px] font-semibold
          leading-[1.4]
          text-[#153462]
          sm:text-[14px]
          lg:mt-[15px]
          xl:text-[16px]
        "
      >
        {brand.name}
      </h3>

      {/* Brand category */}
      <p
        className="
          mt-[5px]
          min-h-[30px]
          text-[10px] font-normal
          leading-[1.4]
          text-[#728197]
          sm:text-[11px]
          xl:text-[12px]
        "
      >
        {brand.category}
      </p>

      {/* Explore link */}
      <Link
        to={brand.link}
        className="
          mt-[14px]
          inline-flex items-center
          justify-center gap-[6px]
          whitespace-nowrap
          text-[11px] font-semibold
          leading-none
          text-[#244A3C]
          transition-colors duration-300
          hover:text-[#FF9436]
          xl:mt-[17px]
          xl:text-[12px]
        "
      >
        Explore Brand
        <ArrowRight size={12} strokeWidth={2} />
      </Link>
    </article>
  );
}

export default function AyurvedicFeaturedBrands() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(6);

  // Responsive number of visible brands
  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;

      if (width < 640) {
        setVisibleCount(2);
      } else if (width < 1024) {
        setVisibleCount(3);
      } else {
        setVisibleCount(6);
      }
    };

    updateVisibleCount();

    window.addEventListener("resize", updateVisibleCount);

    return () => {
      window.removeEventListener("resize", updateVisibleCount);
    };
  }, []);

  // Keep slide position valid when resizing
  const maxSlide = Math.max(0, brands.length - visibleCount);

  const currentSlide = Math.min(slideIndex, maxSlide);

  const nextSlide = () => {
    setSlideIndex((prev) => Math.min(prev + 1, maxSlide));
  };

  const previousSlide = () => {
    setSlideIndex((prev) => Math.max(prev - 1, 0));
  };

  // Progress follows visible items
  const progress = ((currentSlide + visibleCount) / brands.length) * 100;

  return (
    <section
      id="featured-ayurvedic-brands"
      className="
        w-full bg-white
        text-[#153462]
      "
    >
      <div
        className="
          mx-auto flex w-full
          max-w-[1440px]
          lg:min-w-[90%]
          flex-col
          px-5 py-[45px]
          sm:px-8 sm:py-[65px]
          lg:px-[65px]
          xl:h-[806px]
          xl:px-[78px]
        "
      >
        {/* SECTION HEADING */}
        <div
          className="
            flex flex-col
            justify-between
            gap-6
            sm:flex-row
            sm:items-end
          "
        >
          {/* Left content */}
          <div className="max-w-[760px]">
            {/* Eyebrow */}
            <p
              className="
                text-[11px]
                font-semibold
                leading-none
                text-[#254C3C]
                sm:text-[12px]
                xl:text-[13px]
              "
            >
              Featured Ayurvedic Brands
            </p>

            {/* Main heading */}
            <h2
              className="
                mt-[15px]
                max-w-[740px]
                text-[30px]
                font-bold
                leading-[1.16]
                tracking-[-0.8px]
                text-[#153462]
                sm:text-[39px]
                lg:text-[44px]
                xl:mt-[17px]
                xl:text-[46px]
                xl:tracking-[-1px]
              "
            >
              Traditional Wellness, Trusted
              <br className="hidden sm:block" /> Names
            </h2>

            {/* Description */}
            <p
              className="
                mt-[20px]
                max-w-[680px]
                text-[13px]
                font-normal
                leading-[1.6]
                text-[#718097]
                sm:text-[15px]
                xl:mt-[23px]
                xl:text-[17px]
              "
            >
              Explore Ayurvedic and herbal product ranges from established
              Indian brands.
            </p>
          </div>

          {/* SLIDER ARROWS */}
          <div
            className="
              flex shrink-0
              items-center gap-[10px]
              sm:mb-[4px]
              xl:mb-[2px]
            "
          >
            {/* Previous */}
            <button
              type="button"
              onClick={previousSlide}
              disabled={currentSlide === 0}
              aria-label="Previous brands"
              className="
                flex h-[44px] w-[44px]
                cursor-pointer items-center
                justify-center rounded-full
                bg-[#153462] text-white
                transition-all duration-300
                hover:bg-[#FF9436]
                disabled:cursor-not-allowed
                disabled:bg-[#AEB8C8]
                disabled:hover:bg-[#AEB8C8]
              "
            >
              <ArrowLeft size={17} strokeWidth={1.8} />
            </button>

            {/* Next */}
            <button
              type="button"
              onClick={nextSlide}
              disabled={currentSlide >= maxSlide}
              aria-label="Next brands"
              className="
                flex h-[44px] w-[44px]
                cursor-pointer items-center
                justify-center rounded-full
                bg-[#153462] text-white
                transition-all duration-300
                hover:bg-[#FF9436]
                disabled:cursor-not-allowed
                disabled:bg-[#AEB8C8]
                disabled:hover:bg-[#AEB8C8]
              "
            >
              <ArrowRight size={17} strokeWidth={1.8} />
            </button>
          </div>
        </div>

        {/* BRANDS SLIDER */}
        <div
          className="
            mt-[50px] w-full
            overflow-hidden
            sm:mt-[65px]
            lg:mt-[75px]
            xl:mt-[82px]
          "
        >
          <div
            className="
              flex w-full
              transition-transform
              duration-500
              ease-in-out
            "
            style={{
              transform: `translateX(-${currentSlide * (100 / visibleCount)}%)`,
            }}
          >
            {brands.map((brand) => (
              <div
                key={brand.id}
                className="
                  min-w-0 shrink-0
                  px-[6px]
                  sm:px-[10px]
                  lg:px-[11px]
                "
                style={{
                  width: `${100 / visibleCount}%`,
                }}
              >
                <BrandCard brand={brand} />
              </div>
            ))}
          </div>
        </div>

        {/* PROGRESS BAR */}
        <div
          className="
            relative mt-[55px]
            h-[2px] w-full
            bg-[#E6EDE6]
            sm:mt-[62px]
            xl:mt-[57px]
          "
        >
          <div
            className="
              absolute left-0 top-0
              h-full bg-[#E7A516]
              transition-[width] duration-500
              ease-in-out
            "
            style={{
              width: `${progress}%`,
            }}
          />
        </div>

        {/* BOTTOM CONTENT */}
        <div
          className="
            mt-[38px]
            flex flex-col
            items-start justify-between
            gap-5
            sm:flex-row sm:items-center
            xl:mt-[40px]
          "
        >
          {/* Disclaimer */}
          <p
            className="
              max-w-[650px]
              text-[11px]
              font-normal
              leading-[1.6]
              text-[#718097]
              sm:text-[12px]
              xl:text-[13px]
            "
          >
            Logos shown are placeholders. Brands listed subject to approved
            catalogue.
          </p>

          {/* CTA */}
          <Link
            to="/ayurveda/brands"
            className="
              inline-flex h-[47px]
              shrink-0 items-center
              justify-center gap-[12px]
              rounded-full
              bg-[#153462]
              px-[24px]
              text-[12px] font-semibold
              text-white
              transition-all duration-300
              hover:bg-[#FF9436]
              sm:text-[13px]
              xl:h-[49px]
              xl:px-[25px]
            "
          >
            View All Ayurvedic Brands
            <ArrowRight size={16} strokeWidth={1.8} />
          </Link>
        </div>
      </div>
    </section>
  );
}
