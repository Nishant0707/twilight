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
  FiEdit2,
  FiList,
  FiSettings,
  FiImage,
  FiBookOpen,
  FiMessageCircle,
} from "react-icons/fi";
import PageWrapper from "../Layout/PageWrapper";
 // adjust path as needed

// Assessment types
const items = [
  {
    icon: FiList,
    title: "Objective-based Questions",
    desc: "Multiple-choice or true/false questions to assess factual knowledge and quick reasoning with instant evaluation.",
  },
  {
    icon: FiEdit2,
    title: "Subjective (Long Answer) Questions",
    desc: "Open-ended responses test critical thinking, depth of understanding, and your ability to reason and articulate ideas.",
  },
  {
    icon: FiImage,
    title: "Image-Based Questions",
    desc: "Analyze graphics, diagrams, or images; useful for science, geography, and creative skill evaluation.",
  },
  {
    icon: FiSettings,
    title: "Simulation-Based Assessments",
    desc: "Real-world scenarios in a digital environment to test skills dynamically, ensuring job-readiness.",
  },
  {
    icon: FiBookOpen,
    title: "Case Study & Role Play",
    desc: "Practical evaluation of skills by analysing a realistic scenario or acting out roles in professional contexts.",
  },
  {
    icon: FiMessageCircle,
    title: "Verbal & Communication",
    desc: "Assess speaking, listening, and comprehension with oral or written prompts to evaluate language mastery.",
  },
];

export default function Sereduque() {
  const cardBg = "rgba(27, 37, 77, 0.73)";
  const cardShadow = "0 8px 44px 0 #1f158bc9";
  const accentGrad = "linear(to-r, #4f79ef, #805ad5)";
  const borderStyle = "1.5px solid rgba(120,140,255,0.17)";

  const sectionBg = useColorModeValue("#151d44", "#151d44");

  return (
    <Box
      as="section"
      py={{ base: 10, md: 20 }}
      bgGradient="linear(to-br, #151d44 0%, #3c2876 78%, #2d437e 100%)"
      fontFamily="Outfit, Inter, system-ui, sans-serif"
      letterSpacing="tight"
    >
      <PageWrapper>
        <VStack spacing={5} textAlign="center">
          <Heading
            as="h1"
            bgGradient={accentGrad}
            bgClip="text"
            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
            fontWeight="extrabold"
            letterSpacing="tight"
          >
            Available Types of Questions for Educational Assessment
          </Heading>
          <Text
            color="gray.200"
            maxW="650px"
            fontSize={{ base: "md", md: "lg" }}
          >
            Discover the diverse question and assessment types that fuel modern
            learning, recruitment, and skill mapping across domains.
          </Text>
        </VStack>

        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3 }}
          spacing={{ base: 6, md: 8, lg: 12 }}
          mt={12}
        >
          {items.map((item) => (
            <Box
              key={item.title}
              bg={cardBg}
              boxShadow={cardShadow}
              border={borderStyle}
              borderRadius="2xl"
              px={{ base: 5, md: 7 }}
              py={{ base: 6, md: 9 }}
              _hover={{
                boxShadow: "0 14px 60px #8875f7aa",
                borderColor: "#7058e8",
                transform: "translateY(-2px) scale(1.025)",
              }}
              display="flex"
              flexDir="column"
              alignItems="center"
              transition="all 0.25s cubic-bezier(.86,0,.38,1)"
              backdropFilter="blur(3.5px)"
              minH="270px"
              textAlign="center"
            >
              <chakra.div
                bgGradient={accentGrad}
                color="white"
                boxSize="54px"
                borderRadius="full"
                display="flex"
                alignItems="center"
                justifyContent="center"
                mb={5}
                fontSize="2xl"
                boxShadow="0 4px 16px #4f79ef66"
              >
                {item.icon && <chakra.span as={item.icon} boxSize={7} />}
              </chakra.div>
              <Heading
                as="h3"
                fontSize={{ base: "lg", md: "xl" }}
                bgGradient={accentGrad}
                bgClip="text"
                mb={2}
                fontWeight="bold"
                letterSpacing="wide"
              >
                {item.title}
              </Heading>
              <Text
                color="gray.200"
                fontSize={{ base: "md", md: "md" }}
                opacity={0.93}
              >
                {item.desc}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </PageWrapper>
    </Box>
  );
}
