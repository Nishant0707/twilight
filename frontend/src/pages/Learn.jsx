import React, { useRef } from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Button,
  Image,
  Stack,
  useColorModeValue,
  Badge,
  IconButton,
  Flex,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import PageWrapper from "../components/Layout/PageWrapper";

// Use your existing courses array here unchanged
const courses = [
  {
    id: 1,
    title: "Handicrafts and Carpet Sector Skill Council (HCSSC)",
    segment: "Job Roles",
    provider: "Traditional Hand Embroiderer",
    description:
      "HCSSC is a recognized awarding body under NCVET promoted by EPCH, CEPC, and NSDC for skilling and certification under Ministry of Textiles.",
    image: "/learn/banner1.jpg",
  },
  {
    id: 2,
    title: "Media & Entertainment Skills Council (MESC)",
    segment: "Job Roles",
    provider: "Search Engine Optimization Executive",
    description:
      "Founded in 2012, MESC is a not-for-profit awarding body promoted by FICCI and financially supported by NSDC with NCVET recognition.",
    image: "/learn/banner1.jpg",
  },
  {
    id: 3,
    title: "Water Management & Plumbing Skill Council",
    segment: "Job Roles",
    provider: "Plumbing General",
    description:
      "WMPSC is the premier SSC for water and plumbing industries under NCVET & NSDC, supported by MoSDE Government of India.",
    image: "/learn/banner1.jpg",
  },
  {
    id: 4,
    title: "Skill Council for Persons with Disability (SCPwD)",
    segment: "Job Roles",
    provider: "Retail Sale Associate",
    description:
      "SCPwD aims to skill persons with disabilities through industry-relevant vocational training, promoted by CII and MSDE.",
    image: "/learn/banner1.jpg",
  },
  {
    id: 5,
    title: "Automotive Skills Development Council (ASDC)",
    segment: "Job Roles",
    provider: "Electric Vehicle Service Technician",
    description:
      "ASDC is the SSC for automotive sector focusing on skill development under Skill India Mission with industry support.",
    image: "/learn/banner1.jpg",
  },
  {
    id: 6,
    title: "Healthcare Sector Skill Council (HSSC)",
    segment: "Job Roles",
    provider: "General Duty Assistant",
    description:
      "HSSC works under NSDC & MSDE to bridge skill gaps in healthcare industry through standards and training programs.",
    image: "/learn/banner2.jpg",
  },
  {
    id: 7,
    title: "Safety Skill Development Foundation (SSDF)",
    segment: "Job Roles",
    provider: "Fire Safety Officer",
    description:
      "SSDF builds a safety professional ecosystem through national standards, trainings and NCVET certifications.",
    image: "/learn/banner3.jpg",
  },
];

const CarouselCard = ({ course }) => {
  const bg = useColorModeValue("white", "gray.800");
  const shadow = useColorModeValue("md", "dark-lg");
  const accent = useColorModeValue("blue.600", "cyan.400");

  return (
    <Box
      minW={{ base: "280px", md: "320px" }}
      borderRadius="2xl"
      bg={bg}
      boxShadow={shadow}
      overflow="hidden"
      cursor="pointer"
      transition="transform 0.3s ease, box-shadow 0.3s ease"
      _hover={{
        transform: "scale(1.08)",
        boxShadow: "2xl",
      }}
      role="group"
      aria-label={`Explore course: ${course.title}`}
    >
      <Image
        src={course.image}
        alt={course.title}
        objectFit="cover"
        height="220px"
        width="100%"
        loading="lazy"
        transition="transform 0.3s ease"
      />
      <Box p={6}>
        <Heading size="md" color={accent} mb={2} fontWeight="semibold">
          {course.title}
        </Heading>
        <Badge mb={4} colorScheme="blue" variant="subtle" fontSize="sm" px={3} py={1} borderRadius="full">
          {course.segment}
        </Badge>
        <Text fontSize="sm" noOfLines={3} color={useColorModeValue("gray.600", "gray.400")}>
          {course.provider}
        </Text>
      </Box>
    </Box>
  );
};

const FeaturedCourse = ({ course, reverse }) => {
  const bg = useColorModeValue("white", "gray.700");
  const descriptionColor = useColorModeValue("gray.700", "gray.300");
  const headingColor = useColorModeValue("blue.700", "cyan.300");

  return (
    <Stack
      direction={{ base: "column", md: reverse ? "row-reverse" : "row" }}
      spacing={{ base: 6, md: 14 }}
      align="center"
      py={{ base: 12, md: 20 }}
      px={{ base: 6, md: 12 }}
      bg={bg}
      borderRadius="3xl"
      boxShadow="2xl"
      maxW="7xl"
      mx="auto"
    >
      <Image
        src={course.image}
        alt={course.title}
        flex="1"
        borderRadius="2xl"
        boxShadow="xl"
        objectFit="cover"
        maxH={{ base: "240px", md: "380px" }}
        loading="lazy"
        transition="transform 0.3s ease"
        _groupHover={{ transform: "scale(1.05)" }}
      />
      <Box flex="1" maxW={{ base: "100%", md: "60%" }}>
        <Heading mb={5} fontSize={{ base: "3xl", md: "5xl" }} color={headingColor} letterSpacing="wider" fontWeight="extrabold">
          {course.title}
        </Heading>
        <Text fontSize={{ base: "md", md: "lg" }} color={descriptionColor} lineHeight="tall" mb={8}>
          {course.description}
        </Text>
        <Button
          size="lg"
          colorScheme="blue"
          variant="solid"
          borderRadius="full"
          px={10}
          _hover={{ bg: "blue.600", color: "white" }}
          aria-label={`Learn more about ${course.title}`}
        >
          Learn More
        </Button>
      </Box>
    </Stack>
  );
};

const StaggeredGridCard = ({ course, reverse }) => {
  const bg = useColorModeValue("white", "gray.800");
  const accent = useColorModeValue("blue.600", "cyan.400");
  const descColor = useColorModeValue("gray.700", "gray.300");

  return (
    <Stack
      direction={{ base: "column", md: reverse ? "row-reverse" : "row" }}
      bg={bg}
      borderRadius="2xl"
      shadow="lg"
      overflow="hidden"
      mb={12}
      spacing={0}
      maxW="840px"
      mx="auto"
      role="group"
      aria-label={`Explore course: ${course.title}`}
      transition="box-shadow 0.3s ease"
      _hover={{ boxShadow: "2xl" }}
    >
      <Image
        src={course.image}
        alt={course.title}
        objectFit="cover"
        w={{ base: "100%", md: "45%" }}
        h={{ base: "280px", md: "100%" }}
        loading="lazy"
        transition="transform 0.3s ease"
        _groupHover={{ transform: "scale(1.07)" }}
      />
      <Box p={{ base: 6, md: 8 }} flex="1" display="flex" flexDirection="column" justifyContent="center">
        <Heading color={accent} mb={4} fontSize="2xl" letterSpacing="wide" fontWeight="bold">
          {course.title}
        </Heading>
        <Text fontSize="md" color={descColor} flexGrow={1} noOfLines={5} mb={6}>
          {course.description}
        </Text>
        <Button mt="auto" alignSelf="flex-start" colorScheme="blue" variant="outline" fontWeight="semibold" size="md" aria-label={`Explore course: ${course.title}`}>
          Explore Course
        </Button>
      </Box>
    </Stack>
  );
};

const CoursesSection = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -360, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 360, behavior: "smooth" });
    }
  };

  const featuredIndex = 1;
  const staggeredCourses = courses.filter((_, i) => i !== featuredIndex);

  return (
    <PageWrapper bg={useColorModeValue("gray.50", "gray.900")} py={{ base: 16, md: 28 }}>
      {/* Header Section */}
      <VStack
        mb={16}
        textAlign="center"
        maxW="6xl"
        mx="auto"
        px={{ base: 6, md: 0 }}
        spacing={5}
        userSelect="none"
      >
        <Heading
          fontSize={{ base: "3xl", md: "5xl" }}
          bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
          bgClip="text"
          fontWeight="extrabold"
          letterSpacing="wider"
        >
          Explore Our Training Programs
        </Heading>
        <Text maxW="4xl" color={useColorModeValue("gray.600", "gray.400")} fontSize={{ base: "md", md: "xl" }} fontWeight="medium" lineHeight="tall">
          From diverse sectors to specialized job roles, browse and dive into courses designed to boost your career.
        </Text>
      </VStack>

      {/* Carousel Section */}
      <Box position="relative" maxW="7xl" mx="auto" px={{ base: 6, md: 4 }} mb={24}>
        <Flex mb={6} justify="space-between" align="center">
          <Heading size="lg" color={useColorModeValue("blue.600", "cyan.400")} fontWeight="bold">
            Courses Carousel
          </Heading>
          <HStack spacing={4}>
            <IconButton
              icon={<ChevronLeftIcon />}
              aria-label="Scroll carousel left"
              onClick={scrollLeft}
              variant="ghost"
              size="lg"
              color={useColorModeValue("blue.500", "cyan.400")}
              _hover={{ bg: useColorModeValue("blue.50", "cyan.700") }}
              rounded="full"
            />
            <IconButton
              icon={<ChevronRightIcon />}
              aria-label="Scroll carousel right"
              onClick={scrollRight}
              variant="ghost"
              size="lg"
              color={useColorModeValue("blue.500", "cyan.400")}
              _hover={{ bg: useColorModeValue("blue.50", "cyan.700") }}
              rounded="full"
            />
          </HStack>
        </Flex>

        <Box
          ref={scrollRef}
          overflowX="auto"
          whiteSpace="nowrap"
          css={{
            scrollbarHeight: "8px",
            scrollbarWidth: "thin",
            "&::-webkit-scrollbar": { height: "8px" },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: useColorModeValue("#4299E1", "#38B2AC"),
              borderRadius: "10px",
            },
          }}
          aria-label="Courses carousel scroll area"
        >
          <HStack spacing={6} display="inline-flex" role="list">
            {courses.map((course) => (
              <Box key={course.id} as="span" display="inline-block" role="listitem">
                <CarouselCard course={course} />
              </Box>
            ))}
          </HStack>
        </Box>
      </Box>

      {/* Featured Course Section with fade-in animation */}
      <FeaturedCourse course={courses[featuredIndex]} reverse={false} />

      {/* Staggered Grid Section */}
      <VStack mt={24} spacing={20} maxW="7xl" mx="auto" px={{ base: 6, md: 4 }}>
        {staggeredCourses.map((course, idx) => (
          <StaggeredGridCard key={course.id} course={course} reverse={Boolean(idx % 2)} />
        ))}
      </VStack>
    </PageWrapper>
  );
};

export default CoursesSection;
