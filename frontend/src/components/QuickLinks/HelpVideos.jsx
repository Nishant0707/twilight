import React from 'react';
import { Box, Heading, Text, Button, VStack, useColorModeValue } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const HelpVideos = () => {
  const bg = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.800', 'gray.200');
  const subTextColor = useColorModeValue('gray.500', 'gray.400');
  const navigate = useNavigate();  // React Router hook for navigation

  return (
    <Box
      p={{ base: 6, md: 10 }}
      maxW="600px"
      mx="auto"
      bg={bg}
      borderRadius="2xl"
      boxShadow="xl"
      textAlign="center"
    >
      <VStack spacing={6}>
        <Heading size="lg" color={textColor}>
          Help Videos
        </Heading>
        <Text fontSize="md" color={textColor}>
          🎥 Watch our tutorials and guides to get started quickly.
        </Text>
        <Text fontSize="lg" fontWeight="semibold" color={subTextColor}>
          Coming Soon...
        </Text>
        <Text color={subTextColor} fontStyle="italic">
          Sorry for the delay. We're working hard to bring you the best content.
        </Text>
        <Button
          colorScheme="blue"
          size="md"
          px={8}
          borderRadius="xl"
          fontWeight="bold"
          _hover={{ bgGradient: 'linear(to-r, blue.400, cyan.500)' }}
          onClick={() => navigate('/')}  // Navigates to home route on click
        >
          Home
        </Button>
      </VStack>
    </Box>
  );
};

export default HelpVideos;
