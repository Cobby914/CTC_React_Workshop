import { Box, Heading, Text, Button, Stack } from "@chakra-ui/react";

const Hero = ({ onStartAssignment }) => {
  return (
    <Box textAlign="left">
      <Stack spacing={4}>
        <Heading size="2xl" color="gray.800">
          Learn React Components with Chakra UI
        </Heading>
        <Text fontSize="md" color="gray.600" maxW="lg">
          These examples show how to build reusable, stateless UI blocks using
          Chakra. Your assignment is to create your own page by composing simple
          components together.
        </Text>
        <Stack direction={["column", "row"]} spacing={3}>
          <Button
            as="a"
            href="https://chakra-ui.com/docs/components/concepts/overview"
            target="_blank"
            rel="noopener noreferrer"
            colorScheme="teal"
          >
            See Components
          </Button>
          <Button variant="outline" colorScheme="teal" onClick={onStartAssignment}>
            Start Assignment
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Hero;
