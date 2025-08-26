import React from "react";
import { Box, Heading, Image } from "@chakra-ui/react";

export default function CopgovBan() {
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
        src="/copgov.png"
        alt="Government Banner"
        objectFit="cover"
        w="100%"
        h="100%"
        position="absolute"
        inset="0"
        transition="filter 0.3s ease"
        _hover={{ filter: "brightness(0.9)" }}
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
          as="h1"
          fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
          fontWeight="extrabold"
          color="white"
          textShadow="0 2px 6px rgba(0, 0, 0, 0.5)"
          letterSpacing="wide"
          userSelect="none"
        
        >
          {/* Put your heading text here */}
          
        </Heading>
      </Box>
    </Box>
  );
}
