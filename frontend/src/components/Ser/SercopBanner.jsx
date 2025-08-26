import React from "react";
import { Box, Heading, Image } from "@chakra-ui/react";

export default function SercopBanner() {
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
      {/* Background Image without overlay */}
      <Image
        src="/serbanner.png" // Your image source
        alt="Government Banner"
        objectFit="cover"
        w="100%"
        h="100%"
        transition="filter 0.3s ease"
        _hover={{ filter: "brightness(0.9)" }} // subtle hover effect if needed
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
        pointerEvents="none" // disables interaction on text so image hover remains responsive
      >
        <Heading
          as="h1"
          fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
          fontWeight="extrabold"
          color="white"
          textShadow="0 2px 6px rgba(0, 0, 0, 0.5)" // subtle shadow for readability
          letterSpacing="wide"
          userSelect="none"
        >
          Corporate Assessment
        </Heading>
      </Box>
    </Box>
  );
}
