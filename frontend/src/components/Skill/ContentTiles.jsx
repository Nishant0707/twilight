import React from 'react';
import {
  Box,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  useColorModeValue,
  Image,
  Fade,
  LinkBox,
  LinkOverlay,
  Flex,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom'; // Or use `next/link` if in Next.js

const tiles = [
  {
    title: 'Blogs',
    description: 'Explore ideas, insights, and trends shaping skill development.',
    image: '/Blog123.png', // corrected to match your actual filename
    route: '/blogs',
  },
  {
    title: 'Testimonials',
    description: 'Hear from learners, mentors, and industry partners we empower.',
    image: '/testimonials.png',
    route: '/testimonials',
  },
];

export default function ContentTiles() {
  const bg = useColorModeValue('gray.900', 'blackAlpha.900');
  const cardBg = useColorModeValue('gray.800', 'gray.700');
  const titleColor = useColorModeValue('blue.400', 'blue.300');
  const textColor = useColorModeValue('whiteAlpha.900', 'whiteAlpha.800');
  const descriptionColor = useColorModeValue('gray.300', 'gray.400');

  return (
    <Box py={{ base: 16, md: 24 }} px={{ base: 6, md: 24 }} bg={bg} minH="100vh">
      <VStack spacing={4} textAlign="center" mb={14} maxW="4xl" mx="auto">
        <Heading
          color="white"
          fontWeight="extrabold"
          fontSize={{ base: '3xl', md: '5xl' }}
          letterSpacing="tight"
          lineHeight="short"
          bgGradient="linear(to-r, blue.400, purple.500)"
          bgClip="text"
        >
          Kick-start Your Journey Here!
        </Heading>
        <Text
          color={descriptionColor}
          fontSize={{ base: 'md', md: 'lg' }}
          fontWeight="medium"
          lineHeight="tall"
          maxW="600px"
        >
          Whether you’re browsing knowledge or impact, we’ve got curated content just for you.
        </Text>
      </VStack>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 12, md: 16 }} maxW="6xl" mx="auto">
        {tiles.map(({ title, description, image, route }, idx) => (
          <Fade in key={idx} delay={idx * 0.3}>
            <LinkBox
              as="article"
              bg={cardBg}
              borderRadius="2xl"
              overflow="hidden"
              shadow="xl"
              _hover={{ transform: 'scale(1.05)', shadow: '2xl' }}
              transition="all 0.3s ease"
              cursor="pointer"
              display="flex"
              flexDirection="column"
              h="100%"
            >
              <Box overflow="hidden" flex="1">
                <Image
                  src={image}
                  alt={title}
                  objectFit="cover"
                  w="100%"
                  h={{ base: '220px', md: '280px' }}
                  loading="lazy"
                  transition="transform 0.4s ease"
                  _hover={{ transform: 'scale(1.08)' }}
                  borderTopRadius="2xl"
                />
              </Box>

              <Flex p={6} direction="column" justifyContent="space-between" flex="1">
                <Heading size="lg" mb={3} color={titleColor} letterSpacing="wide">
                  <LinkOverlay as={Link} to={route} _hover={{ color: 'purple.400' }}>
                    {title}
                  </LinkOverlay>
                </Heading>
                <Text fontSize="md" color={textColor} lineHeight="taller" flexGrow={1}>
                  {description}
                </Text>
              </Flex>
            </LinkBox>
          </Fade>
        ))}
      </SimpleGrid>
    </Box>
  );
}
