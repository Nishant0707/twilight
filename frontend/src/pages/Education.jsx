import React from 'react';
import { Box } from '@chakra-ui/react';
import SereduBanner from '../components/edu/SereduBanner';
import SereduBlog from '../components/edu/SereduBlog';
import SereduTypeEA from '../components/Edu/SereduTypeEA';
import Sereduque from '../components/Edu/Sereduque';
import Seredueplat from '../components/Edu/Seredueplat'

const Education = () => {
  return (
    <Box>
      <SereduBanner />
      <SereduBlog />
      <SereduTypeEA />
      <Sereduque />
      <Seredueplat />
    </Box>
  );
};

export default Education;
