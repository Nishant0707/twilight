import React from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Image,
  Button,
  Badge,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import PageWrapper from "../components/Layout/PageWrapper";

const MotionBox = motion(Box);

const courses = [
  {
    id: 1,
    title: "Handicrafts and Carpet Sector Skill Council (HCSSC)",
    provider: "Traditional Hand Embroiderer",
    description:
      "HCSSC is a recognized awarding body under NCVET promoted by EPCH, CEPC, and NSDC for skilling and certification under Ministry of Textiles.",
    image: "/learn/banner1.jpg",
    link: "https://hcssc.in/",
  },
  {
    id: 2,
    title: "Media & Entertainment Skills Council (MESC)",
    provider: "Search Engine Optimization Executive",
    description:
      "Founded in 2012, MESC is a not-for-profit awarding body promoted by FICCI and financially supported by NSDC with NCVET recognition.",
    image: "/learn/banner1.jpg",
    link: "https://www.mescindia.org/",
  },
  {
    id: 3,
    title: "Water Management & Plumbing Skill Council",
    provider: "Plumbing General",
    description:
      "WMPSC is the premier SSC for water and plumbing industries under NCVET & NSDC, supported by MoSDE Government of India.",
    image: "/learn/banner1.jpg",
    link: "https://wmpsc.in/",
  },
  {
    id: 4,
    title: "Skill Council for Persons with Disability (SCPwD)",
    provider: "Retail Sale Associate",
    description:
      "SCPwD aims to skill persons with disabilities through industry-relevant vocational training, promoted by CII and MSDE.",
    image: "/learn/banner1.jpg",
    link: "https://www.scpwd.in/",
  },
  {
    id: 5,
    title: "Automotive Skills Development Council (ASDC)",
    provider: "Electric Vehicle Service Technician",
    description:
      "ASDC is the SSC for automotive sector focusing on skill development under Skill India Mission with industry support.",
    image: "/learn/banner1.jpg",
    link: "https://www.asdc.org.in/",
  },
  {
    id: 6,
    title: "Healthcare Sector Skill Council (HSSC)",
    provider: "General Duty Assistant",
    description:
      "HSSC works under NSDC & MSDE to bridge skill gaps in healthcare industry through standards and training programs.",
    image: "/learn/banner2.jpg",
    link: "https://www.healthcare-ssc.in/",
  },
  {
    id: 7,
    title: "Safety Skill Development Foundation (SSDF)",
    provider: "Fire Safety Officer",
    description:
      "SSDF builds a safety professional ecosystem through national standards, trainings and NCVET certifications.",
    image: "/learn/banner3.jpg",
    link: "https://ssdfindia.org/",
  },
  {
    id: 7,
    title: "Apparel Made-Ups & Home Furnishing (AMH)",
    provider: "Apparel, home furnishing, and made-ups sectors.",
    description:
      "The Apparel, Made-Ups & Home Furnishing Sector Skill Council (AMHSSC) is a pioneering non-profit organization, established on December 24, 2013, under the esteemed aegis of the Ministry of Skill Development & Entrepreneurship (MSDE) and the National Skill Development Corporation",
    image: "/learn/banner3.jpg",
    link: "https://www.sscamh.com/en",
  },
];

const CourseCard = ({ course }) => {
  const bg = useColorModeValue("white", "gray.800");
  const descColor = useColorModeValue("gray.600", "gray.300");

  return (
    <MotionBox
      bg={bg}
      borderRadius="xl"
      overflow="hidden"
      boxShadow="md"
      cursor="pointer"
      whileHover={{ y: -6, boxShadow: "xl" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      role="group"
    >
      <Box position="relative" overflow="hidden">
        <Image
          src={course.image}
          alt={course.title}
          w="100%"
          h="200px"
          objectFit="cover"
          transition="transform 0.3s ease"
          _groupHover={{ transform: "scale(1.05)" }}
        />
        {/* Hover Overlay */}
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg="blackAlpha.600"
          opacity={0}
          transition="opacity 0.3s ease"
          _groupHover={{ opacity: 1 }}
          display="flex"
          justifyContent="center"
          alignItems="center"
          color="white"
          fontWeight="bold"
          fontSize="lg"
          pointerEvents="none"
        >
          Find Out More 
        </Box>
      </Box>
      <Box p={6} position="relative" zIndex={1}>
      
        <Heading fontSize="xl" mb={2} color="blue.500">
          {course.title}
        </Heading>
        <Text fontWeight="medium" mb={3}>
          {course.provider}
        </Text>
        <Text fontSize="sm" color={descColor} noOfLines={3} mb={5}>
          {course.description}
        </Text>
        <Button
          as="a"
          href={course.link}
          target="_blank"
          rel="noopener noreferrer"
          size="sm"
          colorScheme="blue"
          borderRadius="full"
        >
          Learn More
        </Button>
      </Box>
    </MotionBox>
  );
};

const CoursesSection = () => {
  return (
    <PageWrapper bg={useColorModeValue("gray.50", "gray.900")} py={{ base: 16, md: 24 }}>
      {/* Section Header */}
      <VStack spacing={5} mb={12} textAlign="center" px={6}>
        <Heading
          fontSize={{ base: "3xl", md: "5xl" }}
          bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
          bgClip="text"
          fontWeight="extrabold"
        >
          Explore Our Training Programs
        </Heading>
        <Text
          maxW="3xl"
          fontSize={{ base: "md", md: "lg" }}
          color={useColorModeValue("gray.600", "gray.400")}
        >
          Browse courses from different sectors and find the right path to grow your career.
        </Text>
      </VStack>

      {/* Courses Grid */}
      <SimpleGrid
        columns={{ base: 1, sm: 2, lg: 3 }}
        spacing={10}
        maxW="7xl"
        mx="auto"
        px={{ base: 6, md: 10 }}
      >
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </SimpleGrid>
    </PageWrapper>
  );
};

export default CoursesSection;
