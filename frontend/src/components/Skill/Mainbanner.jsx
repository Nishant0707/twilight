import React from 'react';
import { Box, VStack, Heading, Text, Button, useBreakpointValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionVStack = motion(VStack);

const Mainbanner = () => {
  const sliderHeight = useBreakpointValue({ base: '60vh', md: '50vh' });

  return (
    <Box
      h={sliderHeight}
      position="relative"
      backgroundImage="url('/hero/hero1.jpg')"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      overflow="hidden"
      display="flex"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
    >
      {/* Soft overlay for better readability */}
      <Box
        position="absolute"
        top={0}
        left={0}
        w="100%"
        h="100%"
        bgGradient="linear(to-b, blackAlpha.600, blackAlpha.400)"
        zIndex={1}
      />

      {/* Animated text container */}
      <MotionVStack
        spacing={6}
        maxW={{ base: '90%', md: '700px' }}
        px={{ base: 4, md: 0 }}
        zIndex={2}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        <Heading
          fontSize={{ base: '2xl', md: '4xl', lg: '5xl' }}
          color="white"
          fontWeight="bold"
          lineHeight="shorter"
          textShadow="0 4px 12px rgba(0, 0, 0, 0.7)"
        >
          An NCVET-approved agency, delivering trusted skill assessments workforce.
        </Heading>

        <Text
          fontSize={{ base: 'sm', md: 'lg', lg: 'xl' }}
          color="whiteAlpha.900"
          fontWeight="semibold"
          textShadow="0 2px 8px rgba(0, 0, 0, 0.6)"
        >
          Skill Development Across India
        </Text>
      </MotionVStack>
    </Box>
  );
};

export default Mainbanner;
