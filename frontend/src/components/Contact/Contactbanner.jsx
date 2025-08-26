import React from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  Stack,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";

const ContactBanner = () => {
  const headingFontSize = useBreakpointValue({ base: "3xl", md: "5xl" });
  const textFontSize = useBreakpointValue({ base: "md", md: "xl" });
  const bgColor = useColorModeValue("gray.50", "gray.900");
  const overlayColor = useColorModeValue("rgba(0,0,0,0.4)", "rgba(0,0,0,0.6)");

  return (
    <Box
      position="relative"
      h={{ base: "70vh", md: "40vh" }}
      bgImage="url('/hero/hero777.png')"
      bgPosition="center"
      bgSize="cover"
      bgRepeat="no-repeat"
      bgAttachment="fixed"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {/* Overlay */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg={overlayColor}
        zIndex={1}
      />

      {/* Content */}
      <Stack
        position="relative"
        zIndex={2}
        spacing={6}
        maxW="3xl"
        textAlign="center"
        px={6}
      >
        <Heading
          fontWeight="extrabold"
          fontSize={headingFontSize}
          color="white"
          textShadow="0 4px 14px rgba(0,0,0,0.6)"
        >
          Get in Touch With Us
        </Heading>
        <Text
          fontSize={textFontSize}
          color="whiteAlpha.900"
          textShadow="0 2px 10px rgba(0,0,0,0.6)"
          fontWeight="medium"
        >
          We are here to help you grow your skills and career.
        </Text>
      </Stack>
    </Box>
  );
};

export default ContactBanner;
