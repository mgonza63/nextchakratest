import {
  Container,
  Heading,
  Stack,
  Box,
  Image,
  Flex,
  Text,
  Button,
} from "@chakra-ui/react";

export default function HeroSection() {
  return (
    <Container maxW="container.xl">
      <Flex direction={{ base: "column", lg: "row" }} py="3em">
        <Stack flex="1">
          <Heading
            as="h1"
            fontSize={{ base: "6xl", sm: "7xl" }}
            lineHeight="1.125"
            pb="4px"
            maxW="20ch"
          >
            Find The Right Space For You.
          </Heading>
          <Text fontSize="lg" lineHeight="1.75" pb="1em" maxW="600px">
            We are a Houston-based Real Estate company maintaining top building
            standards for our tenants.
          </Text>
          <Stack direction="row" pb="2.25em">
            <Button colorScheme="yellow" size="lg" mr="0.5em">
              Commercial
            </Button>
            <Button colorScheme="yellow" size="lg">
              Residential
            </Button>
          </Stack>
        </Stack>
        <Box flex="1">
          <Image
            objectFit="cover"
            src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2340&q=80"
            alt="Dan Abramov"
          />
        </Box>
      </Flex>
    </Container>
  );
}
