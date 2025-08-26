import React from "react";
import { Button, Text, Icon } from "@chakra-ui/react";
import { MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/signup");
  };

  return (
    <Button
      leftIcon={<Icon as={MdLogout} boxSize={5} />}
      onClick={handleLogout}
      justifyContent="flex-start"
      variant="ghost"
      colorScheme="red"
      fontWeight="bold"
      _hover={{ bg: "red.50" }}
      size="md"
      px={3}
    >
      <Text display={{ base: "none", md: "block" }}>Logout</Text>
    </Button>
  );
};

export default Logout;