import React, { useState } from "react";
import {
  Box,
  Container,
  Heading,
  useToast,
  Flex,
  Button,
  Grid,
  GridItem,
  Text,
  VStack,
  Divider,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import ContactBanner from "../components/Contact/Contactbanner";
import ContactForm from "../components/Contact/ContactForm";

const MotionBox = motion(Box);

const contactCards = [
  {
    title: "Address",
    content: (
      <>
     
        Sai Skill Technology Pvt. Ltd<br />
        Office No-44, 4th Floor,<br />
        Deepak Building, Nehru Place, Delhi 110019 , INDIA
      </>
    ),
  },
  {
    title: "Contact Number",
    content: (
      <>
        +91- 011 4036 4356<br />
        +91-9555552356
      </>
    ),
  },
  {
    title: "Email Address",
    content: <>info@sstpltech[DOT]com</>,
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    organization: "",
    employees: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      toast({
        title: res.ok ? data.message : data.error || "Submission failed",
        status: res.ok ? "success" : "error",
        duration: 3000,
        isClosable: true,
        position: "top-right",
        variant: "subtle",
      });
      if (res.ok) {
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          organization: "",
          employees: "",
        });
      }
    } catch (err) {
      toast({
        title: "Server error",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-right",
        variant: "subtle",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <ContactBanner />
      <MotionBox
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        pt={{ base: 6, md: 10 }}
      >
        <Container maxW="7xl" px={{ base: 4, md: 0 }}>
          {/* Contact Cards */}
          <Grid mb={12} templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={6}>
            {contactCards.map((card) => (
              <GridItem
                key={card.title}
                bg="white"
                borderRadius="xl"
                boxShadow="md"
                p={{ base: 4, md: 6 }}
                textAlign="center"
              >
                <Heading fontWeight="bold" fontSize="lg" color="gray.700" mb={2}>
                  {card.title}
                </Heading>
                <Text fontSize="md" color="gray.600" lineHeight="1.7">
                  {card.content}
                </Text>
              </GridItem>
            ))}
          </Grid>

          {/* Map and Form Side by Side */}
          <Grid
            templateColumns={{ base: "1fr", md: "1.5fr 1fr" }}
            gap={8}
            bg="white"
            p={{ base: 4, md: 8 }}
            borderRadius="xl"
            boxShadow="lg"
            mb={8}
          >
            {/* MAP SECTION */}
            <GridItem>
  <Box borderRadius="lg" overflow="hidden" boxShadow="md" height="100%">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d349.4657651796385!2d77.24983553097685!3d28.54747373905457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1999e91109f%3A0x4b714b1bbbadb643!2sSai%20Skill%20Technology%20Pvt.%20Ltd!5e0!3m2!1sen!2sin!4v1693240422801!5m2!1sen!2sin"
      style={{ width: "100%", height: "100%", minHeight: 320, border: 0 }}
      allowFullScreen=""
      loading="lazy"
      title="Sai Skill Technology Pvt. Ltd"
      referrerPolicy="no-referrer-when-downgrade"
    />
  </Box>
</GridItem>
            {/* CONTACT FORM SECTION */}
            <GridItem>
              <ContactForm
                formData={formData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                isSubmitting={isSubmitting}
                showExtraFields={true}
              />
            </GridItem>
          </Grid>
        </Container>
      </MotionBox>
    </>
  );
};

export default Contact;
