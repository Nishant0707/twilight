// src/components/Home/ExploreContent.jsx
import React, { useEffect, useRef } from "react";
import {
  Box,
  Heading,
  Text,
  Grid,
  Image,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PageWrapper from "../Layout/PageWrapper"; // ✅ adjust path if different

gsap.registerPlugin(ScrollTrigger);

const ExploreContent = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 90%",
        },
      }
    );
  }, []);

  const exploreCards = [
    {
      image: "offer/offer1.jpg",
      title: "Blogs",
      desc: "Keep up with the trending topics about your industry",
      link: "/blogs",
    },
    {
      image: "offer/offer2.jpg",
      title: "Testimonials",
      desc: "Read about the impact we've made on our customers",
      link: "/testimonials",
    },
    {
      image: "offer/offer3.jpg",
      title: "Case Studies",
      desc: "Deep dives into how SSTPL creates success stories",
      link: "/case-studies",
    },
  ];

  return (
    <Box
      bg="black"
      color="white"
      py={{ base: 12, md: 20 }}
      textAlign="center"
    >
      <PageWrapper>
        <Heading fontSize={{ base: "2xl", md: "3xl" }} mb={2}>
          Explore the world of SSTPL
        </Heading>
        <Text color="gray.400" mb={10}>
          Read our blogs, case studies and stay updated with the latest insights
        </Text>

        {/* Cards Grid */}
        <Grid
          templateColumns={{
            base: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          }}
          gap={6}
        >
          {exploreCards.map((card, index) => (
            <Link
              as={RouterLink}
              to={card.link}
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              _hover={{ textDecoration: "none" }}
            >
              <Box
                bg="gray.800"
                borderRadius="md"
                overflow="hidden"
                cursor="pointer"
                transition="transform 0.3s ease, box-shadow 0.3s ease"
                _hover={{
                  transform: "scale(1.05)",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.4)",
                }}
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  h="180px"
                  w="full"
                  objectFit="cover"
                />
                <Box p={5}>
                  <Text fontWeight="bold" fontSize="lg" mb={1}>
                    {card.title}
                  </Text>
                  <Text fontSize="sm" color="gray.300">
                    {card.desc}
                  </Text>
                </Box>
              </Box>
            </Link>
          ))}
        </Grid>
      </PageWrapper>
    </Box>
  );
};

export default ExploreContent;
