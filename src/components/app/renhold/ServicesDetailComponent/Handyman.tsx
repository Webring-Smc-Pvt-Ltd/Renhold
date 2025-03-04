import { Box, Text, Button, Flex, Image } from '@chakra-ui/react';
import React from 'react';
import LayoutWrapper from '../../../core/LayoutWrapper/LayoutWrapper';
import {HANDYMANSERVICES} from '../../../../data';
const Handyman = () => {
  return (
    <>
      <LayoutWrapper>
        <Box>
          <Box
            bgImage="url('/renhold/featuredta.png')" // Replace 'path/to/your/image.jpg' with the actual path to your image file
            bgSize="cover"
            bgPosition="center"
            bgRepeat="no-repeat"
            h={{ base: '256px', md: '564px' }}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Box
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
              flexDirection={'column'}
            >
              <Text
                textAlign={'center'}
                fontWeight="600"
                fontSize={{
                  base: '24px',
                  md: '26px',
                  lg: '28px',
                  xl: '34px',
                  xxl: '42px',
                  xxxl: '64px',
                }}
                lineHeight="150% "
                color="#FFFFFF"
              >
                Handyman
              </Text>
              <Text
                maxW={{ base: '324px', md: '1030px' }}
                textAlign={'center'}
                fontWeight="400"
                fontSize={{
                  base: '14px',
                  md: '16px',
                  lg: '20px',
                  xl: '22px',
                  xxl: '24px',
                  xxxl: '32px',
                }}
                lineHeight="150% "
                color="#FFFFFF"
              >
                Renhold can help with handyman tasks around your home. 
                Average price for handyman services is $50 per hour.
              </Text>
            </Box>
          </Box>
          <Box
            pt={{ base: '50px', lg: '100px' }}
            maxW={'1760px'}
            mx={'auto'}
            px="20px"
          >
            <Flex gap="50px" flexDirection={{ base: 'column', lg: 'row' }}>
              <Box w={{ base: '100%', lg: '60%' }}>
                {HANDYMANSERVICES?.map((Service, index) => (
                  <Box
                    key={index}
                    p="30px"
                    border={'1px solid #CFCFCF '}
                    borderRadius={'10px'}
                    mb="30px"
                  >
                    <Flex
                      gap="30px"
                      alignItems={'center'}
                      flexDirection={{ base: 'column', md: 'row' }}
                    >
                      <Image blockSize='170px' borderRadius='full' alt="img" src={Service.Image}></Image>
                      <Box>
                        <Text
                          fontWeight="700"
                          fontSize={{
                            base: '18px',
                            md: '18px',
                            lg: '20px',
                            xl: '22px',
                            xxl: '24px',
                            xxxl: '32px',
                          }}
                          lineHeight="150% "
                          color="#1F1F1F"
                        >
                          {Service.Name}
                        </Text>
                        <Text
                          fontWeight="500"
                          fontSize={{
                            base: '14px',
                            md: '16px',
                            lg: '20px',
                          }}
                          lineHeight="150% "
                          color="#1F1F1F"
                        >
                          {Service.Description}
                        </Text>
                        <Button
                          my="24px"
                          bg="#1F4A40"
                          colorScheme="#1F4A40"
                          borderRadius={'10px'}
                          py="10px "
                          px="26px"
                          h="41px"
                          fontSize={'16px'}
                        >
                          Book Now
                        </Button>
                      </Box>
                    </Flex>
                  </Box>
                ))}
              </Box>
              <Box w={{ base: '100%', lg: '40%' }}>
                <Box>
                  <Text
                    mb="20px"
                    fontWeight="700"
                    fontSize={{
                      base: '18px',
                      md: '18px',
                      lg: '20px',
                      xl: '22px',
                      xxl: '24px',
                      xxxl: '32px',
                    }}
                    lineHeight="150% "
                    color="#1F1F1F"
                  >
                    Cross off that to-do
                  </Text>
                  <Flex gap="30px" alignItems={'flex-start'} mb="40px">
                    <Image alt="img" src="/renhold/todo1.svg"></Image>
                    <Box>
                      <Text
                        fontWeight="500"
                        fontSize={{
                          base: '16px',
                          md: '20px',
                          lg: '24px',
                        }}
                        lineHeight="150% "
                        color="#1F1F1F"
                      >
                        Select your Renhold
                      </Text>
                      <Text
                        fontWeight="500"
                        fontSize={{
                          base: '14px',
                          md: '16px',
                          lg: '20px',
                        }}
                        maxW={'329px'}
                        lineHeight="150% "
                        color="#1F1F1F"
                      >
                        Describe your task and choose a background checked and
                        client- reviewed Renhold for the job
                      </Text>
                    </Box>
                  </Flex>
                  <Flex gap="30px" alignItems={'flex-start'} mb="40px">
                    <Image alt="img" src="/renhold/todo2.svg"></Image>
                    <Box>
                      <Text
                        fontWeight="500"
                        fontSize={{
                          base: '16px',
                          md: '20px',
                          lg: '24px',
                        }}
                        lineHeight="150% "
                        color="#1F1F1F"
                      >
                        Schedule a time
                      </Text>
                      <Text
                        fontWeight="500"
                        fontSize={{
                          base: '14px',
                          md: '16px',
                          lg: '20px',
                        }}
                        maxW={'329px'}
                        lineHeight="150% "
                        color="#1F1F1F"
                      >
                        Get your task done — on your time
                      </Text>
                    </Box>
                  </Flex>
                  <Flex gap="30px" alignItems={'flex-start'} mb="40px">
                    <Image alt="img" src="/renhold/todo3.svg"></Image>
                    <Box>
                      <Text
                        fontWeight="500"
                        fontSize={{
                          base: '16px',
                          md: '20px',
                          lg: '24px',
                        }}
                        lineHeight="150% "
                        color="#1F1F1F"
                      >
                        Pay when it’s done
                      </Text>
                      <Text
                        fontWeight="500"
                        fontSize={{
                          base: '14px',
                          md: '16px',
                          lg: '20px',
                        }}
                        maxW={'329px'}
                        lineHeight="150% "
                        color="#1F1F1F"
                      >
                        Pay seamlessly through the Renhold platform only
                        after your task is complete
                      </Text>
                    </Box>
                  </Flex>
                </Box>
                <Box>
                  <Text
                    mb="20px"
                    fontWeight="700"
                    fontSize={{
                      base: '18px',
                      md: '18px',
                      lg: '20px',
                      xl: '22px',
                      xxl: '24px',
                      xxxl: '32px',
                    }}
                    lineHeight="150% "
                    color="#1F1F1F"
                  >
                    Cross off that to-do
                  </Text>
                  <Flex gap="30px" alignItems={'flex-start'} mb="40px">
                    <Image alt="img" src="/renhold/reviewtype1.svg"></Image>
                    <Box>
                      <Text
                        fontWeight="500"
                        fontSize={{
                          base: '14px',
                          md: '16px',
                          lg: '20px',
                        }}
                        maxW={'329px'}
                        lineHeight="150% "
                        color="#1F1F1F"
                      >
                        Punctual, efficient service with a smile? Yes please,
                        Ill have another task done from Renhold.
                      </Text>
                      <Text
                        fontWeight="500"
                        fontSize={{
                          base: '14px',
                          md: '16px',
                          lg: '20px',
                        }}
                        maxW={'329px'}
                        lineHeight="150% "
                        color="rgba(0, 0, 0, 0.48)"
                      >
                        – Brian M.
                      </Text>
                    </Box>
                  </Flex>
                  <Flex gap="30px" alignItems={'flex-start'} mb="40px">
                    <Image alt="img" src="/renhold/reviewtype2.svg"></Image>
                    <Box>
                      <Text
                        fontWeight="500"
                        fontSize={{
                          base: '14px',
                          md: '16px',
                          lg: '20px',
                        }}
                        maxW={'329px'}
                        lineHeight="150% "
                        color="#1F1F1F"
                      >
                        I was amazed how quickly Ben took care of the job. Ill
                        definitely ask for his help again!
                      </Text>
                      <Text
                        fontWeight="500"
                        fontSize={{
                          base: '14px',
                          md: '16px',
                          lg: '20px',
                        }}
                        maxW={'329px'}
                        lineHeight="150% "
                        color="rgba(0, 0, 0, 0.48)"
                      >
                        – Carol B.
                      </Text>
                    </Box>
                  </Flex>
                  <Flex gap="30px" alignItems={'flex-start'} mb="40px">
                    <Image alt="img" src="/renhold/reviewtype2.svg"></Image>
                    <Box>
                      <Text
                        fontWeight="500"
                        fontSize={{
                          base: '14px',
                          md: '16px',
                          lg: '20px',
                        }}
                        maxW={'329px'}
                        lineHeight="150% "
                        color="#1F1F1F"
                      >
                        I was amazed how quickly Ben took care of the job. Ill
                        definitely ask for his help again!
                      </Text>
                      <Text
                        fontWeight="500"
                        fontSize={{
                          base: '14px',
                          md: '16px',
                          lg: '20px',
                        }}
                        maxW={'329px'}
                        lineHeight="150% "
                        color="rgba(0, 0, 0, 0.48)"
                      >
                        – Carol B.
                      </Text>
                    </Box>
                  </Flex>
                </Box>
              </Box>
            </Flex>
          </Box>
        </Box>
      </LayoutWrapper>
    </>
  );
};

export default Handyman;
