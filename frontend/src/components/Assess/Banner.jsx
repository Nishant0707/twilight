import React from "react";
import { Box, Heading, Text, Button, useBreakpointValue } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const demoImage = "/sertal.png";

const Banner = ({
  headline = "Empower Your Skills, Advance Your Future",
  subtext = "Unlock your potential through dynamic assessments, real-time progress tracking, and skill-building opportunities designed to prepare you for success.",
  buttonText = "Get Started",
  buttonRoute = "/reg",
  imageSrc = demoImage,
}) => {
  const headingSize = useBreakpointValue({ base: "2xl", md: "4xl" });
  const navigate = useNavigate();

  return (
    <Box
      position="relative"
      borderRadius="2xl"
      w="full"
      minH={{ base: "350px", md: "420px" }}
      bgGradient="linear(to-r, #2c3e50, #4a007e)"
      overflow="hidden"
      boxShadow="xl"
      mb={{ base: 12, md: 20 }}
      p={0}
      display="flex"
      alignItems="center"
      color="white"
    >
      {/* Geometric Overlay with image */}
      <Box
        position="absolute"
        right={0}
        top={0}
        bottom={0}
        w={{ base: "56%", md: "45%" }}
        zIndex={1}
        display={{ base: "none", md: "block" }}
        filter="drop-shadow(0 4px 6px rgba(0,0,0,0.35))"
        borderTopLeftRadius="100% 100%"
        borderBottomLeftRadius="100% 100%"
        overflow="hidden"
      >
        <img
          src={imageSrc}
          alt="Banner visual"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 10% 100%)",
            transition: "transform 0.5s",
          }}
          loading="lazy"
        />
      </Box>

      {/* Text content */}
      <Box
        px={{ base: 6, md: 20 }}
        py={{ base: 14, md: 16 }}
        maxW={{ base: "90%", md: "55%" }}
        zIndex={2}
      >
        <Heading
          fontSize={headingSize}
          fontWeight="extrabold"
          mb={5}
          letterSpacing="tight"
          lineHeight="1.15"
          textShadow="0 1px 3px rgba(0,0,0,0.4)"
        >
          {headline}
        </Heading>
        <Text
          fontSize={{ base: "md", md: "lg" }}
          mb={8}
          fontWeight="medium"
          color="rgba(255,255,255,0.85)"
          maxW="480px"
          textShadow="0 1px 2px rgba(0,0,0,0.15)"
        >
          {subtext}
        </Text>
        <Button
          size="lg"
          variant="outline"
          borderColor="white"
          color="white"
          fontWeight="semibold"
          px={10}
          _hover={{
            bg: "whiteAlpha.300",
            borderColor: "#bb86fc",
            color: "#bb86fc",
          }}
          onClick={() => navigate(buttonRoute)}
        >
          {buttonText}
        </Button>
      </Box>
    </Box>
  );
};

export default Banner;

