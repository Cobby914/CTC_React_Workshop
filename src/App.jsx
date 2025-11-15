import { useState } from "react";
import { Box, Container, Stack } from "@chakra-ui/react";
import Hero from "./components/Hero";
import FeatureGrid from "./components/FeatureGrid";
import Footer from "./components/Footer";
import AssignmentPage from "./components/AssignmentPage";

const App = () => {
  const [currentPage, setCurrentPage] = useState("main");

  const showComponents = () => setCurrentPage("main");
  const showAssignment = () => setCurrentPage("assignment");

  return (
    <Box bg="gray.50" minH="100vh">

      {currentPage === "main" ? (
        <Container maxW="6xl" py={10}>
          <Stack spacing={16}>
            <Hero onStartAssignment={showAssignment} />
            <FeatureGrid />
          </Stack>
        </Container>
      ) : (
        <AssignmentPage onBack={showComponents} />
      )}

      <Footer />
    </Box>
  );
};

export default App;
