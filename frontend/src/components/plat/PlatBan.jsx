import React from "react";
import { Box, Heading, Text, Stack, Flex, chakra, useBreakpointValue } from "@chakra-ui/react";

const PlatBan = ({
  title = (
    <>
      STAY <chakra.span color="blue.400">CONNECTED</chakra.span> <br />
      WITH US
    </>
  ),
 subtitle = `An online exam platform that offers a secure, reliable, and efficient way to conduct assessments.
With remote proctoring, instant results, and powerful analytics, we ensure transparency and scalability.
Accessible anytime, anywhere, making exams smarter and more flexible.`,
imageSrc = "mobplat1.png", // Replace with your actual user image path
company = "VIRLYTECH",
website = "www.virlytech.com",
tagline = "Empowering Assessments, Anywhere, Anytime.",

}) => {
  const headingSize = useBreakpointValue({ base: "2xl", md: "4xl" });

  return (
    <Box
      position="relative"
      w="100%"
      minH={{ base: "350px", md: "450px" }}
      borderRadius="xl"
      overflow="hidden"
      bg="blue.700"
      boxShadow="lg"
      px={{ base: 4, md: 10, lg: 16 }}
      py={{ base: 10, md: 16, lg: 20 }}
      mb={8}
    >
      {/* Gradient and grid pattern background */}
      <Box
        position="absolute"
        inset={0}
        bgGradient="linear(135deg, blue.700 60%, blue.400 100%)"
        opacity={0.94}
        zIndex={0}
      />
      {/* Decorative dots grid */}
      <chakra.svg
        position="absolute"
        top={6}
        left={6}
        w="70px"
        h="70px"
        zIndex={1}
        opacity={0.18}
        viewBox="0 0 100 100"
      >
        <circle cx="15" cy="15" r="5" fill="white" />
        <circle cx="50" cy="15" r="5" fill="white" />
        <circle cx="85" cy="15" r="5" fill="white" />
        <circle cx="15" cy="50" r="5" fill="white" />
        <circle cx="50" cy="50" r="5" fill="white" />
        <circle cx="85" cy="50" r="5" fill="white" />
        <circle cx="15" cy="85" r="5" fill="white" />
        <circle cx="50" cy="85" r="5" fill="white" />
        <circle cx="85" cy="85" r="5" fill="white" />
      </chakra.svg>
      <chakra.svg
        position="absolute"
        bottom={6}
        right={{ base: 2, md: 10 }}
        w="90px"
        h="90px"
        zIndex={1}
        opacity={0.25}
        viewBox="0 0 100 100"
      >
        <circle cx="25" cy="25" r="5" fill="white" />
        <circle cx="75" cy="25" r="5" fill="white" />
        <circle cx="25" cy="75" r="5" fill="white" />
        <circle cx="75" cy="75" r="5" fill="white" />
      </chakra.svg>

      <Flex
        justify="space-between"
        align="center"
        height="100%"
        position="relative"
        zIndex={2}
        direction={{ base: "column", md: "row" }}
      >
        <Stack spacing={5} maxW="540px" py={4}>
          <Text fontWeight="bold" color="whiteAlpha.800" fontSize="md" letterSpacing="wider">
            {company}
          </Text>
          <Heading
            as="h1"
            fontWeight="extrabold"
            color="white"
            size={headingSize}
            lineHeight="1.2"
            letterSpacing="tight"
            mb={2}
            textShadow="0 3px 16px rgba(0,0,0,0.18)"
          >
            {title}
          </Heading>
          <Text color="whiteAlpha.900" fontSize={{ base: "md", md: "xl" }}>
            {subtitle}
          </Text>
          <Text color="whiteAlpha.700" fontSize="sm" mt={7}>
            {website}
          </Text>
        </Stack>
        <Box
  position="relative"
  ml={{ base: 0, md: 12 }}
  mt={{ base: 10, md: 0 }}
  flex="0 0 370px"
  h={{ base: "210px", md: "320px" }}
  maxW={{ base: "320px", md: "370px" }}
  overflow="visible"
>
  <img
    src={imageSrc}
    alt="User with laptop"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "contain",
      borderRadius: "2xl",
      // Removed boxShadow here to avoid blur/glow effect
      // boxShadow: "0 8px 32px rgba(0,0,0,0.22)",
    }}
  />
</Box>
      </Flex>
    </Box>
  );
};

export default PlatBan;
