import { Box, Text, Textarea, Input, Button, Flex, VStack, HStack, Divider, InputGroup, InputLeftElement } from '@chakra-ui/react';
import React from 'react';
import { FaRegCreditCard, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { useRouter } from 'next/router';

const Step4Content = () => {
    const router = useRouter();

    const handleConfirm = () => {
        router.push('/services');
    };

    return (
        <Flex direction="column" gap={6} p={6} align="center">
            <Flex direction={{ base: 'column', md: 'row' }} gap={6} w='full' maxW='1200px'>
                {/* Left Section */}
                <Box flex={1} p={6} borderRadius="md" border="1px solid" borderColor="gray.200">
                    <Text fontSize="lg" fontWeight="bold" mb={2}>Review your task description</Text>
                    <Textarea placeholder="Need a tasker for car wash" mb={4} />
                    
                    <Text fontSize="lg" fontWeight="bold" mb={2}>Payment method</Text>
                    <Text fontSize="sm" color="gray.500" mb={2}>
                        You may see a temporary hold on your payment method in the amount of your Renhold&apos;s hourly rate. Don&apos;’t worry - you are only billed when your task is complete!
                    </Text>
                    <InputGroup mb={4}>
                        <InputLeftElement pointerEvents="none">
                            <FaRegCreditCard color="gray.300" />
                        </InputLeftElement>
                        <Input placeholder="Card number" />
                    </InputGroup>
                    
                    <Text fontSize="lg" fontWeight="bold" mb={2}>Promo Code</Text>
                    <Input placeholder="Enter promo code" mb={6} />
                    
                    <Divider my={4} />
                    <Text fontSize='sm' color='gray.500' mb={4}>
                        Join us in helping our neighbors in need find work and a place to call home.
                    </Text>
                    <Text color="blue.500" fontSize="sm" cursor="pointer">Learn More</Text>
                </Box>
                
                {/* Right Section */}
                <Box flex={1} p={6} borderRadius="md" border="1px solid" borderColor="gray.200">
                    <Text fontSize="lg" fontWeight="bold">General Mounting</Text>
                    <HStack mt={3} spacing={2}>
                        <FaClock color="gray.500" />
                        <Text fontSize="sm" color="gray.600">Tue, Sep 5 at 9:00am</Text>
                    </HStack>
                    <HStack mt={2} spacing={2}>
                        <FaMapMarkerAlt color="gray.500" />
                        <Text fontSize="sm" color="gray.600">Boston, Massachusetts</Text>
                    </HStack>
                    <Text fontSize="sm" color="gray.600" mt={2}>Small - Est. 1hr</Text>
                    
                    <Button size="sm" mt={4} variant="outline">Edit Task</Button>
                    
                    <Divider my={4} />
                    
                    <VStack align="stretch" spacing={2}>
                        <HStack justify="space-between">
                            <Text fontSize="sm">Hourly Rate</Text>
                            <Text fontSize="sm" fontWeight="bold">$103.24/hr</Text>
                        </HStack>
                        <HStack justify="space-between">
                            <Text fontSize="sm">Trust and Support Fee</Text>
                            <Text fontSize="sm" fontWeight="bold">$38.01/hr</Text>
                        </HStack>
                        <Divider />
                        <HStack justify="space-between">
                            <Text fontSize="sm" fontWeight="bold">Total Rate</Text>
                            <Text fontSize="sm" fontWeight="bold" color="blue.500">$141.25/hr</Text>
                        </HStack>
                    </VStack>
                    
                    <Text fontSize="xs" color="gray.500" mt={4}>
                        You may see a temporary hold on your payment method in the amount of your Renhold&apos;s hourly rate of $103.24. You can cancel at any time. Tasks canceled less than 24 hours before the start time may be billed a cancellation fee of one hour. Tasks have a one-hour minimum.
                    </Text>
                </Box>
            </Flex>
            
            {/* Confirm Button */}
            <Button  colorScheme="#1F4A40"
            bg="#1F4A40"
            mt={4}
            borderRadius={20}
            maxW='200px;' onClick={handleConfirm}>Confirm And Continue</Button>
        </Flex>
    );
};

export default Step4Content;
