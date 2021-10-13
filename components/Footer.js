import { Box, Container, Text, Flex, Image,  Grid, GridItem, Spacer, Center } from "@chakra-ui/react";
import NextLink from "next/link";

export default function Footer() {
  return (
    <Box borderTop="1px" borderColor="gray.100" pt="1.5em">
      <Container maxW="container.xl">
          <Flex borderBottom="1px" borderColor="gray.100" >
        <NextLink href="/">
          <a>
            <Image src="/gg-logo.png" maxW="100px" />
          </a>
          
        </NextLink>
        <Spacer />
        <Box pr="3em">
                <Text py="1em"><NextLink href="#">Our Team</NextLink></Text>
                <Text><NextLink href="#">Contact Us</NextLink></Text>
        </Box>
        <Box pr="2em" pb="1em">
                <Text mt="1em"><NextLink href="#">Properties</NextLink></Text>
                <Text pt="1em"><NextLink href="#">Residential</NextLink></Text>
                <Text pt="1em"><NextLink href="#">Commercial</NextLink></Text>

        </Box>
        </Flex>
      </Container>
      <Center backgroundColor="gray.100" pt="1em">
          <Text fontSize="sm">
            GG Investments. All Rights Reserved. 2021
            </Text>
        </Center>
    </Box>
  );
}
