import React from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";

import TopBanner from "../components/About/TopBanner";
import WhoWeAre from "../components/About/WhoWeAre";
import GrowthStats from "../components/About/GrowthStats";
import ClientsSection from "../components/About/ClientsSection";
import LeadershipCarousel from "../components/About/LeadershipCarousel";
import PageWrapper from "../components/Layout/PageWrapper"; // ✅ our responsive wrapper

export default function About() {
  const bgColor = useColorModeValue("white", "gray.900");
  const textColor = useColorModeValue("gray.800", "gray.100");
  const cardBg = useColorModeValue("white", "gray.700");
  const sectionBg = useColorModeValue("gray.50", "gray.800");

  return (
    <Box bg={bgColor} color={textColor}>
      {/* Top Banner - full width */}
      <TopBanner />

      {/* Who We Are Section */}
      <PageWrapper>
        <WhoWeAre />
      </PageWrapper>

      {/* Growth Statistics */}
      <Box bg={sectionBg}>
        <PageWrapper>
          <GrowthStats cardBg={cardBg} />
        </PageWrapper>
      </Box>

      {/* Client Logos Section */}
      <PageWrapper>
        <ClientsSection />
      </PageWrapper>

      {/* Leadership Team Carousel */}
      <PageWrapper>
        <LeadershipCarousel />
      </PageWrapper>
    </Box>
  );
}
