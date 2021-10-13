import { Container } from "@chakra-ui/layout";
import {
  Heading,
  Center,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Flex,
  Box,
  Textarea,
  Button,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";

export default function Contact() {
  return (
    <Container maxW="container.md" py="2em" mb="1em" id="contact">
      <Center>
        <Heading as="h4" size="2xl" pb={{base: "1em", md: "1.5em"}}>
          Contact Us
        </Heading>
      </Center>
      <Flex direction={{ base: "column", md: "row" }}>
        <FormControl pr={{base: "0", md: "1em"}} mb={{base: "3", md: "0"}} id="first-name" isRequired>
          <FormLabel>Full name</FormLabel>
          <Input placeholder="Your name" />
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel>Email address</FormLabel>
          <Input type="email" placeholder="your.email@gmail.com"/>
        </FormControl>
      </Flex>
      <FormControl isRequired mt={{base: "3", md: "2"}}>
        <FormLabel>Message</FormLabel>
        <Textarea placeholder="Hello, I am interested in . . ." />
        <FormHelperText>We'll never share your email.</FormHelperText>

      </FormControl>
      <Box mt="1.5em">
        <Button
          leftIcon={<EmailIcon />}
          colorScheme="yellow"
          variant="solid"
          size="lg"
        //   isLoading
        //   loadingText="Sending"
        >
          Send Message
        </Button>
      </Box>
    </Container>
  );
}
