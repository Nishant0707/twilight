import React from "react";
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Icon,
  VStack,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";
import {
  FaBrain,
  FaRegLightbulb,
  FaUserCheck,
  FaChartLine,
} from "react-icons/fa";

// Example data
const keys = [
  {
    icon: FaBrain,
    title: "AI-driven Analytics",
    desc: "Unlock data-driven talent insights with advanced AI for better hiring and growth decisions.",
  },
  {
    icon: FaRegLightbulb,
    title: "Innovative Solutions",
    desc: "Experience cutting-edge assessments and engagement tools customized for your sector’s challenges.",
  },
  {
    icon: FaUserCheck,
    title: "Verified Talent Match",
    desc: "Rigorous, unbiased tests ensure right fit, every time — maximizing performance & retention.",
  },
  {
    icon: FaChartLine,
    title: "Scalable Delivery",
    desc: "Assess thousands at once, securely and reliably, with seamless online and offline workflows.",
  },
];

const accentGrad = "linear(to-r, blue.500, purple.500, blue.400)";

export default function SercopKey() {
  const sectionShadow = useColorModeValue(
    "0 6px 32px 0 #5E67F914",
    "0 8px 32px 0 #23184555"
  );
  const cardBg = useColorModeValue("white", "#181b2d");

  return (
    <Box px={{ base: 4, md: 12 }} py={{ base: 10, md: 16 }} maxW="1200px" mx="auto">
      <VStack mb={10}>
        <Heading
          as="h2"
          fontSize={{ base: "2xl", md: "3xl" }}
          fontWeight="extrabold"
          bgGradient={accentGrad}
          bgClip="text"
          letterSpacing="tight"
          textAlign="center"
        >
          Key Benefits for Corporates
        </Heading>
        <Text
          fontSize={{ base: "md", md: "lg" }}
          color={useColorModeValue("gray.500", "gray.400")}
          maxW="700px"
          textAlign="center"
        >
          Explore our signature features fueling next-generation workforce excellence and seamless talent transformation.
        </Text>
      </VStack>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
        {keys.map((item) => (
          <Box
            key={item.title}
            bg={cardBg}
            borderRadius="2xl"
            boxShadow={sectionShadow}
            p={{ base: 6, sm: 7, lg: 8 }}
            transition="all 0.23s cubic-bezier(.46,.02,.6,1.05)"
            _hover={{
              boxShadow: "0 12px 28px #6b82e88a",
              transform: "translateY(-4px) scale(1.036)",
              cursor: "default",
            }}
            display="flex"
            flexDir="column"
            alignItems="center"
            textAlign="center"
            minH="290px"
          >
            <Flex
              boxSize="64px"
              borderRadius="full"
              align="center"
              justify="center"
              bgGradient={accentGrad}
              color="white"
              mb={6}
              fontSize="2.5rem"
              transition="background 0.18s"
              _hover={{
                bgGradient: "linear(to-tr, #4f79ef, #b36ad9 80%)",
              }}
              shadow="lg"
            >
              <Icon as={item.icon} boxSize={9} />
            </Flex>
            <Heading
              as="h3"
              fontSize={{ base: "lg", md: "xl" }}
              fontWeight="bold"
              bgGradient={accentGrad}
              bgClip="text"
              mb={3}
              letterSpacing="wide"
            >
              {item.title}
            </Heading>
            <Text
              color={useColorModeValue("gray.500", "gray.300")}
              fontSize="md"
              minH="64px"
              mb={5}
              fontWeight="medium"
            >
              {item.desc}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}
