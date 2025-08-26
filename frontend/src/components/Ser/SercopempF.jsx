import React, { useState } from "react";
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Checkbox,
  Button,
  Select,
  useToast,
  HStack,
  VStack,
  SimpleGrid,
  InputGroup,
  InputLeftAddon,
  Image,
  FormErrorMessage,  // <-- Add this line
} from "@chakra-ui/react";

const states = [
  "Maharashtra",
  "Delhi",
  "Karnataka",
  "Tamil Nadu",
  "Other",
];

const SchedulesTestFields = ({
  formData,
  handleChange,
  formErrors,
}) => (
  <>
    <FormControl isRequired isInvalid={!!formErrors.testDate}>
      <FormLabel>Test Date</FormLabel>
      <Input
        type="date"
        name="testDate"
        value={formData.testDate}
        onChange={handleChange}
      />
      <FormErrorMessage>{formErrors.testDate}</FormErrorMessage>
    </FormControl>

    <FormControl isRequired isInvalid={!!formErrors.testTime}>
      <FormLabel>Test Time</FormLabel>
      <Input
        type="time"
        name="testTime"
        value={formData.testTime}
        onChange={handleChange}
      />
      <FormErrorMessage>{formErrors.testTime}</FormErrorMessage>
    </FormControl>

    <FormControl isRequired isInvalid={!!formErrors.testPlace}>
      <FormLabel>Test Place</FormLabel>
      <Input
        name="testPlace"
        value={formData.testPlace}
        onChange={handleChange}
      />
      <FormErrorMessage>{formErrors.testPlace}</FormErrorMessage>
    </FormControl>

    <FormControl isRequired isInvalid={!!formErrors.testJobProfile}>
      <FormLabel>Test Job Profile</FormLabel>
      <Input
        name="testJobProfile"
        value={formData.testJobProfile}
        onChange={handleChange}
      />
      <FormErrorMessage>{formErrors.testJobProfile}</FormErrorMessage>
    </FormControl>
  </>
);

export default function SercopempF() {
  const toast = useToast();

  const [formData, setFormData] = useState({
    companyName: "",
    employerName: "",
    email: "",
    phone: "",
    jobProfile: "",
    jobDescription: "",
    officeLocation: "",
    timePreferenceFrom: "",
    timePreferenceTo: "",
    workMode: "",
    schedulesTest: false,
    testDate: "",
    testTime: "",
    testPlace: "",
    testJobProfile: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
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
    if (!formData.jobProfile.trim())
      errors.jobProfile = "Job Profile is required";
    if (!formData.jobDescription.trim())
      errors.jobDescription = "Job Description is required";
    if (!formData.officeLocation.trim())
      errors.officeLocation = "Office Location is required";
    if (
      !formData.timePreferenceFrom.trim() ||
      !formData.timePreferenceTo.trim() ||
      !formData.workMode.trim()
    )
      errors.timePreference = "Complete Time Preference is required";
    if (formData.schedulesTest) {
      if (
        !formData.testDate.trim() ||
        !formData.testTime.trim() ||
        !formData.testPlace.trim() ||
        !formData.testJobProfile.trim()
      )
        errors.testSchedule = "All test schedule fields are required";
    }
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
    // TODO: API submission logic here

    toast({
      title: "Application submitted successfully!",
      status: "success",
      duration: 4000,
      isClosable: true,
    });
  };

  return (
    <>
      <Heading mb={8} textAlign="center" color="blue.600">
        Employer Registration
      </Heading>
      <form onSubmit={handleSubmit}>
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={6}
          maxW="700px"
          mx="auto"
          px={4}
        >
          {/* Company Name */}
          <FormControl isRequired isInvalid={!!formErrors.companyName}>
            <FormLabel>Company Name</FormLabel>
            <Input
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
            />
            <FormErrorMessage>{formErrors.companyName}</FormErrorMessage>
          </FormControl>

          {/* Employer Name */}
          <FormControl>
            <FormLabel>Employer Name</FormLabel>
            <Input
              name="employerName"
              value={formData.employerName}
              onChange={handleChange}
            />
          </FormControl>

          {/* Email */}
          <FormControl isRequired isInvalid={!!formErrors.email}>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <FormErrorMessage>{formErrors.email}</FormErrorMessage>
          </FormControl>

          {/* Phone */}
          <FormControl isRequired isInvalid={!!formErrors.phone}>
            <FormLabel>Phone Number</FormLabel>
            <Input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            <FormErrorMessage>{formErrors.phone}</FormErrorMessage>
          </FormControl>

          {/* Job Profile */}
          <FormControl isRequired isInvalid={!!formErrors.jobProfile}>
            <FormLabel>Job Profile</FormLabel>
            <Input
              name="jobProfile"
              value={formData.jobProfile}
              onChange={handleChange}
            />
            <FormErrorMessage>{formErrors.jobProfile}</FormErrorMessage>
          </FormControl>

          {/* Job Description */}
          <FormControl isRequired isInvalid={!!formErrors.jobDescription}>
            <FormLabel>Job Description</FormLabel>
            <Textarea
              name="jobDescription"
              value={formData.jobDescription}
              onChange={handleChange}
            />
            <FormErrorMessage>{formErrors.jobDescription}</FormErrorMessage>
          </FormControl>

          {/* Office Location */}
          <FormControl isRequired isInvalid={!!formErrors.officeLocation}>
            <FormLabel>Office Location</FormLabel>
            <Input
              name="officeLocation"
              value={formData.officeLocation}
              onChange={handleChange}
            />
            <FormErrorMessage>{formErrors.officeLocation}</FormErrorMessage>
          </FormControl>

          {/* Time Preference */}
          <FormControl isRequired>
            <FormLabel>Time Preference</FormLabel>
            <HStack spacing={4}>
              <Input
                type="time"
                name="timePreferenceFrom"
                value={formData.timePreferenceFrom}
                onChange={handleChange}
              />
              <Input
                type="time"
                name="timePreferenceTo"
                value={formData.timePreferenceTo}
                onChange={handleChange}
              />
            </HStack>
          </FormControl>

          {/* Work Mode */}
          <FormControl isRequired isInvalid={!!formErrors.workMode}>
            <FormLabel>Work Mode</FormLabel>
            <Select
              name="workMode"
              value={formData.workMode}
              onChange={handleChange}
              placeholder="Select work mode"
            >
              <option value="full-time">Full-time</option>
              <option value="hybrid">Hybrid</option>
              <option value="remote">Remote</option>
              <option value="flexible">Flexible</option>
            </Select>
            <FormErrorMessage>{formErrors.workMode}</FormErrorMessage>
          </FormControl>

          {/* Schedule test */}
          <FormControl gridColumn="span 2">
            <Checkbox
              name="schedulesTest"
              isChecked={formData.schedulesTest}
              onChange={handleChange}
            >
              Schedule Online Test
            </Checkbox>
          </FormControl>

          {/* Schedule test fields */}
          {formData.schedulesTest && (
            <>
              <FormControl isRequired isInvalid={!!formErrors.testDate}>
                <FormLabel>Test Date</FormLabel>
                <Input
                  type="date"
                  name="testDate"
                  value={formData.testDate}
                  onChange={handleChange}
                />
                <FormErrorMessage>{formErrors.testDate}</FormErrorMessage>
              </FormControl>

              <FormControl isRequired isInvalid={!!formErrors.testTime}>
                <FormLabel>Test Time</FormLabel>
                <Input
                  type="time"
                  name="testTime"
                  value={formData.testTime}
                  onChange={handleChange}
                />
                <FormErrorMessage>{formErrors.testTime}</FormErrorMessage>
              </FormControl>

              <FormControl isRequired isInvalid={!!formErrors.testPlace}>
                <FormLabel>Test Place</FormLabel>
                <Input
                  name="testPlace"
                  value={formData.testPlace}
                  onChange={handleChange}
                />
                <FormErrorMessage>{formErrors.testPlace}</FormErrorMessage>
              </FormControl>

              <FormControl isRequired isInvalid={!!formErrors.testJobProfile}>
                <FormLabel>Test Job Profile</FormLabel>
                <Input
                  name="testJobProfile"
                  value={formData.testJobProfile}
                  onChange={handleChange}
                />
                <FormErrorMessage>{formErrors.testJobProfile}</FormErrorMessage>
              </FormControl>
            </>
          )}

          {/* Submit */}
          <Box gridColumn="span 2">
            <Button
              colorScheme="blue"
              size="lg"
              type="submit"
              borderRadius="xl"
              width="full"
              mb={6}  // Add bottom margin here
            >
              Submit Application
            </Button>
          </Box>
        </SimpleGrid>
      </form>
    </>
  );
}
