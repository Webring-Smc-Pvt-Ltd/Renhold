import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import default calendar styles
import {
  Box,
  Button,
  VStack,
  Text,
  Select,
  Grid,
  Divider,
} from '@chakra-ui/react';

const Step3Content = ({ onComplete }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('1:00pm');

  return (
    <Box
      p={6}
      borderRadius="md"
      bg="white"
      maxW="800px"
      mx="auto"
      boxShadow="md"
    >
      {/* Header */}
      <Text fontSize="lg" fontWeight="bold" mb={4}>
        Choose your task date and start time:
      </Text>

      {/* Calendar + Details Layout */}
      <Grid templateColumns="1fr 1px 1fr" gap={4} alignItems="center">
        {/* Calendar Section */}
        <VStack spacing={10} align="start" pr={6}>
          <Text fontWeight="bold">Accursio M.&apos;s Availability</Text>
          <Calendar
            onChange={(date: Date) => setSelectedDate(date)}
            value={selectedDate}
            minDate={new Date()} // Prevent selecting past dates//+
          />

          {/* Time Picker */}
          <Select
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
          >
            <option value="1:00am">12:00am</option>
            <option value="1:00pm">1:00am</option>
            <option value="2:00pm">2:00am</option>
            <option value="3:00pm">3:00am</option>
            <option value="1:00pm">4:00am</option>
            <option value="2:00pm">5:00am</option>
            <option value="3:00pm">6:00am</option>
            <option value="1:00pm">7:00am</option>
            <option value="2:00pm">8:00am</option>
            <option value="3:00pm">9:00am</option>
            <option value="1:00pm">10:00am</option>
            <option value="2:00pm">11:00am</option>

            <option value="1:00am">12:00pm</option>
            <option value="1:00pm">1:00pm</option>
            <option value="2:00pm">2:00pm</option>
            <option value="3:00pm">3:00pm</option>
            <option value="1:00pm">4:00pm</option>
            <option value="2:00pm">5:00pm</option>
            <option value="3:00pm">6:00pm</option>
            <option value="1:00pm">7:00pm</option>
            <option value="2:00pm">8:00pm</option>
            <option value="3:00pm">9:00pm</option>
            <option value="1:00pm">10:00pm</option>
            <option value="2:00pm">11:00pm</option>
          </Select>
        </VStack>

        {/* Divider */}
        <Divider orientation="vertical" borderWidth={2} borderColor='gray.500' height='70%'/>

        {/* Request Details */}
        <VStack spacing={4} pl={6} align="start">
          <Text fontWeight="bold">Request for:</Text>
          <Text>
            {selectedDate
              ? selectedDate.toDateString() + `, ${selectedTime}`
              : 'Select a date'}
          </Text>
          <Text fontSize="sm" color="green.600">
            This Tasker requires 2 hour min
          </Text>

          <Button
            colorScheme="#1F4A40"
            bg="#1F4A40"
            mt={4}
            borderRadius={20}
            isDisabled={!selectedDate}
            onClick={onComplete}
            maxW='200px;'
          >
            Select & Continue
          </Button>

          <Text fontSize="sm" color="gray.600">
            Next, confirm your details to get connected with your Tasker.
          </Text>
        </VStack>
      </Grid>
    </Box>
  );
};

    Step3Content.propTypes = {
    onComplete: PropTypes.func.isRequired, // Ensure onComplete is a function
  };

export default Step3Content;
