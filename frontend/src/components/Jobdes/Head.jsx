import React from "react";
import { Box, Heading, Image } from "@chakra-ui/react";

export default function Head() {
  return (
    <Box
      position="relative"
      w="100%"
      overflow="hidden"
      borderRadius="2xl"
      boxShadow="xl"
      mb={12}
      maxH="320px"
      minH="180px"
      h={{ base: "180px", md: "260px", lg: "320px" }}
      fontFamily="Poppins, system-ui, 'Segoe UI', 'Open Sans', sans-serif"
      role="banner"
      aria-label="Empowering Careers Banner"
      userSelect="none"
    >
      {/* Background Image with dimmed effect */}
      <Image
        src="/copgov.png"
        alt="Government Banner"
        objectFit="cover"
        w="100%"
        h="100%"
        position="absolute"
        inset="0"
        filter="brightness(0.55) saturate(1.2)" // Slightly darker background for better text contrast
        transition="filter 0.3s ease"
        loading="lazy"
      />

      {/* Gradient Overlay for subtle depth */}
      <Box
        position="absolute"
        inset="0"
        bgGradient="linear(to-b, rgba(0,0,0,0.5), rgba(0,0,0,0.3))"
        zIndex={0}
      />

      {/* Centered Text Overlay */}
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        textAlign="center"
        px={{ base: 6, md: 0 }}
        maxW="container.md"
        width="100%"
        zIndex={1}
      >
        <Heading
          as="h1"
          fontSize={{ base: "3xl", md: "4xl", lg: "5xl", xl: "6xl" }}
          fontWeight="extrabold"
          letterSpacing="wider"
          bgGradient="linear(to-r, blue.500, purple.600)"
          bgClip="text"
          _dark={{ bgGradient: "linear(to-r, blue.300, purple.400)" }}
          lineHeight="short"
          userSelect="none"
        >
          Empowering Careers in Tech & Governance
        </Heading>
      </Box>
    </Box>
  );
}
