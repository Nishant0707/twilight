import React from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Avatar,
  SimpleGrid,
  useColorModeValue,
  chakra,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

// Example testimonials data
const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Software Engineer",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    quote:
      "SSTPL’s programs transformed my career. The skilled assessments and certifications opened doors I only dreamed of.",
  },
  {
    id: 2,
    name: "Aditya Singh",
    role: "Mechanical Engineer",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    quote:
      "Outstanding platform with practical skills training that helped me land my first real job. Highly recommended!",
  },
  {
    id: 3,
    name: "Neha Patel",
    role: "Data Analyst",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    quote:
      "Comprehensive learning paths and dedicated support at SSTPL made my journey easy and helped me succeed.",
  },
  {
    id: 4,
    name: "Rohit Kumar",
    role: "Electrician",
    avatar: "https://randomuser.me/api/portraits/men/67.jpg",
    quote:
      "Their skill certifications are trusted by employers. The process was smooth and accessible.",
  },
  {
    id: 5,
    name: "Sonal Mehta",
    role: "Healthcare Assistant",
    avatar: "https://randomuser.me/api/portraits/women/30.jpg",
    quote:
      "Great initiative that truly empowers youth with verifiable skills and opens new opportunities.",
  },
  {
    id: 6,
    name: "Vikram Joshi",
    role: "Automotive Technician",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "Hands down the best platform for skill development and career growth in India.",
  },
];

const Testimonials = () => {
  const bg = useColorModeValue("white", "gray.900");
  const cardBg = useColorModeValue("gray.50", "gray.800");
  const headingColor = useColorModeValue("blue.700", "cyan.300");
  const quoteColor = useColorModeValue("gray.700", "gray.300");
  const roleColor = useColorModeValue("gray.500", "gray.400");
  const boxShadow = useColorModeValue(
    "0 10px 15px -3px rgba(66, 153, 225, 0.3),0 4px 6px -2px rgba(66, 153, 225, 0.2)",
    "0 10px 15px -3px rgba(56, 178, 172, 0.9),0 4px 6px -2px rgba(56, 178, 172, 0.6)"
  );

  return (
    <MotionBox
      maxW="7xl"
      mx="auto"
      py={{ base: 12, md: 24 }}
      px={{ base: 6, md: 12 }}
      bg={bg}
      borderRadius="2xl"
      boxShadow={boxShadow}
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <VStack spacing={10} align="center" mb={14}>
        <MotionHeading
          fontSize={{ base: "2.8rem", md: "4rem" }}
          color={headingColor}
          fontWeight="extrabold"
          letterSpacing="wide"
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          textAlign="center"
        >
          Testimonials
        </MotionHeading>
        <MotionText
          fontSize={{ base: "lg", md: "xl" }}
          color={quoteColor}
          maxW="3xl"
          textAlign="center"
          fontWeight="medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          💬 Hear it from our learners and clients — trusted voices that drive change and elevate standards.
        </MotionText>
      </VStack>

      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        spacing={{ base: 10, md: 14 }}
        mb={6}
      >
        {testimonials.map(({ id, name, role, avatar, quote }, idx) => (
          <MotionBox
            key={id}
            p={6}
            bg={cardBg}
            borderRadius="xl"
            boxShadow={boxShadow}
            whileHover={{ y: -10, boxShadow: "2xl" }}
            transition={{ type: "spring", stiffness: 300 }}
            cursor="default"
          >
            <HStack spacing={5} mb={6} alignItems="center">
              <Avatar
                name={name}
                src={avatar}
                boxSize={{ base: 12, md: 14 }}
                border="2px solid"
                borderColor={headingColor}
                shadow="md"
              />
              <VStack spacing={0} align="start">
                <Text fontWeight="bold" color={headingColor} fontSize="lg">
                  {name}
                </Text>
                <Text fontSize="sm" color={roleColor}>
                  {role}
                </Text>
              </VStack>
            </HStack>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              fontStyle="italic"
              lineHeight="tall"
              color={quoteColor}
            >
              “{quote}”
            </Text>
          </MotionBox>
        ))}
      </SimpleGrid>
    </MotionBox>
  );
};

export default Testimonials;
