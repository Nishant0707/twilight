import React, { useState } from "react";
import {
  Heading,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  Button,
  FormErrorMessage,
  useToast,
  HStack,
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
    dob: "",
    state: "",
    city: "",
    pincode: "",
    qualification: "",
    otherQualification: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const validate = () => {
    const errors = {};
    if (!formData.fullName.trim()) errors.fullName = "Full Name is required";
    if (!formData.email.trim()) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Email is invalid";
    if (!formData.phone.trim()) errors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(formData.phone)) errors.phone = "Phone number must be 10 digits";
    if (!formData.dob.trim()) errors.dob = "Date of Birth is required";
    if (!formData.state) errors.state = "State is required";
    if (!formData.city.trim()) errors.city = "City is required";
    if (!formData.pincode.trim()) errors.pincode = "Pincode is required";
    if (!formData.qualification.trim()) errors.qualification = "Qualification is required";
    if (!formData.otherQualification.trim()) errors.otherQualification = "Other Qualification is required";

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
    <>
      <Heading mb={8} textAlign="center" color="blue.600">
        Register & Schedule Test
      </Heading>
      <form onSubmit={handleSubmit} style={{ maxWidth: "900px", margin: "0 auto", padding: "0 1rem" }}>
        <VStack spacing={6} align="stretch">
          <HStack spacing={6}>
            <FormControl flex={1} isRequired isInvalid={formErrors.fullName}>
              <FormLabel>Full Name</FormLabel>
              <Input type="text" value={formData.fullName} onChange={handleChange("fullName")} />
              <FormErrorMessage>{formErrors.fullName}</FormErrorMessage>
            </FormControl>

            <FormControl flex={1} isRequired isInvalid={formErrors.email}>
              <FormLabel>Email</FormLabel>
              <Input type="email" value={formData.email} onChange={handleChange("email")} />
              <FormErrorMessage>{formErrors.email}</FormErrorMessage>
            </FormControl>
          </HStack>

          <HStack spacing={6}>
            <FormControl flex={1} isRequired isInvalid={formErrors.phone}>
              <FormLabel>Phone Number</FormLabel>
              <Input type="tel" maxLength={10} value={formData.phone} onChange={handleChange("phone")} />
              <FormErrorMessage>{formErrors.phone}</FormErrorMessage>
            </FormControl>

            <FormControl flex={1} isRequired isInvalid={formErrors.dob}>
              <FormLabel>Date of Birth</FormLabel>
              <Input type="date" value={formData.dob} onChange={handleChange("dob")} />
              <FormErrorMessage>{formErrors.dob}</FormErrorMessage>
            </FormControl>
          </HStack>

          <HStack spacing={6}>
            <FormControl flex={1} isRequired isInvalid={formErrors.state}>
              <FormLabel>State</FormLabel>
              <Select placeholder="Select state" value={formData.state} onChange={handleChange("state")}>
                {states.map(st => <option key={st} value={st}>{st}</option>)}
              </Select>
              <FormErrorMessage>{formErrors.state}</FormErrorMessage>
            </FormControl>

            <FormControl flex={1} isRequired isInvalid={formErrors.city}>
              <FormLabel>City</FormLabel>
              <Input type="text" value={formData.city} onChange={handleChange("city")} />
              <FormErrorMessage>{formErrors.city}</FormErrorMessage>
            </FormControl>
          </HStack>

          <FormControl isRequired isInvalid={formErrors.pincode}>
            <FormLabel>Pincode</FormLabel>
            <Input maxLength={6} type="text" value={formData.pincode} onChange={handleChange("pincode")} />
            <FormErrorMessage>{formErrors.pincode}</FormErrorMessage>
          </FormControl>

          <HStack spacing={6}>
            <FormControl flex={1} isRequired isInvalid={formErrors.qualification}>
              <FormLabel>Qualification</FormLabel>
              <Select placeholder="Select qualification" value={formData.qualification} onChange={handleChange("qualification")}>
                {qualifications.map(q => <option key={q} value={q}>{q}</option>)}
              </Select>
              <FormErrorMessage>{formErrors.qualification}</FormErrorMessage>
            </FormControl>

          </HStack>

          <Button
  colorScheme="blue"
  size="lg"
  type="submit"
  borderRadius="xl"
  width="full"
  mb={6}  // Add bottom margin here
>
  Submit and Schedule Test
</Button>
        </VStack>
      </form>
    </>
  );
};

export default Register;
