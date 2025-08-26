import React from "react";
import { Box, Heading, Image } from "@chakra-ui/react";

export default function SereduBanner() {
  // Accent gradient for heading text
  const accentGrad = "linear(to-r, blue.400, purple.500)";

  return (
    <Box
      position="relative"
      w="100%"
      overflow="hidden"
      borderRadius="2xl"
      boxShadow="2xl"
      mb={12}
      maxH="320px"
      minH="180px"
      h={{ base: "180px", md: "260px", lg: "320px" }}
    >
      {/* Full-Bleed Background Image */}
      <Image
        src="/edub.png"
        alt="Government Banner"
        objectFit="cover"
        w="100%"
        h="100%"
        position="absolute"
        inset="0"
        transition="filter 0.3s ease"
        _hover={{ filter: "brightness(0.9)" }}
      />

      {/* Black overlay to darken image */}
      <Box
        position="absolute"
        inset="200"
        bg="blackAlpha.600"
        pointerEvents="none"
        zIndex={0}
      />

      {/* Overlayed Text */}
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        textAlign="center"
        px={{ base: 4, md: 0 }}
        maxW="container.md"
        width="100%"
        pointerEvents="none"
        zIndex={1}
      >
         <Heading
          fontSize={{ base: "2xl", md: "7xl" }}
          fontWeight="extrabold"
          bgGradient={accentGrad}
          bgClip="text"
          letterSpacing="tight"
          textAlign="center"
        >
          Education Assessment
        </Heading>
      </Box>
    </Box>
  );
}
