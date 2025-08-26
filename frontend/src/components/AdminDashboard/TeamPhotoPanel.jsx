import React, { useState } from "react";
import {
  Box,
  Text,
  Image,
  SimpleGrid,
  Input,
  Button,
  useBreakpointValue,
  useToast,
} from "@chakra-ui/react";
import { useLeadership } from "../../context/LeadershipContext";

const TeamPhoto = () => {
  const { leaders, addLeader, deleteLeader } = useLeadership(); // ✅ Using shared state
  const [newMember, setNewMember] = useState({ name: "", position: "", about: "", img: "" });
  const columns = useBreakpointValue({ base: 1, sm: 2, md: 3, lg: 4 });
  const toast = useToast();

  const handleNewImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewMember((prev) => ({ ...prev, img: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddNewMember = async () => {
    const { name, position, about, img } = newMember;
    if (!name || !position || !about || !img) {
      toast({
        title: "Please fill all fields.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    try {
      await addLeader(newMember); // 👈 Save to DB via context
      setNewMember({ name: "", position: "", about: "", img: "" });
      toast({
        title: "Member added!",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    } catch (err) {
      toast({
        title: "Failed to add member.",
        description: err.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleDeleteMember = async (id) => {
    if (window.confirm("Are you sure you want to delete this member?")) {
      try {
        await deleteLeader(id); // 👈 Delete from DB
        toast({
          title: "Member deleted.",
          status: "info",
          duration: 2000,
          isClosable: true,
        });
      } catch (err) {
        toast({
          title: "Failed to delete.",
          description: err.message,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    }
  };

  return (
    <Box p={{ base: 4, md: 8 }} bg="white">
      <Text fontSize="3xl" fontWeight="bold" mb={6} color="gray.700" textAlign="center">
        Meet Our Team
      </Text>

      {leaders.length > 0 ? (
        <SimpleGrid columns={columns} spacing={6} mb={8}>
          {leaders.map((member) => (
            <Box
              key={member._id}
              p={4}
              borderRadius="xl"
              textAlign="center"
              boxShadow="md"
              border="1px solid #E2E8F0"
              bg="white"
              transition="0.2s ease"
              _hover={{ boxShadow: "lg", transform: "scale(1.01)" }}
            >
              <Image
                src={member.img || "/default-avatar.jpg"}
                alt={member.name}
                borderRadius="full"
                mx="auto"
                boxSize="100px"
                objectFit="cover"
                mb={4}
              />
              <Text fontSize="lg" fontWeight="bold" color="gray.800">
                {member.name}
              </Text>
              <Text fontSize="sm" color="gray.500">{member.position}</Text>
              <Text fontSize="sm" color="gray.600" mt={2} fontStyle="italic">
                {member.about}
              </Text>
              <Button
                mt={3}
                size="sm"
                colorScheme="red"
                onClick={() => handleDeleteMember(member._id)}
              >
                Delete
              </Button>
            </Box>
          ))}
        </SimpleGrid>
      ) : (
        <Text mb={8} color="gray.400" fontStyle="italic" textAlign="center">
          No team profiles added yet.
        </Text>
      )}

      {/* Add New Member Form */}
      <Box bg="white" p={4} borderRadius="xl" boxShadow="md" border="1px solid #E2E8F0">
        <Text mb={2} color="gray.700" fontWeight="bold" fontSize="lg">
          Add New Member
        </Text>
        <Input
          placeholder="Full Name"
          value={newMember.name}
          onChange={(e) => setNewMember((prev) => ({ ...prev, name: e.target.value }))}
          mb={2}
        />
        <Input
          placeholder="Role / Position"
          value={newMember.position}
          onChange={(e) => setNewMember((prev) => ({ ...prev, position: e.target.value }))}
          mb={2}
        />
        <Input
          placeholder="Short Bio / About"
          value={newMember.about}
          onChange={(e) => setNewMember((prev) => ({ ...prev, about: e.target.value }))}
          mb={2}
        />
        <Input
          type="file"
          accept="image/*"
          onChange={handleNewImageUpload}
          mb={3}
        />
        <Button colorScheme="orange" onClick={handleAddNewMember}>
          Add Member
        </Button>
      </Box>
    </Box>
  );
};

export default TeamPhoto;