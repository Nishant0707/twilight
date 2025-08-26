import React, { useState } from "react";
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Image,
  VStack,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";

// STATIC DATA
const assessments = [
  {
    image: "/university.jpg",
    title: "University recruitment",
    desc: "Score talented students for internship and entry-level roles. University, social/campus etc.",
    more: "Our university recruitment assessments measure candidates' technical aptitude, cognitive abilities, and personality traits to ensure best-fit placements—with detailed analytics for learning institutes and recruiters alike.",
  },
  {
    image: "/school.jpg",
    title: "Semester, Mid-term & School Assessments",
    desc: "Used widely: educational institutions rely on foundational methods for managing in-class evaluations, tracking progress, and supporting academic visibility.",
    more: "Designed for schools and colleges, these assessments provide teachers and administrators with insightful data on each student's strengths and improvement areas, aligning with modern curriculum objectives.",
  },
  {
    image: "/jobready.jpg",
    title: "Job Ready: Coding, Aptitude & Interview Training",
    desc: "Boost college outcomes. Includes hands-on proficiency in coding, logic, language, and interview essentials; practical practice & mock interviews, digital reports, and personalized AI-led assistance for tailored, effective support and guidance.",
    more: "The training modules simulate real-world assessments and interviews, giving each learner confidence and measurable skill progress through results dashboards and personal coaching feedback.",
  },
];

// POPUP HOOK (Keep only one open at a time)
function useAssessmentModal() {
  const [idx, setIdx] = useState(null);
  const open = (i) => setIdx(i);
  const close = () => setIdx(null);
  return {
    isOpen: idx !== null,
    idx,
    open,
    close,
  };
}

export default function SereduTypeEA() {
  const modal = useAssessmentModal();
  const cardBg = useColorModeValue("white", "#181b2d");
  const sectionShadow = useColorModeValue(
    "0 6px 32px 0 #6C63FF25",
    "0 8px 32px 0 #32265999"
  );

  // Accent for buttons, etc.
  const accentGrad = "linear(to-r, #4f79ef, #b36ad9, #6c63ff)";

  return (
    <Box px={{ base: 4, md: 8 }} py={{ base: 8, md: 16 }} maxW="1180px" mx="auto">
      <VStack spacing={4} mb={9}>
        <Heading
          fontSize={{ base: "2xl", md: "3xl" }}
          fontWeight="extrabold"
          bgGradient={accentGrad}
          bgClip="text"
          letterSpacing="tight"
          textAlign="center"
        >
          Types of Educational Assessments
        </Heading>
        <Text
          fontSize={{ base: "md", md: "lg" }}
          color={useColorModeValue("gray.500", "gray.300")}
          textAlign="center"
        >
          Know the top assessment methods that drive talent, growth, and opportunity—for students, educators, and recruiters.
        </Text>
      </VStack>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
        {assessments.map((item, i) => (
          <Box
            key={item.title}
            bg={cardBg}
            borderRadius="2xl"
            boxShadow={sectionShadow}
            p={0}
            overflow="hidden"
            transition="all 0.23s cubic-bezier(.46,.02,.6,1.05)"
            _hover={{
              boxShadow: "0 12px 32px #8875f722",
              transform: "translateY(-3px) scale(1.033)",
            }}
            display="flex"
            flexDir="column"
          >
            <Image
              src={item.image}
              alt={item.title}
              h={{ base: "160px", md: "170px", lg: "180px" }}
              w="100%"
              objectFit="cover"
              borderTopRadius="2xl"
            />
            <Box p={6} flex="1">
              <Heading
                fontSize={{ base: "lg", md: "xl" }}
                fontWeight="bold"
                color={useColorModeValue("#3640a0", "#b3a4fc")}
                mb={2}
                letterSpacing="wider"
              >
                {item.title}
              </Heading>
              <Text
                color={useColorModeValue("gray.600", "gray.300")}
                fontSize="md"
                minH="48px"
                mb={4}
                fontWeight="medium"
              >
                {item.desc}
              </Text>
              <Button
                size="sm"
                bgGradient={accentGrad}
                color="white"
                fontWeight="bold"
                borderRadius="full"
                _hover={{ bgGradient: "linear(to-l, #b36ad9, #4f79ef)" }}
                boxShadow="0 2px 14px #4f79ef22"
                onClick={() => modal.open(i)}
                mt={2}
              >
                Read More
              </Button>
            </Box>
          </Box>
        ))}
      </SimpleGrid>

      {/* Modal */}
      <Modal
        isOpen={modal.isOpen}
        onClose={modal.close}
        isCentered
        size="md"
        motionPreset="slideInBottom"
      >
        <ModalOverlay
          bg="linear-gradient(90deg, #22196499 0%, #47369cbb 70%)"
          backdropFilter="blur(1.5px)"
        />
        <ModalContent
          borderRadius="2xl"
          bg={cardBg}
          boxShadow="2xl"
        >
          <ModalHeader
            fontSize={{ base: "lg", md: "xl" }}
            fontWeight="extrabold"
            color={useColorModeValue("#3640a0", "#b3a4fc")}
            letterSpacing="wider"
          >
            {modal.idx !== null ? assessments[modal.idx].title : ""}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={7}>
            <Text
              color={useColorModeValue("gray.700", "gray.200")}
              fontSize={{ base: "md", md: "lg" }}
            >
              {modal.idx !== null ? assessments[modal.idx].more : ""}
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}
