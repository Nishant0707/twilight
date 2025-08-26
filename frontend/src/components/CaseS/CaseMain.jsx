import React from "react";
import {
  Box,
  Heading,
  Text,
  Image,
  SimpleGrid,
  Stack,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react";

const CaseMain = ({ overview, problem, solution, results, images = [] }) => {
  const bgColor = useColorModeValue("gray.50", "gray.900");
  const sectionBg = useColorModeValue("white", "gray.800");

  return (
    <Box maxW="960px" mx="auto" px={6} py={12} bg={bgColor} borderRadius="md">
      <Stack spacing={16}>
        {/* Overview */}
        <Box bg={sectionBg} p={8} borderRadius="lg" boxShadow="md">
          <Heading as="h2" size="xl" mb={4}>
            Overview
          </Heading>
          <Text fontSize="lg" color="gray.600">
            {overview}
          </Text>
        </Box>

        {/* Problem + Result side by side with image */}
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">
          <Box bg={sectionBg} p={8} borderRadius="lg" boxShadow="md">
            <Heading as="h3" size="lg" mb={4} color="red.600">
              The Problem
            </Heading>
            <Text fontSize="md" color="gray.700">
              {problem}
            </Text>
          </Box>

          <Box bg={sectionBg} p={8} borderRadius="lg" boxShadow="md">
            <Heading as="h3" size="lg" mb={4} color="green.600">
              Results & Impact
            </Heading>
            <Text fontSize="md" color="gray.700" mb={4}>
              {results}
            </Text>
            {images[0] && (
              <Image
                src={images}
                alt="Result screenshot"
                borderRadius="md"
                boxShadow="lg"
                maxH="200px"
                w="full"
                objectFit="cover"
              />
            )}
          </Box>
        </SimpleGrid>

        <Divider />

        {/* Solution in full width with image gallery */}
        <Box bg={sectionBg} p={8} borderRadius="lg" boxShadow="md">
          <Heading as="h2" size="xl" mb={6} color="blue.600">
            Our Solution
          </Heading>
          <Text mb={8} fontSize="md" color="gray.700">
            {solution}
          </Text>
          {images.length > 1 && (
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
              {images.slice(1).map((src, idx) => (
                <Box key={idx} borderRadius="md" overflow="hidden" boxShadow="md">
                  <Image
                    src={src}
                    alt={`Solution screenshot ${idx + 1}`}
                    objectFit="cover"
                    w="100%"
                    h="160px"
                  />
                </Box>
              ))}
            </SimpleGrid>
          )}
        </Box>
      </Stack>
    </Box>
  );
};

export default CaseMain;
