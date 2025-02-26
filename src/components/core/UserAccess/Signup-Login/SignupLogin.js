// pages/index.js or components/Login.js
import { Button, Text,Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import CustomWrapper from '../CustomWrapperSignupLogin'; // Adjust the import path based on your project structure

const SignupLogin = () => {
    const router = useRouter();

    const navigateToSignupPage = () => {
      router.push('/signup'); // replace '/target-page' with your desired path in the 'pages' folder
    };

    const navigateToLoginPage = () => {
      router.push('/login'); // replace '/target-page' with your desired path in the 'pages' folder
    };
  return (
    <>
    <CustomWrapper>
      <Box textAlign="center" >
        <Button
          colorScheme="#1F4A40"
          bg={'#1F4A40'}
          size="lg"
          width="100%"
          mt={6}
          borderRadius={30}
          mb={2} // Margin bottom for spacing between buttons
          onClick={navigateToSignupPage}
        >
          Sign up
        </Button>
        <Button
          variant="outline"
          mt={3}
          size="lg"
          width="100%"
          borderRadius={30}
          borderColor="#1F4A40"
          color="#1F4A40"
          onClick={navigateToLoginPage}
        >
          Log in
        </Button>
        <Text fontSize="sm" color="gray.500" mt={10}>
          By signing up, you agree to our <span style={{color: '#1F4A40'}}> Terms of Use </span> and <span style={{color: '#1F4A40'}}>Privacy Policy</span>.
        </Text>
      </Box>
    </CustomWrapper>
    </>
  );
};

export default SignupLogin;