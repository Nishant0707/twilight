import React, { useEffect, useState } from "react";
import {
  Tabs, TabList, TabPanels, Tab, TabPanel, SimpleGrid, Spinner, Center, Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import JobCard from "./JobCard";
import JobModal from "./JobModal";
import axios from "axios";

const JobJD = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const res = await axios.get("/api/jobser");
      setJobs(res.data);
    } catch (err) {
      console.error("Error fetching jobs:", err.response?.data || err.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleReadMore = (job) => {
    setSelectedJob(job);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedJob(null);
  };

  const handleApply = (route) => {
    navigate(route);
  };

  const groupedJobs = jobs.reduce((acc, job) => {
    if (!acc[job.category]) acc[job.category] = [];
    acc[job.category].push(job);
    return acc;
  }, {});

  return (
    <>
      {loading ? (
        <Center py={10}>
          <Spinner size="xl" />
        </Center>
      ) : jobs.length === 0 ? (
        <Center py={10}>
          <Text fontSize="lg" color="gray.500">No jobs available right now.</Text>
        </Center>
      ) : (
        <Tabs variant="soft-rounded" colorScheme="purple" isFitted mt={8} mb={8}>
          <TabList>
            {Object.keys(groupedJobs).map((category) => (
              <Tab key={category} fontWeight="bold" fontSize="lg"
                bgGradient="linear(to-r, #6042ff 0%, #2effe7 100%)"
                bgClip="text"
                letterSpacing="wider"
                _selected={{ bg: "purple.50", color: "blue.900" }}>
                {category}
              </Tab>
            ))}
          </TabList>
          <TabPanels>
            {Object.entries(groupedJobs).map(([category, jobs]) => (
              <TabPanel key={category}>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
                  {jobs.map(job => (
                    <JobCard
                      key={job._id}
                      job={job}
                      onReadMore={handleReadMore}
                      onApply={handleApply}
                    />
                  ))}
                </SimpleGrid>
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      )}
      <JobModal isOpen={isModalOpen} onClose={handleCloseModal} job={selectedJob} />
    </>
  );
};

export default JobJD;
