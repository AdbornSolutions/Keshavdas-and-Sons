import { useId } from "react";

import ManufacturingImage from "../assets/manufacturing.webp";
import WarehouseImage from "../assets/warehouse.webp";

function DiagonalImages() {
  const id = useId().replace(/:/g, "");

  return (
    <div
      className="
        relative w-full max-w-[525px]
        aspect-[253/271]
        min-w-0
      "
    >
      <svg
        viewBox="0 0 253 271"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        className="absolute inset-0 block h-full w-full"
        role="img"
        aria-label="Pharmaceutical warehouse and manufacturing facility"
      >
        <defs>
          {/* Upper image: warehouse */}
          <clipPath id={`${id}-warehouse`}>
            <path
              d="
                M 14 0
                H 239
                Q 253 0 253 14
                V 23
                Q 253 29 247 34
                L 15 220
                Q 0 232 0 215
                V 14
                Q 0 0 14 0
                Z
              "
            />
          </clipPath>

          {/* Lower image: manufacturing */}
          <clipPath id={`${id}-manufacturing`}>
            <path
              d="
                M 0 252
                Q 0 245 7 240
                L 238 54
                Q 253 41 253 59
                V 257
                Q 253 271 239 271
                H 14
                Q 0 271 0 257
                Z
              "
            />
          </clipPath>
        </defs>

        {/* Warehouse image */}
        <image
          href={WarehouseImage}
          x="-40"
          y="-65"
          width="300"
          height="300"
          preserveAspectRatio="xMidYMid slice"
          clipPath={`url(#${id}-warehouse)`}
        />

        {/* Manufacturing image */}
        <image
          href={ManufacturingImage}
          x="-40"
          y="25"
          width="300"
          height="300"
          preserveAspectRatio="xMidYMid slice"
          clipPath={`url(#${id}-manufacturing)`}
        />
      </svg>

      {/* Top label */}
      <div
        className="
          absolute left-[3%] top-[3%]
          z-10 flex max-w-[90%]
          items-center gap-[12px]
          rounded-full bg-[#00000033]/75
          px-[20px] py-[16px]
          backdrop-blur-[5px]
        "
      >
        <span
          className="
            h-[16px] w-[16px]
            shrink-0 rounded-full
            bg-[#FF9436]
          "
        />

        <span
          className="
            whitespace-nowrap
            text-[9px]
            font-medium leading-none
            text-white
            sm:text-[8px]
            lg:text-[9px]
            xl:text-[12px]
          "
        >
          International Business Focus
        </span>
      </div>

      {/* Bottom label */}
      <div
        className="
          absolute bottom-[3%] right-[3%]
          z-10 flex max-w-[90%]
          items-center gap-[12px]
          rounded-full bg-[#414141]/75
          px-[20px] py-[16px]
          backdrop-blur-[5px]
        "
      >
        <span
          className="
            h-[16px] w-[16px]
            shrink-0 rounded-full
            bg-[#FF9436]
          "
        />

        <span
          className="
            whitespace-nowrap
            text-[9px]
            font-medium leading-none
            text-white
            sm:text-[8px]
            lg:text-[9px]
            xl:text-[12px]
          "
        >
          India-Based Pharmaceutical Sourcing
        </span>
      </div>
    </div>
  );
}

export default function WhoWeAre() {
  return (
    <section id="who-we-are" className="w-full overflow-hidden bg-[#F7FAFC]">
      <div
        className="
          relative mx-auto w-full
          max-w-[1440px] lg:min-w-[90%]
          px-5 py-10
          sm:px-8 sm:py-12
          lg:px-[60px]
          xl:min-h-[616px]
          xl:px-[76px]
          xl:py-0
        "
      >
        {/* Small heading */}
        <div
          className="
            mb-[25px]
            flex items-center gap-[10px]
            xl:absolute
            xl:left-[76px]
            xl:top-0
            xl:mb-0
          "
        >
          <span className="h-[3px] w-[58px] shrink-0 bg-black" />

          <span
            className="
              text-[16px]
              font-medium leading-none
              text-black
              sm:text-[18px]
              xl:text-[22px]
            "
          >
            Who We Are
          </span>
        </div>

        {/* Main content */}
        <div
          className="
            grid w-full grid-cols-1
            items-center
            gap-[35px]
            md:grid-cols-2
            md:gap-[40px]
            lg:gap-[65px]
            xl:min-h-[616px]
            xl:grid-cols-[525px_minmax(0,1fr)]
            xl:gap-[100px]
          "
        >
          {/* LEFT - Diagonal image composition */}
          <div
            className="
              relative w-full min-w-0
              max-w-[525px]
              justify-self-center
              md:justify-self-start
              xl:mt-[35px]
            "
          >
            <DiagonalImages />
          </div>

          {/* RIGHT - Original content */}
          <div
            className="
              flex min-w-0 flex-col
              items-start text-left
              xl:self-start
              xl:pt-[114px]
            "
          >
            <h2
              className="
                w-full
                text-[28px]
                font-bold
                leading-[1.16]
                tracking-[-0.7px]
                text-[#111111]
                sm:text-[33px]
                lg:text-[37px]
                xl:text-[42px]
                xl:tracking-[-1px]
              "
            >
              Making <span className="text-[#FF9436]">Pharmaceutical</span>
              <br className="hidden lg:block" />
              <span className="text-[#FF9436]"> Sourcing</span> More Connected
            </h2>

            {/* First paragraph */}
            <p
              className="
                mt-[25px]
                max-w-[650px]
                text-[14px]
                font-normal
                leading-[1.5]
                text-[#111111]
                indent-[90px]
                text-justify
                sm:text-[16px]
                lg:text-[18px]
                xl:mt-[32px]
                xl:max-w-full
                xl:text-[21px]
                xl:leading-[1.28]
              "
            >
              Keshavdas and Sons is a pharmaceutical export-focused business
              connecting international buyers with medicines sourced from India.
              Our portfolio includes generic and branded pharmaceutical
              products, specialty medicines, and multiple dosage forms serving a
              range of healthcare requirements.
            </p>

            {/* Second paragraph */}
            <p
              className="
                mt-[22px]
                max-w-[650px]
                text-[14px]
                font-normal
                leading-[1.5]
                text-[#111111]
                indent-[90px]
                text-justify
                sm:text-[16px]
                lg:text-[18px]
                xl:mt-[28px]
                xl:max-w-full
                xl:text-[21px]
                xl:leading-[1.28]
              "
            >
              We work with enquiries from pharmaceutical distributors, medical
              wholesalers, healthcare institutions, and other relevant business
              partners, helping them explore product availability, sourcing
              requirements, and international supply arrangements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
