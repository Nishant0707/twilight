import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Text,
  VStack,
  HStack,
  Input,
  Select,
  Button,
  Divider,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";

const ContactUsPanel = () => {
  const toast = useToast();
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortOrder, setSortOrder] = useState("desc");
  const [dateFilter, setDateFilter] = useState("");

  const fetchContacts = async () => {
    setLoading(true);
    try {
      const res = await axios.get("/api/contact/all");
      setContacts(res.data);
      setLoading(false);
    } catch {
      setLoading(false);
      toast({
        title: "Error",
        description: "Failed to fetch contacts.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  useEffect(() => {
    let temp = [...contacts];
    if (dateFilter) {
      temp = temp.filter((item) =>
        item.createdAt.startsWith(dateFilter)
      );
    }
    temp.sort((a, b) => {
      return sortOrder === "asc"
        ? new Date(a.createdAt) - new Date(b.createdAt)
        : new Date(b.createdAt) - new Date(a.createdAt);
    });
    setContacts(temp);
  }, [dateFilter, sortOrder]);

  const deleteContact = async (id) => {
    setLoading(true);
    try {
      await axios.delete(`/api/contact/${id}`);
      toast({ title: "Entry deleted.", status: "info", duration: 3000 });
      fetchContacts();
      setLoading(false);
    } catch {
      toast({ title: "Delete failed.", status: "error", duration: 3000 });
      setLoading(false);
    }
  };

  return (
    <Box p={6} bg="white" minH="100vh">
      <Container maxW="8xl">

        {/* Filters */}
        <HStack spacing={4} mb={6} justifyContent="center" maxW="600px" mx="auto">
          <Input
            type="date"
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
            maxWidth="200px"
          />
          <Select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            maxWidth="160px"
          >
            <option value="desc">Newest First</option>
            <option value="asc">Oldest First</option>
          </Select>
        </HStack>

        {/* Contact Messages & Callback Requests */}
        {loading ? (
          <Spinner size="xl" mx="auto" display="block" />
        ) : contacts.length === 0 ? (
          <Text textAlign="center" color="gray.600" mt={10}>
            No contact messages or callback requests found.
          </Text>
        ) : (
          <VStack spacing={5} align="stretch" maxW="8xl" mx="auto">
            {contacts.map((entry) => (
              <Box
                key={entry._id}
                p={5}
                boxShadow="md"
                borderRadius="md"
                border="1px solid #eee"
                _hover={{ boxShadow: "lg" }}
                transition="box-shadow 0.2s ease"
              >
                <Text
                  fontWeight="bold"
                  color={entry.callbackRequested ? "blue.600" : "black"}
                >
                  {entry.callbackRequested ? "☎ Callback Request" : "💬 Contact Message"}
                </Text>
                {entry.name && <Text><b>Name:</b> {entry.name}</Text>}
                {entry.email && <Text><b>Email:</b> {entry.email}</Text>}
                {entry.phone && <Text><b>Phone:</b> {entry.phone}</Text>}
                {entry.message && <Text><b>Message:</b> {entry.message}</Text>}
                <Text fontSize="sm" color="gray.500" mt={2}>
                  Date: {new Date(entry.createdAt).toLocaleString()}
                </Text>
                <Button
                  size="sm"
                  colorScheme="red"
                  mt={3}
                  onClick={() => deleteContact(entry._id)}
                >
                  Delete
                </Button>
              </Box>
            ))}
          </VStack>
        )}

        <Divider mt={10} />
        <Text mt={4} fontSize="sm" color="gray.600" textAlign="center">
          You’re viewing {contacts.length} message{contacts.length !== 1 && "s"}.
        </Text>
      </Container>
    </Box>
  );
};

export default ContactUsPanel;
