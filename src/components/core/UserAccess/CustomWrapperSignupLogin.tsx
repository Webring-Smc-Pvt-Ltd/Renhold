import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import PropTypes from 'prop-types';

const CustomWrapper = ({ children }) => {
  return (
    <>
    <Box
      px="10px"
      bgImage="url('/signup/mainbgcore.png')" 
      bgSize="cover"
      bgPosition="center"
      h="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        w="100%"
        maxW="430px"
        bg="white"
        borderRadius="20px"
        p={{ base: '20px', lg: '40px' }}
      >
        <Text
          fontFamily="antique" 
          fontWeight="700"
          fontSize={{
            base: '18px',
            md: '18px',
            lg: '20px',
            xl: '22px',
          }}
          lineHeight="150%"
          color="#1F1F1F"
          textAlign="center"
        >
          RENHOLD
        </Text>
        <Box>{children}</Box>
      </Box>
      
    </Box>
    </>
  );
};

CustomWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CustomWrapper;
