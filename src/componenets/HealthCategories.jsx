import DERMACARE from "../assets/dermacare.png";
import DIABETES from "../assets/diabetes.png";
import EYECARE from "../assets/eyecare.png";
import HEARTCARE from "../assets/heartcare.png";
import KIDNEYCARE from "../assets/kidneycare.png";
import LIVERCARE from "../assets/livercare.png";
import MUSCLECARE from "../assets/musclecare.png";
import RESPIRATORYCARE from "../assets/respiratorycare.png";
import STOMACHCARE from "../assets/stomach-care.png";

import { useRef } from "react";

const categories = [
  {
    name: "STOMACH CARE",
    image: STOMACHCARE,
  },
  {
    name: "DIABETES",
    image: DIABETES,
  },
  {
    name: "HEART CARE",
    image: HEARTCARE,
  },
  {
    name: "LIVER CARE",
    image: LIVERCARE,
  },
  {
    name: "MUSCLE CARE",
    image: MUSCLECARE,
  },
  {
    name: "KIDNEY CARE",
    image: KIDNEYCARE,
  },
  {
    name: "DERMA CARE",
    image: DERMACARE,
  },
  {
    name: "RESPIRATORY CARE",
    image: RESPIRATORYCARE,
  },
  {
    name: "EYE CARE",
    image: EYECARE,
  },
];

export default function HealthCategories() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    scrollRef.current?.scrollBy({
      left: direction * 180,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full bg-[#F7F9FB]">
      <div className="relative mx-auto flex h-[165px] max-w-[1440px] items-center px-4 sm:px-8 lg:px-[80px]">
        {/* Previous button - mobile/tablet */}
        <button
          onClick={() => scroll(-1)}
          aria-label="Previous categories"
          className="absolute left-1 z-10 rounded-full bg-white p-1 shadow-md lg:hidden"
        >
        </button>

        {/* Categories */}
        <div
          ref={scrollRef}
          className="
            flex w-full items-center
            gap-[14px]
            overflow-x-auto
            scroll-smooth
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
            lg:justify-center
          "
        >
          {categories.map((category) => {
            return (
              <a
                key={category.name}
                href=""
                className="
                  group relative
                  flex h-[165px] w-[130px]
                  shrink-0 flex-col items-center
                  rounded-[14px]
                  border border-[#D7DEE5]
                  bg-[#FAFBFC]
                  p-[8px]
                  transition-all duration-300
                  hover:border-[#F79332]
                  hover:shadow-md
                "
              >
                {/* Category image */}
                <div className="h-[135px] w-full overflow-hidden rounded-[9px]">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="
                        h-full w-full object-cover transition-transform duration-300
                        group-hover:scale-110
                      "
                    loading="lazy"
                  />
                </div>

                {/* Label */}
                <span
                  className="
                    mt-auto mb-[3px]
                    whitespace-nowrap text-center
                    text-[10px] font-medium
                    leading-none
                    text-[#17365A]
                  "
                >
                  {category.name}
                </span>
              </a>
            );
          })}
        </div>

        {/* Next button - mobile/tablet */}
        <button
          onClick={() => scroll(1)}
          aria-label="Next categories"
          className="absolute right-1 z-10 rounded-full bg-white p-1 shadow-md lg:hidden"
        >
        </button>
      </div>
    </section>
  );
}
