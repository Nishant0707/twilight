import React from "react";
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  chakra,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  MdQuiz,
  MdVisibility,
  MdSecurity,
  MdPersonSearch,
  MdAssessment,
  MdLibraryBooks,
} from "react-icons/md";

// Platform features — add more if needed!
const features = [
  {
    icon: MdQuiz,
    title: "Guidelines-based Question Bank",
    desc: "Create robust question sets aligned with educational norms and compliance policies.",
  },
  {
    icon: MdVisibility,
    title: "Live & Digital Proctoring",
    desc: "Ensure fairness and integrity with real-time video monitoring and remote invigilation.",
  },
  {
    icon: MdSecurity,
    title: "Data Security",
    desc: "Protect sensitive student and exam data with industry-grade encryption and privacy controls.",
  },
  {
    icon: MdPersonSearch,
    title: "Real-time Candidate Monitoring",
    desc: "Continuously track candidate activity for instant alerts and transparent assessments.",
  },
  {
    icon: MdLibraryBooks,
    title: "Assessor App",
    desc: "Empower educators with intuitive tools for quick evaluation and automated marking.",
  },
  {
    icon: MdAssessment,
    title: "Reporting & Results",
    desc: "Instant analytics and downloadable reports based on your question bank and scoring.",
  },
];

export default function Seredueplat() {
  // Accent gradient and shadow
  const accentGrad = "linear(to-r, #4f79ef, #b36ad9)";
  const iconBg = "linear(to-tr, #4f79ef, #8855e3 80%)";
  const iconShadow = "0 4px 16px #8963ff2b";

  return (
    <Box
      bg="white"
      minH="100vh"
      w="100%"
      py={{ base: 10, md: 18 }}
      px={{ base: 4, sm: 8, md: 0 }}
    >
      <VStack mb={12} spacing={2}>
        <Heading
          as="h2"
          fontSize={{ base: "2xl", md: "3xl" }}
          fontWeight="extrabold"
          bgGradient={accentGrad}
          bgClip="text"
          textAlign="center"
        >
          Features of our e-assessment platform
        </Heading>
        <Text
          fontSize={{ base: "sm", md: "lg" }}
          color={useColorModeValue("gray.500", "gray.400")}
          maxW="600px"
          textAlign="center"
          opacity={0.9}
        >
          Comprehensive digital tools enabling secure, efficient, and insightful educational testing—for institutions and students alike.
        </Text>
      </VStack>

      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3 }}
        spacing={{ base: 7, md: 10, lg: 14 }}
        maxW="1100px"
        mx="auto"
        mt={2}
      >
        {features.map((item) => (
          <Box
            key={item.title}
            bg="white"
            borderRadius="2xl"
            boxShadow="0 6px 32px 0 #6c63ff14"
            border="1.5px solid #f1f3fa"
            p={{ base: 6, md: 7, lg: 8 }}
            display="flex"
            flexDirection="column"
            alignItems="center"
            textAlign="center"
            transition="box-shadow 0.2s"
            _hover={{
              boxShadow: "0 12px 36px #7b63f765",
              transform: "translateY(-2px) scale(1.032)",
            }}
          >
            <chakra.div
              bgGradient={iconBg}
              borderRadius="full"
              display="flex"
              alignItems="center"
              justifyContent="center"
              boxSize="60px"
              mb={5}
              color="white"
              fontSize="2.2rem"
              boxShadow={iconShadow}
              transition="0.15s"
              _hover={{
                bgGradient: "linear(to-tr, #4f79ef 60%, #b36ad9 95%)",
              }}
            >
              <chakra.span as={item.icon} />
            </chakra.div>
            <Heading
              as="h3"
              fontWeight="bold"
              fontSize={{ base: "md", md: "lg" }}
              mb={2}
              letterSpacing="wide"
              color="#313670"
              lineHeight={1.25}
            >
              {item.title}
            </Heading>
            <Text
              color="gray.600"
              fontSize="md"
              lineHeight="1.7"
              opacity={0.92}
              maxW="260px"
            >
              {item.desc}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}
