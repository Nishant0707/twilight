// src/components/Navbar.jsx
import React from "react";
import {
  Box,
  Flex,
  HStack,
  VStack,
  Link,
  Text,
  IconButton,
  Button,
  useDisclosure,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Container,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const location = useLocation();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navLinkStyle = (to) => ({
    as: RouterLink,
    to,
    fontSize: { base: "sm", md: "md" }, // smaller on mobile
    fontWeight: "medium",
    color: "black",
    borderBottom: location.pathname === to ? "2px solid #3182ce" : "none",
    _hover: {
      borderBottom: "2px solid #3182ce",
      textDecoration: "none",
    },
    transition: "border-bottom 0.2s ease",
    px: 2,
    py: 1,
    borderRadius: "md",
    w: "fit-content",
    textAlign: "left",
  });

  // Mobile icon display
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <>
      {/* Top Bar */}
      <Box
        bg="rgba(255,255,255,0.85)"
        borderBottom="1px solid #e2e8f0"
        w="100%"
      >
        <Container
          maxW="1280px"
          px={{ base: 2, md: 8 }}
          py={{ base: 1, md: 2 }}
        >
          <Flex
            direction={{ base: "column", md: "row" }}
            gap={{ base: 1, md: 0 }}
            justify="space-between"
            align={{ base: "flex-start", md: "center" }}
          >
            <Text
              fontSize={{ base: "xs", md: "sm" }}
              color="gray.700"
              fontWeight="500"
              textAlign={{ base: "left", md: "center" }}
            >
              📞 011 4036 4356 | ⏰ Mon–Sat 09:30am–05:30pm
            </Text>
            <Box
              overflow="hidden"
              whiteSpace="nowrap"
              w={{ base: "100%", md: "800px" }}
              mt={{ base: 1, md: 0 }}
            >
              <Box
                as="span"
                display="inline-block"
                minW="100%"
                animation="scrollText 18s linear infinite"
                fontSize={{ base: "sm", md: "md", lg: "xl" }}
                fontWeight="500"
                color="red.600"
              >
                ⚠️ Payment must be credited to Company Account 054302000051770 &middot; IFSC: IOBA0000543
              </Box>
            </Box>
          </Flex>
        </Container>
        <style>
          {`
            @keyframes scrollText {
              0% { transform: translateX(100%); }
              100% { transform: translateX(-100%); }
            }
          `}
        </style>
      </Box>

      {/* Main Navbar */}
      <Box
        bg="rgba(255,255,255,0.85)"
        position="sticky"
        top="0"
        w="100%"
        zIndex={1000}
        boxShadow="md"
      >
        <Container maxW="1280px" px={{ base: 3, md: 8 }} py={{ base: 1, md: 2 }}>
          <Flex align="center" justify="space-between" w="full">
            {/* Logo Left */}
            <RouterLink to="/">
              <HStack spacing={2}>
                <Image
                  src="/logo.png"
                  alt="Logo"
                  boxSize={{ base: "32px", md: "40px" }}
                />
                <Text
                  fontSize={{ base: "sm", sm: "md", md: "xl" }}
                  fontWeight="bold"
                  textTransform="uppercase"
                  bgGradient="linear(to-l, rgb(31,194,216), rgb(18,49,223))"
                  bgClip="text"
                  maxW={{ base: "130px", sm: "180px", md: "none" }}
                  noOfLines={1}
                >
                  Sai Skill Technology Pvt. Ltd
                </Text>
              </HStack>
            </RouterLink>

            {/* Desktop Nav - remains */}
            <HStack
              display={{ base: "none", md: "flex" }}
              spacing={5}
              ml="auto"
              align="center"
            >
              <Link {...navLinkStyle("/")}>Home</Link>
              <Link {...navLinkStyle("/about")}>About</Link>
              <Link {...navLinkStyle("/assess")}>Assessment</Link>
              {/* Desktop Services Dropdown */}
              <Menu isLazy>
                <MenuButton
                  as={Text}
                  fontSize="md"
                  fontWeight="medium"
                  color="black"
                  cursor="pointer"
                  display="flex"
                  alignItems="center"
                  gap={1}
                  _hover={{ borderBottom: "2px solid #3182ce" }}
                >
                  Services <ChevronDownIcon />
                </MenuButton>
                <MenuList
                  minW="500px"
                  py={4}
                  px={6}
                  display="grid"
                  gridTemplateColumns="repeat(3, 1fr)"
                  gap={4}
                >
                  {/* Column 1 */}
                  <Box>
                    <Text
                      fontWeight="bold"
                      mb={2}
                      fontSize="md"
                      bgGradient="linear(to-r, blue.500, purple.600)"
                      bgClip="text"
                    >
                      Skill Development Initiatives
                    </Text>
                    <MenuItem as={RouterLink} to="/government">
                      Government Scheme
                    </MenuItem>
                    <MenuItem as={RouterLink} to="/skill">
                      Skill Education
                    </MenuItem>
                    <MenuItem as={RouterLink} to="/youth">
                      Youth
                    </MenuItem>
                  </Box>
                  {/* Column 2 */}
                  <Box>
                    <Text
                      fontWeight="bold"
                      mb={2}
                      fontSize="md"
                      bgGradient="linear(to-r, blue.500, purple.600)"
                      bgClip="text"
                    >
                      Corporate
                    </Text>
                    <MenuItem as={RouterLink} to="/ser-cop">
                      Corporate Assessment
                    </MenuItem>
                    <MenuItem as={RouterLink} to="/ser-edu">
                      Education Assessment
                    </MenuItem>
                    <MenuItem as={RouterLink} to="/ser-gov">
                      Government Assessment
                    </MenuItem>
                  </Box>
                  {/* Column 3 */}
                  <Box>
                    <Text
                      fontWeight="bold"
                      mb={2}
                      fontSize="md"
                      bgGradient="linear(to-r, blue.500, purple.600)"
                      bgClip="text"
                    >
                      Student
                    </Text>
                    <MenuItem as={RouterLink} to="/jobdes">
                      Jobs
                    </MenuItem>
                  </Box>
                </MenuList>
              </Menu>
              <Link {...navLinkStyle("/learn")}>Learn</Link>
              <Link {...navLinkStyle("/jobs")}>Jobs</Link>
              <Link {...navLinkStyle("/contact")}>Contact</Link>
              {/* Quick Links Dropdown */}
              <Menu isLazy>
                <MenuButton
                  as={Text}
                  fontSize="md"
                  fontWeight="medium"
                  color="black"
                  cursor="pointer"
                  display="flex"
                  alignItems="center"
                  gap={1}
                  _hover={{ borderBottom: "2px solid #3182ce" }}
                >
                  Quick Links <ChevronDownIcon />
                </MenuButton>
                <MenuList minW="200px">
                  <MenuItem as={RouterLink} to="/testimonials">
                    Testimonials
                  </MenuItem>
                  <MenuItem as={RouterLink} to="/blogs">
                    Blogs
                  </MenuItem>
                  <MenuItem as={RouterLink} to="/help-videos">
                    Help Videos
                  </MenuItem>
                </MenuList>
              </Menu>
              {/* Login Dropdown */}
              <Menu isLazy>
                <MenuButton
                  as={Text}
                  fontSize="md"
                  fontWeight="medium"
                  color="black"
                  cursor="pointer"
                  display="flex"
                  alignItems="center"
                  gap={1}
                  _hover={{ borderBottom: "2px solid #3182ce" }}
                >
                  Login <ChevronDownIcon />
                </MenuButton>
                <MenuList minW="180px">
                  <MenuItem
                    as="a"
                    href="https://sstplexam.com/Identity/Account/Login?ReturnUrl=%2F"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Go to Login
                  </MenuItem>
                </MenuList>
              </Menu>
            </HStack>

            {/* Mobile Hamburger */}
            <IconButton
              display={{ base: "flex", md: "none" }}
              icon={<IoMenu />}
              aria-label="Toggle Navigation"
              variant="ghost"
              fontSize="22px"
              ml="auto"
              onClick={onOpen}
            />
          </Flex>
        </Container>

        {/* Mobile Drawer Menu */}
        <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="xs">
          <DrawerOverlay />
          <DrawerContent bg="white">
            <DrawerCloseButton />
            <DrawerHeader>
              <Image
                src="/logo.png"
                alt="Logo"
                boxSize="28px"
                mr={2}
                display="inline-block"
              />
              <Text
                display="inline"
                fontSize={{ base: "lg", md: "xl" }}
                fontWeight="bold"
                bgGradient="linear(to-l, rgb(31,194,216), rgb(18,49,223))"
                bgClip="text"
                ml={2}
              >
                SSTPL
              </Text>
            </DrawerHeader>
            <DrawerBody>
              <VStack
                align="start"
                spacing={3}
                w="full"
                mt={2}
                fontSize={{ base: "sm", md: "md" }}
              >
                <Link {...navLinkStyle("/")}>Home</Link>
                <Link {...navLinkStyle("/about")}>About</Link>
                <Link {...navLinkStyle("/assess")}>Assessment</Link>

                <Accordion allowToggle w="full">
                  <AccordionItem border="none">
                    <AccordionButton py={2}>
                      <Box flex="1" textAlign="left" fontWeight="bold">
                        Services
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={2}>
                      <VStack align="start" spacing={1} fontSize="sm">
                        <Text fontWeight="bold" mt={1}>
                          Skill Development Initiatives
                        </Text>
                        <Link {...navLinkStyle("/government")}>
                          Government Scheme
                        </Link>
                        <Link {...navLinkStyle("/skill")}>
                          Skill Education
                        </Link>
                        <Link {...navLinkStyle("/youth")}>Youth</Link>
                        <Text fontWeight="bold" mt={2}>
                          Corporate
                        </Text>
                        <Link {...navLinkStyle("/ser-cop")}>
                          Corporate Assessment
                        </Link>
                        <Link {...navLinkStyle("/ser-edu")}>
                          Education Assessment
                        </Link>
                        <Link {...navLinkStyle("/ser-gov")}>
                          Government Assessment
                        </Link>
                        <Text fontWeight="bold" mt={2}>
                          Student
                        </Text>
                        <Link {...navLinkStyle("/jobdes")}>Job Profile</Link>
                      </VStack>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>

                <Link {...navLinkStyle("/learn")}>Learn</Link>
                <Link {...navLinkStyle("/jobs")}>Jobs</Link>
                <Link {...navLinkStyle("/contact")}>Contact</Link>

                <Accordion allowToggle w="full">
                  <AccordionItem border="none">
                    <AccordionButton py={2}>
                      <Box flex="1" textAlign="left" fontWeight="bold">
                        Quick Links
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={2}>
                      <VStack align="start" spacing={1} fontSize="sm">
                        <Link {...navLinkStyle("/testimonials")}>
                          Testimonials
                        </Link>
                        <Link {...navLinkStyle("/blogs")}>Blogs</Link>
                        <Link {...navLinkStyle("/help-videos")}>
                          Help Videos
                        </Link>
                      </VStack>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>

                {/* Buttons */}
                <Button
                  as="a"
                  href="https://sstplexam.com/Identity/Account/Login?ReturnUrl=%2F"
                  target="_blank"
                  colorScheme="blue"
                  w="full"
                  size="sm"
                  mb={2}
                >
                  Login / Signup
                </Button>
                <Button
                  as={RouterLink}
                  to="/signup"
                  w="full"
                  fontWeight="bold"
                  size="sm"
                  variant="outline"
                >
                  Admin
                </Button>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </>
  );
};

export default Navbar;
