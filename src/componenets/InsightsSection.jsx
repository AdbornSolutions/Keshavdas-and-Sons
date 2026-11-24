import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import GlobalTrade from "../assets/global-trade.webp";
import Ophthalmic from "../assets/ophthalmic.webp";
import Pharmaceutical from "../assets/pharmaceutical.webp";

const insights = [
  {
    id: 1,
    category: "Global Trade",
    date: "Oct 14, 2026",
    title:
      "Understanding Documentation for International Pharmaceutical Shipments",
    image: GlobalTrade,
    link: "/insights/international-pharmaceutical-shipments",
  },
  {
    id: 2,
    category: "Pharmaceutical Industry",
    date: "Sep 28, 2026",
    title: "How Wholesale Buyers Can Prepare a Clear Export Inquiry",
    image: Pharmaceutical,
    link: "/insights/wholesale-export-inquiry",
  },
  {
    id: 3,
    category: "Product Updates",
    date: "Sep 09, 2026",
    title: "A Closer Look at Our Ophthalmic Product Range",
    image: Ophthalmic,
    link: "/insights/ophthalmic-products",
  },
];

function InsightCard({ insight, featured = false }) {
  return (
    <article className="group flex min-w-0 flex-col">
      {/* Article image */}
      <Link
        to={insight.link}
        className="
          block w-full overflow-hidden
          rounded-[18px]
          sm:rounded-[22px]
          xl:rounded-[24px]
        "
      >
        <img
          src={insight.image}
          alt={insight.title}
          loading="lazy"
          className="
            block h-[240px] w-full
            object-cover object-center
            transition-transform duration-500
            group-hover:scale-105
            sm:h-[300px]
            lg:h-[350px]
          "
        />
      </Link>

      {/* Article details */}
      <div className="mt-[20px] flex flex-col">
        {/* Category and date */}
        <div
          className="
            flex flex-wrap items-start
            justify-between gap-x-3 gap-y-2
            text-[11px]
            sm:text-[12px]
            xl:text-[12px]
          "
        >
          <span
            className="
              max-w-[145px] font-semibold
              leading-[1.4] text-[#111111]
            "
          >
            {insight.category}
          </span>

          <div
            className="
              flex items-center gap-[12px]
              text-[#707982]
            "
          >
            <span className="h-[3px] w-[3px] rounded-full bg-[#9CA3AF]" />
            <time>{insight.date}</time>
          </div>
        </div>

        {/* Article title */}
        <h3
          className={`
            mt-[17px] font-medium
            leading-[1.15]
            tracking-[-0.45px]
            text-[#101010]
            ${
              featured
                ? "text-[22px] sm:text-[24px] lg:text-[25px]"
                : "text-[20px] sm:text-[22px] lg:text-[24px]"
            }
          `}
        >
          <Link
            to={insight.link}
            className="
              transition-colors duration-200
              hover:text-[#FF9436]
            "
          >
            {insight.title}
          </Link>
        </h3>

        {/* Read more */}
        <Link
          to={insight.link}
          className="
            mt-[23px] inline-flex
            w-fit items-center gap-[7px]
            text-[13px] font-medium
            text-[#111111]
            transition-colors duration-200
            hover:text-[#FF9436]
            sm:text-[14px]
          "
        >
          Read More
          <ArrowUpRight
            size={15}
            strokeWidth={2}
            className="
              transition-transform duration-200
              group-hover:translate-x-[2px]
              group-hover:-translate-y-[2px]
            "
          />
        </Link>
      </div>
    </article>
  );
}

export default function InsightsSection() {
  return (
    <section id="insights" className="w-full bg-[#F7FAFC]">
      <div
        className="
          mx-auto w-full max-w-[1440px]
          px-5 py-[45px]
          sm:px-8 sm:py-[60px]
          lg:px-[60px]
          xl:min-h-[800px]
          xl:px-[78px]
          xl:pt-[16px]
          xl:pb-[35px]
        "
      >
        {/* Section heading */}
        <div
          className="
            flex flex-col
            items-start justify-between
            gap-6
            sm:flex-row sm:items-center
          "
        >
          {/* Left heading */}
          <div>
            {/* Eyebrow */}
            <div
              className="
                mb-[20px] flex
                items-center gap-[13px]
              "
            >
              <span
                className="
                  h-px w-[25px]
                  bg-[#8B9198]
                "
              />

              <span
                className="
                  text-[12px] font-medium
                  text-[#111111]
                  sm:text-[13px]
                "
              >
                Insights & Updates
              </span>
            </div>

            {/* Main heading */}
            <h2
              className="
                text-[24px] font-semibold
                leading-[1.12]
                tracking-[-0.7px]
                text-[#111111]
                sm:text-[36px]
                lg:text-[40px]
                xl:text-[43px]
              "
            >
              Knowledge, News &amp;
              <br className="hidden sm:block" />
              <span className="text-[#FF9436]">Pharmaceutical Updates.</span>
            </h2>
          </div>

          {/* Explore button */}
          <Link
            to="/insights"
            className="
              inline-flex h-[54px]
              shrink-0 items-center
              justify-between gap-[22px]
              rounded-full
              border border-[#DAE1E8]
              bg-transparent
              pl-[22px] pr-[7px]
              text-[13px] font-medium
              text-[#111111]
              transition-all duration-300
              hover:border-[#FF9436]
              hover:bg-white
              sm:mt-[48px]
              xl:h-[56px]
              xl:text-[14px]
            "
          >
            Explore Our Insights
            <span
              className="
                flex h-[40px] w-[40px]
                items-center justify-center
                rounded-full
                bg-[#FF9436]
                text-white
                transition-transform duration-300
                hover:rotate-[-30deg]
                xl:h-[42px]
                xl:w-[42px]
              "
            >
              <ArrowRight size={19} strokeWidth={2} />
            </span>
          </Link>
        </div>

        {/* Articles grid */}
        <div
          className="
            mt-[35px] grid
            grid-cols-1 gap-[30px]
            sm:grid-cols-2
            lg:grid-cols-[2.1fr_1fr_1fr]
            lg:gap-[32px]
            xl:mt-[40px]
            xl:gap-[34px]
          "
        >
          {insights.map((insight, index) => (
            <div
              key={insight.id}
              className={index === 0 ? "sm:col-span-2 lg:col-span-1" : ""}
            >
              <InsightCard insight={insight} featured={index === 0} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
