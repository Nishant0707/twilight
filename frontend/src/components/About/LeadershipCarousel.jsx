import React, { useRef, useEffect } from "react";
import {
  Box,
  Heading,
  Text,
  Image,
  IconButton,
  Spinner,
  useColorModeValue,
} from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import { useLeadership } from "../../context/LeadershipContext";

const MotionBox = motion(Box);

export default function LeadershipCarousel() {
  const { leaders } = useLeadership();
  const carouselRef = useRef(null);
  const cardBg = useColorModeValue("gray.200", "gray.700");

  const handleScroll = (direction) => {
    const scrollAmount = 320;
    carouselRef.current?.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const container = carouselRef.current;
    const interval = setInterval(() => {
      if (!container) return;
      const maxScroll = container.scrollWidth - container.clientWidth;
      container.scrollTo({
        left: container.scrollLeft >= maxScroll - 10 ? 0 : container.scrollLeft + 320,
        behavior: "smooth",
      });
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box mt={20} textAlign="center">
      <Heading>SSTPL Leadership</Heading>
      <Box w="300px" h="2px" bg="orange.400" mx="auto" my={2} />
      <Text>We are led by a team who constantly challenges norms.</Text>

      <Box position="relative" mt={10} px={{ base: 4, md: 12 }}>
        <IconButton
          icon={<ArrowBackIcon />}
          onClick={() => handleScroll("left")}
          position="absolute"
          left={4}
          top="50%"
          transform="translateY(-50%)"
          zIndex={10}
          aria-label="scroll left"
          display={{ base: "none", md: "block" }}
        />

        <Box maxW="1230px" mx="auto" overflow="hidden">
          <Box
            ref={carouselRef}
            overflowX="auto"
            whiteSpace="nowrap"
            scrollBehavior="smooth"
            css={{
              "&::-webkit-scrollbar": { display: "none" },
              scrollbarWidth: "none",
            }}
          >
            <Box display="flex" gap={6} px={4}>
              {leaders?.length > 0 ? (
                leaders.map((leader) => (
                  <MotionBox
                    key={leader._id}
                    initial={{ opacity: 0, scale: 0.95, y: 40 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    viewport={{ once: true }}
                    minW="280px"
                    maxW="280px"
                    h="420px"
                    borderRadius="2xl"
                    overflow="hidden"
                    boxShadow="lg"
                    bg={cardBg}
                    position="relative"
                    _hover={{ boxShadow: "2xl", transform: "scale(1.02)" }}
                  >
                    <Image
                      src={leader.img || "/default-avatar.jpg"}
                      alt={leader.name}
                      objectFit="cover"
                      w="100%"
                      h="100%"
                      fallbackSrc="/default-avatar.jpg"
                    />
                    <Box
  position="absolute"
  top={0}
  left={0}
  w="100%"
  h="100%"
  bg="rgba(0,0,0,0.6)"
  color="white"
  opacity={0}
  transition="opacity 0.3s ease"
  _hover={{ opacity: 1 }}
  px={4}
  py={6}
  textAlign="center"
  display="flex"
  flexDirection="column"
  justifyContent="flex-start"
>
  <Heading fontSize="md" mb={3}>About {leader.name}</Heading>

  <Box
    overflowY="auto"
    maxH="calc(100% - 100px)" // avoid name/position overlap
    pr={2}
    css={{ scrollbarWidth: "thin" }}
  >
    <Text fontSize="sm" whiteSpace="pre-wrap">
      {leader.about}
    </Text>
  </Box>
</Box>

<Box
  position="absolute"
  bottom={0}
  w="100%"
  p={4}
  bg="white"
  textAlign="center"
  zIndex={1} // stay above overlay scroll
>
  <Text fontWeight="bold" color="blue.700">
    {leader.name}
  </Text>
  <Text fontSize="sm" color="orange.500">
    {leader.position}
  </Text>
</Box>
                  </MotionBox>
                ))
              ) : (
                <Box w="full" textAlign="center" py={10}>
                  <Spinner size="lg" />
                  <Text mt={2}>Loading leadership profiles…</Text>
                </Box>
              )}
            </Box>
          </Box>
        </Box>

        <IconButton
          icon={<ArrowForwardIcon />}
          onClick={() => handleScroll("right")}
          position="absolute"
          right={4}
          top="50%"
          transform="translateY(-50%)"
          zIndex={10}
          aria-label="scroll right"
          display={{ base: "none", md: "block" }}
        />
      </Box>
    </Box>
  );
}