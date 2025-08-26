import React from 'react';
import { Box } from '@chakra-ui/react';
import Head from '../components/Jobdes/Head';
import PageWrapper from '../components/Layout/PageWrapper'; // Adjust path if needed
import JobCard from '../components/Jobdes/JobCard';
import JobJD from '../components/Jobdes/JobJD';
import JobModal from '../components/Jobdes/JobModal';
import FlowJD from "../components/Jobdes/FlowJD";

const Jobdes = () => {
  return (
    <PageWrapper>
      <Box>
        <Head />
        <FlowJD />
        <JobCard />
        <JobJD />
        <JobModal />
      </Box>
    </PageWrapper>
  );
};

export default Jobdes;