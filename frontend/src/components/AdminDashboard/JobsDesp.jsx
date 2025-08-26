import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Spinner,
  useToast,
  IconButton,
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  Input,
  Select,
  Textarea,
  FormControl,
  FormLabel,
  useDisclosure,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import axios from "axios";

const JobsDesp = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    shortJD: "",
    fullJD: "",
    category: "",
    applyRoute: "/jobs",
  });
  const [file, setFile] = useState(null);

  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Fetch all jobs
  const fetchJobs = async () => {
    setLoading(true);
    try {
      const res = await axios.get("/api/jobser");
      setJobs(res.data);
    } catch (error) {
      toast({ title: "Failed to load jobs", status: "error" });
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle file selection
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Validate required fields before submitting
  const validateForm = () => {
    if (!formData.title.trim()) {
      toast({ title: "Title is required", status: "warning" });
      return false;
    }
    if (!formData.category.trim()) {
      toast({ title: "Category is required", status: "warning" });
      return false;
    }
    if (!formData.shortJD.trim()) {
      toast({ title: "Short JD is required", status: "warning" });
      return false;
    }
    if (!formData.fullJD.trim()) {
      toast({ title: "Full JD is required", status: "warning" });
      return false;
    }
    return true;
  };

  // Submit new or updated job
  const handleSubmit = async () => {
    if (!validateForm()) return;

    try {
      const data = new FormData();
      data.append("title", formData.title);
      data.append("shortJD", formData.shortJD);
      data.append("fullJD", formData.fullJD);
      data.append("category", formData.category);
      data.append("applyRoute", formData.applyRoute);

      if (file) data.append("image", file);

      if (selectedJob) {
        await axios.put(`/api/jobser/${selectedJob._id}`, data, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        toast({ title: "Job updated successfully", status: "success" });
      } else {
        await axios.post("/api/jobser", data, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        toast({ title: "Job created successfully", status: "success" });
      }
      fetchJobs();
      handleCloseModal();
    } catch (error) {
      toast({ title: error?.response?.data?.message || "Error saving job", status: "error" });
    }
  };

  // Delete job
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this job?")) return;
    try {
      await axios.delete(`/api/jobser/${id}`);
      toast({ title: "Job deleted", status: "success" });
      fetchJobs();
    } catch (error) {
      toast({ title: "Failed to delete job", status: "error" });
    }
  };

  // Prepare form for editing
  const handleEdit = (job) => {
    setSelectedJob(job);
    setFormData({
      title: job.title || "",
      shortJD: job.shortJD || "",
      fullJD: job.fullJD || "",
      category: job.category || "",
      applyRoute: job.applyRoute || "/jobs",
    });
    setFile(null);
    onOpen();
  };

  // Open form for new job
  const handleOpenNew = () => {
    setSelectedJob(null);
    setFormData({
      title: "",
      shortJD: "",
      fullJD: "",
      category: "",
      applyRoute: "/jobs",
    });
    setFile(null);
    onOpen();
  };

  const handleCloseModal = () => {
    setSelectedJob(null);
    setFile(null);
    onClose();
  };

  return (
    <Box p={8}>
      <Heading mb={6}>Manage Job Descriptions</Heading>
      <Button colorScheme="purple" onClick={handleOpenNew} mb={4}>
        + Add New Job
      </Button>
      {loading ? (
        <Spinner size="xl" />
      ) : (
        <Table variant="simple" colorScheme="purple">
          <Thead>
            <Tr>
              <Th>Title</Th>
              <Th>Category</Th>
              <Th>Short JD</Th>
              <Th>Image</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {jobs.map((job) => (
              <Tr key={job._id}>
                <Td>{job.title}</Td>
                <Td>{job.category}</Td>
                <Td>{job.shortJD}</Td>
                <Td>
                  {job.image && (
                    <img
                      src={job.image}
                      alt={job.title}
                      width="60"
                      style={{ borderRadius: "6px" }}
                    />
                  )}
                </Td>
                <Td>
                  <IconButton
                    aria-label="Edit Job"
                    icon={<EditIcon />}
                    size="sm"
                    mr={2}
                    onClick={() => handleEdit(job)}
                  />
                  <IconButton
                    aria-label="Delete Job"
                    icon={<DeleteIcon />}
                    size="sm"
                    colorScheme="red"
                    onClick={() => handleDelete(job._id)}
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      )}

      {/* Modal for add/edit job */}
      <Modal isOpen={isOpen} onClose={handleCloseModal} size="lg" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{selectedJob ? "Edit Job" : "Add New Job"}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl mb={3} isRequired>
              <FormLabel>Title</FormLabel>
              <Input
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl mb={3} isRequired>
              <FormLabel>Category</FormLabel>
              <Select
                name="category"
                value={formData.category}
                onChange={handleChange}
              >
                <option value="">Select category</option>
                <option value="IT/Software">IT/Software</option>
                <option value="Operations">Operations</option>
                <option value="Accounts">Accounts</option>
                <option value="Business Consulting">Business Consulting</option>
                <option value="Human Resources / Administration">Human Resources / Administration</option>
                <option value="ITES / BPO">ITES / BPO</option>
                <option value="Marketing & Sales">Marketing & Sales</option>
                <option value="Customer Relationship Management">Customer Relationship Management</option>
                <option value="Content Development">Content Development</option>
              </Select>
            </FormControl>
            <FormControl mb={3} isRequired>
              <FormLabel>Short JD</FormLabel>
              <Input
                name="shortJD"
                value={formData.shortJD}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl mb={3} isRequired>
              <FormLabel>Full JD</FormLabel>
              <Textarea
                name="fullJD"
                value={formData.fullJD}
                onChange={handleChange}
                rows={4}
              />
            </FormControl>
            <FormControl mb={3}>
              <FormLabel>Upload Image</FormLabel>
              <Input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
              />
              {selectedJob?.image && !file && (
                <img
                  src={selectedJob.image}
                  alt="Preview"
                  width="100"
                  style={{ marginTop: "8px" }}
                />
              )}
            </FormControl>
            <FormControl mb={3}>
              <FormLabel>Apply Route</FormLabel>
              <Input
                name="applyRoute"
                value={formData.applyRoute}
                onChange={handleChange}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="purple"
              mr={3}
              onClick={handleSubmit}
              isDisabled={
                !formData.title ||
                !formData.category ||
                !formData.shortJD ||
                !formData.fullJD
              }
            >
              {selectedJob ? "Update" : "Create"}
            </Button>
            <Button variant="ghost" onClick={handleCloseModal}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default JobsDesp;
