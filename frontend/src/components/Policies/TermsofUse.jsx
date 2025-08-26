import React from "react";
import {
  Box,
  Heading,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useColorModeValue,
  Divider,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const termsSections = [
  {
    title: "Introduction",
    content: `Version 1.00 – Last updated on 2025-07-28

SSTPL Pvt. Ltd's products and services are provided through the SSTPL Digital Learning Hub. These Terms of Use ("Terms") govern your use of SSTPL's website, applications, and services. By using our Services, you agree to be bound by these Terms, including associated policies like our Privacy Policy. Downloaded software may be automatically updated and these Terms will apply to such updates.`,
  },
  {
    title: "Eligibility and Account Usage",
    content: `You may use our Services only if legally capable of forming a binding contract under applicable laws. Accurate, complete account information must be provided and maintained by users. A single user account is allowed per person, and login credentials must not be shared.`,
  },
  {
    title: "License and Content Ownership",
    content: `SSTPL grants a limited, non-exclusive, personal, non-transferable, revocable license to use the Services. Content may only be downloaded for personal, non-commercial use unless explicit written permission is obtained. Intellectual property rights remain with SSTPL.`,
  },
  {
    title: "Courses and Assessments",
    content: `Courses may be rescheduled, modified, or canceled by SSTPL at any time. Participation in a course does not grant academic credit unless specified by a credit-granting institution. SSTPL is not obligated to have courses recognized by educational organizations.`,
  },
  {
    title: "User Content",
    content: `You retain rights to submitted User Content such as homework, quizzes, projects, and forum posts. However, you grant SSTPL a transferable, perpetual, royalty-free license to use, distribute, modify, and publicly perform the User Content.`,
  },
  {
    title: "Contest Terms – IntelliGem",
    content: `Participants agree to adhere to contest rules including:

- No refund for opting out or no-show.
- No post-payment topic change.
- Registration is non-transferable.
- Information entered may be verified and discrepancies can lead to disqualification.
- School change during contest requires immediate notification.
- Contest communications will be sent periodically.
- Format, schedule, prizes may be altered by SSTPL.
- Missing the Grand Finale will limit recognition.
- Disqualified participants may be replaced.
- Prizes are final, non-transferable, and substitutes may be provided.
- Tax liabilities are the responsibility of winners.
- SSTPL is not liable for prize-related damages.
- Participants may be photographed/recorded; media can be used for 15 years.
- SSTPL may withdraw the contest anytime.
- Social media misuse and unfair practices may result in disqualification.
- All decisions by SSTPL are final.`,
  },
  {
    title: "Disclaimer and Limitation of Liability",
    content: `The Services and content are provided "as is" without warranties. SSTPL disclaims liability for any damages, data loss, or business interruption. No representations are made regarding content accuracy. Total liability shall not exceed fees paid by the user in the last three months.`,
  },
  {
    title: "Indemnification",
    content: `You agree to indemnify and hold SSTPL harmless from claims or damages related to Service misuse, law violations, or User Content infringement.`,
  },
  {
    title: "Governing Law and Arbitration",
    content: `Terms are governed by Indian law. Disputes will first attempt resolution amicably. Failing that, arbitration will occur in Mumbai per the Arbitration and Conciliation Act, 1996.`,
  },
  {
    title: "General Terms",
    content: `Terms may be revised any time and become effective upon posting. Continued use constitutes acceptance. Non-enforceable clauses do not affect others. Participating institutions are third-party beneficiaries and may enforce applicable provisions.`,
  },
  {
    title: "Usage Policy",
    content: `Users must not:

- Share content that is threatening, hateful, abusive, or harms individual dignity.
- Infringe intellectual property or privacy rights.
- Spam or share irrelevant promotions.
- Share passwords or access other user accounts.
- Misuse content, services, or engage in cybercrime.

Specific courses may have additional rules. SSTPL may suspend, disable, or terminate access for violations.`,
  },
];

export default function TermsofUse() {
  const bgColor = useColorModeValue("white", "gray.800");
  const accentColor = useColorModeValue("blue.600", "blue.300");

  return (
    <Box bg={bgColor} minH="100vh" py={12} px={4}>
      <MotionBox
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        maxW="5xl"
        mx="auto"
        textAlign="center"
        mb={6}
      >
        <Heading size="xl" mb={2} color={accentColor}>
          Terms of Use – SSTPL Pvt. Ltd Digital Learning Hub
        </Heading>
        <Text fontStyle="italic" color="gray.500">
          Version 1.00 – Last Updated: July 28, 2025
        </Text>
        <Divider mt={4} />
      </MotionBox>

      <Accordion allowMultiple maxW="5xl" mx="auto">
        {termsSections.map((section, idx) => (
          <MotionBox
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            mb={3}
          >
            <AccordionItem border="1px solid" borderColor="gray.200" borderRadius="md" overflow="hidden">
              <h2>
                <AccordionButton
                  _expanded={{
                    bg: useColorModeValue("blue.50", "blue.900"),
                    color: accentColor,
                  }}
                  _hover={{ bg: useColorModeValue("gray.50", "gray.700") }}
                  py={4}
                >
                  <Box flex="1" textAlign="left" fontWeight="semibold">
                    {section.title}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text whiteSpace="pre-wrap" fontSize="sm" color="gray.700">
                  {section.content}
                </Text>
              </AccordionPanel>
            </AccordionItem>
          </MotionBox>
        ))}
      </Accordion>
    </Box>
  );
}