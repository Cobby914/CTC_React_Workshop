import { Box, Container, Heading, Text, Stack } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeatureGrid from "./components/FeatureGrid";
import Footer from "./components/Footer";
import StudentPage from "./components/StudentPage";

const App = () => {
  return (
    <Box bg="gray.50" minH="100vh">
      <Navbar />

      <Container maxW="6xl" py={10}>
        <Stack spacing={16}>
          <Hero />
          <FeatureGrid />

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

          <StudentPage />
        </Stack>
      </Container>

      <Footer />
    </Box>
  );
};

export default App;
