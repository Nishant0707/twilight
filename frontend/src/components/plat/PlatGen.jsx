import React, { useState } from "react";
import {
  Flex,
  Heading,
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
  VStack,
  HStack,
  Divider,
  Image,
  Icon,
  Box,
  SimpleGrid,
} from "@chakra-ui/react";
import { FaEnvelope, FaUser, FaPhone, FaBuilding, FaDesktop, FaEye, FaSearch } from "react-icons/fa";

const LOGO_SRC = "/logo.png"; // Swap with your actual logo image path

export default function PlatGen() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [form, setForm] = useState({
    email: "", name: "", phone: "", company: "",
  });

  return (
    <>
      {/* Main Content */}
      <Flex
        direction="column"
        bg="white"
        minH="100vh"
        px={{ base: 4, md: 16, lg: 32 }}
        py={{ base: 10, md: 20 }}
        align="center"
        justify="flex-start"
        w="full"
      >
        <Heading
          textAlign="center"
          fontWeight="extrabold"
          color="blue.900"
          fontSize={{ base: "2xl", md: "3xl", lg: "3xl" }}
          mb={{ base: 8, md: 12 }}
          lineHeight="1.2"
        >
          A comprehensive solution to achieve excellence in the online examination process
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={{ base: 7, md: 12 }} w="full" mb={10}>
          {/* Column 1: Conduct */}
          <Flex direction="column" align="center" flex={1} gap={2}>
            <Icon as={FaDesktop} boxSize={12} color="purple.500" mb={2} />
            <Text fontWeight="bold" color="purple.700" fontSize={{ base: "lg", md: "xl" }}>
              <span style={{ color: "#9627fb", fontWeight: "bold" }}>Conduct</span>
              {" "}exams using our customizable online test platform
            </Text>
            <Divider borderColor="purple.100" />
            <Box textAlign="left" mt={3} color="gray.600">
              <Text fontSize="sm">01 Scale easily across several mobile and web browsers</Text>
              <Text fontSize="sm">02 26+ question formats, including MCQs, diagrams, coding, and more</Text>
              <Text fontSize="sm">03 Automated exam scheduling, MCQ grading, and exam results</Text>
              <Text fontSize="sm">04 Simulation of written exams using scan-and-upload technology and QR code</Text>
            </Box>
          </Flex>
          {/* Column 2: Proctor */}
          <Flex direction="column" align="center" flex={1} gap={2}>
            <Icon as={FaEye} boxSize={12} color="purple.500" mb={2} />
            <Text fontWeight="bold" color="purple.700" fontSize={{ base: "lg", md: "xl" }}>
              <span style={{ color: "#6729c4", fontWeight: "bold" }}>Proctor</span>
              {" "}seamlessly using our advanced online monitoring solutions
            </Text>
            <Divider borderColor="purple.100" />
            <Box textAlign="left" mt={3} color="gray.600">
              <Text fontSize="sm">01 Three-point student authentication for candidate verification</Text>
              <Text fontSize="sm">02 AI-assisted proctoring for real-time cheating flags</Text>
              <Text fontSize="sm">03 Browser lockdown for a controlled test environment</Text>
            </Box>
          </Flex>
          {/* Column 3: Evaluate */}
          <Flex direction="column" align="center" flex={1} gap={2}>
            <Icon as={FaSearch} boxSize={12} color="blue.400" mb={2} />
            <Text fontWeight="bold" color="blue.600" fontSize={{ base: "lg", md: "xl" }}>
              <span style={{ color: "#30b2ea", fontWeight: "bold" }}>Evaluate</span>
              {" "}exams accurately using actionable, data-driven reports
            </Text>
             <Divider borderColor="purple.100" />
            <Box textAlign="left" mt={3} color="gray.600">
              <Text fontSize="sm">01 Secure the evaluation process by hiding student information</Text>
              <Text fontSize="sm">02 Real-time assessment insights for optimum decision-making</Text>
            </Box>
          </Flex>
        </SimpleGrid>

        <Button
          w={{ base: "100%", sm: "320px" }}
          size="lg"
          fontWeight="bold"
          color="white"
          bg="#18ac45"
          _hover={{ bg: "#2fc85a", transform: "scale(1.04)" }}
          borderRadius="xl"
          boxShadow="md"
          mt={8}
          onClick={onOpen}
        >
          TAKE A DEMO
        </Button>
      </Flex>

      {/* Modal Pop-up */}
      <Modal isOpen={isOpen} onClose={onClose} size="2xl" isCentered>
        <ModalOverlay bg="blackAlpha.200" />
        <ModalContent borderRadius="2xl" boxShadow="2xl" p={0} overflow="hidden">
          <Flex direction={{ base: "column", md: "row" }} minH={{ md: "480px" }}>
            {/* Left: Testimonial / Brand */}
            <Box
              flex="1"
              p={{ base: 6, md: 9 }}
              bgGradient="linear(to-br, #0986F5 10%, #7b43C0 90%)"
              color="white"
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              minW={{ md: "280px" }}
            >
              <VStack align="start" spacing={4}>
                <HStack>
                  <Image src={LOGO_SRC} alt="SSTPL Logo" boxSize="80px" />
                  <Heading size="md" fontWeight="extrabold">
                    SSTPL
                  </Heading>
                </HStack>
                <Text fontWeight="semibold" fontSize="lg" opacity={0.89}>
                  Chair Digital Learning, MOOCs Initiative & Strategy
                </Text>
                <Text fontSize="md" opacity={0.96}>
                  For our online programs, SSTPL's system preserves academic integrity and delivers exam solutions with classroom-grade quality. As education evolves, SSTPL enables trusted, innovative testing—shaping the future of secure online education.
                </Text>
              </VStack>
              <Divider my={5} borderColor="whiteAlpha.400" />
              <Text fontSize="xs" opacity={0.8} mt={2}>
                Trusted by Hundreds of leading brands
              </Text>
              {/* Add brand icons or accreditation images as desired */}
            </Box>

            {/* Right: Pop-up Form */}
            <Box flex="2" p={{ base: 6, md: 9 }} bg="white">
              <ModalCloseButton top={4} right={6} color="gray.600" />
              <Heading size="lg" color="#0986F5" mb={2}>
                CONDUCT SECURE ONLINE EXAMS NOW
              </Heading>
              <Text color="gray.600" mb={7} fontSize="sm">
                Just drop in your details here and we'll get back to you!
              </Text>
              <VStack as="form" spacing={5} align="stretch">
                <Input
                  size="lg"
                  placeholder="OFFICIAL EMAIL *"
                  variant="flushed"
                  type="email"
                  required
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  bg="white"
                />
                <HStack spacing={5}>
                  <Input
                    size="lg"
                    placeholder="NAME *"
                    variant="flushed"
                    required
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    bg="white"
                  />
                  <Input
                    size="lg"
                    placeholder="PHONE NO. *"
                    variant="flushed"
                    required
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                    bg="white"
                  />
                </HStack>
                <Input
                  size="lg"
                  placeholder="COMPANY"
                  variant="flushed"
                  value={form.company}
                  onChange={e => setForm({ ...form, company: e.target.value })}
                  bg="white"
                />
                <Button
                  size="lg"
                  bg="#36b062"
                  color="white"
                  borderRadius="xl"
                  fontWeight="bold"
                  boxShadow="md"
                  _hover={{ bg: "#43c477", transform: "scale(1.03)" }}
                  mt={4}
                >
                  GET STARTED
                </Button>
              </VStack>
              <Text fontSize="xs" color="gray.500" mt={6}>
                <b>Disclaimer:</b> By using our offerings and services, you are agreeing to the Terms of Service and License Agreement and understand that your access will be subject to the terms and conditions and Privacy Notice.
              </Text>
            </Box>
          </Flex>
        </ModalContent>
      </Modal>
    </>
  );
}
