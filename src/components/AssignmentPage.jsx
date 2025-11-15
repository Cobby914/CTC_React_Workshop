import { useState } from "react";
import { Box, Container, Heading, Text, Stack, Button, HStack } from "@chakra-ui/react";
import StudentPage from "./StudentPage";

const AssignmentPage = ({ onBack }) => {
  const [showInstructions, setShowInstructions] = useState(true);

  return (
    <Container maxW="6xl" py={10}>
      <Stack spacing={8}>
        <Box>
          <HStack spacing={3} mb={4}>
            <Button
              variant="ghost"
              colorScheme="teal"
              onClick={onBack}
            >
              ← Back to Examples
            </Button>
            <Button
              variant="outline"
              colorScheme="teal"
              size="sm"
              onClick={() => setShowInstructions(!showInstructions)}
            >
              {showInstructions ? "Hide Instructions" : "Show Instructions"}
            </Button>
          </HStack>
          
          {showInstructions && (
            <Box>
              <Heading size="md" mb={3}>
                🧩 Practice Assignment
              </Heading>
              <Text fontSize="sm" color="gray.700" mb={2}>
                Your task: create a new page using only <b>stateless React
                components</b> and <b>Chakra UI</b>.
              </Text>
              <Text fontSize="sm" color="gray.700">
                1. Modify <code>StudentPage.jsx</code> in <code>src/components/</code>.<br />
                2. Build a custom page (portfolio, product, club, etc.).<br />
                3. Use at least 3 reusable components with props.<br />
                4. Use arrays + <code>.map()</code> to render repeated elements.<br />
                5. Do <b>not</b> use any React hooks (no <code>useState</code>, <code>useEffect</code>, etc.).
              </Text>
            </Box>
          )}
        </Box>

        <StudentPage />
      </Stack>
    </Container>
  );
};

export default AssignmentPage;

