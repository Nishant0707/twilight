import React from "react";
import {
  Box,
  Grid,
  Heading,
  Text,
  Link,
  VStack,
  HStack,
  Flex,
  Icon,
  Divider,
  Container,
} from "@chakra-ui/react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
} from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const FooterItem = ({ children, to, href, isExternal = false, ...props }) => (
  <MotionLink
    as={to ? RouterLink : "a"}
    to={to}
    href={href}
    isExternal={isExternal}
    fontSize="sm"
    fontWeight="medium"
    color="gray.400"
    _hover={{ color: "cyan.300" }}
    whileHover={{ scale: 1.08 }}
    transition={{ duration: 0.16 }}
    width="fit-content"
    {...props}
  >
    {children}
  </MotionLink>
);

const Footer = () => (
  <Box
    bg="black"
    color="gray.400"
    w="100%"
    fontFamily="Inter, Poppins, system-ui, sans-serif"
    fontSize="sm"
    pt={2}
    pb={1}
    boxShadow="0 -1px 5px rgba(0,0,0,0.12)"
  >
    <Container maxW="1200px" px={{ base: 2, md: 4 }}>
      <Divider borderColor="gray.700" opacity={0.15} mb={2} />

      <Grid
        templateColumns={{ base: "1fr", md: "repeat(5, 1fr)" }}
        gap={{ base: 6, md: 2 }}
        alignItems="flex-start"
        pb={1}
      >
        {/* Services */}
        <VStack align="start" spacing={1}>
          <Heading size="sm" color="white" mb={1}>
            Services
          </Heading>
          <FooterItem to="/government">Government Scheme</FooterItem>
          <FooterItem to="/skill-education">Skill Education</FooterItem>
          <FooterItem to="/youth">Youth</FooterItem>
          <FooterItem to="/ser-cop">Corporate Assessment</FooterItem>
          <FooterItem to="/ser-edu">Education Assessment</FooterItem>
          <FooterItem to="/jobdes">Job Profile</FooterItem>
        </VStack>

        {/* Quick Links */}
        <VStack align="start" spacing={1}>
          <Heading size="sm" color="white" mb={1}>
            Quick Links
          </Heading>
          <FooterItem to="/testimonials">Testimonials</FooterItem>
          <FooterItem to="/blogs">Blogs</FooterItem>
          <FooterItem to="/help-videos">Help Videos</FooterItem>
          <FooterItem to="/ser-cop-emp">Employer Registration</FooterItem>
          <FooterItem to="/signup">SSTPL ADMIN</FooterItem>
          <FooterItem to="/case-studies">Case Studies</FooterItem>
          <FooterItem to="/platform">Platform</FooterItem>
        </VStack>

        {/* Company */}
        <VStack align="start" spacing={1}>
          <Heading size="sm" color="white" mb={1}>
            Company
          </Heading>
          <FooterItem to="/about">About Us</FooterItem>
          <FooterItem to="/contact">Contact Us</FooterItem>
          <FooterItem to="/jobs">Jobs</FooterItem>
          <FooterItem to="/learn">Learn</FooterItem>
          <FooterItem to="/ser-cop-emp">Employer Registration</FooterItem>
          <FooterItem to="/reg">Register & Schedule Test</FooterItem>
        </VStack>

        {/* Policies */}
        <VStack align="start" spacing={1}>
          <Heading size="sm" color="white" mb={1}>
            Policies
          </Heading>
          <FooterItem href="/terms-of-use">Terms of Use</FooterItem>
          <FooterItem href="#">Privacy Notice</FooterItem>
          <FooterItem href="#">Cookie Policy</FooterItem>
        </VStack>

        {/* Social & Contact */}
        <VStack align="start" spacing={2}>
          <Heading size="sm" color="white" mb={1}>
            Find us on
          </Heading>
          <HStack spacing={3} pt={0}>
            <FooterItem href="#" isExternal aria-label="Facebook">
              <Icon as={FaFacebook} boxSize={6} color="#1877F2" />
            </FooterItem>
            <FooterItem href="#" isExternal aria-label="Twitter">
              <Icon as={FaTwitter} boxSize={6} color="#36fdff" />
            </FooterItem>
            <FooterItem
              href="https://www.linkedin.com/in/sstpltech/?originalSubdomain=in"
              isExternal
              aria-label="Linkedin"
            >
              <Icon as={FaLinkedin} boxSize={6} color="#0077B5" />
            </FooterItem>
            <FooterItem href="https://www.instagram.com/sai.skill.technology/?hl=en" isExternal aria-label="Instagram">
              <Icon as={FaInstagram} boxSize={6} color="#E1306C" />
            </FooterItem>
            <FooterItem href="#" isExternal aria-label="YouTube">
              <Icon as={FaYoutube} boxSize={6} color="#FF0000" />
            </FooterItem>
          </HStack>

          <Heading size="sm" color="white" pt={4} mb={1}>
            Reach Us
          </Heading>

          <Flex align="center" wrap="nowrap" gap={3}>
            <Icon as={FaPhoneAlt} boxSize={4} color="#55fcc6" />
            <Text as="span" fontSize="md" color="gray.400" whiteSpace="nowrap">
              +91-9555552356
            </Text>
            <Text as="span" fontSize="md" color="gray.400" whiteSpace="nowrap">
              011 4036 4356
            </Text>
          </Flex>

          <Text fontSize="sm" maxW="220px" color="gray.400" whiteSpace="normal">
            Office No-44, 4th Floor, Deepak Building, Nehru Place, Delhi 110019
          </Text>
        </VStack>
      </Grid>

      <Divider borderColor="gray.700" opacity={0.15} mt={2} mb={1} />

      <Text textAlign="center" fontSize="xs" color="gray.500" mt={1}>
        Built with <span role="img" aria-label="love">💙</span> by SSTPL • © {new Date().getFullYear()} All rights reserved.
      </Text>
    </Container>
  </Box>
);

export default Footer;
