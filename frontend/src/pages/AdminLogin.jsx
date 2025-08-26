import React, { useState } from "react";
import {
  Box,
  Button,
  Input,
  FormControl,
  FormLabel,
  Heading,
  VStack,
  useToast,
  Container,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const baseURL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

    try {
      const res = await axios.post(`${baseURL}/api/auth/login`, formData);
      const { token, isAdmin } = res.data;

      if (isAdmin) {
        localStorage.setItem("adminToken", token);
        toast({
          title: "Login successful",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        navigate("/admin-dashboard");
      } else {
        toast({
          title: "Access Denied",
          description: "You are not authorized as admin.",
          status: "error",
          duration: 4000,
          isClosable: true,
        });
      }
    } catch (err) {
      console.error("Login Error:", err);
      toast({
        title: "Login Failed",
        description: err.response?.data?.message || "Server connection error",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    }
  };

  return (
    <Container maxW="md" py={10}>
      <Box boxShadow="xl" p={8} borderRadius="lg" bg="white">
        <Heading mb={6} size="lg" textAlign="center">
          Admin Login
        </Heading>
        <form onSubmit={handleLogin}>
          <VStack spacing={5}>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                name="email"
                placeholder="admin@example.com"
                value={formData.email}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <InputRightElement width="4.5rem">
                  <Button
                    h="1.75rem"
                    size="sm"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>

            <Button type="submit" colorScheme="blue" width="full">
              Login
            </Button>
          </VStack>
        </form>
      </Box>
    </Container>
  );
};

export default AdminLogin;