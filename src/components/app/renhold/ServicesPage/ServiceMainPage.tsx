import { Box, Flex, Grid, Image, Text } from '@chakra-ui/react';
import React from 'react';
import LayoutWrapper from '../../../core/LayoutWrapper/LayoutWrapper';

import ServicesBanner from './ServicesBanner';
import ServiceCard from './ServiceCard';
const Services = [
  {
    CardImage: '/renhold/serviceimg1.png',
    CardHeading: 'Furnitured Task',
    CardDescription: 'Hire a Renhold for help around the house',
    pragraphs: [
      {
        pragraphText: 'Furniture Assembly',
      },
      { pragraphText: 'TV Mounting' },
      {
        pragraphText: 'Home Repairs',
      },
      { pragraphText: 'Help Moving' },
      {
        pragraphText: 'Heavy Lifting',
      },
      { pragraphText: 'Home Cleaning' },
      { pragraphText: 'Spring Cleaning' },
      { pragraphText: 'Personal Assistant' },
      { pragraphText: 'Hang Picture' },
    ],
  },
  {
    CardImage: '/renhold/serviceimg2.png',
    CardHeading: 'Handyman',
    CardDescription: 'Hire a Renhold for help around the house',
    pragraphs: [
      {
        pragraphText: 'Furniture Assembly',
      },
      { pragraphText: 'TV Mounting' },
      {
        pragraphText: 'Home Repairs',
      },
      { pragraphText: 'Help Moving' },
      {
        pragraphText: 'Heavy Lifting',
      },
      { pragraphText: 'Home Cleaning' },
      { pragraphText: 'Spring Cleaning' },
      { pragraphText: 'Personal Assistant' },
      { pragraphText: 'Hang Picture' },
    ],
  },
  {
    CardImage: '/renhold/serviceimg3.png',
    CardHeading: 'Moving Services',
    CardDescription: 'Hire a Renhold for help around the house',
    pragraphs: [
      {
        pragraphText: 'Furniture Assembly',
      },
      { pragraphText: 'TV Mounting' },
      {
        pragraphText: 'Home Repairs',
      },
      { pragraphText: 'Help Moving' },
      {
        pragraphText: 'Heavy Lifting',
      },
      { pragraphText: 'Home Cleaning' },
      { pragraphText: 'Spring Cleaning' },
      { pragraphText: 'Personal Assistant' },
      { pragraphText: 'Hang Picture' },
    ],
  },
  {
    CardImage: '/renhold/serviceimg4.png',
    CardHeading: 'Furniture Assembly',
    CardDescription: 'Hire a Renhold for help around the house',
    pragraphs: [
      {
        pragraphText: 'Furniture Assembly',
      },
      { pragraphText: 'Patio Furniture Assebmly' },
      {
        pragraphText: 'Desk Assembly',
      },
      { pragraphText: 'Dresser Assembly' },
      {
        pragraphText: 'Bed Assembly',
      },
      { pragraphText: 'Bookshelf Assembly' },
      { pragraphText: 'Couch Assembly' },
      { pragraphText: 'Chair Assembly' },
      { pragraphText: 'Wardrobe Assembly' },
      { pragraphText: 'Table Assembly' },
      { pragraphText: 'Disassemble Furniture' },
      { pragraphText: 'IKEA MALM Assembly' },
      { pragraphText: 'IKEA Kallax Assembly' },

    ],
  },
  {
    CardImage: '/renhold/serviceimg6.png',
    CardHeading: 'Cleaning Services',
    CardDescription: 'Renhold will make your home sparkle!',
    pragraphs: [
      {
        pragraphText: 'House Cleaning Services',
      },
      { pragraphText: 'Deep Cleaning' },
      {
        pragraphText: 'Disinfected Services',
      },
      { pragraphText: 'Move in Cleaning' },
      {
        pragraphText: 'Move Out Cleaning',
      },
      { pragraphText: 'Vacation Rental Cleaning' },
      { pragraphText: 'Carpet Cleaning Services' },
      { pragraphText: 'Garage Cleaning' },
      { pragraphText: 'One Time Cleaning Services' },
      { pragraphText: 'Car Washing' },
      { pragraphText: 'Laundry Help' },
      { pragraphText: 'Pressure Washing' },
      { pragraphText: 'Spring Cleaning' },
    ],
  },
  {
    CardImage: '/renhold/serviceimg5.png',
    CardHeading: 'Mounting & Installation',
    CardDescription: 'Wall Mounting',
    pragraphs: [
      {
        pragraphText: 'TV Mounting',
      },
      { pragraphText: 'Shelf Mounting' },
      {
        pragraphText: 'Ceiling Fan Installation',
      },
      { pragraphText: 'Hanging Curtains & Installing Blinds' },
      {
        pragraphText: 'Hang Pictures',
      },
      { pragraphText: 'General Mounting' },
      { pragraphText: 'Hang Christmas Lights' },
    ],
  },
  {
    CardImage: '/renhold/serviceimg7.png',
    CardHeading: 'Shopping + Delivery',
    CardDescription: 'Get anything from groceries to furniture',
    pragraphs: [
      {
        pragraphText: 'Delivery Service',
      },
      { pragraphText: 'Grocery Shopping & Delivery' },
      {
        pragraphText: 'Running Your Errands',
      },
      { pragraphText: 'Christmas Tree Delivery' },
      {
        pragraphText: 'Wait in Line',
      },
      { pragraphText: 'Deliver Big Piece of Furniture' },
      { pragraphText: 'Drop of Donations' },
      { pragraphText: 'Contactless Delivery' },
      { pragraphText: 'Pet Food Delivery' },
    ],
  },
  {
    CardImage: '/renhold/services-winter-tasks.jfif',
    CardHeading: 'Winter Tasks',
    CardDescription: 'Get help with winter tasks',
    pragraphs: [
      {
        pragraphText: 'Snow Removal',
      },
      { pragraphText: 'Sidewalk Salting' },
      {
        pragraphText: 'Window Winterization',
      },
      { pragraphText: 'Residential Snow Removal' },
      {
        pragraphText: 'Christmas Tree Removal',
      },
      { pragraphText: 'AC Winterization' },
      { pragraphText: 'Winter Deck Maintenance' },
      { pragraphText: 'Pipe Insulation' },
      { pragraphText: 'Storm Door Instalation' },
      { pragraphText: 'Water Heater Maintenance' },
      { pragraphText: 'Pipe Insulation' },
      { pragraphText: 'Wait in Line' },
    ],
  },
  {
    CardImage: '/renhold/serviceimg1.png',
    CardHeading: 'IKEA Services',
    CardDescription: 'Hire a Renhold for all your IKEA needs',
    pragraphs: [
      {
        pragraphText: 'Light Installation',
      },
      { pragraphText: 'Furniture Removel' },
      {
        pragraphText: 'Smart Home Installation',
      },
      { pragraphText: 'Organization' },
      {
        pragraphText: 'Furniture Assembly',
      },
      { pragraphText: 'Home Cleaning' },
      { pragraphText: 'General Mounting' },
    ],
  },
  {
    CardImage: '/renhold/serviceimg8.png',
    CardHeading: 'Yardwork Services',
    CardDescription: 'Hire a Renhold to help with yardwork & landscaping!',
    pragraphs: [
      {
        pragraphText: 'Gardening Services',
      },
      { pragraphText: 'Weed Removel' },
      {
        pragraphText: 'Lawn Care Services',
      },
      { pragraphText: 'Lawn Mowing Services' },
      {
        pragraphText: 'Landscaping Services',
      },
      { pragraphText: 'Gutter Cleaning' },
      { pragraphText: 'Vacation Plant Watering' },
      { pragraphText: 'Tree Trimming Service' },
      { pragraphText: 'Pation Cleaning' },
      { pragraphText: 'Patio Furniture Assembly' },
      {
        pragraphText: 'Mulching Services',
      },
      { pragraphText: 'Lawn Fertilizer Services' },
      { pragraphText: 'Hedge Trimming Services' },
      { pragraphText: 'Outdoor Party Setup' },
      { pragraphText: 'Urban Gardening Service' },
      { pragraphText: 'Leaf Raking & Removel' },
      { pragraphText: 'Produce Gardening' },
      { pragraphText: 'Shed Maintenance' },
      { pragraphText: 'Pressure Washing' },
    ],
  },
  {
    CardImage: '/renhold/office-services.jfif',
    CardHeading: 'Office Services',
    CardDescription: 'Hire a Renhold to help around the office!',
    pragraphs: [
      {
        pragraphText: 'Office Cleaning',
      },
      { pragraphText: 'Office Tech Setup' },
      {
        pragraphText: 'Office Movers',
      },
      { pragraphText: 'Office Supply & Snack Delivery' },
      {
        pragraphText: 'Office Furniture Assembly',
      },
      { pragraphText: 'Office Setup & Organization' },
      { pragraphText: 'Office Administration' },
      { pragraphText: 'Office Interior Design' },
      { pragraphText: 'Office Mounting Services' },
    ],
  },
  {
    CardImage: '/renhold/serviceimg3.png',
    CardHeading: 'Contactless Services',
    CardDescription: 'No-contact delivery, shopping, errands',
    pragraphs: [
      {
        pragraphText: 'Contactless Delivery',
      },
      { pragraphText: 'Contactless Prescription Pick-up & Delivery' },
      {
        pragraphText: 'Running Your Errands',
      },
      { pragraphText: 'Grocery Shopping & Delivery' },
      {
        pragraphText: 'Disinfecting Services',
      },
      { pragraphText: 'Drop Off Donations' },
    ],
  },
];
const ServiceMainPage = () => {
  return (
    <>
      <LayoutWrapper>
        <Box bg="white">
          <ServicesBanner />
          <Box
            pt={{ base: '50px', lg: '100px' }}
            maxW={'1760px'}
            mx={'auto'}
            px="20px"
          >
            <Grid
              mb="30px"
              gap="24px"
              templateColumns={{
                base: 'repeat(1, 1fr)',
                sm: 'repeat(1, 1fr)',
                md: 'repeat(2, 1fr)',
                lg: 'repeat(3, 1fr)',
                xl: 'repeat(3, 1fr)',
              }}
              w="100%"
            >
              {Services.map((info, index) => {
                return <ServiceCard data={info} key={index} />;
              })}
            </Grid>
            <Box mt={{ base: '30px', lg: '60px' }}>
              <Flex
                gap="20px"
                flexDirection={{ base: 'column', md: 'row' }}
                justifyContent={'space-between'}
                alignItems={'center'}
              >
                <Box w={{ base: '100%', md: '40%' }}>
                  <Image
                    alt="img"
                    mb="30px"
                    mx="auto"
                    src="/renhold/britcologo.svg"
                  ></Image>
                  <Text
                    textAlign={'center'}
                    fontWeight="400"
                    fontSize={{
                      base: '14px',
                      md: '16px',
                      lg: '20px',
                      xl: '24px',
                    }}
                    lineHeight="150% "
                    color="#1F1F1F"
                  >
                    Renhold is arguably the best thing to come out of the modern
                    day tech revolution. Hiring a Renhold can really help make
                    every facet of your life a breeze.”
                  </Text>
                </Box>
                <Box w={{ base: '100%', md: '40%' }}>
                  <Image
                    alt="img"
                    mb="30px"
                    mx="auto"
                    src="/renhold/newyorlogo.svg"
                  ></Image>
                  <Text
                    textAlign={'center'}
                    fontWeight="400"
                    fontSize={{
                      base: '14px',
                      md: '16px',
                      lg: '20px',
                      xl: '24px',
                    }}
                    lineHeight="150% "
                    color="#1F1F1F"
                  >
                    Renhold is arguably the best thing to come out of the modern
                    day tech revolution. Hiring a Renhold can really help make
                    every facet of your life a breeze.”
                  </Text>
                </Box>
              </Flex>
            </Box>
          </Box>
        </Box>
      </LayoutWrapper>
    </>
  );
};

export default ServiceMainPage;
