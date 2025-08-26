import React from "react";
import {
  Box,
  Heading,
  Text,
  chakra,
  useBreakpointValue,
} from "@chakra-ui/react";

const CaseBan = ({
  title = "Skill Development & Case Studies",
  quote = (
    <>
      "You want to wake up in the morning and think the future is going to be great - and that’s what being a skilled and empowered workforce is all about. <b>It's about believing in the future</b> and thinking that the future will be better than the past. And I can’t think of anything more exciting than enabling the growth and potential of our youth."
    </>
  ),
  imageSrc = "casebanner.jpg", // Use your image path
  hrSrc = "hr.png",             // Use your HR image path
}) => {
  const headingSize = useBreakpointValue({ base: "xl", md: "3xl", lg: "4xl" });

  return (
    <Box
      position="relative"
      w="100%"
      maxW="1200px"
      mx="auto"
      borderRadius="2xl"
      overflow="hidden"
      boxShadow="xl"
      mb={10}
      bg="white"
      minHeight={{ base: "350px", md: "400px", lg: "420px" }}
    >
      {/* Banner background and HR image */}
      <Box
        position="relative"
        w="100%"
        h={{ base: "260px", md: "370px", lg: "480px" }}
        bgImage={`url(${imageSrc})`}
        bgPosition="center"
        bgSize="cover"
        bgRepeat="no-repeat"
        borderTopRadius="2xl"
        overflow="hidden"
      >
        {/* Headline/title */}
        <Heading
          position="relative"
          zIndex={2}
          as="h1"
          size={headingSize}
          fontWeight="extrabold"
          lineHeight="1.15"
          color="white"
          px={{ base: 4, md: 10, lg: 14 }}
          pt={{ base: 8, md: 12, lg: 16 }}
          pb={{ base: 16, md: 20, lg: 24 }}
          maxW={{ base: "80%", md: "60%" }}
          textShadow="0 2px 10px rgba(0,0,0,0.6)"
        >
          {title}
        </Heading>
        {/* HR image, always inside banner and never overlaps text */}
        <Box
          position="absolute"
          right={{ base: 2, md: 10, lg: 20 }}
          bottom={0}
          h={{ base: "200px", md: "440px", lg: "280px" }}
          w={{ base: "70px", md: "130px", lg: "180px" }}
          zIndex={1}
        >
          <img
            src={hrSrc}
            alt="HR"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </Box>
      </Box>

      {/* Quote section card */}
      <Box
        position="relative"
        zIndex={3}
        bg="white"
        borderBottomRadius="2xl"
        boxShadow="lg"
        maxW={{ base: "96vw", md: "900px" }}
        mx="auto"
        mt={{ base: -10, md: -16 }}  // float the card up so it overlays banner a bit
        p={{ base: 4, md: 8 }}
        textAlign="center"
      >
        <Text fontSize={{ base: "md", md: "xl" }} color="gray.900" mb={0} lineHeight="1.6">
          {quote}
        </Text>
      </Box>
    </Box>
  );
};

export default CaseBan;
