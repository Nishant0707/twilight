import React from "react";
import { Box, Image, Text, Button, VStack, useColorModeValue } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

// Helper to determine server base URL (auto-detect local/prod)
const getServerBaseUrl = () => {
  if (process.env.NODE_ENV === "production") {
    return "https://your-production-api.com"; // <-- CHANGE to your deployed backend URL!
  }
  return "http://localhost:5000";
};

const JobCard = ({ job, onReadMore, onApply }) => {
  const navigate = useNavigate();

  if (!job) return null;

  const {
    title = "Untitled",
    shortJD = "No description available.",
    image = "https://via.placeholder.com/300x200?text=No+Image",
  } = job;

  const bg = useColorModeValue("white", "gray.900");
  const gradient = "linear(to-r, #584bfd 0%, #6042ff 80%)";
  const fontColor = useColorModeValue("blue.900", "purple.200");

  // Fix: Generate image URL for uploaded files
  const serverBaseUrl = getServerBaseUrl();
  const imageUrl =
    image && image.startsWith("/uploads/")
      ? `${serverBaseUrl}${image}`
      : image;

  const handleApply = () => {
    if (typeof onApply === "function") {
      onApply(job);
    }
    navigate("/jobs");
  };

  return (
    <Box
      bg={bg}
      boxShadow="lg"
      borderRadius="xl"
      overflow="hidden"
      p={5}
      borderWidth="2px"
      borderColor="blue.200"
      transition="transform 0.15s"
      _hover={{ transform: "scale(1.03)", boxShadow: "0 10px 36px rgba(88,73,253,0.08)" }}
    >
      <Image
        src={imageUrl}
        alt={title}
        objectFit="cover"
        borderRadius="lg"
        mb={4}
        border="2px solid"
        borderColor="purple.200"
      />
      <VStack align="start" spacing={2}>
        <Text fontSize="xl" fontWeight="bold" bgGradient={gradient} bgClip="text" letterSpacing="wide">
          {title}
        </Text>
        <Text fontSize="md" color={fontColor} noOfLines={3}>
          {shortJD}
        </Text>
        <Button
          size="sm"
          bgGradient="linear(to-r, #36fdde, #6936fd)"
          color="white"
          boxShadow="md"
          onClick={() => onReadMore(job)}
        >
          Read More
        </Button>
        <Button
          size="sm"
          variant="outline"
          borderColor="purple.400"
          color="purple.400"
          _hover={{ bg: "purple.50" }}
          onClick={handleApply}
        >
          Apply
        </Button>
      </VStack>
    </Box>
  );
};
export default JobCard;