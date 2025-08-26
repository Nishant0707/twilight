import React from "react";
import { Box, Heading, Image } from "@chakra-ui/react";
import PageWrapper from "../Layout/PageWrapper"; // ✅ import it

export default function TopBanner() {
  return (
    <Box position="relative" w="100%" h={{ base: "200px", md: "200px" }}>
      {/* Background Image */}
      <Image
        src="/about.jpg"
        objectFit="cover"
        w="100%"
        h="100%"
        filter="brightness(0.7)"
      />

      {/* Overlay Content with PageWrapper */}
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        w="100%"
      >
        <PageWrapper>
          <Heading
            fontSize={{ base: "2xl", md: "4xl" }}
            color="white"
            textAlign="center"
          >
            About Us
          </Heading>
        </PageWrapper>
      </Box>
    </Box>
  );
}
