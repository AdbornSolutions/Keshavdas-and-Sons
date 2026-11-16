import AboutSection from "../componenets/AboutSection";
import AyurvedicBrands from "../componenets/AyurvedicBrands";
import CategoryNavbar from "../componenets/CategoryNavbar";
import ExportInquiryCTA from "../componenets/ExportInquiryCTA";
import FAQSection from "../componenets/FAQSection";
import FeaturedBrands from "../componenets/FeaturedBrands";
import GlobalReach from "../componenets/GlobalReach";
import HealthCategories from "../componenets/HealthCategories";
import HeroBanner from "../componenets/HeroBanner";
import HowWeWork from "../componenets/HowWeWork";
import InsightsSection from "../componenets/InsightsSection";
import OurCommitment from "../componenets/OurCommitment";
import ProductPortfolio from "../componenets/ProductPortfolio";
import WhyPartnerWithUs from "../componenets/WhyPartnerWithUs";

const Home = () => {
  return (
    <>
      <CategoryNavbar />
      <div className="flex flex-col gap-[60px]">
        <HeroBanner />
        <HealthCategories />
        <ProductPortfolio />
        <FeaturedBrands />
        <AboutSection />
        <AyurvedicBrands />
        <WhyPartnerWithUs />
        <GlobalReach />
        <HowWeWork />
        <OurCommitment />
        <InsightsSection />
        <FAQSection />
        <ExportInquiryCTA />
      </div>
    </>
  );
};

export default Home;
