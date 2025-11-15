import { Box, Flex, Heading, HStack, Link } from "@chakra-ui/react";

const NavLink = ({ children }) => {
  return (
    <Link
      px={3}
      py={1}
      fontSize="sm"
      fontWeight="medium"
      color="gray.600"
      _hover={{ color: "teal.500" }}
      href="#"
    >
      {children}
    </Link>
  );
};

const Navbar = () => {
  return (
    <Box bg="white" boxShadow="sm">
      <Flex
        maxW="6xl"
        mx="auto"
        px={4}
        py={3}
        align="center"
        justify="space-between"
      >
        <Heading size="md" color="teal.600">
          Chakra Practice
        </Heading>
        <HStack spacing={2}>
          <NavLink>Examples</NavLink>
          <NavLink>Assignment</NavLink>
          <NavLink>Docs</NavLink>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
