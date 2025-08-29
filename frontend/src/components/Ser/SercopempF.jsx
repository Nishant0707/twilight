import React, { useState } from "react";
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Select,
  useToast,
  SimpleGrid,
  FormErrorMessage,
} from "@chakra-ui/react";

const cities = [
  "Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata",
  "Hyderabad", "Pune", "Ahmedabad", "Surat", "Jaipur", "Other",
];

export default function EmployerRegistration() {
  const toast = useToast();
  const [formData, setFormData] = useState({
    companyName: "",
    employerName: "",
    email: "",
    phone: "",
    jobProfile: "",
    jobDescription: "",
    officeLocation: "",
    workMode: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };
  const validate = () => {
    let errors = {};
    if (!formData.companyName.trim())
      errors.companyName = "Company Name is required";
    if (!formData.email.trim() || !validateEmail(formData.email))
      errors.email = "Valid Email is required";
    if (!formData.phone.trim())
      errors.phone = "Phone number is required";
    if (!formData.jobProfile.trim())
      errors.jobProfile = "Job Profile is required";
    if (!formData.jobDescription.trim())
      errors.jobDescription = "Job Description is required";
    if (!formData.officeLocation.trim())
      errors.officeLocation = "Office Location is required";
    if (!formData.workMode.trim())
      errors.workMode = "Work Mode is required";
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
      title: "Application submitted successfully!",
      status: "success",
      duration: 4000,
      isClosable: true,
    });
    // TODO: Submit form data to API/backend
  };

  return (
    <Box
      maxW={{ base: "100%", md: "700px" }}
      mx="auto"
      my={{ base: 4, md: 8 }}
      px={{ base: 2, md: 4 }}
    >
      <Heading mb={8} textAlign="center" color="blue.600" fontSize={{ base: "xl", md: "2xl" }}>
        Employer Registration
      </Heading>
      <form onSubmit={handleSubmit}>
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={4}
          mb={4}
        >
          <FormControl isRequired isInvalid={!!formErrors.companyName}>
            <FormLabel>Company Name</FormLabel>
            <Input
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              fontSize={{ base: "sm", md: "md" }}
            />
            <FormErrorMessage>{formErrors.companyName}</FormErrorMessage>
          </FormControl>
          <FormControl>
            <FormLabel>Employer Name</FormLabel>
            <Input
              name="employerName"
              value={formData.employerName}
              onChange={handleChange}
              fontSize={{ base: "sm", md: "md" }}
            />
          </FormControl>
          <FormControl isRequired isInvalid={!!formErrors.email}>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              fontSize={{ base: "sm", md: "md" }}
            />
            <FormErrorMessage>{formErrors.email}</FormErrorMessage>
          </FormControl>
          <FormControl isRequired isInvalid={!!formErrors.phone}>
            <FormLabel>Phone Number</FormLabel>
            <Input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              fontSize={{ base: "sm", md: "md" }}
            />
            <FormErrorMessage>{formErrors.phone}</FormErrorMessage>
          </FormControl>
          <FormControl isRequired isInvalid={!!formErrors.jobProfile}>
            <FormLabel>Job Profile</FormLabel>
            <Input
              name="jobProfile"
              value={formData.jobProfile}
              onChange={handleChange}
              fontSize={{ base: "sm", md: "md" }}
            />
            <FormErrorMessage>{formErrors.jobProfile}</FormErrorMessage>
          </FormControl>
          <FormControl isRequired isInvalid={!!formErrors.jobDescription}>
            <FormLabel>Job Description</FormLabel>
            <Textarea
              name="jobDescription"
              value={formData.jobDescription}
              onChange={handleChange}
              fontSize={{ base: "sm", md: "md" }}
              resize="vertical"
            />
            <FormErrorMessage>{formErrors.jobDescription}</FormErrorMessage>
          </FormControl>
          <FormControl isRequired isInvalid={!!formErrors.officeLocation}>
            <FormLabel>Office Location (City)</FormLabel>
            <Select
              name="officeLocation"
              placeholder="Select city"
              value={formData.officeLocation}
              onChange={handleChange}
              fontSize={{ base: "sm", md: "md" }}
            >
              {cities.map((city) => (
                <option key={city} value={city}>{city}</option>
              ))}
            </Select>
            <FormErrorMessage>{formErrors.officeLocation}</FormErrorMessage>
          </FormControl>
          <FormControl isRequired isInvalid={!!formErrors.workMode}>
            <FormLabel>Work Mode</FormLabel>
            <Select
              name="workMode"
              value={formData.workMode}
              onChange={handleChange}
              placeholder="Select work mode"
              fontSize={{ base: "sm", md: "md" }}
            >
              <option value="full-time">Full-time</option>
              <option value="hybrid">Hybrid</option>
              <option value="remote">Remote</option>
              <option value="flexible">Flexible</option>
            </Select>
            <FormErrorMessage>{formErrors.workMode}</FormErrorMessage>
          </FormControl>
          {/* Submit Button: spans all columns on md+ screens, single column on mobile */}
          <Box gridColumn={{ base: "1", md: "span 2" }}>
            <Button
              colorScheme="blue"
              size="lg"
              type="submit"
              borderRadius="xl"
              width="full"
              fontSize={{ base: "md", md: "lg" }}
              mb={{ base: 4, md: 6 }}
            >
              Submit Application
            </Button>
          </Box>
        </SimpleGrid>
      </form>
    </Box>
  );
}
