// import { ArrowUpRight, Heart } from "lucide-react";
// import { useState } from "react";
// import Omega3 from "../assets/Omega3.webp";
// import Cofsils from "../assets/cofsils-gargle.webp";
// import Himalaya from "../assets/himalaya-wellness.webp";

// const products = [
//   {
//     id: 1,
//     name: "Omega 3 Fish Oil Capsules",
//     description:
//       "Omega-3 Fish Oil Capsules are rich in essential EPA and DHA fatty acids.",
//     price: 20,
//     image: Omega3,
//     category: "capsules",
//   },
//   {
//     id: 2,
//     name: "Cofsils Gargle",
//     description:
//       "Cofsils Gargle is an antiseptic solution formulated to help relieve...",
//     price: 20,
//     image: Cofsils,
//     category: "gargle",
//   },
//   {
//     id: 3,
//     name: "Himalaya Wellness",
//     description:
//       "Himalaya Tentex Royal is an Ayurvedic herbal formulation design...",
//     price: 20,
//     image: Himalaya,
//     category: "herbal",
//   },
//   {
//     id: 4,
//     name: "Himalaya Wellness",
//     description:
//       "Himalaya Tentex Royal is an Ayurvedic herbal formulation design...",
//     price: 20,
//     image: Himalaya,
//     category: "herbal",
//   },
//   {
//     id: 5,
//     name: "Cofsils Gargle",
//     description:
//       "Cofsils Gargle is an antiseptic solution formulated to help relieve...",
//     price: 20,
//     image: Cofsils,
//     category: "gargle",
//   },
//   {
//     id: 6,
//     name: "Cofsils Gargle",
//     description:
//       "Cofsils Gargle is an antiseptic solution formulated to help relieve...",
//     price: 20,
//     image: Cofsils,
//     category: "gargle",
//   },
// ];

// export default function ProductPortfolio({
//   onViewAll = () => {},
//   onProductClick = () => {},
// }) {
//   const [wishlist, setWishlist] = useState([]);

//   const toggleWishlist = (id) => {
//     setWishlist((prev) =>
//       prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
//     );
//   };

//   return (
//     <section className="w-full bg-[#F7F9FC]">
//       <div
//         className="
//           mx-auto w-full max-w-[1440px]
//           px-[16px] py-[25px]
//           sm:px-[35px]
//           lg:px-[60px]
//           xl:min-h-[510px]
//           xl:px-[80px]
//           xl:pt-[10px]
//           xl:pb-0
//         "
//       >
//         {/* Section header */}
//         <div
//           className="
//             mb-[28px] flex flex-col
//             items-start justify-between gap-4
//             sm:flex-row sm:items-end
//             xl:mb-0 xl:h-[186px]
//             xl:items-start
//           "
//         >
//           {/* Heading and description */}
//           <div className="max-w-[550px]">
//             <h2
//               className="
//                 text-[26px] font-bold
//                 leading-[1.45]
//                 tracking-[-0.5px]
//                 text-[#111111]
//                 sm:text-[31px]
//                 xl:text-[36px]
//               "
//             >
//               Explore Our{" "}
//               <span className="text-[#FF9436]">
//                 Pharmaceutical
//                 <br className="hidden xl:block" /> Portfolio
//               </span>
//             </h2>

//             <p
//               className="
//                 mt-[6px] max-w-[470px]
//                 text-[13px] font-normal
//                 leading-[1.7]
//                 text-[#78889D]
//                 sm:text-[15px]
//                 xl:text-[16px]
//               "
//             >
//               Browse selected medicines and formulations available for
//               international product enquiries.
//             </p>
//           </div>

//           {/* View All Products */}
//           <button
//             type="button"
//             onClick={onViewAll}
//             className="
//               flex h-[44px] shrink-0
//               cursor-pointer items-center
//               justify-center gap-[8px]
//               rounded-[7px]
//               border border-[#E3E8EE]
//               bg-white px-[22px]
//               text-[14px] font-semibold
//               text-[#171717]
//               transition-all duration-200
//               hover:border-[#FF8C2C]
//               hover:text-[#FF8C2C]
//               xl:mt-[112px]
//             "
//           >
//             View All Products
//             <ArrowUpRight size={15} strokeWidth={1.8} />
//           </button>
//         </div>

//         {/* Product grid */}
//         <div
//           className="
//             grid grid-cols-2
//             mt-[20px]
//             gap-[12px]
//             sm:grid-cols-3
//             lg:grid-cols-4
//             xl:grid-cols-6
//             xl:gap-[18px]
//           "
//         >
//           {products.map((product) => {
//             const isWishlisted = wishlist.includes(product.id);

//             return (
//               <article
//                 key={product.id}
//                 className="
//                   group relative
//                   flex min-w-0 flex-col
//                   overflow-hidden
//                   rounded-[20px]
//                   border border-[#B9BFC6]
//                   bg-[#F8F9FA]
//                   p-[14px]
//                   transition-all duration-300
//                   hover:border-[#FF8C2C]
//                   hover:shadow-lg
//                   xl:h-[314px]
//                 "
//               >
//                 {/* Product image */}
//                 <button
//                   type="button"
//                   onClick={() => onProductClick(product)}
//                   className="
//                     w-full
//                   "
//                 >
//                   <img
//                     src={product.image}
//                     alt={product.name}
//                     loading="lazy"
//                     className="
//                       h-full w-full
//                       transition-transform
//                       duration-500
//                       group-hover:scale-105
//                     "
//                   />
//                 </button>

//                 {/* Product information */}
//                 <div className="relative flex flex-1 flex-col mt-0">
//                   <div className="flex justify-between gap-1">
//                     <button
//                       type="button"
//                       onClick={() => onProductClick(product)}
//                       className="
//                         min-w-0 cursor-pointer
//                         text-left text-[14px]
//                         font-medium leading-[1.15]
//                         text-[#173B68]
//                         hover:text-[#FF8C2C]
//                       "
//                     >
//                       <span className="line-clamp-2">{product.name}</span>
//                     </button>

//                     {/* Wishlist */}
//                     <button
//                       type="button"
//                       aria-label={
//                         isWishlisted
//                           ? "Remove from wishlist"
//                           : "Add to wishlist"
//                       }
//                       aria-pressed={isWishlisted}
//                       onClick={() => toggleWishlist(product.id)}
//                       className="
//                         flex h-[29px] w-[29px]
//                         shrink-0 cursor-pointer
//                         items-center justify-center
//                         rounded-full
//                         border border-[#BCC6D0]
//                         transition-colors
//                         hover:border-[#FF8C2C]
//                       "
//                     >
//                       <Heart
//                         size={17}
//                         strokeWidth={1.5}
//                         className={
//                           isWishlisted
//                             ? "fill-red-500 text-red-500"
//                             : "text-[#173B68]"
//                         }
//                       />
//                     </button>
//                   </div>

//                   <p
//                     className="
//                       mt-[7px] line-clamp-2
//                       text-[10px]
//                       leading-[1.3]
//                       text-[#173B68]
//                       sm:text-[11px]
//                     "
//                   >
//                     {product.description}
//                   </p>

//                   {/* Price */}
//                   <div
//                     className="
//                       mt-auto pt-[7px]
//                       text-[18px] font-semibold
//                       leading-none text-[#173B68]
//                     "
//                   >
//                     $ {product.price}
//                   </div>
//                 </div>
//               </article>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

import { ArrowUpRight, Heart } from "lucide-react";
import { useState } from "react";

import Omega3 from "../assets/Omega3.webp";
import Cofsils from "../assets/cofsils-gargle.webp";
import Himalaya from "../assets/himalaya-wellness.webp";

// Separate logo assets
import CofsilsLogo from "../assets/cofsils-logo.webp";
import HimalayaLogo from "../assets/himalaya-logo.webp";
import Omega3Logo from "../assets/omega3-logo.webp";

const products = [
  {
    id: 1,
    name: "Omega 3 Fish Oil Capsules",
    description:
      "Omega-3 Fish Oil Capsules are rich in essential EPA and DHA fatty acids.",
    price: 20,
    image: Omega3,
    logo: Omega3Logo,
    category: "capsules",
  },
  {
    id: 2,
    name: "Cofsils Gargle",
    description:
      "Cofsils Gargle is an antiseptic solution formulated to help relieve...",
    price: 20,
    image: Cofsils,
    logo: CofsilsLogo,
    category: "gargle",
  },
  {
    id: 3,
    name: "Himalaya Wellness",
    description:
      "Himalaya Tentex Royal is an Ayurvedic herbal formulation design...",
    price: 20,
    image: Himalaya,
    logo: HimalayaLogo,
    category: "herbal",
  },
  {
    id: 4,
    name: "Himalaya Wellness",
    description:
      "Himalaya Tentex Royal is an Ayurvedic herbal formulation design...",
    price: 20,
    image: Himalaya,
    logo: HimalayaLogo,
    category: "herbal",
  },
  {
    id: 5,
    name: "Cofsils Gargle",
    description:
      "Cofsils Gargle is an antiseptic solution formulated to help relieve...",
    price: 20,
    image: Cofsils,
    logo: CofsilsLogo,
    category: "gargle",
  },
  {
    id: 6,
    name: "Cofsils Gargle",
    description:
      "Cofsils Gargle is an antiseptic solution formulated to help relieve...",
    price: 20,
    image: Cofsils,
    logo: CofsilsLogo,
    category: "gargle",
  },
];

export default function ProductPortfolio({
  onViewAll = () => {},
  onProductClick = () => {},
}) {
  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <section className="w-full bg-[#F7F9FC]">
      <div
        className="
          mx-auto w-full max-w-[1440px]
          px-[16px] py-[25px]
          sm:px-[35px]
          lg:px-[60px]
          xl:min-h-[510px]
          xl:px-[80px]
          xl:pt-[10px]
          xl:pb-0
        "
      >
        {/* SECTION HEADER */}
        <div
          className="
            mb-[28px] flex flex-col
            items-start justify-between gap-4
            sm:flex-row sm:items-end
            xl:mb-0 xl:h-[186px]
            xl:items-start
          "
        >
          <div className="max-w-[550px]">
            <h2
              className="
                text-[26px] font-bold
                leading-[1.45]
                tracking-[-0.5px]
                text-[#111111]
                sm:text-[31px]
                xl:text-[36px]
              "
            >
              Explore Our{" "}
              <span className="text-[#FF9436]">
                Pharmaceutical
                <br className="hidden xl:block" /> Portfolio
              </span>
            </h2>

            <p
              className="
                mt-[6px] max-w-[470px]
                text-[13px] font-normal
                leading-[1.7]
                text-[#78889D]
                sm:text-[15px]
                xl:text-[16px]
              "
            >
              Browse selected medicines and formulations available for
              international product enquiries.
            </p>
          </div>

          <button
            type="button"
            onClick={onViewAll}
            className="
              flex h-[44px] shrink-0
              cursor-pointer items-center
              justify-center gap-[8px]
              rounded-[7px]
              border border-[#E3E8EE]
              bg-white px-[22px]
              text-[14px] font-semibold
              text-[#171717]
              transition-all duration-200
              hover:border-[#FF8C2C]
              hover:text-[#FF8C2C]
              xl:mt-[112px]
            "
          >
            View All Products
            <ArrowUpRight size={15} strokeWidth={1.8} />
          </button>
        </div>

        {/* PRODUCT GRID */}
        <div
          className="
            mt-[20px]
            grid grid-cols-2
            gap-[12px]
            sm:grid-cols-3
            lg:grid-cols-4
            xl:grid-cols-6
            xl:gap-[18px]
          "
        >
          {products.map((product) => {
            const isWishlisted = wishlist.includes(product.id);

            return (
              <article
                key={product.id}
                className="
                  group relative
                  flex min-w-0 flex-col
                  rounded-[20px]
                  border border-[#B9BFC6]
                  bg-[#F8F9FA]
                  p-[14px]
                  transition-all duration-300
                  hover:border-[#FF8C2C]
                  hover:shadow-lg
                  xl:h-[314px]
                "
              >
                {/* IMAGE AND LOGO AREA */}
                <div className="relative mb-[28px] w-full">
                  {/* Separate product image box */}
                  <button
                    type="button"
                    onClick={() => onProductClick(product)}
                    aria-label={`View ${product.name}`}
                    className="
                      relative block w-full
                      overflow-hidden
                      rounded-[14px]
                      bg-[#EAF1F6]
                      text-left
                    "
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="
                        h-full w-full
                        object-cover
                        transition-transform duration-500
                        group-hover:scale-105
                      "
                    />
                  </button>

                  {/* Separate circular logo bottom-left */}
                  <div
                    className="
                      absolute bottom-[-16px] left-[2px]
                      z-10
                      flex h-[35px] w-[35px]
                      items-center justify-center
                      overflow-hidden
                      rounded-full
                      border-[2px] border-white
                      bg-white
                      shadow-[0_2px_8px_rgba(0,0,0,0.12)]
                      sm:h-[39px] sm:w-[39px]
                    "
                  >
                    <img
                      src={product.logo}
                      alt={`${product.name} brand logo`}
                      loading="lazy"
                      className="
                        h-[40%] w-[40%]
                        object-contain
                      "
                    />
                  </div>
                </div>

                {/* PRODUCT INFORMATION */}
                <div className="relative flex min-w-0 flex-1 flex-col">
                  {/* Name and wishlist */}
                  <div className="flex items-start justify-between gap-1">
                    <button
                      type="button"
                      onClick={() => onProductClick(product)}
                      className="
                        min-w-0 cursor-pointer
                        text-left text-[14px]
                        font-medium leading-[1.15]
                        text-[#173B68]
                        hover:text-[#FF8C2C]
                      "
                    >
                      <span className="line-clamp-2">{product.name}</span>
                    </button>

                    <button
                      type="button"
                      aria-label={
                        isWishlisted
                          ? "Remove from wishlist"
                          : "Add to wishlist"
                      }
                      aria-pressed={isWishlisted}
                      onClick={() => toggleWishlist(product.id)}
                      className="
                        flex h-[29px] w-[29px]
                        shrink-0 cursor-pointer
                        items-center justify-center
                        rounded-full
                        border border-[#BCC6D0]
                        bg-white
                        transition-colors
                        hover:border-[#FF8C2C]
                      "
                    >
                      <Heart
                        size={17}
                        strokeWidth={1.5}
                        className={
                          isWishlisted
                            ? "fill-red-500 text-red-500"
                            : "text-[#173B68]"
                        }
                      />
                    </button>
                  </div>

                  {/* Description */}
                  <p
                    className="
                      mt-[7px] line-clamp-2
                      text-[10px]
                      leading-[1.3]
                      text-[#173B68]
                      sm:text-[11px]
                    "
                  >
                    {product.description}
                  </p>

                  {/* Price */}
                  <div
                    className="
                      mt-auto pt-[7px]
                      text-[18px] font-semibold
                      leading-none text-[#173B68]
                    "
                  >
                    $ {product.price}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
