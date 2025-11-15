import { Box, Heading, Text } from "@chakra-ui/react";

const HighlightSectionSample = () => {
  return (
    <Box
      mt={10}
      borderWidth="1px"
      borderRadius="lg"
      p={4}
      bg="teal.50"
      boxShadow="sm"
    >
      <Heading size="md" mb={2}>
        Favorite Project
      </Heading>
      <Text fontSize="sm" color="gray.700">
        My favorite project so far is a small dashboard built with React and
        Chakra UI. It showed me how powerful reusable components and a good
        design system can be when building user interfaces.
      </Text>
    </Box>
  );
};

export default HighlightSectionSample;
