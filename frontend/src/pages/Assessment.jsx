import React, { useMemo } from "react";
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Progress,
  Divider,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

import AssSelect from "../components/Assess/AssSelect";
import Brandlogo from "../components/Assess/Brandlogo";

const MotionBox = motion(Box);

const Assessment = () => {
  const headingSize = useBreakpointValue({ base: "3xl", md: "4xl" });

  // Dynamic random stats
  const stats = useMemo(
    () => [
      { label: "Ongoing Exams", value: Math.floor(Math.random() * 10) + 1, help: "Live monitoring enabled" },
      { label: "Total Candidates", value: Math.floor(Math.random() * 500) + 50, help: "Across all exams" },
      { label: "Average Score", value: `${Math.floor(Math.random() * 21) + 60}%`, help: "Across completed exams" },
      { label: "Pass Rate", value: `${Math.floor(Math.random() * 16) + 75}%`, help: "Candidates meeting criteria" },
    ],
    []
  );

  // Dynamic progress data
  const progressData = useMemo(
    () => [
      { label: "Technical Skills Exam", progress: Math.floor(Math.random() * 31) + 60 },
      { label: "Aptitude Test", progress: Math.floor(Math.random() * 41) + 50 },
      { label: "Communication Skills", progress: Math.floor(Math.random() * 26) + 70 },
    ],
    []
  );

  return (
    <Box bg="white" color="gray.800" minH="100vh" py={{ base: 8, md: 12 }} px={{ base: 4, md: 20 }}>
      {/* Heading section */}
      <MotionBox
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        mb={{ base: 10, md: 16 }}
        textAlign="center"
      >
        <Heading fontSize={headingSize} fontWeight="extrabold" mb={4} letterSpacing="wide">
          Assessment
        </Heading>
        <Text fontSize={{ base: "md", md: "lg" }} color="gray.600" maxW="650px" mx="auto" fontWeight="medium">
          Dive into performance dashboards, exams, and analytics.
        </Text>
      </MotionBox>

      {/* Brand Logo Carousel */}
      <Brandlogo />

      {/* Assessment selection */}
      <AssSelect />

      {/* Stats Cards Grid */}
      <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={10} mt={20} mb={20} maxW="1000px" mx="auto">
        {stats.map(({ label, value, help }, idx) => (
          <MotionBox
            key={idx}
            bg="gray.50"
            p={6}
            borderRadius="xl"
            boxShadow="md"
            whileHover={{ y: -3, boxShadow: "xl" }}
            transition="all 0.3s ease"
            textAlign="center"
          >
            <Stat>
              <StatLabel textTransform="uppercase" fontSize="sm" color="gray.500" letterSpacing="wider">
                {label}
              </StatLabel>
              <StatNumber color="teal.500" fontWeight="extrabold" fontSize="3xl">
                {value}
              </StatNumber>
              <StatHelpText color="gray.400">{help}</StatHelpText>
            </Stat>
          </MotionBox>
        ))}
      </SimpleGrid>

      <Divider borderColor="gray.300" mb={16} maxW="1000px" mx="auto" />

      {/* Progress Bars */}
      <Box maxW="600px" mx="auto" bg="gray.50" p={8} borderRadius="xl" boxShadow="md">
        <Heading as="h3" size="xl" mb={6} color="teal.500" textAlign="center" fontWeight="bold">
          Exam Completion Progress
        </Heading>
        {progressData.map(({ label, progress }, idx) => (
          <Box key={idx} mb={6}>
            <Text fontWeight="semibold" color="gray.600" mb={2}>
              {label}
            </Text>
            <Progress
              value={progress}
              size="lg"
              colorScheme="teal"
              borderRadius="full"
              hasStripe
              isAnimated
            />
            <Text fontSize="sm" color="gray.500" textAlign="right" mt={1} fontWeight="medium">
              {progress}%
            </Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Assessment;
