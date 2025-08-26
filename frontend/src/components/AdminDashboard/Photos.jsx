import React, { useState } from "react";
import {
  Box,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Input,
  Textarea,
  Button,
  VStack,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import axios from "axios";

const Photos = () => {
  const [heroData, setHeroData] = useState(Array(4).fill({ file: null, text: "", route: "" }));
  const [whyData, setWhyData] = useState({ file: null, text: "" });
  const [learnData, setLearnData] = useState(Array(3).fill({ file: null, text: "" }));
  const [clientLogos, setClientLogos] = useState([]);
  const [blogData, setBlogData] = useState(Array(3).fill({ file: null, title: "", excerpt: "" }));

  const handleFileChange = (e, index, type, setter) => {
    const updated = [...type];
    updated[index].file = e.target.files[0];
    setter(updated);
  };

  const handleUploadLogos = async () => {
    // Filter out empty entries
    const logoFiles = clientLogos.filter(Boolean);
    if (logoFiles.length === 0) {
      alert("Please select at least one logo file.");
      return;
    }
    const formData = new FormData();
    logoFiles.forEach((file) => {
      formData.append("files", file); // Backend expects "files" field
    });

    try {
      await axios.post("/api/client-logos", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Logos uploaded successfully!");
      setClientLogos([]); // Clear after successful upload
    } catch (err) {
      alert("Error uploading logos: " + (err?.response?.data?.message || err.message));
    }
  };

  return (
    <Box p={8} bg="white" boxShadow="xl" borderRadius="lg" maxW="1000px" mx="auto">
      <Heading mb={6}>📸 Admin — Photos Control Panel</Heading>

      <Accordion allowMultiple>
        {/* Hero Banner */}
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontWeight="bold">
                Hero Banner (4 Images)
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel>
            {heroData.map((item, idx) => (
              <Box key={idx} p={4} borderWidth="1px" borderRadius="md" mb={4}>
                <Input type="file" onChange={(e) => handleFileChange(e, idx, heroData, setHeroData)} />
                <Textarea
                  mt={2}
                  placeholder="Banner Text"
                  value={item.text}
                  onChange={(e) => {
                    const updated = [...heroData];
                    updated[idx].text = e.target.value;
                    setHeroData(updated);
                  }}
                />
                <Input
                  mt={2}
                  placeholder="Button Route"
                  value={item.route}
                  onChange={(e) => {
                    const updated = [...heroData];
                    updated[idx].route = e.target.value;
                    setHeroData(updated);
                  }}
                />
              </Box>
            ))}
            <Button colorScheme="blue" variant="solid">
              Update Hero Section
            </Button>
          </AccordionPanel>
        </AccordionItem>

        {/* Why SSTPL */}
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontWeight="bold">
                Why SSTPL
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel>
            <Input type="file" onChange={(e) => setWhyData({ ...whyData, file: e.target.files[0] })} />
            <Textarea
              mt={2}
              placeholder="Why SSTPL Text"
              value={whyData.text}
              onChange={(e) => setWhyData({ ...whyData, text: e.target.value })}
            />
            <Button mt={4} colorScheme="blue">
              Update Why SSTPL
            </Button>
          </AccordionPanel>
        </AccordionItem>

        {/* Learn Section */}
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontWeight="bold">
                Learn Section (3 Images)
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel>
            {learnData.map((item, idx) => (
              <Box key={idx} p={4} borderWidth="1px" borderRadius="md" mb={4}>
                <Input type="file" onChange={(e) => handleFileChange(e, idx, learnData, setLearnData)} />
                <Textarea
                  mt={2}
                  placeholder="Text Content"
                  value={item.text}
                  onChange={(e) => {
                    const updated = [...learnData];
                    updated[idx].text = e.target.value;
                    setLearnData(updated);
                  }}
                />
              </Box>
            ))}
            <Button colorScheme="blue">Update Learn Section</Button>
          </AccordionPanel>
        </AccordionItem>

        {/* Clients Logos */}
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontWeight="bold">
                Clients Logos
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel>
            <VStack spacing={4}>
              {clientLogos.map((file, idx) => (
                <HStack key={idx}>
                  <Input
                    type="file"
                    onChange={(e) => {
                      const updated = [...clientLogos];
                      updated[idx] = e.target.files[0];
                      setClientLogos(updated);
                    }}
                  />
                  <IconButton
                    icon={<DeleteIcon />}
                    colorScheme="red"
                    onClick={() => {
                      const updated = [...clientLogos];
                      updated.splice(idx, 1);
                      setClientLogos(updated);
                    }}
                  />
                </HStack>
              ))}
              <Button onClick={() => setClientLogos([...clientLogos, null])}>Add Logo</Button>
              <Button colorScheme="blue" mt={2} onClick={handleUploadLogos}>
                Update Logos
              </Button>
            </VStack>
          </AccordionPanel>
        </AccordionItem>

        {/* Blogs Section */}
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontWeight="bold">
                Blogs (3 Posts)
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel>
            {blogData.map((blog, idx) => (
              <Box key={idx} p={4} borderWidth="1px" borderRadius="md" mb={4}>
                <Input type="file" onChange={(e) => handleFileChange(e, idx, blogData, setBlogData)} />
                <Input
                  mt={2}
                  placeholder="Blog Title"
                  value={blog.title}
                  onChange={(e) => {
                    const updated = [...blogData];
                    updated[idx].title = e.target.value;
                    setBlogData(updated);
                  }}
                />
                <Textarea
                  mt={2}
                  placeholder="Excerpt"
                  value={blog.excerpt}
                  onChange={(e) => {
                    const updated = [...blogData];
                    updated[idx].excerpt = e.target.value;
                    setBlogData(updated);
                  }}
                />
              </Box>
            ))}
            <Button colorScheme="blue">Update Blogs</Button>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default Photos;
