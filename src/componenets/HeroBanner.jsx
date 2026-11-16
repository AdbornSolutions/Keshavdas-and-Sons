import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import FreeDelivery from "../assets/free-delivery.png";
import SpecialOffers from "../assets/special-offers.png";
import WhyChooseUs from "../assets/why-choose-us.png";
import WorldwideDelivery from "../assets/worldwide-delivery.png";

// Banner data
const banners = [
  {
    id: 1,
    images: [WorldwideDelivery, FreeDelivery],
    alt: ["Worldwide Delivery", "Free Delivery"],
  },
  {
    id: 2,
    images: [SpecialOffers, FreeDelivery],
    alt: ["Special Offers", "Free Delivery"],
  },
  {
    id: 3,
    images: [WhyChooseUs, FreeDelivery],
    alt: ["Why Choose Us", "Free Delivery"],
  },
];

export default function HeroBanner() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full overflow-hidden">
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          speed={800}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
          }}
          className="hero-banner-swiper"
        >
          {banners.map((banner) => (
            <SwiperSlide key={banner.id}>
              {/* Two images in each slide */}
              <div
                className="
                  grid w-full
                  grid-cols-[65.6944%_34.3056%]
                  aspect-[1440/316]
                  overflow-hidden
                "
              >
                {/* Left image */}
                <img
                  src={banner.images[0]}
                  alt={banner.alt[0]}
                  className="
                    block h-full w-full
                    min-w-0 object-fill
                  "
                />

                {/* Right image */}
                <img
                  src={banner.images[1]}
                  alt={banner.alt[1]}
                  className="
                    block h-full w-full
                    min-w-0 object-fill
                  "
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
