            import { Box, Flex, Grid,Heading,Button, Image, Text } from '@chakra-ui/react';
            import React from 'react';
            import LayoutWrapper from '../../../core/LayoutWrapper/LayoutWrapper';

            const topics = [
                {
                title: "Home Inspiration",
                image: "/renhold/home-inspiration.jfif", // Replace with actual image path
                },
                {
                title: "Learn & How-tos",
                image: "/renhold/learn-how-tos.jfif", // Replace with actual image path
                },
                {
                title: "Lifestyle",
                image: "/renhold/lifestyle.jfif", // Replace with actual image path
                },
            ];
            const BlogsMain = () => {
            return (
                <>
                <LayoutWrapper>
                    <Box bg="white">
                    <Box px="20px" bg="#1F4A40">
                        <Box
                        h={{ base: '264px', md: '340px', lg: '564px' }}
                        w="100%"
                        pt={{ base: '30px', md: '50px', lg: '100px' }}
                        maxW={'1760px'}
                        mx={'auto'}
                        px={{ base: '20px', md: '60px' }}
                        >
                        <Flex flexDirection={'column'} justifyContent={'center'} h="100%">
                            <Box>
                            <Text
                                fontWeight="700"
                                fontSize={{
                                base: '24px',
                                md: '28px',
                                lg: '32px',
                                xl: '42px',
                                xxl: '54px',
                                xxxl: '64px',
                                }}
                                lineHeight="150% "
                                color="#FFFFFF"
                            >
                                Get Straight as with Taskers
                            </Text>
                            <Text
                                fontWeight="500"
                                fontSize={{
                                base: '16px',
                                md: '22px',
                                lg: '32px',
                                }}
                                lineHeight="150% "
                                color="#FFFFFF"
                                maxW={'915px'}
                            >
                            Everyday work is important, but it’s also time consuming. We can help.
                            </Text>
                                </Box>
                        </Flex>
                        </Box>
                    </Box>
                    <Box>
                    <Flex flexDirection={'column'} alignItems={"center"} gap='32px'>
                        <Box >
                            <Text 
                            color="#010101"
                            mt='80px'
                            fontSize={{
                                base: '26px',
                                md: '32px',
                                lg: '36px',
                                xl: '40px',
                                xxl: '42px',
                                xxxl: '56px',
                            }}
                            lineHeight='58.51px'
                            fontStyle='Montserrat'
                            >Browse Topics</Text>
                            
                        </Box>
                        <Flex justify="center" gap={24} wrap="wrap">
                        {topics.map((topic, index) => (
                        <Box key={index} textAlign="center">
                            <Box
                            w={{ base: "100px", md: "150px", lg: "180px" }}
                            h={{ base: "100px", md: "150px", lg: "180px" }}
                            borderRadius="full"
                            overflow="hidden"
                            border="2px solid #ddd"
                            mx="auto"
                            >
                            <Image src={topic.image} alt={topic.title} objectFit="cover" w="100%" h="100%" />
                            </Box>
                            <Text mt={3} fontSize={{ base: "sm", md: "md", lg: "lg" }} fontWeight="500">
                            {topic.title}
                            </Text>
                        </Box>
                        ))}
                    </Flex>
            </Flex>
            <Flex
            maxW="1200px"
            mt='80px'
            mx="auto"
            py={10}
            px={6}
            align="center"
            justify="space-between"
            wrap="wrap"
            >
        {/* Left Content */}
        <Box flex="1" minW="300px" textAlign={{ base: "center", md: "left" }}>
            <Heading fontSize="2xl" fontWeight="bold" mb={4} maxW='210px'>
            When BYOB stands for <br /> “Be Your Own Boss”
            </Heading>
            <Text fontSize="md" mb={6} color="gray.600">
            Learn why Vanessa, Shaneka, Eric, Zalika, Trevor, and Alana became Taskers and 
            how tasking has allowed them to earn money while preserving their freedom over 
            their time and hourly earnings.
            </Text>
            <Button
            bg="green.700"
            color="white"
            _hover={{ bg: "green.800" }}
            px={6}
            py={3}
            borderRadius="full"
            >
            Learn About Tasking
            </Button>
        </Box>

        {/* Right Image */}
        <Box flex="1" minW="300px" textAlign="center" mt={{ base: 6, md: 0 }}>
            <Image
            src="/renhold/byob.jfif" // Replace with your actual image path
            alt="Be Your Own Boss"
            borderRadius="md"
            w="100%"
            maxW="400px"
            h="350px"
            mx="auto"
            />
        </Box>
        </Flex>
            </Box>    
        </Box>
                    
        </LayoutWrapper>
            </>
            );
            };

            export default BlogsMain;
