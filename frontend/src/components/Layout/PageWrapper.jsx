import React from "react";
import { Container } from "@chakra-ui/react";

/**
 * PageWrapper - A reusable layout container for all pages.
 * Ensures consistent max width, padding, and centering on all screen sizes.
 * Optionally add a bg or gradient if you want (commented below).
 */
const PageWrapper = ({ children, maxWidth = "3840px" }) => {
  return (
    <Container
      maxW={maxWidth}              // Content width cap
      px={{ base: 4, md: 6, lg: 8 }} // Responsive horizontal padding
      py={{ base: 4, md: 8 }}        // Responsive vertical padding
      // Optionally, enable center alignment:
      // centerContent={true}        // Use only if you want ALL children centered
      // Optionally, add a subtle background:
      // bgGradient="linear(to-b, #221066 0%, #0b042c 100%)"
    >
      {children}
    </Container>
  );
};

export default PageWrapper;
