import {
  Grid,
  GridItem,
  Square,
  Box,
  Container,
  Center,
  LinkBox,
  Button,
} from "@chakra-ui/react";
import PropertyCard from "./PropertyCard";
import { PropertyData } from "./PropertyData";
import NextLink from "next/link";
import Image from "@chakra-ui/react";

export default function PropertyGrid() {
  // feature list only shows top 3 properties
  const featureProperties = PropertyData.slice(0, 3);
  console.log(PropertyData[0].thumbnail);
  return (
    <Container maxW="container.xl" my="4em">
      <Box as="h2" fontSize="4xl" fontWeight="bold" mb="1.5em">
        <Center>Featured Listings</Center>
      </Box>
      <Grid
        gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))"
        gap="2em"
        px={{ base: "1em", md: "2em" }}
      >
        {featureProperties.map((data, key) => (
          <PropertyCard
            key={key}
            id={data.id}
            thumbnail={data.thumbnail}
            name={data.propertyName}
            location={data.location}
            shortDescription={data.shortDescription}
            available={data.available}
          />
        ))}
      
        <NextLink href="/properties" passHref>
          <Button minH="3em" as="a" h="full" cursor="pointer" overflow="hidden"><Square><Center>View All Properties</Center></Square></Button>
        </NextLink>
      </Grid>
    </Container>
  );
}
