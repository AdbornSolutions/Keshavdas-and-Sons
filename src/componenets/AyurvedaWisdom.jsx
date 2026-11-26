
import AyurvedaHerbs from "../assets/ayurveda-herbs.webp";
import AyurvedaProducts from "../assets/ayurveda-products.webp";

const features = [
  {
    number: "01",
    title: "Traditional Herbal Knowledge",
    description:
      "Formulations rooted in classical Ayurvedic texts and practice.",
  },
  {
    number: "02",
    title: "Diverse Product Formulations",
    description:
      "Powders, tablets, oils, syrups and traditional preparations.",
  },
  {
    number: "03",
    title: "International Product Discovery",
    description:
      "A structured catalogue for overseas healthcare businesses.",
  },
];

export default function AyurvedaWisdom() {
  return (
    <section
      id="ayurveda-wisdom"
      className="w-full overflow-hidden bg-[#F7F9FC]"
    >
      <div
        className="
          mx-auto grid w-full max-w-[1440px]
          grid-cols-1 items-center
          gap-10
          px-5 py-12
          sm:px-8
          md:grid-cols-[43%_minmax(0,1fr)]
          md:gap-8
          lg:px-[65px]
          xl:h-[640px]
          xl:grid-cols-[550px_minmax(0,1fr)]
          xl:gap-[55px]
          xl:px-[107px]
          xl:py-0
          lg:min-w-[90%]
        "
      >
        {/* LEFT IMAGE COMPOSITION */}
        <div
          className="
            relative mx-auto w-full
            max-w-[550px]
            md:mx-0
            xl:h-[630px]
          "
        >
          {/* Main Ayurveda image */}
          <div
            className="
              relative w-[76%]
              aspect-[380/508]
              overflow-hidden
              rounded-[22px]
              bg-[#E7E7E7]
              sm:w-[75%]
              xl:absolute
              xl:left-0
              xl:top-[7px]
              xl:h-[508px]
              xl:w-[380px]
              xl:rounded-[25px]
            "
          >
            <img
              src={AyurvedaHerbs}
              alt="Traditional Ayurvedic herbs and ingredients arranged on a wooden table"
              loading="lazy"
              className="
                block h-full w-full
                object-cover object-center
              "
            />
          </div>

          {/* Decorative curved golden line */}
          <svg
            viewBox="0 0 35 365"
            fill="none"
            aria-hidden="true"
            className="
              absolute right-[3%] top-0
              hidden h-[75%] w-[35px]
              overflow-visible
              md:block
              xl:left-[525px]
              xl:top-[7px]
              xl:h-[365px]
              xl:w-[35px]
            "
          >
            <path
              d="
                M 17 0
                C -2 63, 31 128, 17 190
                C 6 250, 27 293, 18 365
              "
              stroke="#E5A500"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </svg>

          {/* Bottom overlapping products image */}
          <div
            className="
              absolute bottom-0 right-[2%]
              z-10
              w-[53%]
              aspect-[265/195]
              overflow-hidden
              rounded-[15px]
              border-[5px] border-white
              bg-white
              shadow-[0_7px_20px_rgba(0,0,0,0.13)]
              sm:w-[50%]
              md:bottom-[-12px]
              xl:bottom-[-5px]
              xl:left-[197px]
              xl:right-auto
              xl:h-[195px]
              xl:w-[265px]
              xl:rounded-[17px]
            "
          >
            <img
              src={AyurvedaProducts}
              alt="Ayurvedic formulations and products displayed in a modern laboratory"
              loading="lazy"
              className="
                block h-full w-full
                object-cover object-center
              "
            />
          </div>

          {/* Mobile image overlap spacing */}
          <div className="h-[45px] md:hidden" />
        </div>

        {/* RIGHT CONTENT */}
        <div
          className="
            flex min-w-0 flex-col
            items-start
            md:py-5
            xl:self-start
            xl:pt-[17px]
          "
        >
          {/* Eyebrow */}
          <div className="mb-[14px] flex items-center gap-[11px]">
            <span className="h-px w-[23px] bg-[#7B7B7B]" />

            <span
              className="
                text-[11px] font-semibold
                uppercase leading-none
                tracking-[0.1px]
                text-[#111111]
                sm:text-[12px]
                xl:text-[13px]
              "
            >
              THE WISDOM OF AYURVEDA
            </span>
          </div>

          {/* Main heading */}
          <h2
            className="
              max-w-[650px]
              text-[29px]
              font-bold
              leading-[1.14]
              tracking-[-0.7px]
              text-[#111111]
              sm:text-[35px]
              lg:text-[39px]
              xl:text-[40px]
              xl:tracking-[-0.9px]
            "
          >
            A Tradition of Wellness,
            <span className="block text-[#FF832E]">
              Reimagined for Today's World
            </span>
          </h2>

          {/* Introduction */}
          <p
            className="
              mt-[22px]
              max-w-[590px]
              text-[14px]
              font-medium
              leading-[1.3]
              text-[#202020]
              sm:text-[16px]
              xl:mt-[23px]
              xl:text-[17px]
            "
          >
            Ayurveda is a traditional system of health
            knowledge originating in India, with a long
            history of using herbs, botanical ingredients,
            and specialized formulations.
          </p>

          {/* Secondary paragraph */}
          <p
            className="
              mt-[18px]
              max-w-[560px]
              text-[13px]
              font-normal
              leading-[1.35]
              text-[#454545]
              sm:text-[15px]
              xl:mt-[19px]
              xl:text-[16px]
            "
          >
            Today, Ayurvedic products are available in
            multiple forms, including herbal powders,
            tablets, capsules, oils, syrups, and traditional
            preparations.
          </p>

          {/* FEATURES */}
          <div
            className="
              mt-[35px]
              grid w-full
              grid-cols-1
              gap-x-[22px]
              gap-y-[30px]
              sm:grid-cols-3
              lg:gap-x-[28px]
              xl:mt-[43px]
              xl:gap-x-[35px]
            "
          >
            {features.map((feature) => (
              <div
                key={feature.number}
                className="flex min-w-0 flex-col items-start"
              >
                {/* Small orange circle */}
                <span
                  className="
                    mb-[17px]
                    block h-[13px] w-[13px]
                    rounded-full
                    border-[1.5px] border-[#E5A500]
                    bg-transparent
                  "
                />

                {/* Feature number */}
                <span
                  className="
                    text-[13px]
                    font-medium
                    leading-none
                    text-[#A66E00]
                    xl:text-[14px]
                  "
                >
                  {feature.number}
                </span>

                {/* Feature title */}
                <h3
                  className="
                    mt-[10px]
                    text-[15px]
                    font-semibold
                    leading-[1.45]
                    text-[#153567]
                    sm:text-[16px]
                    xl:text-[17px]
                  "
                >
                  {feature.title}
                </h3>

                {/* Feature description */}
                <p
                  className="
                    mt-[12px]
                    text-[12px]
                    font-normal
                    leading-[1.55]
                    text-[#718096]
                    sm:text-[13px]
                    xl:text-[14px]
                  "
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
