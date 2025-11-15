import { Box, Stack } from "@chakra-ui/react";
import HeaderSection from "./HeaderSection";
import SkillsSection from "./SkillsSection";
import InterestsSection from "./InterestsSection";
import HighlightSection from "./HighlightSection";

// StudentPage
// This is the main Introductory Page students must complete.
// Fill in HeaderSection, SkillsSection, InterestsSection, and HighlightSection
// to build a complete "About Me" page.
const StudentPage = () => {
  return (
    <Box mt={16}>
      <Stack spacing={10}>
        <HeaderSection />
        <SkillsSection />
        <InterestsSection />
        <HighlightSection />
      </Stack>
    </Box>
  );
};

export default StudentPage;
