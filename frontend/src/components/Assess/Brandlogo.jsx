import React from "react";
import { Box, useColorModeValue, chakra } from "@chakra-ui/react";
import Slider from "react-slick";

// Chakra-wrapped Image for style consistency
const ChakraImage = chakra("img", {
  baseStyle: {
    filter: "grayscale(20%)",
    transition: "transform 0.3s ease, filter 0.3s ease",
    cursor: "pointer",
    _hover: {
      transform: "scale(1.2)",
      filter: "grayscale(0%)",
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
  const bg = useColorModeValue("blue.50", "gray.800");

  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    swipeToSlide: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 5 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <Box py={6} px={4} bg={bg} maxW="100vw" overflow="hidden">
      <Slider {...settings}>
        {logos.map(({ src, alt }, i) => (
          <Box key={i} px={3} py={4}>
            <ChakraImage src={src} alt={alt} height={{ base: "40px", md: "60px" }} objectFit="contain" />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Brandlogo;
