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
    <Container maxW="container.md" py="2em">
      <Center>
        <Heading as="h4" size="2xl" pb="1.5em">
          Contact Us
        </Heading>
      </Center>
      <Flex>
        <FormControl pr="1em" id="first-name" isRequired>
          <FormLabel>Full name</FormLabel>
          <Input placeholder="Your name" />
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel>Email address</FormLabel>
          <Input type="email" placeholder="your.email@gmail.com"/>
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
      </Flex>
      <FormControl isRequired mt="1">
        <FormLabel>Message</FormLabel>
        <Textarea placeholder="Hello, I am interested in . . ." />
      </FormControl>
      <Box mt="1em">
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
