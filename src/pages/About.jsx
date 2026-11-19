import BusinessPartners from "../componenets/BusinessPartners";
import ExportInquiryCTA from "../componenets/ExportInquiryCTA";
import InternationalMarkets from "../componenets/InternationalMarkets";
import OurMission from "../componenets/OurMission";
import PharmaceuticalExpertise from "../componenets/PharmaceuticalExpertise";
import PharmaceuticalHero from "../componenets/PharmaceuticalHero";
import SourcingProcess from "../componenets/SourcingProcess";
import WhatWeValue from "../componenets/WhatWeValue";
import WhoWeAre from "../componenets/WhoWeAre";

const About = () => {
  return (
    <>
      <div className="flex flex-col gap-[60px]">
        <PharmaceuticalHero />
        <WhoWeAre />
        <OurMission />
        <PharmaceuticalExpertise />
        <InternationalMarkets />
        <SourcingProcess />
        <WhatWeValue />
        <BusinessPartners />
        <ExportInquiryCTA />
      </div>
    </>
  );
};

export default About;
