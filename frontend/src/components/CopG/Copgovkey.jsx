import React from "react";
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  chakra,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  MdStars,
  MdSecurity,
  MdPublic,
  MdDevices,
  MdRepeat,
  MdAssessment,
  MdSupportAgent,
  MdOutlineQuiz,
  MdInsertChart,
  MdAccessibility,
  MdBuild,
  MdLanguage,
  MdHowToVote,
  MdFormatListBulleted,
  MdLock,
  MdVerifiedUser,
  MdCheckCircle,
  MdVideoCall,
} from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";

// Trimmed salient features - removed 3 items for brevity
const salientFeatures = [
  { text: "All-device compatible", icon: MdDevices },
  { text: "Geo-tagging and Time Stamped", icon: AiOutlineClockCircle },
  { text: "Two Way Communication Audio & Video", icon: MdVideoCall },
  { text: "Attendance Management System", icon: MdHowToVote },
  { text: "All file format support", icon: MdFormatListBulleted },
  { text: "Reset Test/Resume Test", icon: MdRepeat },
  { text: "Robust Concurrency", icon: MdBuild },
  { text: "Company Branding", icon: MdStars },
  { text: "Powerful Reporting", icon: MdInsertChart },
  { text: "Descriptive Answer Sheet", icon: MdAssessment },
];

// Trimmed security features - removed 3 items
const securityFeatures = [
  { text: "Private Test Link (By Invitation)", icon: MdLock },
  { text: "OTP based Authentication", icon: MdVerifiedUser },
  { text: "Secure API", icon: MdSecurity },
  { text: "Multi face Detection & Session Audits", icon: MdSecurity },
  { text: "Face Authentication", icon: MdSecurity },
  { text: "Audio Validation", icon: MdCheckCircle },
  { text: "Random Photo Snap Capture", icon: MdCheckCircle },
  { text: "Track browser movement & suspicious browser activities", icon: MdPublic },
  { text: "Simultaneous Login Attempts", icon: MdCheckCircle },
  { text: "Copy+Paste Disabled", icon: MdCheckCircle },
  { text: "SSL Enabled", icon: MdSecurity },
];

// Trimmed general features - removed 3 items
const generalFeatures = [
  { text: "Seamless IT Integration", icon: MdPublic },
  { text: "On-demand Scalability", icon: MdRepeat },
  { text: "Upload your Questions", icon: MdOutlineQuiz },
  { text: "Sequencing of Questions", icon: MdFormatListBulleted },
  { text: "Random Distribution of Questions & Options", icon: MdInsertChart },
  { text: "Mark all questions mandatory", icon: MdCheckCircle },
  { text: "Negative Marking", icon: MdAssessment },
  { text: "Review your answer at later stage", icon: MdRepeat },
  { text: "Import Reports in Excel/PDF", icon: MdInsertChart },
  { text: "Detailed Audit Log Sheet", icon: MdAssessment },
];

function FeatureSection({ icon, title, color, features, cardGrad }) {
  return (
    <Box
      bg="whiteAlpha.900"
      borderRadius="2xl"
      boxShadow="0 9px 60px 0 #3a47d84d"
      p={{ base: 4, md: 7 }}
      minH="440px"
      transition="box-shadow 0.18s"
      _hover={{ boxShadow: "0 16px 72px 0 #7e64ff44" }}
      border="2.5px solid"
      borderColor={color + ".200"}
      display="flex"
      flexDir="column"
    >
      <HStack spacing={3} mb={4} align="center">
        <Box
          as={icon}
          boxSize="40px"
          color="white"
          bgGradient={cardGrad}
          borderRadius="full"
          p={2}
          boxShadow="0 4px 14px #405dff52"
          display="flex"
          alignItems="center"
        />
        <Heading
          as="h3"
          fontSize="lg"
          fontWeight="extrabold"
          bgGradient={cardGrad}
          bgClip="text"
        >
          {title}
        </Heading>
      </HStack>
      <VStack align="stretch" spacing={2} pt={1}>
        {features.map((feat) => (
          <HStack key={feat.text} spacing={3} align="start">
            <Box
              as={feat.icon}
              color={color + ".400"}
              bg={color + ".50"}
              borderRadius="full"
              boxSize="22px"
              p={1}
              mt="2px"
              boxShadow="0 1px 6px #a3baff28"
            />
            <Text color="gray.700" fontSize="md">
              {feat.text}
            </Text>
          </HStack>
        ))}
      </VStack>
    </Box>
  );
}

export default function Copgovkey() {
  // Blue and purple gradient colors
  const gradBlue = "linear(to-tr, #4f79ef, #7c3aed 85%)";
  const gradPurple = "linear(to-tr, #7c3aed, #4f79ef 85%)";
  const gradIndigo = "linear(to-tr, #2a3ecc, #8b5cf6 85%)";

  return (
    <Box
      bg="white"
      minH="100vh"
      px={{ base: 2, sm: 4, md: 8 }}
      py={{ base: 10, md: 14 }}
    >
      <VStack mb={10}>
        <Heading
          as="h2"
          fontSize={{ base: "2xl", md: "3xl" }}
          fontWeight="extrabold"
          bgGradient="linear(to-r, #4f79ef, #7c3aed, #4f79ef)"
          bgClip="text"
          letterSpacing="tighter"
          textAlign="center"
          fontFamily="'Poppins', 'Inter', sans-serif"
          mb={2}
        >
          Government Assessment Platform Key Features
        </Heading>
        <Text
          fontSize={{ base: "md", md: "lg" }}
          color="gray.500"
          maxW="680px"
          textAlign="center"
          opacity={0.85}
          mt={1}
        >
          Explore industry-leading features, robust security, and smart digital tools crafted for modern government assessment needs.
        </Text>
      </VStack>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} maxW="1300px" mx="auto">
        <FeatureSection
          icon={MdStars}
          title="Salient Features"
          color="blue"
          features={salientFeatures}
          cardGrad={gradBlue}
        />
        <FeatureSection
          icon={MdSecurity}
          title="Security Features"
          color="purple"
          features={securityFeatures}
          cardGrad={gradPurple}
        />
        <FeatureSection
          icon={MdPublic}
          title="General Features"
          color="blue"
          features={generalFeatures}
          cardGrad={gradIndigo}
        />
      </SimpleGrid>
    </Box>
  );
}
