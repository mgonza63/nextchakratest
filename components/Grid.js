import { Grid, GridItem, Box, Container, Center } from "@chakra-ui/react";
import PropertyCard from "./PropertyCard";
import { PropertyData } from "./PropertyData";

export default function PropertyGrid() {
    console.log(PropertyData);

  return (
    <Container maxW="container.xl" my="4em">
        <Box as="h2" fontSize="4xl" fontWeight="bold" mb="1.25em">
            <Center>
            Featured Listings
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
            name={data.propertyName}
            location={data.location}
            description={data.description}
            available={data.available}/>)
        }
      </Grid>
    </Container>
  );
}
