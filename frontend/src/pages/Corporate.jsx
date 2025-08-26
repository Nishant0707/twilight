import React from 'react';
import { Box } from '@chakra-ui/react';
import SercopBanner from '../components/Ser/SercopBanner';
import SercopBlog from '../components/Ser/SercopBlog';
import SercopTalent from '../components/Ser/SercopTalent';
import SercopType from '../components/Ser/SercopType';
import SercopPsych from '../components/Ser/SercopPsych';
import SercopKey from '../components/Ser/SercopKey';


const Corporate = () => {
  return (
    <Box>
      <SercopBanner />
      <SercopBlog />
      <SercopTalent />
      <SercopType />
      <SercopPsych />
      <SercopKey />
      
    </Box>
  );
};

export default Corporate;
