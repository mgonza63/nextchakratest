import { PropertyData } from "../../../components/PropertyData";

export default function handler({ query: { propertyId } }, res) {
//   const { propertyId } = req.query;
  const property = PropertyData.find((property) => property.id === propertyId);
  res.status(200).json(property);

}
