import React, { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Image,
  Button,
  HStack,
  VStack,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function SercopBlog({
  image = "/serblog.png",
  title = "How Online Assessments Can Help Your Organization Hire the Right Fit",
  excerpt = "In today’s competitive market, hiring the right talent is more important than ever. One bad hiring decision can cost your organization dearly, leading to reduced productivity, a demoralized team, and significant financial losses.",
  cta = "Find Out",
}) {
  const cardBg = useColorModeValue("white", "#191c23");
  const cardShadow = useColorModeValue(
    "0 5px 32px 0 rgba(47,53,128,0.09)",
    "0 5px 32px 0 rgba(17,23,44,0.35)"
  );
  const titleGradient = "linear(to-r, blue.500, purple.500, blue.600)";
  const ctaBg = "linear(to-r, #4158d0, #c850c0)";
  const ctaHover = "linear(to-r, #283991, #a328a7)";

  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    onClose();
    navigate("/ser-cop-emp"); // navigate to your new employer registration page
  };

  return (
    <>
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
              size="sm"
              bgGradient={ctaBg}
              color="white"
              _hover={{ bgGradient: ctaHover }}
              boxShadow="sm"
              rightIcon={<FaChevronRight />}
              fontWeight="bold"
              letterSpacing="wide"
              fontSize="sm"
              onClick={onOpen}
            >
              {cta}
            </Button>
          </HStack>
        </VStack>
      </Box>

      {/* Modal Popup */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="lg" closeOnOverlayClick>
  <ModalOverlay />
  <ModalContent borderRadius="xl" p={6} boxShadow="xl" bg="white">
    <ModalHeader fontSize="2xl" fontWeight="bold" color="blue.600" textAlign="center">
      Register as an Employer
    </ModalHeader>
    <ModalCloseButton />
    <ModalBody>
      <Text fontSize="md" color="gray.700" mb={6} lineHeight="tall" textAlign="center">
        Finding the right talent is paramount in today’s competitive landscape.<br />
        A single hiring mistake can impact your team’s productivity and morale.<br /><br />
        Join us to access precision-driven assessments that help you select the perfect fit for your organization.<br />
        Register now to get started!
      </Text>
      <Button
        colorScheme="blue"
        size="lg"
        fontWeight="semibold"
        onClick={handleRegisterClick}
        w="100%"
        _hover={{ bgGradient: "linear(to-r, #283991, #a328a7)" }}
        bgGradient="linear(to-r, #4158d0, #c850c0)"
        boxShadow="md"
        borderRadius="md"
      >
        Proceed For Registration
      </Button>
    </ModalBody>
  </ModalContent>
</Modal>
    </>
  );
}
