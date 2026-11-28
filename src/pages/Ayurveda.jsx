import AyurvedaCategories from "../componenets/AyurvedaCategories";
import AyurvedaHero from "../componenets/AyurvedaHero";
import AyurvedaWisdom from "../componenets/AyurvedaWisdom";
import AyurvedicFeaturedBrands from "../componenets/AyurvedicFeaturedBrands";
import AyurvedicPortfolio from "../componenets/AyurvedicPortfolio";

const Ayurveda = () => {
  return (
    <>
      <div className="flex flex-col gap-[60px]">
        <AyurvedaHero />
        <AyurvedaWisdom />
        <AyurvedaCategories />
        <AyurvedicFeaturedBrands />
        <AyurvedicPortfolio />
      </div>
    </>
  );
};

export default Ayurveda;
