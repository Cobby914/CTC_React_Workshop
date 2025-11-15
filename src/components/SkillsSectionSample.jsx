import { Box, Heading, Stack, Tag, TagLabel } from "@chakra-ui/react";

const skills = ["React", "Chakra UI", "JavaScript", "HTML/CSS", "Git"];

const SkillsSectionSample = () => {
  return (
    <Box mt={10}>
      <Heading size="md" mb={3}>
        Skills
      </Heading>
      <Stack direction="row" spacing={2} flexWrap="wrap">
        {skills.map((skill) => (
          <Tag
            key={skill}
            size="sm"
            colorScheme="teal"
            borderRadius="full"
          >
            <TagLabel>{skill}</TagLabel>
          </Tag>
        ))}
      </Stack>
    </Box>
  );
};

export default SkillsSectionSample;
