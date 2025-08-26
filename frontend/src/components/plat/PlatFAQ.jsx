import React from "react";
import {
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Divider,
  useColorModeValue,
  Flex
} from "@chakra-ui/react";

const faqs = [
  {
    q: "What is an online examination software?",
    a: "Online examination software is a digital platform that enables organizations to create, deliver, monitor, and evaluate tests and assessments securely via the internet."
  },
  {
    q: "What are the advantages of an online examination software?",
    a: "Advantages include remote access, instant grading, customizable tests, advanced proctoring for integrity, scalability, and detailed analytics that save time and resources for both examiners and candidates."
  },
  {
    q: "What are the top features of the SSTPL online examination platform?",
    a: "Key features include secure browser, facial and audio analytics, scalable cloud hosting, seamless authorization, automated scheduling, and support for multiple question formats."
  },
  {
    q: "How does an online examination system work?",
    a: "Examiners create tests, set access controls, and share invites online. Candidates complete exams under supervision via proctoring tools. Results are processed and analytics provided instantly."
  },
  {
    q: "Who should use online examination solutions?",
    a: "Educational institutions, businesses, recruiters, certification providers, and anyone needing reliable, scalable, and secure assessment delivery."
  }
];

export default function PlatFAQ() {
  const accent = useColorModeValue("blue.800", "blue.200");
  const dividerColor = useColorModeValue("gray.200", "gray.600");

  return (
    <Flex
      direction="column"
      align="center"
      px={{ base: 4, md: 16, xl: 32 }}
      py={{ base: 10, md: 16 }}
      w="full"
      bg="white"
    >
      <Heading
        fontSize={{ base: "2xl", md: "3xl" }}
        mb={8}
        color={accent}
        textAlign="left"
        fontWeight="extrabold"
        letterSpacing={-1}
        w="full"
      >
        Frequently asked questions (FAQs)
      </Heading>
      <Accordion
        allowToggle
        w="full"
        maxW="900px"
        border="none"
        bg="transparent"
      >
        {faqs.map(({ q, a }, idx) => (
          <AccordionItem key={q} border="none">
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton
                    px={0}
                    py={6}
                    fontWeight="bold"
                    fontSize={{ base: "lg", md: "xl" }}
                    color={accent}
                    _hover={{ bg: "gray.50" }}
                    _focus={{ boxShadow: "outline" }}
                  >
                    <Box flex="1" textAlign="left">{q}</Box>
                    <AccordionIcon boxSize={6} />
                  </AccordionButton>
                </h2>
                <AccordionPanel px={0} pb={4} fontSize="md" color="gray.600">
                  {a}
                </AccordionPanel>
                {idx !== faqs.length - 1 && (
                  <Divider borderColor={dividerColor} />
                )}
              </>
            )}
          </AccordionItem>
        ))}
      </Accordion>
    </Flex>
  );
}
