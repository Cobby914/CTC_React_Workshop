import { Box, Heading, Text, Stack } from "@chakra-ui/react";

// HeaderSection
// TODO: Display your name and a short 1–2 sentence introduction.
// Suggested Chakra components: Box, Heading, Text, Stack.
const HeaderSection = () => {
  return (
    <Box>
      {/* Replace this with your header content */}
      <Heading size="lg" mb={2}>
        First Name
      </Heading>
      <Text fontSize="sm" color="gray.600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Text>
    </Box>
  );
};

export default HeaderSection;
