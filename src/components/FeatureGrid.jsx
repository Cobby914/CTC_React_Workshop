import { SimpleGrid, Heading, Stack } from "@chakra-ui/react";
import ExampleCard from "./ExampleCard";

const features = [
  {
    title: "Reusable Components",
    description: "Build small UI pieces and reuse them across your page."
  },
  {
    title: "Props for Customization",
    description: "Pass data into components to change text, color, or layout."
  },
  {
    title: "Layout with Chakra",
    description: "Use Box, Flex, Stack, and SimpleGrid for clean layouts."
  },
  {
    title: "No Hooks Required",
    description: "Focus on JSX, props, and composition without state yet."
  }
];

const FeatureGrid = () => {
  return (
    <Stack spacing={4}>
      <Heading size="md">Example Concepts</Heading>
      <SimpleGrid columns={[1, 2, 2, 4]} spacing={4}>
        {features.map((feature) => (
          <ExampleCard
            key={feature.title}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </SimpleGrid>
    </Stack>
  );
};

export default FeatureGrid;
