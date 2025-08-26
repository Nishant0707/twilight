import React from 'react';
import { Box } from '@chakra-ui/react';
import CopgovCon from '../components/CopG/CopgovCon';
import CopgovBan from "../components/CopG/CopgovBan";
import Copgovkey from "../components/CopG/Copgovkey";

const CorGov = () => {
  return (
    <Box>
      <CopgovBan />
      <CopgovCon />
      <Copgovkey />
    </Box>
  );
};

export default CorGov;
