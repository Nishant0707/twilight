import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
  VStack,
  Button,
  Icon,
  Divider,
  Flex,
  Spinner,
  useToast,
  HStack,
} from "@chakra-ui/react";
import { MdDownload, MdDelete } from "react-icons/md";
import axios from "axios";

const JobInfoPanel = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const toast = useToast();

  const fetchApplications = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/jobs");
      const apps = res.data.data.filter(job => job.firstName && job.lastName);
      setApplications(apps);
    } catch {
      toast({
        title: "Error loading applications",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/jobs/${id}`);
      setApplications(applications.filter(app => app._id !== id));
      toast({
        title: "Application Deleted",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch {
      toast({
        title: "Deletion Failed",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  return (
    <Box bg="white" p={6} borderRadius="xl" boxShadow="md">
      <Text fontSize="2xl" fontWeight="bold" mb={4}>Job Application Details</Text>
      {loading ? (
        <Spinner size="lg" />
      ) : (
        <VStack align="start" spacing={6}>
          {applications.length === 0 ? (
            <Text color="gray.500">No applications available.</Text>
          ) : (
            applications.map((app) => (
              <Box key={app._id} w="100%" p={5} borderRadius="lg" boxShadow="base" bg="gray.50">
                <Flex justify="space-between" align="start" mb={3}>
                  <VStack align="start" spacing={2}>
                    <Text><strong>First Name:</strong> {app.firstName}</Text>
                    <Text><strong>Last Name:</strong> {app.lastName}</Text>
                    <Text><strong>Phone:</strong> {app.phone}</Text>
                    <Text>
                      <strong>Address:</strong>{" "}
                      {[app.address1, app.address2, app.address3].filter(Boolean).join(", ")}
                    </Text>
                    <Text><strong>Pincode:</strong> {app.pincode}</Text>
                    <Text><strong>State:</strong> {app.state}</Text>
                    <Text><strong>Education:</strong> {app.education}</Text>
                  </VStack>

                  <VStack spacing={2} align="end">
                    {app.file ? (
                      <a
                        href={`http://localhost:5000/api/jobs/resume/${app.file}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          leftIcon={<Icon as={MdDownload} />}
                          colorScheme="teal"
                          size="sm"
                          variant="solid"
                        >
                          Download Resume
                        </Button>
                      </a>
                    ) : (
                      <Button leftIcon={<Icon as={MdDownload} />} size="sm" isDisabled variant="outline">
                        No Resume
                      </Button>
                    )}
                    <Button
                      leftIcon={<Icon as={MdDelete} />}
                      colorScheme="red"
                      size="sm"
                      variant="outline"
                      onClick={() => handleDelete(app._id)}
                    >
                      Delete
                    </Button>
                  </VStack>
                </Flex>
                <Divider />
                <Text mt={2} fontSize="sm" color="gray.600">
                  Submitted on: {new Date(app.date).toLocaleDateString()}
                </Text>
              </Box>
            ))
          )}
        </VStack>
      )}
    </Box>
  );
};

export default JobInfoPanel;