import {
  Box,
  Image,
  Badge,
  Collapse,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { PropertyData } from "./PropertyData";

export default function PropertyCard(props) {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <NextLink href={`/properties/${props.id}`}>
      <a>
        <Box
          overflow="hidden"
          boxShadow="rgba(242, 201, 76, 1) -5px 5px"
          borderRadius="10px"
          transition="box-shadow 250ms ease-in"
          _hover={{
            boxShadow:
              "rgba(242, 201, 76, 0.4) -5px 5px, rgba(242, 201, 76, 0.3) -10px 10px, rgba(242, 201, 76, 0.2) -15px 15px, rgba(242, 201, 76, 0.1) -20px 20px, rgba(242, 201, 76, 0.05) -25px 25px;",
          }}
        >
          <Image src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2340&q=80" />
          <Box margin="1em">
            {props.available ? (
              <Badge borderRadius="full" px="2" colorScheme="green">
                Available
              </Badge>
            ) : (
              <Badge borderRadius="full" px="2" colorScheme="gray">
                Unavilable
              </Badge>
            )}

            <Box
              mt="1"
              fontWeight="bold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {props.name}
            </Box>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              pb="1em"
              textTransform="uppercase"
            >
              {props.location}
            </Box>
            <Collapse as="p" startingHeight={120} in={isOpen}>
              {props.description}
            </Collapse>
            <Button
              variant="link"
              size="sm"
              onClick={onToggle}
              mt="1rem"
              opacity="0.75"
            >
              Show {isOpen ? "Less" : "More"}
            </Button>
          </Box>
        </Box>
      </a>
    </NextLink>
  );
}
