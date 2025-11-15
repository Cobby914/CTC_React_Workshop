import { Box, Heading, Text } from "@chakra-ui/react";

const ExampleCard = ({ title, description }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      p={4}
      bg="white"
      boxShadow="sm"
      _hover={{ boxShadow: "md", transform: "translateY(-2px)" }}
      transition="all 0.15s ease"
    >
      <Heading size="sm" mb={2}>
        {title}
      </Heading>
      <Text fontSize="sm" color="gray.600">
        {description}
      </Text>
    </Box>
  );
};

export default ExampleCard;
