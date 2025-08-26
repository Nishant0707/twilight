import React, { useState } from "react";
import {
  Box, Heading, Text, SimpleGrid, Flex, chakra,
  Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody,
  useDisclosure, useBreakpointValue
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionCard = motion(chakra.button);

const AssSelect = () => {
  const headingSize = useBreakpointValue({ base: "2xl", md: "3xl" });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeItem, setActiveItem] = useState(null);

  const assessments = [
  { 
    title: 'Automotive', 
    desc: 'The automotive sector plays a pivotal role in transportation and industrial growth. Assessments in this domain focus on technical expertise in vehicle maintenance, diagnostics, and repair. Candidates are evaluated on modern automotive technologies and safety practices. It emphasizes both manual skills and digital diagnostic systems. This ensures work-readiness for evolving automotive demands.' 
  },
  { 
    title: 'Agriculture', 
    desc: 'Agriculture remains the backbone of several economies, focusing on food security and sustainability. This assessment evaluates knowledge in modern farming, soil management, and crop production. Candidates are tested on traditional practices as well as smart agricultural techniques. It highlights sustainable farming and innovative technology integration. A strong foundation here supports food processing and rural development.' 
  },
  { 
    title: 'Apparel', 
    desc: 'The apparel sector combines creativity with industrial skills. This assessment focuses on textile knowledge, garment construction, and design techniques. It evaluates candidates on stitching, pattern-making, and quality control. Emphasis is placed on both traditional methods and modern machinery. This sector prepares individuals for fashion, retail, and export industries.' 
  },
  { 
    title: 'Beauty & Wellness', 
    desc: 'The beauty and wellness industry thrives on grooming, aesthetics, and health services. Assessments here evaluate knowledge of skincare, hairstyling, and therapeutic practices. Candidates are tested on hygiene, product knowledge, and customer service. The focus is on both traditional methods and modern equipment usage. This sector gears individuals for careers in salons, spas, and wellness centers.' 
  },
  { 
    title: 'BFSI', 
    desc: 'Banking, Financial Services, and Insurance (BFSI) is a key growth driver of the economy. This assessment evaluates analytical, financial, and customer-handling skills. Candidates are tested on risk management, regulatory compliance, and digital banking methods. Emphasis is placed on both traditional and online financial operations. This prepares aspirants for roles in retail and corporate financial services.' 
  },
  { 
    title: 'Construction', 
    desc: 'The construction sector is foundational to infrastructure development and urban growth. Assessments in this domain test knowledge of structural engineering and safety standards. Candidates are evaluated on modern tools, machinery operations, and sustainable practices. Focus is given to project management and quality control. Skills developed here support housing, commercial, and industrial construction projects.' 
  },
  { 
    title: 'Electronics', 
    desc: 'Electronics is a fast-evolving domain driving innovation and connectivity. This assessment examines knowledge of electronic circuits, repair, and assembly. Candidates are tested on both analog and digital technologies. Safety, troubleshooting, and soldering skills are vital areas. Proficiency here supports careers in consumer electronics, automation, and industrial hardware.' 
  },
  { 
    title: 'Handicrafts', 
    desc: 'Handicrafts symbolize traditional art and cultural heritage. This assessment tests creativity, material knowledge, and design techniques. Candidates are evaluated on craftsmanship, finishing, and quality standards. Skills include working with wood, metal, textile, and natural fibers. The sector supports livelihoods, exports, and sustainable small-scale industries.' 
  },
  { 
    title: 'Healthcare', 
    desc: 'Healthcare is a service-driven sector ensuring wellness and treatment. This assessment examines medical knowledge, patient care, and clinical practices. Candidates are tested on hygiene, safety, and basic medical procedures. It emphasizes both traditional health services and modern medical technologies. This prepares individuals for hospitals, labs, and allied service roles.' 
  },
  { 
    title: 'Infrastructure', 
    desc: 'Infrastructure development fuels economic growth and connectivity. The assessment focuses on project management, safety compliance, and material usage. Candidates are tested on knowledge of construction methods and sustainable practices. Emphasis is on modern engineering tools and standards. This sector ensures readiness for roles in transport, energy, and urban planning.' 
  },
  { 
    title: 'IT - ITeS', 
    desc: 'Information Technology and IT-enabled Services (IT-ITeS) drive the global digital economy. The assessment checks programming, software usage, and problem-solving abilities. Candidates are tested on networking, data handling, and cloud-based services. It covers communication, customer support, and technical adaptability. Individuals here are prepared for diverse global IT service roles.' 
  },
  { 
    title: 'Leather', 
    desc: 'The leather sector combines craftsmanship with industrial-scale production. Assessments focus on tanning, product design, and finishing quality. Candidates are tested on raw material selection, manufacturing processes, and export standards. Emphasis includes creativity, durability, and sustainability of products. Careers range from footwear to luxury leather goods manufacturing.' 
  },
  { 
    title: 'Life Science', 
    desc: 'Life sciences integrate biology, medicine, and biotechnology. This assessment evaluates knowledge of research, diagnostics, and lab safety. Candidates are tested on biotechnology tools, analytical methods, and clinical understanding. Focus is given to innovation, drug development, and environmental studies. The sector prepares aspirants for pharma, genetics, and biochemical industries.' 
  },
  { 
    title: 'Media & Entertainment', 
    desc: 'The media and entertainment sector blends creativity with technology. Assessments evaluate storytelling, production, and broadcasting skills. Candidates are tested on video editing, content creation, and public communication. The focus includes both traditional media and digital platforms. This prepares individuals for film, television, and digital entertainment industries.' 
  },
  { 
    title: 'Organized Retail', 
    desc: 'Organized retail drives modern consumer experiences worldwide. This assessment focuses on customer service, sales, and management techniques. Candidates are tested on product handling, inventory, and merchandising strategies. Emphasis includes digital payment systems and e-commerce practices. This prepares individuals for careers in mall retail, franchises, and store management.' 
  },
  { 
    title: 'Plumbing', 
    desc: 'The plumbing sector ensures water management and sanitation infrastructure. Assessments evaluate practical skills in pipe installation, repair, and maintenance. Candidates are tested on safety, material use, and blueprint reading. The sector emphasizes both manual and machine-assisted operations. Careers here support housing, industrial, and public infrastructure projects.' 
  },
  { 
    title: 'Private Security', 
    desc: 'Private security ensures safety, surveillance, and risk management. Assessments measure knowledge of security protocols, emergency handling, and legal compliance. Candidates are tested on observation skills, communication, and first aid. The focus includes both physical guarding and technology-based monitoring. This sector is vital for corporate, residential, and event security.' 
  },
  { 
    title: 'Real Estate Management', 
    desc: 'The real estate sector focuses on property development, sales, and management. Assessments include knowledge of land laws, project planning, and client handling. Candidates are tested on regulatory compliance, sales strategies, and property valuation. Emphasis includes both residential and commercial real estate practices. This prepares individuals for careers in brokerage, investment, and property management.' 
  }
];

  // Break into rows of 5, plus centered last row
  const mainRows = assessments.slice(0, 15); // first three rows of 5
  const lastRow = assessments.slice(15);     // remaining three

  const handleSelect = (item) => {
    setActiveItem(item);
    onOpen();
  };

  return (
    <Box bg="white" color="gray.800" py={12} px={{ base: 4, md: 12 }}>
      <Heading
        fontSize={headingSize}
        textAlign="center"
        color="blue.600"
        fontWeight="extrabold"
        mb={4}
      >
        Choose Assessment Type
      </Heading>
      <Text fontSize="lg" textAlign="center" color="gray.600" mb={10}>
        Tap a category to learn more about each assessment.
      </Text>

      {/* Grid: 3 rows of 5 */}
      <SimpleGrid columns={{ base: 2, md: 3, lg: 5 }} spacing={6} mx="auto" maxW="1200px" mb={6}>
        {mainRows.map((item, idx) => (
          <MotionCard
            key={idx}
            onClick={() => handleSelect(item)}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            bg="white"
            border="1px solid"
            borderColor="gray.300"
            rounded="md"
            py={6}
            px={4}
            shadow="sm"
            fontWeight="semibold"
            fontSize="md"
            textAlign="center"
            transition="all 0.2s ease"
            _hover={{
              borderColor: "blue.500",
              color: "blue.600",
              shadow: "md",
              cursor: "pointer",
              transform: "translateY(-4px)",
            }}
          >
            {item.title}
          </MotionCard>
        ))}
      </SimpleGrid>

      {/* Center last row if exists */}
      {!!lastRow.length && (
        <Flex justify="center" gap={6}>
          {lastRow.map((item, idx) => (
            <MotionCard
              key={item.title}
              onClick={() => handleSelect(item)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              bg="white"
              border="1px solid"
              borderColor="gray.300"
              rounded="md"
              py={6}
              px={4}
              shadow="sm"
              fontWeight="semibold"
              fontSize="md"
              textAlign="center"
              transition="all 0.2s ease"
              minW="180px"
              _hover={{
                borderColor: "blue.500",
                color: "blue.600",
                shadow: "md",
                cursor: "pointer",
                transform: "translateY(-4px)",
              }}
            >
              {item.title}
            </MotionCard>
          ))}
        </Flex>
      )}

      {/* Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size="md" isCentered>
        <ModalOverlay />
        <ModalContent bg="white" color="gray.800" borderRadius="md" shadow="lg">
          <ModalHeader color="blue.600" fontWeight="bold">
            {activeItem?.title}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Text fontSize="md" color="gray.600" lineHeight="tall">
              {activeItem?.desc}
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default AssSelect;
