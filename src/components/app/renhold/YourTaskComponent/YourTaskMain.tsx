import React, { useState,useEffect } from 'react';
import { useRouter } from 'next/router';
import {
  Box,
  Flex,
  Step,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  Text,
} from '@chakra-ui/react';
import Step1Content from './Step1Content';
import Step2Content from './Step2Content';
import Step3Content from './Step3Content';
import Step4Content from './Step4Content';

const steps = [
  { title: 'Discribe your task' },
  { title: 'Browse Renhold & prices' },
  { title: 'Choose date & time' },
  { title: 'Confirm details' },
];

function YourTaskMain() {
  const router = useRouter();
  const { service } = router.query; // Get service from URL
  const [selectedService, setSelectedService] = useState('');
  const [isStep1Completed, setIsStep1Completed] = useState(false);
  const [activeStep, setActiveStep] = useState(0);


  useEffect(() => {
    if (service) {
      const serviceName = Array.isArray(service) ? service[0] : service;
      setSelectedService(decodeURIComponent(serviceName));
    }

  }, [service]);

  const handleContinue = () => {
    if (activeStep === 0 && !isStep1Completed){
      return;
    }
    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack=() => {
    setIsStep1Completed(true);
    handleContinue();
  };

  return (
    <Box py="50px">
      <Flex maxW={'1500px'} px="20px" mx="auto" alignItems={'center'}>
        <Box w="30%">
          <Text
                    color="black"
                    fontSize='30px'
                    fontWeight='bold'
                    >RENHOLD</Text>
        </Box>
        <Box w="70%">
          <Stepper index={activeStep} width='100%'>
            {steps.map((step, index) => (
              <Step key={index}>
                <Box
                  display={'flex'}
                  flexDirection={'column'}
                  alignItems={'center'}
                >
                  <StepIndicator>
                    <StepStatus
                      complete={<StepIcon />}
                      incomplete={<StepNumber />}
                      active={<StepNumber />}
                    />
                  </StepIndicator>

                  <Box
                    mt="5px"
                    textAlign={'center'}
                    fontWeight="400"
                    fontSize={{
                      base: '14px',
                      md: '16px',
                      lg: '20px',
                    }}
                    lineHeight="150% "
                    color="#000000"
                  >
                    <StepTitle>{step.title}</StepTitle>
                  </Box>
                </Box>
                {index !== steps.length - 1 && <StepSeparator />}
              </Step>
            ))}
          </Stepper>
        </Box>
      </Flex>
      <Box my="50px">
        <Text
          textAlign={'center'}
          fontWeight="500"
          fontSize={{
            base: '14px',
            md: '16px',
            lg: '20px',
          }}
          lineHeight="150% "
          color="#000000"
        >
          Tell us about your task. We use these details to show Renhold in your
          area who fit your needs.
        </Text>
      </Box>
      <Box>
        <Box mt={4}>
          <Box maxW={'1253px'} mx="auto" px="20px">
            {activeStep === 0 && <Step1Content selectedService={selectedService} onComplete= {handleBack} />}
          </Box>
          <Box maxW={'1720px'} mx="auto" px="20px">
            {activeStep === 1 && <Step2Content onComplete= {handleBack}/>}
          </Box>

          <Box> {activeStep === 2 && <Step3Content onComplete={handleBack} />}</Box>
          <Box> {activeStep === 3 && <Step4Content  />}</Box>
        </Box>
      </Box>
    </Box>
  );
}

export default YourTaskMain;
