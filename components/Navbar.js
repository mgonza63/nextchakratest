import {
  Flex,
  Spacer,
  Text,
  Image,
  Container,
  Stack,
  Link,
  Divider,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

import NextLink from "next/link";
import { useDisclosure } from "@chakra-ui/hooks";
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Container maxW="container.xl" my="1em">
      <Flex>
        <NextLink href="/">
          <a>
            <Image src="/gg-logo.png" maxW="100px" />
          </a>
        </NextLink>

        <Spacer />
        <Stack
          direction="row"
          alignItems="center"
          display={{ base: "none", md: "flex" }}
        >
          <Text fontSize="lg" fontWeight="bold" px="2em">
            <Link>Our Team</Link>
          </Text>
          <Menu>
            <MenuButton>
              <Text fontSize="lg" fontWeight="bold" px="2em">
                Properties <ChevronDownIcon />
              </Text>
            </MenuButton>
            <MenuList>
              <MenuItem>Commercial</MenuItem>
              <MenuItem>Residential</MenuItem>
            </MenuList>
          </Menu>
          <Text fontSize="lg" fontWeight="bold" px="2em">
            <Link>Contact Us</Link>
          </Text>
        </Stack>
        <Button
          size="md"
          variant="ghost"
          onClick={onOpen}
          my="1em"
          display={{ base: "block", md: "none" }}
        >
          <HamburgerIcon w={10} h={10} />
        </Button>
        <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth="1px">
              GG Investments
              <DrawerCloseButton w={10} h={10} />
            </DrawerHeader>
            <DrawerBody>
              <Text
                fontSize="lg"
                pb="1em"
                opacity="0.65"
                transition="200ms ease-in"
                _hover={{ opacity: "1" }}
              >
                <Link>Our Team</Link>
              </Text>
              <Text
                fontSize="lg"
                pb="0.5em"
                opacity="0.65"
                transition="200ms ease-in"
                _hover={{ opacity: "1" }}
              >
                <Link>Properties</Link>
              </Text>
              <Divider />
              <Text
                fontSize="md"
                pl="1em"
                py="0.5em"
                opacity="0.65"
                transition="200ms ease-in"
                _hover={{ opacity: "1" }}
              >
                <Link>Commercial</Link>
              </Text>
              <Text
                fontSize="md"
                pl="1em"
                pt="0.5em"
                pb="1em"
                opacity="0.65"
                transition="200ms ease-in"
                _hover={{ opacity: "1" }}
              >
                <Link>Residential</Link>
              </Text>
              <Text
                fontSize="lg"
                pb="1em"
                opacity="0.65"
                transition="200ms ease-in"
                _hover={{ opacity: "1" }}
              >
                <Link>Contact Us</Link>
              </Text>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Container>
  );
}
