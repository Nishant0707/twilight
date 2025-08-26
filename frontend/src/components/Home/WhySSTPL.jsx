// src/components/Home/WhySSTPL.jsx
import React, { useLayoutEffect, useRef } from 'react';
import {
  Box,
  Grid,
  Image,
  VStack,
  Heading,
  Text,
  Button,
} from '@chakra-ui/react';
import gsap from 'gsap';
import { Link as RouterLink } from 'react-router-dom';

const WhySSTPL = () => {
  const containerRef = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({ defaults: { duration: 1, ease: 'power2.out' } })
        .from('.why-img', { x: -80, opacity: 0 })
        .from('.why-text', { x: 80, opacity: 0 }, '-=0.6');
    }, containerRef);
    
    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <Box
      ref={containerRef}
      py={{ base: 12, md: 20 }}
      px={{ base: 4, md: 16 }}
      bg="white"
      color="gray.800"
    >
      <Grid
        templateColumns={{ base: '1fr', md: '1fr 1fr' }}
        gap={12}
        alignItems="center"
      >
        <Box className="why-img">
          <Image
            src="hero/hero2.jpg"
            borderRadius="2xl"
            objectFit="cover"
            boxShadow="2xl"
            alt="Why SSTPL"
          />
        </Box>

        <VStack className="why-text" align="start" spacing={6}>
          <Heading fontSize={{ base: '2xl', md: '4xl' }} fontWeight="bold">
            Why SSTPL?
          </Heading>
          <Text fontSize="md" color="gray.600" lineHeight="1.8">
           SSTPL provides a transparent and efficient assessment ecosystem through a blended approach involving certified assessors, localized test centers, practical/viva evaluations, industry-approved question banks, and a flexible online/offline platform. With a strong presence across India, our expert team has conducted over 4,500 assessments, certifying more than 3 lakh candidates under NCVT and SSTPL, and working with 10,000+ professionals nationwide.
          </Text>
          <Button
            as={RouterLink}
            to="/about" // ← Update this to your desired route
            mt={8}
            size="lg"
            colorScheme="blue"
            px={10}
            fontSize="lg"
            borderRadius="full"
            _hover={{ transform: 'scale(1.07)', boxShadow: 'xl' }}
            transition="all 0.3s ease"
          >
            See Why
          </Button>
        </VStack>
      </Grid>
    </Box>
  );
};

export default WhySSTPL;
