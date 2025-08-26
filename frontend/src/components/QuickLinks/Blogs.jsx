// src/pages/Blogs.jsx
import React from 'react';
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Stack,
  Image,
  Tag,
  Button,
  VStack,
} from '@chakra-ui/react';

const blogPosts = [
  {
    title: "Empowering Learners Through Technology",
    subtitle: "How SSTPL is transforming education for the digital age.",
    image: "/blogs/blog1.jpg",
    tags: ["Education", "Innovation"],
    date: "August 14, 2025",
  },
  {
    title: "Why Skill-Based Learning Is the Future",
    subtitle: "A closer look at real-world skill programs and their impact.",
    image: "/blogs/blog2.jpg",
    tags: ["Career", "Skills"],
    date: "August 10, 2025",
  },
  {
    title: "Inside SSTPL Labs: A Culture of Growth",
    subtitle: "An interview with the minds behind our R&D division.",
    image: "/blogs/blog3.jpg",
    tags: ["Culture", "Behind the Scenes"],
    date: "August 5, 2025",
  },
];

const Blogs = () => {
  return (
    <Box bg="white" px={{ base: 4, md: 12 }} py={{ base: 8, md: 16 }}>
      <VStack spacing={3} mb={8} textAlign="center">
        <Heading
          size="xl"
          bgGradient="linear(to-l, #3182ce, #00B5D8)"
          bgClip="text"
        >
          Welcome to SSTPL Stories
        </Heading>
        <Text fontSize="md" color="gray.600" maxW="700px">
          Explore the heart of what drives us — education, innovation, and transformation. Get inspired by stories that matter.
        </Text>
      </VStack>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
        {blogPosts.map((post, index) => (
          <Box
            key={index}
            bg="gray.50"
            borderRadius="xl"
            overflow="hidden"
            shadow="md"
            transition="all 0.3s ease"
            _hover={{ transform: 'translateY(-4px)', shadow: 'lg' }}
          >
            <Image
              src={post.image}
              alt={post.title}
              h="200px"
              w="full"
              objectFit="cover"
            />
            <Box p={6}>
              <VStack align="start" spacing={2}>
                <Text fontSize="sm" color="gray.500">
                  {post.date}
                </Text>
                <Heading size="md">{post.title}</Heading>
                <Text fontSize="sm" color="gray.700">
                  {post.subtitle}
                </Text>
                <Stack direction="row" mt={2}>
                  {post.tags.map((tag, i) => (
                    <Tag key={i} size="sm" colorScheme="blue">
                      {tag}
                    </Tag>
                  ))}
                </Stack>
                <Button
                  mt={4}
                  size="sm"
                  colorScheme="blue"
                  variant="outline"
                  _hover={{ bg: 'blue.50' }}
                >
                  Read More
                </Button>
              </VStack>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Blogs;