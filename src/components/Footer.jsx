import React from "react";
import { Box, Container, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" width="full" py={4} borderTopWidth="1px">
      <Container maxW="container.xl" centerContent>
        <Text fontSize="sm">&copy; {new Date().getFullYear()} My Company. All rights reserved.</Text>
      </Container>
    </Box>
  );
};

export default Footer;
