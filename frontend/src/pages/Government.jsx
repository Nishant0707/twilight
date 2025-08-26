import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Box,
  Heading,
  Text,
  Image,
  SimpleGrid,
  useColorModeValue,
  VStack,
  Divider,
  Stack,
  Link,
  Icon,
  chakra,
} from "@chakra-ui/react";
import { FaGlobeAsia, FaUniversity, FaRocket } from "react-icons/fa";
import PageWrapper from "../components/Layout/PageWrapper"; // ✅ Import wrapper

gsap.registerPlugin(ScrollTrigger);

const iconMap = [FaGlobeAsia, FaUniversity, FaRocket];

const Government = () => {
  const sectionRef = useRef(null);

  const bg = useColorModeValue("blue.50", "#101a2b");
  const cardBg = useColorModeValue("white", "gray.800");
  const cardShadow = useColorModeValue("xl", "2xl");
  const accent = useColorModeValue("blue.600", "cyan.400");
  const textColor = useColorModeValue("blue.800", "blue.100");

  const staticPrograms = [
    {
      title: "Skill India Mission",
      description:
        "MGNF is a government initiative that engages young professionals in supporting district-level skill planning and development. It builds leadership and governance skills among youth while helping improve local skilling ecosystems through hands-on fieldwork.",
      image: "https://via.placeholder.com/400x200?text=Digital+Literacy",
    },
    {
      title: "Digital Saksharta Abhiyan (DISHA) / PMGDISHA",
      description:
        "Skill India aims to equip youth with industry-relevant skills to improve their employability and self-reliance. It unifies various training programs to create a skilled workforce ready for jobs and entrepreneurship.",
      image: "https://via.placeholder.com/400x200?text=Vocational+Training",
    },
    {
      title: "Samarth Scheme (Ministry of Textiles)",
      description:
        "DDU-GKY targets rural youth aged 15–35 and provides free, job-linked skill training. It helps underprivileged youth build careers with a focus on placement, soft skills, and digital literacy.",
      image: "https://via.placeholder.com/400x200?text=Green+Skills",
    },
    {
      title: "Jan Shikshan Sansthan (JSS)",
      description:
        "PMKVY offers free skill training and certification to unemployed youth across India. It helps them gain employment or start their own business through short-term, practical courses.",
      image: "https://via.placeholder.com/400x200?text=Green+Skills",
    },
    {
      title: "Start-Up India & Stand-Up India",
      description:
        "These programs promote entrepreneurship among youth, especially women and SC/ST communities. They provide financial support, training, and ease-of-business benefits to encourage self-employment.",
      image: "https://via.placeholder.com/400x200?text=Green+Skills",
    },
    {
      title: "STRIVE Scheme",
      description:
        "Udaan is focused on educated youth from Jammu & Kashmir, offering them training and corporate exposure. It aims to increase employment opportunities and bridge the skill gap in the region.",
      image: "https://via.placeholder.com/400x200?text=Green+Skills",
    },
  ];

  useEffect(() => {
    const elements = gsap.utils.toArray(".gov-card");
    elements.forEach((el, idx) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 55 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7 + idx * 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <Box bg={bg} minH="100vh" py={12}>
      {/* Hero Banner - full width */}
      <Box mb={12} borderRadius="2xl" overflow="hidden" boxShadow="2xl" maxW="100%">
        <Image
          src="/govtb.jpg"
          alt="Government Banner"
          borderRadius="2xl"
          objectFit="cover"
          w="full"
          maxH="420px"
          minH="220px"
        />
      </Box>

      {/* Main Content within PageWrapper */}
      <PageWrapper>
        {/* About Section */}
        <VStack spacing={4} textAlign="center" mb={14}>
          <Heading
            fontSize={{ base: "2xl", md: "3.3rem" }}
            fontWeight="extrabold"
            letterSpacing="tight"
            bgGradient="linear(to-r, cyan.400, blue.600)"
            bgClip="text"
          >
            Government & Skill Development Initiatives
          </Heading>
          <Text
            fontSize="xl"
            color={useColorModeValue("blue.700", "blue.100")}
            maxW="2xl"
            opacity={0.9}
          >
            The Government of India continues to launch focused skill development
            initiatives to empower youth and strengthen the nation’s workforce.
          </Text>
        </VStack>

        {/* Informational Panels */}
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={10}
          mb={14}
          justify="center"
        >
          {[
            {
              icon: FaGlobeAsia,
              heading:
                "National Council for Vocational Education and Training (NCVET)",
              desc:
                "The NCVET serves as India’s umbrella body to regulate and enhance vocational education and skilling, streamlining standards across agencies and training organizations.",
              url: "https://ncvet.gov.in/",
              urlText: "Visit NCVET →",
            },
            {
              icon: FaUniversity,
              heading: "Sector Skill Councils (SSCs)",
              desc:
                "Sector Skill Councils bridge the gap between education and real industry needs, defining occupational standards, aligning assessments, and certifying across 30+ sectors.",
              url: "https://nsdcindia.org/sector-skill-councils",
              urlText: "Explore SSCs →",
            },
            {
              icon: FaRocket,
              heading: "SSTPL Technology Platform",
              desc:
                "The SSTPL Platform streamlines digital skill assessment end-to-end with real-time proctoring, AI analytics, compliance management, and user-friendly candidate experiences.",
              url: "http://www.sstpltech.com/",
              urlText: "Visit SSTPL →",
            },
          ].map((p, idx) => (
            <Box
              className="gov-card"
              key={idx}
              bg={cardBg}
              p={7}
              borderRadius="2xl"
              shadow={cardShadow}
              border="1.5px solid"
              borderColor={accent}
              minW="340px"
              maxW="480px"
              flex="1"
              mx="auto"
              mb={{ base: 7, md: 0 }}
              position="relative"
              transition="all 0.3s"
              _hover={{
                transform: "translateY(-6px) scale(1.02)",
                boxShadow: "2xl",
                borderColor: "cyan.400",
              }}
            >
              <Icon
                as={p.icon}
                color={accent}
                boxSize={12}
                position="absolute"
                right={7}
                top={6}
                opacity={0.13}
              />
              <Heading size="lg" mb={3} color={accent} letterSpacing="wider">
                {p.heading}
              </Heading>
              <Text fontSize="md" color={textColor} mb={3} opacity={0.92}>
                {p.desc}
              </Text>
              <Link href={p.url} isExternal color="cyan.600" fontWeight="bold">
                {p.urlText}
              </Link>
            </Box>
          ))}
        </Stack>

        <Divider my={14} borderColor="blue.100" />

        {/* Static Youth Programs */}
        <Box ref={sectionRef}>
          <Heading
            fontSize={{ base: "2xl", md: "2.5rem" }}
            mb={7}
            color={accent}
            letterSpacing="tight"
            fontWeight="bold"
          >
            National Skill Development Programs by the Government of India
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
            {staticPrograms.map((item, idx) => (
              <Box
                key={idx}
                className="gov-card"
                bg={cardBg}
                borderRadius="2xl"
                overflow="hidden"
                boxShadow="xl"
                border="1.5px solid"
                borderColor={accent}
                transition="all 0.3s"
                _hover={{
                  transform: "translateY(-8px) scale(1.04)",
                  boxShadow: "2xl",
                  borderColor: "cyan.400",
                }}
                display="flex"
                flexDirection="column"
                minH="410px"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  w="100%"
                  h="180px"
                  objectFit="cover"
                  borderTopRadius="2xl"
                />
                <Box p={6} flex="1" display="flex" flexDirection="column">
                  <Heading size="md" color={accent} mb={2} fontWeight="bold">
                    {item.title}
                  </Heading>
                  <Text fontSize="md" color={textColor} flex="1" opacity={0.9}>
                    {item.description}
                  </Text>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </PageWrapper>
    </Box>
  );
};

export default Government;
