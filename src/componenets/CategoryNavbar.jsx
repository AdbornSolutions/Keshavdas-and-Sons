
import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Anti-Cancer Medicines",
    items: [],
  },
  {
    id: 2,
    name: "Steroid Tablets & Injectables",
    items: [],
  },
  {
    id: 3,
    name: "Eye Drops & Ear Care",
    items: [],
  },
  {
    id: 4,
    name: "Skin Care Products",
    items: [],
  },
  {
    id: 5,
    name: "Weight Loss Medicines",
    items: [],
  },
  {
    id: 6,
    name: "Other Pharmaceutical Products",
    items: [],
  },
];

export default function CategoryNavbar({
  onCategorySelect = () => {},
}) {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!navRef.current?.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("pointerdown", handleOutsideClick);
    return () =>
      document.removeEventListener(
        "pointerdown",
        handleOutsideClick
      );
  }, []);

  return (
    <nav
      ref={navRef}
      aria-label="Product categories"
      className="
        relative z-40 w-full
        h-[39px]
        bg-[#FF9436]
      "
    >
      <div
        className="
          mx-auto h-full w-full
          max-w-[1440px]
          overflow-x-auto
          [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
        "
      >
        <div
          className="
            flex h-full w-max min-w-full
            items-center
            justify-start
            gap-[12px]
            px-[16px]
            md:justify-center
            md:px-[24px]
            xl:gap-[15px]
          "
        >
          {categories.map((category) => (
            <div
              key={category.id}
              className="relative flex h-full shrink-0 items-center"
            >
              <button
                type="button"
                aria-expanded={
                  activeDropdown === category.id
                }
                onClick={() => {
                  if (!category.items.length) {
                    onCategorySelect(category);
                    return;
                  }

                  setActiveDropdown(
                    activeDropdown === category.id
                      ? null
                      : category.id
                  );
                }}
                className="
                  flex h-full items-center
                  justify-center gap-[5px]
                  whitespace-nowrap
                  text-[12px]
                  font-normal
                  leading-none
                  text-white
                  transition-opacity
                  duration-200
                  hover:opacity-80
                  focus-visible:outline
                  focus-visible:outline-2
                  focus-visible:outline-white
                  cursor-pointer
                  sm:text-[12.5px]
                  lg:text-[16px]
                "
              >
                <span>{category.name}</span>

                <ChevronDown
                  size={11}
                  strokeWidth={2}
                  className={
                    "shrink-0 transition-transform " +
                    (activeDropdown === category.id
                      ? "rotate-180"
                      : "")
                  }
                />
              </button>
            </div>
          ))}
        </div>
      </div>

      {categories.map((category) =>
        category.items.length > 0 &&
        activeDropdown === category.id ? (
          <div
            key={category.id}
            className="
              absolute left-1/2 top-full
              w-[min(350px,calc(100vw-24px))]
              -translate-x-1/2
              rounded-b-lg bg-white
              p-3 shadow-lg
            "
          >
            {category.items.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  onCategorySelect(item);
                  setActiveDropdown(null);
                }}
                className="
                  block w-full rounded px-3 py-2
                  text-left text-sm text-gray-700
                  hover:bg-gray-100
                "
              >
                {item.name}
              </button>
            ))}
          </div>
        ) : null
      )}
    </nav>
  );
}
