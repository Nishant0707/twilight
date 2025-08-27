import React from "react";
import { Box, chakra, useColorModeValue } from "@chakra-ui/react";
import Slider from "react-slick";

const ChakraImage = chakra("img", {
  baseStyle: {
    filter: "grayscale(20%)",
    transition: "transform 0.5s cubic-bezier(.23,1,.32,1), filter 0.4s ease",
    cursor: "pointer",
    borderRadius: "md",
    boxShadow: "0 4px 24px rgba(60,60,120,.14)",
    background: "rgba(250,250,255,0.12)",
    _hover: {
      transform: "scale(1.13) rotate(-2deg)",
      filter: "grayscale(0%)",
      boxShadow: "0 8px 32px rgba(80,110,240,0.24)",
      background: "rgba(255,255,255,0.22)",
    },
  },
});

const logos = [
  { src: "/logo/logo6.jpg", alt: "Logo 6" },
  { src: "/logo/logo5.jpg", alt: "Logo 5" },
  { src: "/logo/logo4.jpg", alt: "Logo 4" },
  { src: "/logo/logo1.jpg", alt: "Logo 1" },
  { src: "/logo/logo2.jpg", alt: "Logo 2" },
  { src: "/logo/logo3.jpg", alt: "Logo 3" },
  { src: "/logo/logo.png", alt: "Logo 7" },
  { src: "/logo10.png", alt: "Logo 8" },
];

const Brandlogo = () => {
  const bgGradient = useColorModeValue(
    "linear(to-r, blue.100 0%, purple.50 100%)",
    "linear(to-r, gray.800 0%, purple.900 100%)"
  );

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // for infinite smooth scroll
    cssEase: "linear",
    swipeToSlide: true,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 5 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <Box
      py={{ base: 2, md: 6 }}
      px={{ base: 2, md: 8 }}
      bgGradient={bgGradient}
      borderRadius="3xl"
      maxW="100vw"
      overflow="hidden"
      boxShadow="md"
      style={{ backdropFilter: "blur(8px)", border: "1.5px solid rgba(110,120,240,0.08)" }}
    >
      <Slider {...settings}>
        {logos.map(({ src, alt }, i) => (
          <Box
            key={i}
            px={{ base: 2, md: 4 }}
            py={4}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <ChakraImage
              src={src}
              alt={alt}
              height={{ base: "36px", md: "60px" }}
              objectFit="contain"
              boxSize={{ base: "52px", md: "80px" }}
              background="rgba(255,255,255,0.13)"
              borderRadius="lg"
              boxShadow="xl"
              padding="6px"
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Brandlogo;
