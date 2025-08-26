import React from "react";
import { Box } from "@chakra-ui/react";
import HeroSlider from "../components/Home/HeroSlider";
import AudienceSection from "../components/Home/AudienceSection";
import OfferingsTabs from "../components/Home/OfferingsTabs";
import JoinCTA from "../components/Home/JoinCTA";
import WhySSTPL from "../components/Home/WhySSTPL";
import ExploreContent from "../components/Home/ExploreContent";
import MovingBar from "../components/Home/MovingBar";
import PageWrapper from "../components/Layout/PageWrapper";

const Home = () => {
  return (
    <Box as="main" bg="gray.50">
      <PageWrapper>
        <HeroSlider />
        <MovingBar />
        <AudienceSection />
        <OfferingsTabs />
        <JoinCTA />
        <ExploreContent />
        <WhySSTPL />
      </PageWrapper>
    </Box>
  );
};

export default Home;
