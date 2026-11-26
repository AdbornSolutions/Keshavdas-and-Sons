import AyurvedaHero from "../componenets/AyurvedaHero";
import AyurvedaWisdom from "../componenets/AyurvedaWisdom";

const Ayurveda = () => {
  return (
    <>
      <div className="flex flex-col gap-[60px]">
        <AyurvedaHero />
        <AyurvedaWisdom />
      </div>
    </>
  );
};

export default Ayurveda;
