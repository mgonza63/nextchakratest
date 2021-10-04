import { useState } from "react";
import { Link } from "@chakra-ui/react"

export default function PropertiesPage() {

    const [properties, setProperties] = useState([])

    const fetchProperties = async () => {
        const response = await fetch("/api/properties");
        const data = await response.json();
        setProperties(data)
    }
    return(
        <>
        <button onClick={fetchProperties}>Load Properties</button>
        {
            properties.map((property) => {
                return(
                    <Link href={`/${property.id}`} key={property.id}>
                        {property.id} {property.propertyName}
                    </Link>
                )
                })
        }
        
        </>
    )
}