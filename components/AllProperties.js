import { Grid, GridItem, Box, Container, Center } from "@chakra-ui/react";
import PropertyCard from "./PropertyCard";
import { PropertyData } from "./PropertyData";
import NextLink from "next/link"

export default function PropertyGrid() {


  return (
    <Container maxW="container.xl" my="4em">
        <Box as="h2" fontSize="4xl" fontWeight="bold" mb="1.5em">
            <Center>
            Our Properties
            </Center>
        </Box>
      <Grid
        gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))"
        gap="2em"
        px={{base:"1em", md:"2em"}}
      >

        {
            PropertyData.map((data, key) => 
            <PropertyCard 
            key={key}
            id={data.id}
            thumbnail={data.thumbnail}
            name={data.propertyName}
            location={data.location}
            shortDescription={data.shortDescription}
            available={data.available}/>)
        }

      </Grid>
    </Container>
  );
}
