import React, { useState } from 'react';
import {
  Box,
  SimpleGrid,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  useBreakpointValue,
  ScaleFade,
} from '@chakra-ui/react';

const domainData = [
  {
    label: 'Handicrafts & Design',
    description:
      'Preserve India’s artisanal legacy. Learn embroidery, pottery, woodwork, textiles, and sustainable design with market-ready certifications and e-commerce tools.',
  },
  {
    label: 'Construction & Infrastructure',
    description:
      'Build the nation with skill. Get trained in site engineering, modular architecture, survey techniques, safety protocols, and eco-construction practices.',
  },
  {
    label: 'Media, Film & Communication',
    description:
      'Turn stories into impact. Discover career tracks in digital production, editing, animation, voice artistry, community journalism, and content strategy.',
  },
  {
    label: 'Soft Skills & Leadership',
    description:
      'Navigate tomorrow’s workplace with empathy, strategic thinking, collaboration, critical communication, and personal effectiveness mastery.',
  },
];

export default function SkillDomainSelector() {
  const [selected, setSelected] = useState(null);
  const cardBg = useColorModeValue('rgba(255,255,255,0.85)', 'rgba(36,41,51,0.9)');
  const cardBorder = useColorModeValue('gray.200', 'gray.700');
  const accent = useColorModeValue('blue.800', 'blue.300');
  const muted = useColorModeValue('gray.600', 'gray.400');
  const columns = useBreakpointValue({ base: 1, sm: 2, md: 2, lg: 4 });

  return (
    <Box
      py={20}
      px={{ base: 6, md: 20 }}
      bg={useColorModeValue('linear-gradient(to right, #edf2f7, #dfe9f3)', 'gray.900')}
    >
      <VStack spacing={6} textAlign="center" mb={16} maxW="4xl" mx="auto">
        <Heading
          size={{ base: 'xl', md: '2xl' }}
          fontWeight="extrabold"
          color={accent}
          letterSpacing="tight"
        >
          Skill Domains Aligned with Skill India
        </Heading>
        <Text fontSize={{ base: 'md', md: 'lg' }} color={muted} lineHeight="tall">
          These domains reflect India’s growing demand for certified skills across traditional and modern sectors. Choose your path. Lead your impact.
        </Text>
      </VStack>

      <SimpleGrid columns={columns} spacing={10} maxW="7xl" mx="auto">
        {domainData.map((item, idx) => {
          const isSelected = selected === idx;
          return (
            <Box
              key={idx}
              p={8}
              bg={cardBg}
              backdropFilter="blur(8px)"
              border="2px solid"
              borderColor={isSelected ? accent : cardBorder}
              borderRadius="xl"
              shadow={isSelected ? '2xl' : 'lg'}
              cursor="pointer"
              transition="all 0.4s ease"
              _hover={{
                transform: 'scale(1.03)',
                borderColor: accent,
                shadow: '2xl',
              }}
              onClick={() => setSelected(idx)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') setSelected(idx);
              }}
              aria-pressed={isSelected}
            >
              <Heading
                size="md"
                mb={4}
                color={accent}
                fontWeight="bold"
                letterSpacing="wide"
              >
                {item.label}
              </Heading>
              <Text fontSize="sm" color={muted} lineHeight="tall" noOfLines={4}>
                {item.description}
              </Text>
            </Box>
          );
        })}
      </SimpleGrid>

      <ScaleFade initialScale={0.9} in={selected !== null}>
        {selected !== null && (
          <Box
            mt={16}
            p={8}
            bg={cardBg}
            backdropFilter="blur(6px)"
            borderRadius="xl"
            shadow="xl"
            maxW="5xl"
            mx="auto"
          >
            <Heading size="lg" mb={4} fontWeight="extrabold" color={accent}>
              {domainData[selected].label} – Sector Insight
            </Heading>
            <Text fontSize="md" color={muted} lineHeight="taller" whiteSpace="pre-wrap">
              {domainData[selected].description}
            </Text>
          </Box>
        )}
      </ScaleFade>
    </Box>
  );
}