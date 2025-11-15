import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";

const interests = [
  "Open source projects",
  "UI/UX design",
  "Teaching and mentoring",
  "Gaming and esports"
];

const InterestsSectionSample = () => {
  return (
    <Box mt={10}>
      <Heading size="md" mb={3}>
        Interests & Hobbies
      </Heading>
      <SimpleGrid columns={[1, 2]} spacing={4}>
        {interests.map((interest) => (
          <Box
            key={interest}
            borderWidth="1px"
            borderRadius="lg"
            p={3}
            bg="white"
            boxShadow="sm"
          >
            <Text fontSize="sm" color="gray.700">
              {interest}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default InterestsSectionSample;
