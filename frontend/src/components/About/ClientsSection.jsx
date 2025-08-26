import React, { useEffect, useState } from "react";
import {
  Box,
  Heading,
  Text,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  SimpleGrid,
  useColorModeValue,
  Image,
  Spinner,
  Center,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

// Framer motion fix (if using v6+): 
const MotionBox = motion.create ? motion.create(Box) : motion(Box);

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function ClientsSection() {
  const [logos, setLogos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const colorFallback = useColorModeValue("gray.600", "gray.300");
  const bgFallback = useColorModeValue("white", "gray.800");

  useEffect(() => {
    setLoading(true);
    fetch("/api/client-logos")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch logos");
        return res.json();
      })
      .then((data) => {
        setLogos(data.logos);
        setError(null);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <Center py={10}>
        <Spinner size="xl" />
      </Center>
    );

  if (error)
    return (
      <Box textAlign="center" color="red.500" py={10}>
        Failed to load client logos: {error}
      </Box>
    );

  return (
    <Box py={{ base: 12, md: 20 }} px={{ base: 4, md: 12 }}>
      <Box textAlign="center" mb={16}>
        <Heading fontSize="3xl" mb={4}>
          Our Partners
        </Heading>
        <Box w="200px" h="2px" bg="orange.400" mx="auto" my={2} />
        <Text fontSize="md" color={colorFallback}>
          Organizations We Work With to Build Skills Nationwide
        </Text>
      </Box>

      <Tabs variant="soft-rounded" colorScheme="orange" isFitted>
        <TabList>
          <Tab fontWeight="semibold">Our Partners</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={10}>
              {logos.length === 0 ? (
                <Text>No client logos found.</Text>
              ) : (
                logos.map((logoUrl, i) => (
                  <MotionBox
                    key={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    variants={fadeInUp}
                    bg={bgFallback}
                    borderRadius="xl"
                    boxShadow="md"
                    p={6}
                    textAlign="center"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 20px rgba(255,165,0,0.3)",
                    }}
                  >
                    <a href="https://nsdcindia.org/sector-skill-councils" target="_blank" rel="noopener noreferrer">
                      <Image
                        src={logoUrl.startsWith("/uploads/")
                          ? `http://localhost:5000${logoUrl}` // Change for production!
                          : logoUrl}
                        alt={`Client Logo ${i + 1}`}
                        w="140px"
                        mx="auto"
                        fallbackSrc="https://via.placeholder.com/140?text=Logo"
                      />
                    </a>
                  </MotionBox>
                ))
              )}
            </SimpleGrid>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
