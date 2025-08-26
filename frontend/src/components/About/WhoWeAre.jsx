import React from "react";
import {
  Heading,
  Text,
  Container,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

// Gradient accent bar colors
const ACCENT_GRADIENT = "linear(to-r, #5f2cff, #36fdff 80%)";
const HEADING_GRADIENT = "linear(to-r, #7939fe, #2cfafd 95%)";

// Motion wrappers
const MotionHeading = motion(Heading);
const MotionBox = motion(Box);
const MotionText = motion(Text);

export default function WhoWeAre() {
  const headingColor = useColorModeValue("gray.900", "whiteAlpha.900");
  const bodyColor = useColorModeValue("gray.800", "gray.200");

  return (
    <Container
      maxW="4xl"
      py={{ base: 8, md: 14 }}
      px={{ base: 2, md: 0 }}
    >
      <MotionHeading
        fontSize={{ base: "2.1rem", md: "2.75rem" }}
        mb={2}
        bgGradient={HEADING_GRADIENT}
        bgClip="text"
        textAlign="center"
        fontWeight="extrabold"
        letterSpacing="wider"
        lineHeight="1.1"
        fontFamily={
          "Poppins, system-ui, Segoe UI, Helvetica Neue, Arial, sans-serif"
        }
        initial={{ opacity: 0, y: -32 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65 }}
        viewport={{ once: true }}
      >
        WHO WE ARE
      </MotionHeading>

      <MotionBox
        h="4px"
        w={{ base: "80px", md: "120px" }}
        bgGradient={ACCENT_GRADIENT}
        borderRadius="full"
        my={4}
        mx="auto"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        style={{ transformOrigin: "center" }}
      />

      <MotionText
        fontSize={{ base: "md", md: "lg" }}
        lineHeight="2"
        color={bodyColor}
        letterSpacing="wider"
        textAlign="justify"
        fontFamily="Inter, Poppins, system-ui, sans-serif"
        fontWeight="medium"
        initial={{ opacity: 0, y: 38 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.95, delay: 0.19 }}
        viewport={{ once: true }}
        textShadow="0 2px 10px rgba(30,23,50,0.07)"
      >
        SSTPL is a computer-adaptive assessment designed to evaluate candidates across critical competencies such as communication skills, logical reasoning, quantitative aptitude, and job-specific domain knowledge. This enables recruiters to accurately identify candidates most suitable for a given role.
        Unlike conventional aptitude tests that primarily measure verbal comprehension and reasoning, SSTPL goes further by assessing personality traits and domain expertise, making it a comprehensive tool to align candidates with the right job opportunities.
        <br /><br />
        <span style={{
          display: "inline-block",
          fontWeight: 700,
          color: "#32e0ff",
          letterSpacing: "0.05em"
        }}>Candidate Benefits:</span>
        <br />
        • Job Matching: Based on test performance, SSTPL helps match candidates to roles where their skills and strengths are best suited.
        <br />
        • Detailed Feedback: Candidates receive a comprehensive report highlighting their strengths and areas for improvement, allowing targeted preparation and career planning.
        <br />
        • Wide Recognition: Leading job platforms and employers recognize SSTPL scores as a benchmark for employability, increasing visibility and opportunities for candidates.
        <br /><br />
        <span style={{
          display: "inline-block",
          fontWeight: 700,
          color: "#823eff",
          letterSpacing: "0.05em"
        }}>Industry Reach:</span>
        <br />
        SSTPL has become an emerging standard in the hiring ecosystem, with over 700+ companies—including industry leaders across IT Services, Banking & Financial Services, Automobiles, Telecom, and more—using it for entry-level recruitment. Additionally, SSTPL partners with 500+ small and medium enterprises, helping candidates discover opportunities they might not have accessed otherwise.
        <br /><br />
        <span style={{
          display: "inline-block",
          fontWeight: 700,
          color: "#36fdde",
          letterSpacing: "0.05em"
        }}>Impact at a Glance:</span>
        <br />
        • Over 2 million students have successfully taken the SSTPL assessment since its inception.
        <br />
        • Each month, more than 100,000 interview calls are generated based on SSTPL scores.
        <br />
        SSTPL bridges the gap between talent and opportunity, creating a fair, efficient, and merit-based pathway for both candidates and recruiters.
      </MotionText>
    </Container>
  );
}
