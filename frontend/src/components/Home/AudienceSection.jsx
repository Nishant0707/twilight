// src/components/Home/AudienceSection.jsx
import React from 'react';
import {
  Box,
  VStack,
  Heading,
  Text,
  Grid,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  FaUniversity,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaSchool,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import PageWrapper from '../Layout/PageWrapper'; // ✅ import the wrapper

const AudienceSection = () => {
  const bg = useColorModeValue('black', 'gray.900');
  const color = useColorModeValue('white', 'gray.100');
  const boxBg = useColorModeValue('gray.800', 'gray.700');
  const borderHoverColor = useColorModeValue('blue.400', 'cyan.400');
  const colorHoverBg = useColorModeValue('gray.900', 'gray.600');
  const textColor = useColorModeValue('gray.300', 'gray.400');
  const navigate = useNavigate();

  // Card styles for uniform size
  const cardStyle = {
    bg: boxBg,
    minH: '90px',          // Ensures min height (adjust as needed)
    flex: 1,               // Even sizing across grid items
    p: 4,
    borderRadius: 'lg',
    display: 'flex',
    alignItems: 'center',
    gap: 4,
    border: '2px solid transparent',
    cursor: 'pointer',
    transition: 'all 0.3s ease-in-out',
    _hover: {
      bg: colorHoverBg,
      borderColor: borderHoverColor,
      transform: 'translateY(-5px)',
      boxShadow: `0 0 12px ${borderHoverColor}`,
    },
  };

  const cards = [
    {
      label: 'Youth',
      icon: FaUserGraduate,
      section: 'Youth',
    },
    {
      label: 'Government',
      icon: FaUniversity,
      section: 'Government',
    },
    {
      label: 'Learn',
      icon: FaSchool,
      section: 'Learn',
    },
    {
      label: 'Skill Education',
      icon: FaChalkboardTeacher,
      section: 'Skill Education',
    },
  ];

  const handleClick = (section) => {
    switch (section) {
      case 'Youth':
        navigate('/youth');
        break;
      case 'Government':
        navigate('/government');
        break;
      case 'Learn':
        navigate('/learn');
        break;
      case 'Skill Education':
        navigate('/skill');
        break;
      default:
        navigate('/');
        break;
    }
  };

  return (
    <Box bg={bg} color={color} py={{ base: 10, md: 10 }}>
      <PageWrapper>
        <VStack spacing={4} mb={12} textAlign="center">
          <Heading fontSize={{ base: '2xl', md: '4xl' }} fontWeight="extrabold" color={color}>
            We’re Here to Support Your Learning Journey
          </Heading>
          <Text fontSize="lg" color={textColor}>
            Start exploring what matters to you
          </Text>
        </VStack>

        {/* Headings for sections */}
        <Grid
          templateColumns={{ base: '1fr', md: '1fr 3fr' }}
          gap={10}
          mb={{ base: 8, md: 12 }}
        >
          <Heading size="lg" textAlign={{ base: 'center', md: 'left' }} color={borderHoverColor}>
            
          </Heading>
          <Heading size="lg" textAlign={{ base: 'center', md: 'left' }} color={borderHoverColor}>
           
          </Heading>
        </Grid>

        {/* Cards for Learners + Institutions side-by-side for same size */}
        <Grid
          templateColumns={{ base: '1fr', md: 'repeat(4, 1fr)' }} // All four cards equal size
          gap={8}
        >
          {cards.map((card) => (
            <Box
              key={card.label}
              {...cardStyle}
              onClick={() => handleClick(card.section)}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => e.key === 'Enter' && handleClick(card.section)}
              aria-label={`Navigate to ${card.label} page`}
            >
              <Icon as={card.icon} boxSize={7} color={borderHoverColor} />
              <Text fontWeight="semibold" fontSize="lg" userSelect="none">
                {card.label}
              </Text>
            </Box>
          ))}
        </Grid>
      </PageWrapper>
    </Box>
  );
};

export default AudienceSection;
