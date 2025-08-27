import React, { useState, useEffect } from "react";
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  FormErrorMessage,
  SimpleGrid,
  useToast,
} from "@chakra-ui/react";

const states = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi",
  "Jammu and Kashmir",
  "Ladakh",
  "Lakshadweep",
  "Puducherry",
  "Other"
];

const qualifications = [
  "High School Diploma",
  "Diploma",
  "Certificate",
  "Associate Degree",
  "Bachelor's Degree",
  "Bachelor of Arts (BA)",
  "Bachelor of Science (BSc)",
  "Bachelor of Commerce (BCom)",
  "Bachelor of Business Administration (BBA)",
  "Bachelor of Engineering (BEng)",
  "Bachelor of Technology (BTech)",
  "Bachelor of Computer Applications (BCA)",
  "Bachelor of Fine Arts (BFA)",
  "Bachelor of Laws (LLB)",
  "Master's Degree",
  "Master of Arts (MA)",
  "Master of Science (MSc)",
  "Master of Commerce (MCom)",
  "Master of Business Administration (MBA)",
  "Master of Technology (MTech)",
  "Master of Engineering (MEng)",
  "Master of Computer Applications (MCA)",
  "Master of Social Work (MSW)",
  "Master of Public Health (MPH)",
  "Master of Education (MEd)",
  "PhD / Doctorate",
  "Doctor of Philosophy (PhD)",
  "Doctor of Medicine (MD)",
  "Doctor of Education (EdD)",
  "Professional Qualification",
  "Other"
];

const Register = () => {
  const toast = useToast();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    state: "",
    city: "",
    qualification: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const validate = () => {
    const errors = {};
    if (!formData.fullName.trim()) errors.fullName = "Full Name is required";
    if (!formData.email.trim()) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Invalid email";
    if (!formData.phone.trim()) errors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(formData.phone)) errors.phone = "Must be 10 digits";
    if (!formData.state) errors.state = "State is required";
    if (!formData.city.trim()) errors.city = "City is required";
    if (!formData.qualification.trim()) errors.qualification = "Qualification is required";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      toast({
        title: "Please fix errors before submitting",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    toast({
      title: "Form submitted!",
      description: "Thank you for registering. Your test will be scheduled.",
      status: "success",
      duration: 4000,
      isClosable: true,
    });
  };

  return (
    <Box maxW="600px" mx="auto" my={8} px={4}>
      <Heading mb={6} textAlign="center" color="blue.600">
        Register & Schedule Test
      </Heading>

      <form onSubmit={handleSubmit}>
        <FormControl isRequired isInvalid={formErrors.fullName} mb={4}>
          <FormLabel>Full Name</FormLabel>
          <Input value={formData.fullName} onChange={handleChange("fullName")} />
          <FormErrorMessage>{formErrors.fullName}</FormErrorMessage>
        </FormControl>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
          <FormControl isRequired isInvalid={formErrors.email}>
            <FormLabel>Email</FormLabel>
            <Input type="email" value={formData.email} onChange={handleChange("email")} />
            <FormErrorMessage>{formErrors.email}</FormErrorMessage>
          </FormControl>

          <FormControl isRequired isInvalid={formErrors.phone}>
            <FormLabel>Phone Number</FormLabel>
            <Input maxLength={10} value={formData.phone} onChange={handleChange("phone")} />
            <FormErrorMessage>{formErrors.phone}</FormErrorMessage>
          </FormControl>

          <FormControl isRequired isInvalid={formErrors.state}>
            <FormLabel>State</FormLabel>
            <Select placeholder="Select state" value={formData.state} onChange={handleChange("state")}>
              {states.map((st) => (<option key={st} value={st}>{st}</option>))}
            </Select>
            <FormErrorMessage>{formErrors.state}</FormErrorMessage>
          </FormControl>

          <FormControl isRequired isInvalid={formErrors.city}>
            <FormLabel>City</FormLabel>
            <Input value={formData.city} onChange={handleChange("city")} />
            <FormErrorMessage>{formErrors.city}</FormErrorMessage>
          </FormControl>
        </SimpleGrid>

        <FormControl isRequired isInvalid={formErrors.qualification} mt={6} mb={6}>
          <FormLabel>Qualification</FormLabel>
          <Select
            placeholder="Select qualification"
            value={formData.qualification}
            onChange={handleChange("qualification")}
          >
            {qualifications.map((q) => (<option key={q} value={q}>{q}</option>))}
          </Select>
          <FormErrorMessage>{formErrors.qualification}</FormErrorMessage>
        </FormControl>

        <Button colorScheme="blue" size="lg" type="submit" borderRadius="xl" width="full">
          Submit and Schedule Test
        </Button>
      </form>
    </Box>
  );
};

export default Register;
