import React from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  Image,
  Stack,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

export default function SercopTalent({
  image = "/sertal.png", // customize as needed
  title = "Unleash Top Talent with Innovation",
  tagline = "Precise • Industry-Leading • Insightful",
  description =
    "Precision-driven, sector-focused assessments that empower organizations, educational institutions, and government programs to identify, benchmark, and nurture real-world skills. Gain actionable analytics and drive future-ready teams.",
  buttonText = "Unlock Top Talent ",
  buttonTo = "/jobdes",
}) {
  // Color palette
  const cardBg = useColorModeValue("white", "#181A34");
  const cardShadow = useColorModeValue(
    "0 6px 32px 0 rgba(42,63,183,0.09)",
    "0 8px 32px 0 rgba(25,33,63,0.35)"
  );
  const accentGradient = "linear(to-tr, blue.400, purple.500 80%)";
  const lightOutline = useColorModeValue("#dbeafe", "#334155");

  return (
    <Flex
      direction={{ base: "column-reverse", md: "row" }}
      align="center"
      justify="space-between"
      bg={cardBg}
      boxShadow={cardShadow}
      borderRadius="xl"
      border="1.5px solid"
      borderColor={lightOutline}
      overflow="hidden"
      maxW="1100px"
      mx="auto"
      mt={{ base: 8, md: 14 }}
      mb={12}
      minH={{ base: "unset", md: "260px", lg: "310px" }}
    >
      {/* Content Section */}
      <Box
        flex="1"
        px={{ base: 4, sm: 8, md: 12 }}
        py={{ base: 6, md: 8 }}
        display="flex"
        flexDir="column"
        justifyContent="center"
      >
        <Heading
          as="h2"
          mb={1}
          fontWeight="extrabold"
          fontSize={{ base: "xl", md: "2xl", lg: "2xl" }}
          bgGradient={accentGradient}
          bgClip="text"
          letterSpacing="tight"
          lineHeight="short"
        >
          {title}
        </Heading>
        <Text
          color="purple.400"
          fontWeight="bold"
          fontSize="md"
          letterSpacing="wider"
          mb={2}
          textTransform="uppercase"
        >
          {tagline}
        </Text>
        <Text
          color="gray.500"
          fontSize={{ base: "sm", md: "md" }}
          mb={5}
          lineHeight="tall"
        >
          {description}
        </Text>
        <Button
          as={RouterLink}
          to={buttonTo}
          size="md"
          bgGradient={accentGradient}
          color="white"
          fontWeight="bold"
          _hover={{
            bgGradient: "linear(to-tr, #4f79ef, #b36ad9 90%)",
            boxShadow: "0 4px 16px #8980da22",
          }}
          px={7}
          py={2}
          rightIcon={<FaArrowRight />}
          fontSize="sm"
          letterSpacing="wider"
        >
          {buttonText}
        </Button>
      </Box>

      {/* Image Section */}
      <Box
        w={{ base: "100%", md: "340px", lg: "420px" }}
        minH={{ base: "160px", md: "inherit" }}
        overflow="hidden"
        display="flex"
        alignItems="center"
        justifyContent="center"
        bg="gray.900"
      >
        <Image
          src={image}
          alt={title}
          objectFit="cover"
          h={{ base: "160px", md: "100%" }}
          w="100%"
          transition="transform 0.3s"
          _hover={{ transform: "scale(1.035)" }}
        />
      </Box>
    </Flex>
  );
}
