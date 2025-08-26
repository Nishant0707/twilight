import React from "react";
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  List,
  ListItem,
  useColorModeValue,
} from "@chakra-ui/react";

const serviceData = [
  {
    title: "Career Counselling",
    items: ["Shortlist Skill Needs", "Diagnostic Test", "Explore Careers"],
  },
  {
    title: "Employment-linked Learning Programmes",
    items: [
      "Academia",
      "Industry/Corporates",
      "Original Equipment Provider",
      "Learning and Practice Centre",
      "Content Partner",
    ],
  },
  {
    title: "Certification and SSTPL NPT",
    items: ["Test of Knowledge", "Test of Skills"],
  },
  {
    title: "SSTPL NQT",
    items: ["Proof of Work Readiness"],
  },
  {
    title: "Jobs",
    items: ["Discover", "Apply with SSTPL Score", "Interview", "BGC"],
  },
];

export default function SSTPLBanner() {
  const bgCard = useColorModeValue("white", "gray.800");
  const borderCard = useColorModeValue("gray.300", "gray.600");
  const titleColor = useColorModeValue("gray.900", "whiteAlpha.900");
  const subtitleColor = useColorModeValue("gray.600", "gray.400");
  const boxShadowHover = useColorModeValue("lg", "dark-lg");
  const bulletColor = useColorModeValue("blue.500", "blue.300");

  return (
    <Box py={14} px={{ base: 6, md: 16 }} bg={useColorModeValue("gray.50", "gray.900")}>
      <VStack spacing={6} textAlign="center" maxW="4xl" mx="auto" mb={10}>
       <Heading
  size={{ base: "xl", md: "2xl" }}
  fontWeight="extrabold"
  letterSpacing="wide"
  textAlign="center"
  bgGradient="linear(to-r, blue.400, purple.600)"
  backgroundClip="text"
  _hover={{ filter: 'brightness(1.1)' }}
  transition="filter 0.3s ease"
>
  Empowering India’s Youth with Outcome Linked Skilling
</Heading>

        <Text
          fontSize={{ base: "md", md: "lg" }}
          color={subtitleColor}
          maxW="3xl"
          fontWeight="medium"
          lineHeight="taller"
        >
          Over 180 million youth across India are ready to be skilled. SSTPL aligns with national missions to deliver high-impact training through technology-led platforms.
        </Text>
      </VStack>

      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 5 }} spacing={8} maxW="7xl" mx="auto">
        {serviceData.map((service, idx) => (
          <Box
            key={idx}
            p={6}
            bg={bgCard}
            border="1px solid"
            borderColor={borderCard}
            borderRadius="lg"
            shadow="md"
            transition="all 0.3s ease"
            _hover={{
              transform: "translateY(-6px)",
              shadow: boxShadowHover,
              borderColor: bulletColor,
            }}
          >
            <Heading size="md" mb={4} color={titleColor}>
              {service.title}
            </Heading>
            <List spacing={2}>
              {service.items.map((item, i) => (
                <ListItem
                  key={i}
                  fontSize="sm"
                  color={subtitleColor}
                  pl={4}
                  position="relative"
                  _before={{
                    content: '"•"',
                    color: bulletColor,
                    position: "absolute",
                    left: 0,
                    top: "50%",
                    transform: "translateY(-50%)",
                    fontWeight: "bold",
                  }}
                >
                  {item}
                </ListItem>
              ))}
            </List>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}