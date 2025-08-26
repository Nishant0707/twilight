import React, { useEffect, useRef } from "react";
import {
  Flex,
  Heading,
  Text,
  Icon,
  useColorModeValue,
  useBreakpointValue
} from "@chakra-ui/react";
import {
  FaCloud,
  FaLayerGroup,
  FaCheckCircle,
  FaUserCircle,
  FaHeadphones,
  FaShieldAlt
} from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const infoItems = [
  { icon: FaCloud, title: "Cloud Based System", desc: "Reliable, scalable cloud architecture for exams." },
  { icon: FaLayerGroup, title: "Scalable", desc: "Effortlessly expands for any number of candidates." },
  { icon: FaCheckCircle, title: "Auto Authorization", desc: "Instant, secure authorization procedures." },
  { icon: FaUserCircle, title: "Facial Detection", desc: "Advanced face recognition for verification." },
  { icon: FaHeadphones, title: "Audio Analytics", desc: "Real-time audio analysis for integrity." },
  { icon: FaShieldAlt, title: "Secure Browser", desc: "Lockdown browser for uncompromising security." }
];

export default function Platinfo() {
  const componentRef = useRef(null);
  const scrollRef = useRef(null);
  const textBlue = useColorModeValue("blue.700", "blue.300");
  const cardBg = useColorModeValue("gray.50", "gray.700");
  const shadowColor = useColorModeValue("rgba(99, 179, 237, 0.2)", "rgba(66, 153, 225, 0.5)");
  const isMobile = useBreakpointValue({ base: true, md: false });

  useEffect(() => {
    const container = componentRef.current;
    const scrollEl = scrollRef.current;
    const totalScrollLength = scrollEl.scrollWidth - window.innerWidth;

    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: container,
        start: "top top",
        end: () => `+=${totalScrollLength + container.offsetHeight}`,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        markers: false,
      });

      gsap.to(scrollEl, {
        x: () => -totalScrollLength,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => `+=${totalScrollLength}`,
          scrub: 1.5,
          markers: false,
        },
      });

      ScrollTrigger.create({
        trigger: container,
        start: "top top",
        end: () => `+=${totalScrollLength}`,
        scrub: 0.8,
        onUpdate: self => {
          const progress = self.progress * infoItems.length;
          infoItems.forEach((_, index) => {
            const card = scrollEl.children[index];
            const distance = Math.abs(progress - index - 0.5);
            const scale = gsap.utils.clamp(0.75, 1, 1 - distance * 0.4);
            const rotateY = gsap.utils.clamp(-15, 0, (0.5 - distance) * 30);
            const boxShadowOpacity = gsap.utils.clamp(0, 0.35, 0.35 - distance);

            gsap.to(card, {
              scale,
              rotationY: rotateY,
              boxShadow: `0 8px 30px rgba(99, 179, 237, ${boxShadowOpacity})`,
              duration: 0.3,
              ease: "power1.out"
            });
          });
        }
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={componentRef} style={{ marginBottom: '80px' }}> {/* Add marginBottom here */}
      <Heading
        size="lg"
        mb={8}
        mt={{ base: 20, md: 28 }}
        textAlign="center"
        color={textBlue}
        fontWeight="extrabold"
      >
        Proctor, Evaluate & Conduct Exams, All on One Integrated Platform
      </Heading>

      <Flex
        ref={scrollRef}
        gap={{ base: 5, md: 8 }}
        w="max-content"
        h={isMobile ? "auto" : "350px"}
        cursor="grab"
        userSelect="none"
        mx="auto"
        px={{ base: 4, md: 0 }}
      >
        {infoItems.map((item) => (
          <Flex
            key={item.title}
            direction="column"
            align="center"
            justify="center"
            w={{ base: "220px", md: "280px" }}
            h={{ base: "300px", md: "350px" }}
            bg={cardBg}
            borderRadius="2xl"
            boxShadow={`0 4px 14px ${shadowColor}`}
            px={5}
            py={7}
            pointerEvents="none"
            color={textBlue}
          >
            <Icon
              as={item.icon}
              w={{ base: 12, md: 14 }}
              h={{ base: 12, md: 14 }}
              color={textBlue}
              mb={5}
              filter="drop-shadow(0 0 4px rgba(99, 179, 237, 0.4))"
            />
            <Text
              fontSize={{ base: "xl", md: "2xl" }}
              fontWeight="extrabold"
              mb={3}
              letterSpacing={0.1}
              textAlign="center"
              userSelect="none"
            >
              {item.title}
            </Text>
            <Text
              fontSize={{ base: "sm", md: "md" }}
              fontWeight="medium"
              textAlign="center"
              userSelect="none"
              color={useColorModeValue("gray.700", "gray.300")}
            >
              {item.desc}
            </Text>
          </Flex>
        ))}
      </Flex>
    </div>
  );
}

