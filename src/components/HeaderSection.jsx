import { Box, Heading, Text, Stack } from "@chakra-ui/react";

// HeaderSection
// TODO: Display your name and a short 1–2 sentence introduction.
// Suggested Chakra components: Box, Heading, Text, Stack.
const HeaderSection = () => {
  return (
    <Box>
      {/* Replace this with your header content */}
      <Heading size="lg" mb={2}>
        {/* Your Name Here */}
      </Heading>
      <Text fontSize="sm" color="gray.600">
        {/* A short intro about you */}
      </Text>
    </Box>
  );
};

export default HeaderSection;
