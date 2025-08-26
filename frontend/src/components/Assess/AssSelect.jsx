import React, { useState } from 'react';
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  useBreakpointValue,
  chakra,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionCard = motion(chakra.button);

const AssSelect = () => {
  const headingSize = useBreakpointValue({ base: '2xl', md: '3xl' });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeItem, setActiveItem] = useState(null);

  // Each assessment has a title + desc
  const assessments = [
    { title: 'Government Job Preparation', desc: 'Prepare for competitive government examinations.' },
    { title: 'Banking & Financial Services', desc: 'Assess and enhance your finance domain skills.' },
    { title: 'IT & Digital Skills', desc: 'Test your technology and software proficiency.' },
    { title: 'Electronics & Hardware', desc: 'Evaluate skills in repair, assembly, and electronics.' },
    { title: 'Healthcare & Allied Services', desc: 'Check readiness for healthcare and medical fields.' },
    { title: 'Construction & Infrastructure', desc: 'Assess your knowledge in structural work & safety.' },
    { title: 'Automotive Technology', desc: 'Test skills in vehicle repair, diagnostics, and service.' },
    { title: 'Retail & Customer Service', desc: 'Measure efficiency in sales, service, and support.' },
    { title: 'Agriculture & Food Processing', desc: 'Evaluate modern farming and processing knowledge.' },
    { title: 'Tourism & Hospitality', desc: 'Test skills in hospitality and travel industry standards.' },
    { title: 'Media & Entertainment', desc: 'Check expertise in creative and broadcasting fields.' },
    { title: 'Beauty & Wellness', desc: 'Assess proficiency in grooming and wellness services.' },
    { title: 'Logistics & Supply Chain', desc: 'Analyze understanding of product flow & delivery.' },
    { title: 'Telecom & Networking', desc: 'Evaluate technical networking and telecom skills.' },
    { title: 'Custom Skill Assessment', desc: 'Design and take a test tailored to specific needs.' },
  ];

  const handleSelect = (item) => {
    setActiveItem(item);
    onOpen();
  };

  return (
    <Box bg="white.900" color="white" py={10} px={{ base: 4, md: 8 }}>
      
      {/* 🔍 Heading */}
      <Heading
        fontSize={headingSize}
        mb={6}
        textAlign="center"
        color="teal.300"
        fontWeight="extrabold"
      >
        Choose Assessment Type
      </Heading>
      <Text
        fontSize="lg"
        textAlign="center"
        color="gray.300"
        mb={10}
      >
        Tap a category to learn more about each assessment.
      </Text>

      {/* 🗂 Grid of Cards */}
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3 }}
        spacing={4}
        maxW="1000px"
        mx="auto"
      >
        {assessments.map((item, idx) => (
          <MotionCard
            key={idx}
            onClick={() => handleSelect(item)}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            bg="gray.800"
            borderWidth="2px"
            borderColor="gray.700"
            rounded="md"
            py={4}
            px={4}
            textAlign="center"
            fontWeight="semibold"
            fontSize="md"
            transition="all 0.2s ease"
            _hover={{
              borderColor: 'blue.400',
              bg: 'gray.700',
            }}
          >
            {item.title}
          </MotionCard>
        ))}
      </SimpleGrid>

      {/* 📌 Modal for Description */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="md">
        <ModalOverlay />
        <ModalContent bg="gray.800" color="white" p={2} borderRadius="lg">
          <ModalHeader color="teal.300" fontWeight="bold">
            {activeItem?.title}
          </ModalHeader>
          <ModalCloseButton _focus={{ boxShadow: 'none' }} />
          <ModalBody pb={6}>
            <Text color="gray.300" fontSize="md">
              {activeItem?.desc}
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default AssSelect;
