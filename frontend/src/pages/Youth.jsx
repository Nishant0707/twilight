import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import {
  Box,
  Heading,
  Text,
  Image,
  SimpleGrid,
  useColorModeValue,
  Button,
  VStack,
  Divider,
} from "@chakra-ui/react";
import PageWrapper from "../components/Layout/PageWrapper"; // ✅ Import your wrapper

gsap.registerPlugin(ScrollTrigger);

const featureCards = [
  {
    title: "Creativity",
    description: "Youth bring fresh ideas and creativity into every sector.",
    color: "cyan.500",
    icon: "🎨",
  },
  {
    title: "Empowerment",
    description: "We empower youth with confidence and the tools for growth.",
    color: "blue.500",
    icon: "🚀",
  },
  {
    title: "Digital Skills",
    description: "Equipping youth with digital skills for a modern workforce.",
    color: "purple.500",
    icon: "💻",
  },
];

const whyCards = [
  {
    label: "Innovation",
    description: "Youth drive creative solutions to modern challenges.",
    color: "blue.600",
  },
  {
    label: "Leadership",
    description: "They shape future leadership across industries.",
    color: "cyan.700",
  },
  {
    label: "Skills",
    description: "Equipped with relevant skills, youth build strong economies.",
    color: "purple.700",
  },
];

const fakeStories = [
  {
    img: "https://source.unsplash.com/600x300/?success,student,growth",
    title: "Priya’s Leap to Tech Leadership",
    text: "From small town to tech trailblazer, Priya leveraged SSTPL’s platform for a dream role in the industry.",
  },
  {
    img: "https://source.unsplash.com/600x300/?success,student,skills",
    title: "Yash Transforms With Digital Skills",
    text: "Yash upskilled fast, landing an internship in AI after just four months of focused learning with us.",
  },
];

const Youth = () => {
  const [items, setItems] = useState([]);
  const sectionRef = useRef(null);

  const bg = useColorModeValue("gray.50", "#131a29");
  const cardBg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("blue.100", "blue.700");
  const textColor = useColorModeValue("blue.900", "blue.100");
  const secondaryText = useColorModeValue("gray.600", "gray.300");
  const headingColor = useColorModeValue("blue.600", "cyan.400");

  useEffect(() => {
    axios.get("http://localhost:5000/api/youth").then((res) => {
      setItems(res.data.data || []);
    });
  }, []);

  useEffect(() => {
    const elements = gsap.utils.toArray(".youth-card");
    elements.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, [items]);

  return (
    <Box bg={bg} minH="100vh" py={14}>
      <PageWrapper>
        {/* HERO */}
        <VStack spacing={8} textAlign="center" mb={14} maxW="3xl" mx="auto">
          <Heading
            fontSize={{ base: "2.3rem", md: "4xl" }}
            fontWeight="extrabold"
            bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
            bgClip="text"
          >
            Unlocking Youth Potential & Opportunity
          </Heading>
          <Text
            fontSize={{ base: "lg", md: "xl" }}
            color={secondaryText}
            fontWeight="medium"
          >
            At SSTPL, we champion the skills, dreams, and ambitions of India's
            youth. Whether you're discovering, upskilling, or connecting with
            opportunities, we shape futures through holistic support, quality
            assessments, and mentorship. Join a movement where learning leads
            to lasting success.
          </Text>
          <Box pos="relative" w="full">
            <Image
              src="/youth/youth1.png"
              alt="Youth Banner"
              borderRadius="2xl"
              objectFit="cover"
              maxH="340px"
              w="full"
              shadow="2xl"
              border="6px solid"
              borderColor={borderColor}
            />
            <Box
              pos="absolute"
              bottom={3}
              left={3}
              py={1}
              px={4}
              borderRadius="full"
              bgGradient="linear(to-r, cyan.600, blue.600)"
              color="white"
              fontWeight="bold"
              fontSize="sm"
              letterSpacing="wider"
              shadow="md"
            >
              #YouthEmpowerment
            </Box>
          </Box>
        </VStack>

        {/* FEATURE CARDS */}
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} mb={14}>
          {featureCards.map((f) => (
            <Box
              key={f.title}
              bgGradient={`linear(to-br, ${f.color}, blue.400 80%)`}
              color="white"
              borderRadius="xl"
              shadow="2xl"
              p={8}
              className="youth-card"
              textAlign="center"
              fontWeight="semibold"
              minH="185px"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              letterSpacing="wide"
            >
              <Box fontSize="3xl" mb={3}>
                {f.icon}
              </Box>
              <Heading size="md" mb={2}>
                {f.title}
              </Heading>
              <Text color="whiteAlpha.800">{f.description}</Text>
            </Box>
          ))}
        </SimpleGrid>

        {/* WHY YOUTH */}
        <Box mb={14} maxW="6xl" mx="auto">
          <Heading mb={5} color={textColor} size="lg" fontWeight="extrabold">
            Why Focus on Youth?
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} mb={6}>
            {whyCards.map((f, i) => (
              <Box
                key={i}
                className="youth-card"
                textAlign="center"
                p={7}
                bg={cardBg}
                borderRadius="2xl"
                border="1.5px solid"
                borderColor={borderColor}
                shadow="xl"
                _hover={{
                  transform: "translateY(-8px) scale(1.03)",
                  borderColor: f.color,
                  boxShadow: "2xl",
                }}
                transition="all 0.3s"
              >
                <Heading size="md" mb={2} color={f.color}>
                  {f.label}
                </Heading>
                <Text color={secondaryText}>{f.description}</Text>
              </Box>
            ))}
          </SimpleGrid>
          <Text
            color={secondaryText}
            fontWeight="medium"
            maxW="4xl"
            mx="auto"
            textAlign="center"
          >
            By focusing on youth skills and perspectives, SSTPL unlocks a
            workforce that's adaptive, innovative, and equipped to lead
            national progress in every domain.
          </Text>
        </Box>

        {/* STORIES */}
        <Divider my={12} />
        <Box mb={14} maxW="6xl" mx="auto">
          <Heading
            fontSize="2xl"
            mb={6}
            color={textColor}
            fontWeight="bold"
          >
            Success Stories
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            {fakeStories.map((story, idx) => (
              <Box
                key={idx}
                className="youth-card"
                bg={cardBg}
                p={6}
                borderRadius="2xl"
                boxShadow="xl"
                border="1.5px solid"
                borderColor={borderColor}
                display="flex"
                flexDirection="column"
              >
                <Image
                  src={story.img}
                  alt={story.title}
                  borderRadius="md"
                  mb={5}
                  h="200px"
                  objectFit="cover"
                  w="100%"
                />
                <Text
                  fontWeight="bold"
                  fontSize="lg"
                  color={headingColor}
                  mb={2}
                >
                  {story.title}
                </Text>
                <Text color={secondaryText}>{story.text}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>

        {/* CTA */}
        <Box textAlign="center" mt={4}>
          <Heading fontSize={{ base: "xl", md: "2xl" }} mb={4} color={textColor}>
            Ready to shape your future?
          </Heading>
          <Text
            color={secondaryText}
            mb={6}
            fontSize="md"
            maxW="xl"
            mx="auto"
          >
            Discover programs, mentorships, and communities to grow with SSTPL.
          </Text>
          <Button
            as={Link}
            to="/testimonials"
            colorScheme="blue"
            bgGradient="linear(to-r, cyan.500, blue.600)"
            size="lg"
            px={8}
            py={6}
            borderRadius="3xl"
            fontSize="lg"
            fontWeight="bold"
            letterSpacing="wide"
            boxShadow="lg"
            _hover={{
              bgGradient: "linear(to-l, cyan.400, blue.700)",
              transform: "scale(1.08)",
            }}
            transition="all 0.3s"
          >
            Explore Now
          </Button>
        </Box>
      </PageWrapper>
    </Box>
  );
};

export default Youth;
