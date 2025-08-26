// src/components/Home/JoinCTA.jsx
import React, { useEffect, useRef } from 'react';
import { Box, Heading, Button, useBreakpointValue } from '@chakra-ui/react';
import { gsap } from 'gsap';
import { Link as RouterLink } from 'react-router-dom';

const JoinCTA = () => {
  const overlayRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // Overlay fade-in from left to right
    gsap.fromTo(
      overlayRef.current,
      { width: '0%' },
      {
        width: '100%',
        duration: 1.5,
        ease: 'power2.out',
      }
    );

    // Text fade-in
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 30, filter: 'blur(4px)' },
      {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        delay: 1.1,
        duration: 1,
        ease: 'power3.out',
      }
    );
  }, []);

  const headingSize = useBreakpointValue({ base: '2xl', md: '3xl', lg: '4xl' });

 return (
  <Box
    position="relative"
    bgImage="url('hero/hero4.jpg')"
    bgSize="cover"
    bgPosition="center"
    py={{ base: 12, md: 16 }}          // Smaller vertical padding
    px={{ base: 4, md: 6 }}
    textAlign="center"
    overflow="hidden"
    minH={{ base: '250px', md: '320px' }} // Smaller min height for compact look
  >
    {/* Animated black overlay */}
    <Box
      ref={overlayRef}
      position="absolute"
      top="0"
      left="0"
      width="100%"                    // Ensure full width coverage
      height="100%"
      bgGradient="linear(to-r, blackAlpha.900, blackAlpha.700, transparent)"
      zIndex={1}
    />

    {/* Content */}
    <Box
      position="relative"
      zIndex={2}
      maxW="3xl"
      mx="auto"
      px={4}
      py={6}                         // Reduced padding for compactness
      ref={contentRef}
      color="white"
    >
      <Heading fontSize={{ base: 'xl', md: '2xl' }} fontWeight="bold">
        Your Skills, Our Expertise — A Path to Progress!
      </Heading>

      <Button
        as={RouterLink}
        to="/jobs"                     // Your route here
        mt={6}                        // Reduced margin-top
        size="md"                     // Smaller button size
        colorScheme="blue"
        px={8}                        // Slightly smaller horizontal padding
        fontSize="md"
        borderRadius="full"
        _hover={{ transform: 'scale(1.07)', boxShadow: 'xl' }}
        transition="all 0.3s ease"
      >
        Join US
      </Button>
    </Box>
  </Box>
);

};

export default JoinCTA;
