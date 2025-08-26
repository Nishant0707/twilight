import React from 'react';
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Icon,
  useColorModeValue,
  ScaleFade,
} from '@chakra-ui/react';
import { MdHandshake, MdSchool, MdBusinessCenter } from 'react-icons/md';

const purposeData = [
  {
    title: 'National Skill Enabling Bodies',
    description:
      'Collaborate with national skill organizations, sector councils, and government entities to deliver technology-led skilling initiatives.',
    icon: MdHandshake,
  },
  {
    title: 'State Skill Enabling Bodies',
    description:
      'Drive state-level skilling via the Skill-a-State model. Empower youth through industry-aligned learning and employment programs.',
    icon: MdBusinessCenter,
  },
  {
    title: 'Industry & Academic Skill Providers',
    description:
      'Co-create programs with institutions and industry leaders to expand reach, boost employability, and foster innovation.',
    icon: MdSchool,
  },
];

export default function PurposeBanner() {
  const bg = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('rgba(255,255,255,0.9)', 'rgba(45,55,72,0.8)');
  const border = useColorModeValue('gray.200', 'gray.700');
  const titleColor = useColorModeValue('blue.700', 'blue.300');
  const descColor = useColorModeValue('gray.600', 'gray.300');

  return (
    <Box bg={bg} py={{ base: 16, md: 24 }} px={{ base: 6, md: 20 }}>
      <VStack spacing={6} textAlign="center" maxW="4xl" mx="auto" mb={14}>
        <Heading
          size={{ base: '2xl', md: '3xl' }}
          fontWeight="extrabold"
          color={titleColor}
          letterSpacing="tight"
        >
          Our Purpose
        </Heading>
        <Text
          fontSize={{ base: 'md', md: 'lg' }}
          color={descColor}
          lineHeight="tall"
          maxW="3xl"
        >
          SSTPL delivers tech platforms for education, industry, government, and individuals.
          From admissions to recruitment, we enable scalable, ‘Phygital’ solutions for growth.
        </Text>
      </VStack>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} maxW="6xl" mx="auto">
        {purposeData.map(({ title, description, icon }, idx) => (
          <ScaleFade key={idx} initialScale={0.9} in={true} delay={0.1 * idx}>
            <Box
              bg={cardBg}
              backdropFilter="blur(8px)"
              border="1px solid"
              borderColor={border}
              borderRadius="xl"
              p={8}
              shadow="xl"
              transition="all 0.4s ease"
              _hover={{
                transform: 'translateY(-6px)',
                shadow: '2xl',
                borderColor: titleColor,
              }}
            >
              <Icon as={icon} w={12} h={12} color={titleColor} mb={6} />
              <Heading size="md" mb={3} color={titleColor}>
                {title}
              </Heading>
              <Text fontSize="sm" color={descColor} lineHeight="tall">
                {description}
              </Text>
            </Box>
          </ScaleFade>
        ))}
      </SimpleGrid>
    </Box>
  );
}