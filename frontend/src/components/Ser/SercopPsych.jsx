import React, { useState } from "react";
import {
  Box,
  Heading,
  Text,
  IconButton,
  SimpleGrid,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaAngleDoubleRight } from "react-icons/fa";

// Demo data: (Add more or customize texts as you need)
const psychometricTests = [
  {
    title: "Personality Test",
    summary: "Uncover work styles & personality strengths.",
    detail:
      "The Personality Test provides insights into an individual's behavioral traits, adaptability, and how they collaborate within teams. It helps organizations understand the innate qualities that drive performance and engagement in various roles.",
  },
  {
    title: "Cognitive Assessment",
    summary: "Assess logical, verbal & numerical skills.",
    detail:
      "Cognitive Assessments measure logical reasoning, problem-solving capacity, verbal and numerical aptitude. These are crucial for identifying critical thinkers and innovative problem solvers for your team.",
  },
  {
    title: "Emotional Intelligence",
    summary: "Gauge empathy & self-awareness.",
    detail:
      "Emotional Intelligence tests evaluate awareness, empathy, and self-management. High EQ individuals are able to manage stress, build positive work relationships, and navigate complex social environments.",
  },
  {
    title: "Situational Judgement",
    summary: "Test decision-making in real scenarios.",
    detail:
      "Situational Judgement Assessments put candidates in real-world scenarios requiring practical decision-making, helping identify leadership potential and workplace readiness beyond hard skills.",
  },
];

// UI constants
const accentGradient = "linear(to-r, #3867ec, #a66cff 80%)";
const cardBg = (mode) => (mode === "light" ? "white" : "#171B2C");
const cardShadow = (mode) => (mode === "light" ? "0 2px 16px #313b7f14" : "0 2px 16px #1c144242");

const popupTextFont =
  "'Nunito', 'Lato', 'Segoe UI', sans-serif";

export default function SercopPsych() {
  const [modalIdx, setModalIdx] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const mode = useColorModeValue("light", "dark");

  // Open modal for specific card
  const handleOpen = idx => {
    setModalIdx(idx);
    onOpen();
  };

  // Close modal
  const handleClose = () => {
    setModalIdx(null);
    onClose();
  };

  return (
    <Box
      maxW="1100px"
      px={{ base: 4, md: 12 }}
      mx="auto"
      py={{ base: 10, md: 18 }}
      w="100%"
    >
      <VStack mb={12} spacing={2}>
        <Heading
          as="h2"
          fontWeight="extrabold"
          fontSize={{ base: "2xl", md: "3xl" }}
          letterSpacing="tight"
          bgGradient={accentGradient}
          bgClip="text"
          textAlign="center"
        >
          Psychometric Assessment Types
        </Heading>
        <Text
          fontSize={{ base: "md", md: "lg" }}
          color={useColorModeValue("gray.500", "gray.400")}
          textAlign="center"
          maxW="600px"
        >
          Deeper insights into cognitive, behavioral, and emotional competencies. One click reveals science-driven details.
        </Text>
      </VStack>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
        {psychometricTests.map((test, idx) => (
          <Box
            key={test.title}
            bg={cardBg(mode)}
            borderRadius="xl"
            boxShadow={cardShadow(mode)}
            transition="box-shadow 0.18s"
            _hover={{ boxShadow: "0 8px 26px #8b6feb2a" }}
            py={8}
            px={5}
            textAlign="center"
            position="relative"
          >
            <Heading
              as="h3"
              fontSize={{ base: "lg", md: "xl" }}
              bgGradient={accentGradient}
              bgClip="text"
              fontWeight="bold"
              mb={2}
            >
              {test.title}
            </Heading>
            <Text color="gray.500" fontSize="sm" mb={6} minH="60px">
              {test.summary}
            </Text>
            <IconButton
              aria-label="See details"
              icon={<FaAngleDoubleRight />}
              size="lg"
              color="white"
              variant="solid"
              bgGradient={accentGradient}
              _hover={{
                bgGradient: "linear(to-r, #5c7aff, #d282ff)",
                color: "white",
                boxShadow: "0 2px 18px #a97bfa42",
              }}
              borderRadius="full"
              fontSize="xl"
              boxShadow="0 2px 6px #403b7740"
              onClick={() => handleOpen(idx)}
              m="auto"
              mt={3}
              transition="box-shadow 0.22s"
            />
          </Box>
        ))}
      </SimpleGrid>

      {/* Modal Popup for Details */}
      <Modal
        isOpen={isOpen}
        onClose={handleClose}
        isCentered
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent
          py={6}
          px={{ base: 4, md: 7 }}
          borderRadius="2xl"
          boxShadow="2xl"
          bg={cardBg(mode)}
          minW={{ base: "90vw", md: "460px" }}
          maxW="530px"
        >
          <ModalHeader
            fontWeight="bold"
            fontSize={{ base: "xl", md: "2xl" }}
            bgGradient={accentGradient}
            bgClip="text"
            fontFamily={popupTextFont}
            pb={0}
            pt={1}
            textAlign="center"
          >
            {modalIdx !== null && psychometricTests[modalIdx].title}
          </ModalHeader>
          <ModalCloseButton
            top={3}
            right={3}
            bg="whiteAlpha.100"
            borderRadius="full"
            _hover={{ bg: "purple.100" }}
            fontSize="lg"
            color={useColorModeValue("gray.600", "white")}
          />
          <ModalBody fontFamily={popupTextFont} pt={5} pb={2} px={2}>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color={useColorModeValue("blue.700", "purple.200")}
              fontWeight="semibold"
              mb={1}
            >
              What it reveals:
            </Text>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color={useColorModeValue("gray.600", "gray.300")}
              lineHeight="taller"
              fontFamily={popupTextFont}
              style={{ textRendering: "optimizeLegibility" }}
            >
              {modalIdx !== null && psychometricTests[modalIdx].detail}
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}
