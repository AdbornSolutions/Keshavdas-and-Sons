import FreeDelivery from "../assets/free-delivery.png";
import WorldwideDelivery from "../assets/worldwide-delivery.png";

export default function HeroBanner() {
  return (
    <section className="w-full bg-white">
      <div
        className="
          mx-auto grid w-full
          max-w-[1440px]
          grid-cols-1
          overflow-hidden
          md:grid-cols-[65.6944%_34.3056%]
          xl:h-[316px]
        "
      >
        {/* Left banner */}
        <div className="min-w-0">
          <img
            src={WorldwideDelivery}
            alt="Delivery all over the world"
            className="
              block h-auto w-full
              md:aspect-[947/316]
              md:h-full md:object-fill
            "
          />
        </div>

        {/* Right banner */}
        <div className="min-w-0">
          <img
            src={FreeDelivery}
            alt="Free delivery on 500+ orders"
            className="
              block h-auto w-full
              md:aspect-[493/316]
              md:h-full md:object-fill
            "
          />
        </div>
      </div>
    </section>
  );
}
