import { Box, Heading, Text } from "@chakra-ui/react";

// HighlightSection
// TODO: Highlight a favorite project or a fun fact about yourself.
// Requirements:
// - Include a heading and a descriptive paragraph
// - Use Box styling (border, background, padding, etc.) to make it stand out
const HighlightSection = () => {
  return (
    <Box mt={10}>
      <Heading size="md" mb={3}>
        Highlight
      </Heading>
      <Text fontSize="sm" color="gray.700">
        {/* Describe a favorite project or fun fact here */}
      </Text>
    </Box>
  );
};

export default HighlightSection;
