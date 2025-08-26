import React, { useState } from "react";
import {
  Box,
  Heading,
  VStack,
  SimpleGrid,
  Button,
  Input,
  Select,
  FormControl,
  FormLabel,
  useToast,
  Text,
  Stack,
  useColorModeValue,
  InputGroup,
  InputLeftAddon,
  Divider,
  Badge,
  Icon,
  FormHelperText,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaFileUpload, FaRegCheckCircle } from "react-icons/fa";
import axios from "axios";

const MotionBox = motion(Box);

const states = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat",
  "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh",
  "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh",
  "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands", "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Jammu and Kashmir", "Ladakh",
  "Lakshadweep", "Puducherry"
];

const inputStyle = {
  borderRadius: "lg",
  borderColor: "blue.300",
  _focus: { borderColor: "cyan.400", boxShadow: "0 0 0 1.5px #06b6d4" },
  _hover: { borderColor: "blue.400" }
};

export default function Jobs() {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const bgForm = useColorModeValue("white", "#161f35");
  const textColor = useColorModeValue("blue.800", "blue.100");

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const data = new FormData();
      Object.entries(formData).forEach(([key, val]) => data.append(key, val));

      await axios.post("http://localhost:5000/api/jobs/apply", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast({
        title: "Application submitted!",
        status: "success",
        duration: 3500,
        isClosable: true,
        position: "top",
        icon: <FaRegCheckCircle color="#06b6d4" />,
      });
      setFormData({});
    } catch {
      toast({
        title: "Submission failed, please try again.",
        status: "error",
        duration: 3500,
        isClosable: true,
        position: "top",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Hero Banner with Image Background */}
      <MotionBox
        bgImage="url('/jobbanner.jpg')"
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        position="relative"
        overflow="hidden"
        px={{ base: 4, md: 0 }}
        py={{ base: 14, md: 24 }}
        borderRadius="xl"
        mb={12}
        display="flex"
        flexDirection="column"
        alignItems="center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1 }}
        shadow="lg"
      >
        <Heading
          fontSize={{ base: '2.7rem', md: '4rem' }}
          fontWeight="extrabold"
          mb={3}
          textAlign="center"
          bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
          bgClip="text"
          letterSpacing="tight"
          lineHeight={1.1}
          textShadow="0 7px 32px rgba(18,76,255,0.18)"
        >
          Join Our Team
        </Heading>
       
      </MotionBox>

      {/* Application Form */}
      <Box
        bg={bgForm}
        borderRadius="2xl"
        maxW="780px"
        mx="auto"
        boxShadow="2xl"
        px={{ base: 4, md: 12 }}
        py={{ base: 6, md: 10 }}
        mb={12}
        position="relative"
        transition="box-shadow 0.3s"
      >
        <VStack spacing={8} align="stretch" as="form">
          <Badge
            colorScheme="blue"
            variant="solid"
            alignSelf="flex-start"
            fontSize="md"
            borderRadius="full"
            px={4}
            py={2}
            mb={2}
            bgGradient="linear(to-r, cyan.400, blue.500)"
            color="white"
            letterSpacing="widest"
            boxShadow="md"
          >
            Quick Application
          </Badge>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
            <FormControl isRequired>
              <FormLabel color={textColor}>First Name</FormLabel>
              <Input
                name="firstName"
                value={formData.firstName || ""}
                onChange={handleInputChange}
                placeholder="Your first name"
                {...inputStyle}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel color={textColor}>Last Name</FormLabel>
              <Input
                name="lastName"
                value={formData.lastName || ""}
                onChange={handleInputChange}
                placeholder="Your last name"
                {...inputStyle}
              />
            </FormControl>
          </SimpleGrid>

          <FormControl isRequired>
            <FormLabel color={textColor}>Phone Number</FormLabel>
            <InputGroup>
              <InputLeftAddon bg="blue.50" color="blue.700" borderRightWidth={0} children="+91" borderRadius="md" />
              <Input
                type="tel"
                name="phone"
                value={formData.phone || ""}
                onChange={handleInputChange}
                placeholder="Mobile number"
                {...inputStyle}
                borderLeftRadius={0}
              />
            </InputGroup>
            <FormHelperText color="blue.400">Enter a 10-digit Indian phone number.</FormHelperText>
          </FormControl>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
            {["address1", "address2", "address3"].map((field) => (
              <FormControl key={field}>
                <FormLabel color={textColor}>{field.replace("address", "Address ")}</FormLabel>
                <Input
                  name={field}
                  value={formData[field] || ""}
                  onChange={handleInputChange}
                  placeholder={field.replace("address", "Address ")}
                  {...inputStyle}
                />
              </FormControl>
            ))}
          </SimpleGrid>

          <Stack direction={{ base: "column", md: "row" }} spacing={6}>
            <FormControl>
              <FormLabel color={textColor}>Pincode</FormLabel>
              <Input
                name="pincode"
                value={formData.pincode || ""}
                onChange={handleInputChange}
                placeholder="Postal code"
                {...inputStyle}
              />
            </FormControl>
            <FormControl>
              <FormLabel color={textColor}>State</FormLabel>
              <Select
                name="state"
                value={formData.state || ""}
                onChange={handleInputChange}
                placeholder="Select state"
                borderRadius="lg"
                focusBorderColor="cyan.400"
                borderColor="blue.300"
                borderWidth="1.5px"
                _hover={{ borderColor: "blue.400" }}
              >
                {states.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel color={textColor}>Education</FormLabel>
              <Input
                name="education"
                value={formData.education || ""}
                onChange={handleInputChange}
                placeholder="Highest qualification"
                {...inputStyle}
              />
            </FormControl>
          </Stack>

          <FormControl>
            <FormLabel color={textColor}>Resume Upload</FormLabel>
            <Input
              type="file"
              name="file"
              accept=".pdf,.doc,.docx"
              onChange={handleInputChange}
              display="none"
              id="resume-upload"
            />
            <label htmlFor="resume-upload">
              <Button
                as="span"
                leftIcon={<Icon as={FaFileUpload} />}
                colorScheme="blue"
                variant="outline"
                borderRadius="lg"
                fontWeight="bold"
                _hover={{
                  bg: "blue.50",
                  borderColor: "cyan.400"
                }}
              >
                {formData.file ? "Change Resume" : "Upload Resume"}
              </Button>
              {formData.file && (
                <Text fontSize="sm" mt={2} color="cyan.500">
                  {formData.file.name}
                </Text>
              )}
            </label>
            <FormHelperText color="blue.400">
              Accepted: PDF, DOC, DOCX — max 2MB
            </FormHelperText>
          </FormControl>

          <Divider my={2} />

          <Button
            colorScheme="blue"
            size="lg"
            fontWeight="bold"
            borderRadius="full"
            px={10}
            py={6}
            fontSize="lg"
            boxShadow="xl"
            bgGradient="linear(to-r, cyan.400, blue.500)"
            _hover={{ bgGradient: "linear(to-l, cyan.400, blue.600)", transform: "scale(1.03)" }}
            onClick={handleSubmit}
            isLoading={loading}
            loadingText="Submitting"
            alignSelf="center"
            mt={2}
          >
            Submit Application
          </Button>
        </VStack>
      </Box>
    </>
  );
}
