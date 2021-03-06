import {
  Box,
  Image,
  Badge,
  Collapse,
  useDisclosure,
  Button,
  Text,
  LinkBox,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { PropertyData } from "./PropertyData";

export default function PropertyCard(props) {
  //   const { isOpen, onToggle } = useDisclosure();

  return (
    <NextLink href={`/properties/${props.id}`} passHref>
      <LinkBox
        as="a"
        cursor="pointer"
        overflow="hidden"
        boxShadow="rgba(242, 201, 76, 1) -5px 5px"
        borderRadius="10px"
        transition="box-shadow 250ms ease-in"
        _hover={{
          boxShadow:
            "rgba(242, 201, 76, 0.4) -5px 5px, rgba(242, 201, 76, 0.3) -10px 10px, rgba(242, 201, 76, 0.2) -15px 15px, rgba(242, 201, 76, 0.1) -20px 20px, rgba(242, 201, 76, 0.05) -25px 25px;",
        }}
      >
        <Box
          bgImage={`url('${props.thumbnail}')`}
          bgPosition="center"
          bgSize="cover"
          bgRepeat="no-repeat"
          height="240px"
        >
          {/* <Image src={`${props.thumbnail}`} /> */}
        </Box>
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

          <Box mt="1" fontWeight="bold" as="h4" lineHeight="tight" isTruncated>
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
          <Text>{props.shortDescription}</Text>
          <Button variant="link" size="sm" mt="2rem" opacity="0.75">
            Learn More
          </Button>
        </Box>
      </LinkBox>
    </NextLink>
  );
}
