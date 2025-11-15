import { Box, Heading, Text, Stack } from "@chakra-ui/react";

const HeaderSectionSample = () => {
  return (
    <Box>
      <Stack spacing={2}>
        <Heading size="lg">Alex Example</Heading>
        <Text fontSize="sm" color="gray.600">
          I&apos;m a student learning React and Chakra UI. I enjoy building clean,
          simple interfaces and experimenting with component-based design.
        </Text>
      </Stack>
    </Box>
  );
};

export default HeaderSectionSample;
