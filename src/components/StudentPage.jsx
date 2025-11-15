import { Box, Heading, Text, Stack, SimpleGrid, Tag, TagLabel } from "@chakra-ui/react";

const Section = ({ title, children }) => {
  return (
    <Box mt={10}>
      <Heading size="md" mb={3}>
        {title}
      </Heading>
      {children}
    </Box>
  );
};

const InfoCard = ({ title, body }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      p={4}
      bg="white"
      boxShadow="sm"
    >
      <Heading size="sm" mb={2}>
        {title}
      </Heading>
      <Text fontSize="sm" color="gray.600">
        {body}
      </Text>
    </Box>
  );
};

const TagList = ({ tags }) => {
  return (
    <Stack direction="row" spacing={2} flexWrap="wrap">
      {tags.map((tag) => (
        <Tag key={tag} size="sm" colorScheme="teal" borderRadius="full">
          <TagLabel>{tag}</TagLabel>
        </Tag>
      ))}
    </Stack>
  );
};

const projects = [
  {
    title: "Chakra Components Demo",
    body: "A simple page built with reusable Chakra UI components."
  },
  {
    title: "Static Portfolio",
    body: "A single-page portfolio using only stateless React components."
  },
  {
    title: "Club Info Page",
    body: "An informational page for a student club with sections and cards."
  }
];

const StudentPage = () => {
  return (
    <Box mt={16}>
      <Heading size="lg" mb={1}>
        Example Student Page
      </Heading>
      <Text fontSize="sm" color="gray.600" mb={6}>
        This is one possible solution. It uses stateless components, props,
        arrays, and Chakra UI layout primitives.
      </Text>

      <Section title="About This Page">
        <Text fontSize="sm" color="gray.700">
          This page demonstrates how you might structure your own assignment:
          a top-level layout, reusable section wrapper, info cards, and a tag
          list for skills or topics.
        </Text>
      </Section>

      <Section title="Sample Projects">
        <SimpleGrid columns={[1, 2, 3]} spacing={4}>
          {projects.map((project) => (
            <InfoCard
              key={project.title}
              title={project.title}
              body={project.body}
            />
          ))}
        </SimpleGrid>
      </Section>

      <Section title="Skills / Topics Used">
        <TagList
          tags={[
            "React",
            "Chakra UI",
            "Components",
            "Props",
            "Composition",
            "Layout"
          ]}
        />
      </Section>
    </Box>
  );
};

export default StudentPage;
