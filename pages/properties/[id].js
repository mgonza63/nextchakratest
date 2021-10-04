

export async function getStaticPaths() {
    const response = await fetch('/api/properties');
    const data = await response.json();

    const paths = data.map (property => {
        return {
            params: {
                id: `${property.id}`
            }
        }
    })
    return {
        paths,
        fallback: false,
    }
}