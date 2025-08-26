import React from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Image,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionImage = motion(Image);

const images = ["/jobB.jpg", "/upskilling.png", "/aa.png"];

export default function CopgovCon() {
  const borderColor = useColorModeValue("purple.500", "purple.300");
  const textColor = useColorModeValue("gray.700", "gray.300");
  const headingColor = useColorModeValue("blue.800", "blue.300");

  return (
    <Box
      bgGradient="linear(to-b, white, purple.50)"
      px={{ base: 4, md: 16 }}
      py={{ base: 8, md: 16 }}
      maxW="1080px"
      mx="auto"
      fontFamily="Inter, system-ui, sans-serif"
      borderRadius="2xl"
      boxShadow="xl"
    >
      <VStack spacing={10} align="stretch">
        {/* Heading */}
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          textAlign={{ base: "center", md: "left" }}
        >
          <Heading
  as="h1"
  fontSize={{ base: "3xl", md: "4xl" }}
  fontWeight="extrabold"
  letterSpacing="tight"
  mb={6}
  bgGradient="linear(to-r, #4f79ef, #b36ad9)"
  bgClip="text"
  textAlign="center"
  fontFamily="'Poppins', 'Inter', sans-serif"
>
  Empowering Government Assessments with Secure, AI-Driven Solutions — SSTPL Shapes Tomorrow’s Workforce
</Heading>
        </MotionBox>

        {/* Paragraph 1 */}
        <Text fontSize={{ base: "md", md: "lg" }} color={textColor} lineHeight="1.8">
          SSTPL is a premier assessment solutions provider with over 14 years of trusted partnership
          with government institutions. As a recognized and NCVT-approved agency, our mission focuses
          on empowering the workforce through continuous up-skilling, fostering evolutionary growth
          in talent and skills.
        </Text>

        {/* Image 1 */}
        <MotionImage
          src={images[0]}
          alt="SSTPL Workforce Evolution"
          borderRadius="xl"
          boxShadow="lg"
          border="4px solid"
          borderColor={borderColor}
          maxH="280px"
          objectFit="cover"
          mx="auto"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
        />

        {/* Paragraph 2 */}
        <Text fontSize={{ base: "md", md: "lg" }} color={textColor} lineHeight="1.8">
          Utilizing the Six Sigma methodology for rigorous testing and assessment, SSTPL ensures that millions
          of individuals are equipped with the skills and competencies essential for success in today's
          dynamic work environments. Our advanced talent assessment platform supports large-scale, secure
          hiring anytime, anywhere, on any device.
        </Text>

        {/* Paragraph 3 */}
        <Text fontSize={{ base: "md", md: "lg" }} color={textColor} lineHeight="1.8">
          Backed by a team of experts from various industries and subject matter fields, our research and development
          delivers optimized assessment tests across diverse roles and domains. SSTPL proudly collaborates with numerous
          Sector Skill Councils, enabling the identification of candidates who are the best fit for their roles.
        </Text>

        {/* Two Column Section */}
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={10}
          alignItems="center"
          bg={useColorModeValue("white", "gray.800")}
          p={6}
          borderRadius="xl"
          boxShadow="sm"
        >
          <MotionImage
            src={images[1]}
            alt="Skill Development Initiatives"
            borderRadius="xl"
            boxShadow="md"
            border="4px solid"
            borderColor={borderColor}
            objectFit="cover"
            maxH="250px"
            mx="auto"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          />
          <Box>
            <Text fontSize={{ base: "md", md: "lg" }} color={textColor} lineHeight="1.8" mb={4}>
              Our holistic online and offline assessment solutions are aligned with the Ministry of Skill Development and Entrepreneurship’s vision.
              We actively contribute to harmonizing skill development efforts across the nation,
              bridging the gap between skilled workforce demand and supply, and promoting innovation for both
              existing and emerging job sectors.
            </Text>
            <Text fontSize={{ base: "md", md: "lg" }} color={textColor} lineHeight="1.8">
              SSTPL’s initiatives are fully compliant with the New Educational Policy (NEP), supporting reskilling and upskilling to create a future-ready workforce.
              Our comprehensive Training Needs Identification (TNI) framework precisely tailors development programs to various Sector Skill Councils’ requirements.
            </Text>
          </Box>
        </SimpleGrid>

        <Divider borderColor="purple.300" />

        {/* Paragraph 4 */}
        <Text fontSize={{ base: "md", md: "lg" }} color={textColor} lineHeight="1.8" mt={4}>
          Through a structured Three-Step Training Needs Identification process, SSTPL measures training effectiveness with digitally proctored assessments.
          Our continuous evaluation approach helps improve individual skills and organizational outcomes, ensuring robust return on investment.
        </Text>

        {/* Image 2 */}
        <MotionImage
          src={images[2]}
          alt="Training Assessment"
          borderRadius="xl"
          boxShadow="lg"
          border="4px solid"
          borderColor={borderColor}
          maxH="280px"
          objectFit="cover"
          mx="auto"
          my={4}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
        />

        {/* Paragraph 5 */}
        <Text fontSize={{ base: "md", md: "lg" }} color={textColor} lineHeight="1.8" mb={4}>
          At SSTPL, our commitment is to empower organizations by identifying and addressing their workforce training needs.
          Our tailored assessments drive continuous improvement, preparing employees and businesses to face future challenges with confidence and competence.
          Trust SSTPL to build an adaptable, skilled workforce poised for success in a rapidly evolving global economy.
        </Text>
      </VStack>
    </Box>
  );
}
