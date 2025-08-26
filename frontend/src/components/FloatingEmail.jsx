import React from "react";
import { IconButton, Tooltip } from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { keyframes } from "@emotion/react"; // ✅ fixed import

// 🔥 Glowing pulse animation
const pulse = keyframes`
  0% {
    box-shadow: 0 0 8px rgba(0, 132, 255, 0.6);
  }
  50% {
    box-shadow: 0 0 16px rgba(0, 132, 255, 0.9);
  }
  100% {
    box-shadow: 0 0 8px rgba(0, 132, 255, 0.6);
  }
`;

const animation = `${pulse} 2s ease-in-out infinite`;

const FloatingEmail = () => {
  const navigate = useNavigate();

  return (
    <Tooltip label="Contact Us" hasArrow placement="left">
      <IconButton
        icon={<EmailIcon />}
        aria-label="Contact Us"
        position="fixed"
        bottom={110}
        right={26}
        zIndex={9999}
        size="lg"
        colorScheme="blue"
        borderRadius="full"
        onClick={() => navigate("/contact")}
        animation={animation}
        _hover={{
          boxShadow: "0 0 20px rgba(0, 132, 255, 1)",
        }}
      />
    </Tooltip>
  );
};

export default FloatingEmail;