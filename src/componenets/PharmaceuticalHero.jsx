import PharmaHero from "../assets/pharmaceutical-hero.webp";

export default function PharmaceuticalHero() {
  return (
    <section
      id="pharmaceutical-hero"
      className="
        relative w-full
        overflow-hidden
        bg-[#FFF8F3]
      "
    >
      <div
        className="
          relative mx-auto w-full
          overflow-hidden
        "
      >
        <img
          src={PharmaHero}
          alt="We connect India's medicines to global healthcare markets"
          fetchPriority="high"
          className="
            block h-auto w-full
            object-contain
            h-full
            object-fill
          "
        />
      </div>
    </section>
  );
}
