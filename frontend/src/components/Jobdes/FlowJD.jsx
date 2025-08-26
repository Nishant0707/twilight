import React, { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  VStack,
  SimpleGrid,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const panelData = [
  {
    key: 0,
    heading: "English Assessment Module",
    description:
      "Evaluate written communication skills. Measures comprehension, grammar, vocabulary, and effective writing across job profiles.",
    details: [
      "Applicable to: Business Consulting, HR/Admin, ITES/BPO, Sales, Engineering, CRM, IT, Hotel Management, Life Sciences, Content Development.",
      "Questions: 15 | Duration: 15 min",
      "Syllabus: Synonyms, Antonyms, Grammar, RC",
    ],
  },
  {
    key: 1,
    heading: "Quantitative Ability Module",
    description:
      "Assess quantitative aptitude and problem-solving for tech & non-tech roles. Covers business, engineering, consulting, and more.",
    details: [
      "Applicable to: Content Development, Consulting, HR/Admin, ITES, Sales, Engineering, IT, Hotel Management, Life Sciences.",
      "Questions: 16 | Duration: 20 min",
      "Syllabus: Mathematics, Profit & Loss, Probability",
    ],
  },
  {
    key: 2,
    heading: "Reasoning & Information Synthesis Module",
    description:
      "Test deduction, pattern recognition, data analysis, and logical conclusions. Measures ability to interpret, organize, and process info.",
    details: [
      "Applicable to: All main job functions listed above.",
      "Questions: 12 | Duration: 15 min",
      "Syllabus: Deductive Logic, Puzzles, Data Interpretation",
    ],
  },
  {
    key: 3,
    heading: "Personality Assessment (AMPI)",
    description:
      "Evaluate candidate’s personality traits for team, people-facing, and managerial roles. Based on Five-Factor Model.",
    details: [
      "90 items | Duration: 20 min",
      "Traits: Extraversion, Conscientiousness, Neuroticism, Openness, Agreeableness",
    ],
  },
];

const FlowJD = () => {
  const bgColor = useColorModeValue("white", "gray.700");
  const panelBorderColor = "#6936fd";
  const navigate = useNavigate();

  // For modal
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedPanel, setSelectedPanel] = useState(null);

  // Compact Panel Card
  const PanelCard = ({ data, onOpenDetails }) => (
    <Box
      bg={bgColor}
      borderRadius="2xl"
      p={6}
      boxShadow="0 4px 15px rgba(111, 58, 255, 0.3)"
      border={`2px solid ${panelBorderColor}`}
      minH="200px"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Heading
        fontWeight="extrabold"
        color="#6e2afd"
        size="md"
        mb={3}
        letterSpacing="wide"
        noOfLines={2}
        textAlign="center"
      >
        {data.heading}
      </Heading>
      <Text
        fontSize="sm"
        color={useColorModeValue("gray.600", "gray.300")}
        textAlign="center"
        flexGrow={1}
        noOfLines={4}
        mb={4}
      >
        {data.description}
      </Text>
      <Button
        size="sm"
        colorScheme="purple"
        variant="outline"
        onClick={() => onOpenDetails(data)}
        mt="auto"
        alignSelf="center"
        borderRadius="xl"
      >
        Read More
      </Button>
    </Box>
  );

  // Modal Content for full details
  const DetailsModal = ({ panel }) => {
    if (!panel) return null;
    return (
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="lg" closeOnOverlayClick>
        <ModalOverlay />
        <ModalContent borderRadius="xl" p={4}>
          <ModalCloseButton />
          <ModalHeader color="#6936fd" fontWeight="extrabold" textAlign="center">
            {panel.heading}
          </ModalHeader>
          <ModalBody>
            <Text fontSize="md" mb={4} whiteSpace="pre-wrap">
              {panel.description}
            </Text>
            <VStack align="start" spacing={2}>
              {panel.details.map((item, idx) => (
                <Text key={idx} fontSize="sm" color="gray.500" pl={2} borderLeft="3px solid #6e2afd">
                  {item}
                </Text>
              ))}
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    );
  };

  // Open modal and set selected panel
  const onOpenDetails = (panel) => {
    setSelectedPanel(panel);
    onOpen();
  };

  return (
    <Box
      w="100%"
      py={{ base: 6, md: 12 }}
      bgGradient="linear(to-br, #f7f8fa, #e0e7ff)"
      px={{ base: 4, md: 12 }}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minH="auto"
    >
      <Heading
        fontSize={{ base: "2xl", md: "4xl" }}
        mb={{ base: 6, md: 16 }}
        color="#6e2afd"
        textAlign="center"
      >
        Assessment Journey – Get Employed!
      </Heading>

      <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} gap={8} w="100%" maxW="1200px" mb={8}>
        {panelData.map((panel) => (
          <PanelCard key={panel.key} data={panel} onOpenDetails={onOpenDetails} />
        ))}
      </SimpleGrid>

      <Button
        size="lg"
        colorScheme="green"
        borderRadius="2xl"
        fontWeight="bold"
        boxShadow="0 0 15px #46a6ff"
        px={14}
        py={6}
        fontSize="xl"
        animation="pulse 2.5s ease-in-out infinite"
        onClick={() => navigate("/reg")}
        _hover={{
          boxShadow: "0 0 24px #00ffd7",
          transform: "scale(1.1)",
        }}
      >
        Register Here
      </Button>

      {/* Modal for Read More */}
      <DetailsModal panel={selectedPanel} />
    </Box>
  );
};

export default FlowJD;
