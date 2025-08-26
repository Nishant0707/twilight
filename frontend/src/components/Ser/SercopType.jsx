import React, { useState, useRef, useEffect } from "react";
import {
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Box,
  Button,
  Icon,
  useColorModeValue,
  useBreakpointValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";
import {
  FaChartBar,
  FaClipboardCheck,
  FaLaptopCode,
  FaUserTie,
} from "react-icons/fa";
import gsap from "gsap";

const types = [
  {
    icon: FaChartBar,
    title: "English Assessment Module",
    intro:
      "Evaluate proficiency in written communication, comprehension, and grammar.",
    details: `The English module is designed to evaluate a candidate’s proficiency in written communication. It measures the ability to: 
- Comprehend written text
- Understand spoken language 
- Communicate effectively through written documents

Relevant Job Functions:
Business Consulting, Human Resources, ITES / BPO, Marketing, Engineering, CRM, IT, Hotel Management, Life Sciences, Content Development

Assessment Structure:
15 questions, 15 minutes

Detailed Syllabus:
Vocabulary, Grammar, Comprehension`,
  },
  {
    icon: FaUserTie,
    title: "Quantitative Ability Technical Module",
    intro:
      "Assess quantitative aptitude and problem-solving skills in technical and non-technical roles.",
    details: `Assesses quantitative aptitude and problem-solving skills in technical and non-technical formats.

Relevant Job Functions:
Content Development, Business Consulting, Human Resources, ITES / BPO, Marketing, Engineering, CRM, IT, Hotel Management, Life Sciences

Assessment Structure:
16 questions, 20 minutes

Detailed Syllabus:
Basic Mathematics, Applied Mathematics, Engineering Mathematics`,
  },
  {
    icon: FaClipboardCheck,
    title: "Reasoning Ability Module",
    intro:
      "Evaluate logical reasoning, pattern recognition, and analytical ability.",
    details: `Evaluates logical reasoning, pattern recognition, and analytical skills.

Relevant Job Functions:
Content Development, Business Consulting, Human Resources, ITES / BPO, Marketing, Engineering, CRM, IT, Hotel Management, Life Sciences

Assessment Structure:
12 questions, 15 minutes

Detailed Syllabus:
Deductive, Inductive, Objective Reasoning`,
  },
  {
    icon: FaLaptopCode,
    title: "Technical Numerical Ability Module",
    intro:
      "Focus on technical quantitative aptitude with word-based problems and number theory.",
    details: `Focuses on technical quantitative aptitude with word-based problems and number theory.

Relevant Job Functions:
Content Development, Business Consulting, Human Resources, ITES / BPO, Marketing, Engineering, CRM, IT, Hotel Management, Life Sciences

Assessment Structure:
14 questions, 20 minutes

Detailed Syllabus:
Basic Numbers, Applied Math Word Problems, Number Theory`,
  },
];

export default function PlatGen() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selected, setSelected] = useState(null);
  const modalRef = useRef(null);
  const isMobile = useBreakpointValue({ base: true, md: false });
  const accentGrad = "linear(to-r, blue.500, purple.500, blue.400)";
  const cardBg = useColorModeValue("white", "#121122");

  useEffect(() => {
    if (isOpen && modalRef.current) {
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, scale: 0.75, y: 40 },
        { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: "power3.out" }
      );
    }
  }, [isOpen]);

  const openModal = (idx) => {
    setSelected(idx);
    onOpen();
  };

  return (
    <>
      <Heading
        bgGradient={accentGrad}
        bgClip="text"
        fontWeight="extrabold"
        fontSize={{ base: "2xl", md: "4xl" }}
        letterSpacing="tight"
        textAlign="center"
        mt={{ base: 8, md: 12 }}
        mb={{ base: 10, md: 16 }}
        px={4}
      >
        Types of Corporate Assessments
      </Heading>
      <Text
        fontSize={{ base: "md", md: "lg" }}
        color={useColorModeValue("gray.600", "gray.400")}
        textAlign="center"
        maxW="700px"
        mx="auto"
        mb={12}
        px={4}
      >
        Designed to deliver swift, insightful, and reliable outcomes for all talent
        scenarios—explore our custom-tailored assessment types.
      </Text>

      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 4 }}
        spacing={{ base: 6, md: 10 }}
        maxW="1200px"
        mx="auto"
        px={4}
      >
        {types.map((type, idx) => (
          <Box
            key={type.title}
            bg={cardBg}
            borderRadius="2xl"
            boxShadow="md"
            transition="box-shadow 0.25s"
            _hover={{ boxShadow: "xl" }}
            py={8}
            px={6}
            textAlign="center"
            display="flex"
            flexDir="column"
            alignItems="center"
            minH="360px"
          >
            <Box
              boxSize="60px"
              borderRadius="full"
              bgGradient={accentGrad}
              color="white"
              display="flex"
              alignItems="center"
              justifyContent="center"
              mb={6}
              shadow="md"
            >
              <Icon as={type.icon} w={8} h={8} />
            </Box>
            <Heading
              as="h3"
              fontSize="lg"
              fontWeight="bold"
              letterSpacing="wider"
              bgGradient={accentGrad}
              bgClip="text"
              mb={3}
            >
              {type.title}
            </Heading>
            <Text color="gray.600" fontSize="sm" flex="1" mb={6} whiteSpace="pre-wrap">
              {type.intro}
            </Text>
            <Button
              bgGradient={accentGrad}
              color="white"
              fontWeight="bold"
              size="md"
              borderRadius="full"
              px={10}
              boxShadow="sm"
              fontSize="md"
              letterSpacing="wider"
              onClick={() => openModal(idx)}
            >
              Learn More
            </Button>
          </Box>
        ))}
      </SimpleGrid>

      {/* Modal */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered size={isMobile ? "xs" : "3xl"}>
        <ModalOverlay backdropFilter="blur(10px)" bg="blackAlpha.300" />
        <ModalContent
          ref={modalRef}
          borderRadius="3xl"
          p={{ base: 6, md: 10 }}
          maxH="80vh"
          overflowY="auto"
          bg="whiteAlpha.900"
          boxShadow="xl"
        >
          <ModalCloseButton mt={2} size="lg" />
          <ModalBody>
            <VStack spacing={6} align="stretch">
              <Heading
                size="xl"
                mb={4}
                bgGradient={accentGrad}
                bgClip="text"
                fontWeight="extrabold"
                textAlign="center"
              >
                {selected != null && types[selected].title}
              </Heading>
              <Text whiteSpace="pre-wrap" fontSize="md" color="gray.700" lineHeight="tall">
                {selected != null && types[selected].details}
              </Text>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
