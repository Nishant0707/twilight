import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  IconButton,
  Text,
  VStack,
  Flex,
  Spinner,
  useColorModeValue,
  useOutsideClick,
  Tooltip, // ✅ fixed missing import
} from "@chakra-ui/react";
import { FaRobot, FaComments } from "react-icons/fa";
import { gsap } from "gsap";
import FloatingEmail from "./FloatingEmail"; // ✅ path may vary based on folder

const chatFlow = {
  welcome: {
    bot: "👋 Welcome! I'm your assistant. What can I help you with?",
    options: [
      "Courses", "Support", "HR", "Start Onboarding", "About SSTPL",
      "Our Offerings", "Learners", "Institutions", "Testimonials", "Contact",
    ],
  },
  Courses: { bot: "📚 We offer Full Stack Development, UI/UX Design, and AI/ML courses. Want a recommendation?" },
  Support: { bot: "🛠️ Let me know what you're facing trouble with — I'm here to help!" },
  HR: { bot: "👩‍💼 HR Help: Need support with leave policies, onboarding, or other HR queries?" },
  "Start Onboarding": { bot: "🚀 Let's get you started! What's your full name?" },
  "About SSTPL": { bot: "🏢 SSTPL empowers people and organizations with smart, tech-enabled education." },
  "Our Offerings": { bot: "🎯 We offer SSTPL Assessments, AI-Driven Career Guidance, Digital Courses, and Live Bootcamps." },
  Learners: { bot: "🧑‍🎓 We help learners unlock their potential with hands-on training and expert-led programs." },
  Institutions: { bot: "🏫 Partner institutions benefit from transformation, custom learning paths, and high-end tools." },
  Testimonials: { bot: "💬 SSTPL has changed lives by offering practical, high-impact education." },
  Contact: { bot: "📞 Contact us through the site or email us at info@sstpltech.com." },
  keywords: {
    about: "About SSTPL", sstpl: "About SSTPL", offerings: "Our Offerings",
    services: "Our Offerings", students: "Learners", learners: "Learners",
    institutes: "Institutions", colleges: "Institutions",
    testimonial: "Testimonials", feedback: "Testimonials",
    contact: "Contact", email: "Contact",
  },
};

const Bot = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: chatFlow.welcome.bot, options: chatFlow.welcome.options },
  ]);
  const [loading, setLoading] = useState(false);
  const chatRef = useRef(null);
  const botContainerRef = useRef();

  useOutsideClick({
    ref: botContainerRef,
    handler: () => setChatOpen(false),
  });

  const handleClick = (keyword) => {
    setMessages((prev) => [...prev, { sender: "user", text: keyword }]);
    setLoading(true);

    setTimeout(() => {
      const key = chatFlow[keyword]
        ? keyword
        : chatFlow.keywords[keyword.toLowerCase()] || null;

      const botText = key
        ? chatFlow[key]?.bot || "🤖 Not sure what that means, try another option!"
        : "🤖 Not sure what that means, try another option!";

      setMessages((prev) => [...prev, { sender: "bot", text: botText, options: chatFlow.welcome.options }]);
      setLoading(false);
    }, 600);
  };

  useEffect(() => {
    if (chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [messages]);

  useEffect(() => {
    if (chatOpen) gsap.from(".chatbox", { y: 100, opacity: 0, duration: 0.4 });
  }, [chatOpen]);

  const bg = useColorModeValue("white", "gray.800");
  const userBg = useColorModeValue("blue.500", "blue.700");
  const botBg = useColorModeValue("gray.700", "gray.600");

  return (
    <>
      <FloatingEmail />

      <Box position="fixed" bottom={6} right={6} zIndex={9999}>
        {!chatOpen && (
          <Flex direction="column" align="center">
            <Tooltip label="Chat Now" hasArrow placement="left">
              <IconButton
                icon={<FaComments />}
                colorScheme="blue"
                aria-label="Open chat"
                borderRadius="full"
                boxSize={14}
                onClick={() => setChatOpen(true)}
                boxShadow="0 0 8px rgba(0, 132, 255, 0.6)"
              />
            </Tooltip>
          </Flex>
        )}

        {chatOpen && (
          <Box
            ref={botContainerRef}
            w={{ base: "90vw", md: "360px" }}
            h="500px"
            bg={bg}
            shadow="2xl"
            borderRadius="xl"
            overflow="hidden"
            className="chatbox"
          >
            <Flex bg="blue.500" color="white" p={3} justify="space-between" align="center">
              <Flex align="center" gap={2}>
                <FaRobot />
                <Text fontWeight="bold">SSTPL Assistant</Text>
              </Flex>
              <IconButton
                size="sm"
                icon={<Text fontWeight="bold">×</Text>}
                variant="ghost"
                onClick={() => setChatOpen(false)}
              />
            </Flex>

            <VStack ref={chatRef} spacing={3} overflowY="auto" p={4} height="390px" bg={bg}>
              {messages.map((msg, i) => (
                <Box key={i} w="100%">
                  <Flex justify={msg.sender === "user" ? "flex-end" : "flex-start"}>
                    <Box
                      px={4}
                      py={2}
                      borderRadius="xl"
                      maxW="75%"
                      bg={msg.sender === "user" ? userBg : botBg}
                      color="white"
                      boxShadow={`0 0 6px ${msg.sender === "user" ? userBg : botBg}`}
                      border="1px solid"
                      borderColor={msg.sender === "user" ? "blue.300" : "gray.500"}
                      transition="all 0.3s ease"
                    >
                      {msg.text}
                    </Box>
                  </Flex>

                  {msg.sender === "bot" && msg.options && (
                    <Flex mt={3} wrap="wrap" gap={2}>
                      {msg.options.map((opt, idx) => (
                        <Box
                          key={idx}
                          px={3}
                          py={2}
                          bg="gray.300"
                          borderRadius="full"
                          fontSize="sm"
                          color="black"
                          cursor="pointer"
                          _hover={{ bg: "blue.400", color: "white" }}
                          onClick={() => handleClick(opt)}
                        >
                          {opt}
                        </Box>
                      ))}
                    </Flex>
                  )}
                </Box>
              ))}
              {loading && <Spinner />}
            </VStack>
          </Box>
        )}
      </Box>
    </>
  );
};

export default Bot;