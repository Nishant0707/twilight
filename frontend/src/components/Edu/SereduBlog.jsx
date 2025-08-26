import React from "react";
import {
  Box,
  Heading,
  Text,
  Image,
  Button,
  HStack,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaChevronRight } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

export default function SereduBlog({
  image = "/jobB.jpg", // replace with your default blog image
  title = "The Evolution of Student Evaluation: How AI-Powered Online Assessment Platforms are shaping the Future of Education",
  excerpt = "The landscape of education has undergone a remarkable transformation, largely driven by technological advancements. Among these innovations, the evolution of student evaluation through AI-powered online asse",
  cta = "Read More",
  onReadMore = () => {},
}) {
  // Colors/styles (avoid green; use blue/purple & gray)
  const cardBg = useColorModeValue("white", "#191c23");
  const cardShadow = useColorModeValue(
    "0 5px 32px 0 rgba(47,53,128,0.09)",
    "0 5px 32px 0 rgba(17,23,44,0.35)"
  );

  const titleGradient =
    "linear(to-r, blue.500, purple.500, blue.600)";

  const ctaBg = "linear(to-r, #4158d0, #c850c0)";
  const ctaHover = "linear(to-r, #283991, #a328a7)";

  return (
    <Box
      bg={cardBg}
      boxShadow={cardShadow}
      borderRadius="2xl"
      overflow="hidden"
      maxW="820px"
      mx="auto"
      position="relative"
      display="flex"
      flexDir={{ base: "column", md: "row" }}
      alignItems="stretch"
      px={0}
      py={0}
      mb={8}
      _hover={{ boxShadow: "0 8px 36px 0 rgba(67,76,204,0.17)" }}
      transition="box-shadow 0.25s"
    >
      {/* Blog image */}
      <Box
        w={{ base: "100%", md: "44%" }}
        h={{ base: "190px", md: "auto" }}
        minH={{ md: "220px" }}
        position="relative"
        zIndex={1}
        overflow="hidden"
      >
        <Image
          src={image}
          alt={title}
          h="100%"
          w="100%"
          objectFit="cover"
          transition="transform 0.3s"
          _hover={{ transform: "scale(1.04)" }}
        />
      </Box>
      {/* Blog Content */}
      <VStack
        align="start"
        justify="center"
        spacing={4}
        w={{ base: "100%", md: "56%" }}
        p={{ base: 5, md: 7 }}
      >
        <Heading
          as="h2"
          bgGradient={titleGradient}
          bgClip="text"
          fontSize={{ base: "xl", md: "2xl", lg: "2xl" }}
          fontWeight="extrabold"
          mb={1}
          lineHeight="short"
          letterSpacing="tight"
        >
          {title}
        </Heading>
        <Text
          color="gray.500"
          fontSize={{ base: "md", md: "lg" }}
          noOfLines={3}
          minH="70px"
        >
          {excerpt}
        </Text>
        <HStack>
         <Button
  as={RouterLink}
  to="/blogs"  // << Set your target route here
  size="sm"
  bgGradient={ctaBg}
  color="white"
  _hover={{ bgGradient: ctaHover }}
  boxShadow="sm"
  rightIcon={<FaChevronRight />}
  fontWeight="bold"
  letterSpacing="wide"
  fontSize="sm"
>
  {cta}
</Button>
        </HStack>
      </VStack>
    </Box>
  );
}
