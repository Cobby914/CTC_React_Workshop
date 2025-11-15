import { Box, Stack } from "@chakra-ui/react";
import HeaderSectionSample from "./HeaderSectionSample";
import SkillsSectionSample from "./SkillsSectionSample";
import InterestsSectionSample from "./InterestsSectionSample";
import HighlightSectionSample from "./HighlightSectionSample";

// SampleIntroPage
// This is a complete example of what a finished Introductory Page might look like.
// It is NOT imported into App.jsx by default.
const SampleIntroPage = () => {
  return (
    <Box mt={16}>
      <Stack spacing={10}>
        <HeaderSectionSample />
        <SkillsSectionSample />
        <InterestsSectionSample />
        <HighlightSectionSample />
      </Stack>
    </Box>
  );
};

export default SampleIntroPage;
