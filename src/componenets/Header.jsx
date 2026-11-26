
import { useState } from "react";
import { Link } from "react-router-dom";
import KNSLogo from "../assets/kns-logo.webp";
import { Menu, Search, X, ChevronDown } from "lucide-react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Ayurveda", href: "/ayurveda" },
  { label: "Partnership", href: "/partnership" },
];

const categories = [
  { label: "All Categories", value: "all" },
  { label: "Ayurveda", value: "ayurveda" },
  { label: "Medicines", value: "medicines" },
  { label: "Wellness", value: "wellness" },
];

export default function Header({
  onSearch = ({ query, category }) =>
    console.log({ query, category }),
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");

  function handleSubmit(event) {
    event.preventDefault();
    onSearch({ query: query.trim(), category });
  }

  return (
    <header className="relative z-50 w-full bg-white shadow-[0_1px_3px_rgba(0,0,0,0.07)]">
      <div className="relative mx-auto flex h-[93px] w-full max-w-[1440px] items-center justify-between px-5 md:px-10 lg:min-w-[90%] xl:px-[86px]">

        {/* Desktop navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden shrink-0 items-center gap-[24px] lg:flex"
        >
          {navigation.map(({ label, href }) => (
            <Link
              key={label}
              to={href}
              className="whitespace-nowrap text-[18px] font-medium text-[#243746] transition-colors hover:text-[#f68e26] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f68e26]"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Always centered logo on desktop */}
        <Link
          to="/"
          aria-label="Home"
          className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
        >
          <img
            src={KNSLogo}
            alt="Khandesh and Sons Med Exports"
            className="h-auto w-[150px] object-contain sm:w-[170px] xl:w-[187px]"
          />
        </Link>

        {/* Desktop search */}
        <form
          onSubmit={handleSubmit}
          role="search"
          className="ml-auto hidden h-[48px] w-[382px] shrink-0 items-center overflow-hidden rounded-[13px] border border-[#cbdbe8] bg-[#f6f7f8] shadow-[0_3px_7px_rgba(0,0,0,0.07)] lg:flex"
        >
          <label
            className="sr-only"
            htmlFor="desktop-search"
          >
            Search medicines
          </label>

          <input
            id="desktop-search"
            type="search"
            placeholder="Search medicines"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="min-w-0 flex-1 bg-transparent px-[13px] text-[12px] text-[#24313e] outline-none placeholder:text-[#aeb4bb]"
          />

          <span
            className="h-[23px] w-px bg-[#cdd2d8]"
            aria-hidden="true"
          />

          <label
            htmlFor="desktop-category"
            className="sr-only"
          >
            Category
          </label>

          <div className="relative flex h-full w-[146px] shrink-0 items-center">
            <select
              id="desktop-category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="h-full w-full cursor-pointer appearance-none bg-transparent pl-[17px] pr-7 text-[12px] text-[#233243] outline-none"
            >
              {categories.map((item) => (
                <option
                  key={item.value}
                  value={item.value}
                >
                  {item.label}
                </option>
              ))}
            </select>

            <ChevronDown
              size={12}
              className="pointer-events-none absolute right-[15px] text-[#34536c]"
            />
          </div>

          <button
            type="submit"
            aria-label="Search"
            className="flex h-full w-[69px] shrink-0 items-center justify-center bg-[#ff912e] text-white transition-colors hover:bg-[#ed7e1f]"
          >
            <Search size={24} strokeWidth={2} />
          </button>
        </form>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={
            menuOpen
              ? "Close navigation"
              : "Open navigation"
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() =>
            setMenuOpen((open) => !open)
          }
          className="ml-auto inline-flex h-11 w-11 items-center justify-center rounded-lg text-[#1b2936] hover:bg-slate-100 lg:hidden"
        >
          {menuOpen ? (
            <X size={25} />
          ) : (
            <Menu size={25} />
          )}
        </button>
      </div>

      {/* Mobile/tablet search */}
      <form
        onSubmit={handleSubmit}
        role="search"
        className="mx-auto flex h-[44px] w-[calc(100%-32px)] max-w-[600px] overflow-hidden rounded-[11px] border border-[#cbdbe8] bg-[#f6f7f8] shadow-sm lg:hidden"
      >
        <label
          htmlFor="mobile-search"
          className="sr-only"
        >
          Search medicines
        </label>

        <input
          id="mobile-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search medicines"
          className="min-w-0 flex-1 bg-transparent px-3 text-xs outline-none placeholder:text-[#aeb4bb]"
        />

        <label
          htmlFor="mobile-category"
          className="sr-only"
        >
          Category
        </label>

        <div className="relative flex w-[118px] shrink-0 items-center border-l border-[#cdd2d8] sm:w-[146px]">
          <select
            id="mobile-category"
            value={category}
            onChange={(e) =>
              setCategory(e.target.value)
            }
            className="h-full w-full appearance-none bg-transparent pl-2 pr-5 text-[10px] text-[#233243] outline-none sm:text-xs"
          >
            {categories.map((item) => (
              <option
                key={item.value}
                value={item.value}
              >
                {item.label}
              </option>
            ))}
          </select>

          <ChevronDown
            size={11}
            className="pointer-events-none absolute right-2"
          />
        </div>

        <button
          type="submit"
          aria-label="Search"
          className="flex w-[50px] shrink-0 items-center justify-center bg-[#ff912e] text-white"
        >
          <Search size={21} />
        </button>
      </form>

      <div className="h-3 lg:hidden" />

      {/* Mobile navigation */}
      {menuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="absolute left-0 top-full w-full border-t border-slate-100 bg-white px-5 py-3 shadow-lg lg:hidden"
        >
          {navigation.map(({ label, href }) => (
            <Link
              key={label}
              to={href}
              onClick={() => setMenuOpen(false)}
              className="block rounded-md px-3 py-3 text-[15px] text-[#1b2936] hover:bg-orange-50 hover:text-[#f68e26]"
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
