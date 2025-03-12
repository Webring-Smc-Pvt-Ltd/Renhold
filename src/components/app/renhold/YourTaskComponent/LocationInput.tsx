import { useState } from 'react';
import { Input, Box, Spinner, Text } from '@chakra-ui/react';
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';

const LocationInput = ({ formData, setFormData }) => {
  const {
    value,
    setValue,
    suggestions,
    clearSuggestions,
    loading,
  } = usePlacesAutocomplete({
    debounce: 300, // Reduce API calls
    requestOptions: {
      componentRestrictions: { country: "US" }, // Restrict results to a specific country (optional)
    },
  });

  const [error, setError] = useState(null);

  const handleSelect = async (address) => {
    try {
      setValue(address, false);
      clearSuggestions();

      const results = await getGeocode({ address });
      if (results.length > 0) {
        const { lat, lng } = await getLatLng(results[0]);

        setFormData({
          ...formData,
          StreetAddress: address,
          Latitude: lat,
          Longitude: lng,
        });

        setError(null); // Clear any previous errors
      } else {
        setError("Location not found. Try a different address.");
      }
    } catch (err) {
      console.error("Error getting location:", err);
      setError("Failed to fetch location details.");
    }
  };

  return (
    <Box position="relative">
      <Input
        h={{ base: '35px', md: '45px', lg: '85px' }}
        placeholder="Enter your street address"
        borderRadius="5px"
        border="1px solid #CFCFCF"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {loading && <Spinner position="absolute" top="10px" right="10px" size="sm" />}

      {suggestions.status === 'OK' && (
        <Box
          position="absolute"
          bg="white"
          border="1px solid #CFCFCF"
          mt="5px"
          borderRadius="5px"
          w="100%"
          zIndex="1000"
        >
          {suggestions.data.map((suggestion) => (
            <Box
              key={suggestion.place_id}
              p="10px"
              cursor="pointer"
              _hover={{ background: "#f0f0f0" }}
              onClick={() => handleSelect(suggestion.description)}
            >
              {suggestion.description}
            </Box>
          ))}
        </Box>
      )}

      {error && <Text color="red.500" mt="2">{error}</Text>}
    </Box>
  );
};

export default LocationInput;
