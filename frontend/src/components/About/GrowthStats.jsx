import React, { useEffect, useState } from "react";
import { Box, Heading, Text, SimpleGrid, VStack } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import PageWrapper from "../Layout/PageWrapper"; // ✅ Adjust path if needed

const MotionVStack = motion(VStack);

const stats = [
  { label: "No of sectors we are with", value: 19, icon: "🎓" },
  { label: "No of assessment Done", value: 10500, icon: "📄" },
  { label: "No of assessor we have", value: 1000, icon: "👥" },
  { label: "Enrolled Candidate", value: 150000, icon: "📊" },
  { label: "Cloud learners", value: 17000000, icon: "☁️" },
];

// Hook to animate value from 0 to target
const useCountUp = (end, duration = 2000, startCounting = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!startCounting) return;
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration, startCounting]);
  return count;
};

export default function GrowthStats({ cardBg }) {
  return (
    <Box py={{ base: 12, md: 16 }} bg="gray.50">
      <PageWrapper>
        <Box textAlign="center" mb={10}>
          <Heading
            fontSize={{ base: "2xl", md: "3xl" }}
            fontWeight="extrabold"
            mb={2}
            bgGradient="linear(to-r, blue.500, purple.500)"
            bgClip="text"
          >
            We are Growing
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }} color="gray.600">
            Our numbers speak for themselves!
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 5 }} spacing={6}>
          {stats.map((stat, i) => (
            <CountUpCard key={i} stat={stat} delay={i * 0.1} cardBg={cardBg} />
          ))}
        </SimpleGrid>
      </PageWrapper>
    </Box>
  );
}

function CountUpCard({ stat, delay, cardBg }) {
  const controls = useAnimation();
  const [inView, setInView] = useState(false);
  const count = useCountUp(stat.value, 2000, inView);

  return (
    <MotionVStack
      initial={{ opacity: 0, y: 30 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay },
      }}
      onViewportEnter={() => setInView(true)}
      viewport={{ once: true, amount: 0.5 }}
      bg={cardBg || "white"}
      p={6}
      borderRadius="xl"
      boxShadow="md"
      textAlign="center"
      minH="160px"
      spacing={3}
      _hover={{
        transform: "translateY(-4px)",
        boxShadow: "lg",
        transition: "all 0.3s ease",
      }}
    >
      <Box fontSize="3xl">{stat.icon}</Box>
      <Heading fontSize="2xl" color="blue.500" fontWeight="bold" lineHeight="1">
        {stat.value >= 1000000
          ? `${(count / 1000000).toFixed(1)}M+`
          : stat.value >= 1000
          ? `${(count / 1000).toFixed(1)}k+`
          : count}
      </Heading>
      <Text fontSize="sm" color="gray.600">
        {stat.label}
      </Text>
    </MotionVStack>
  );
}
