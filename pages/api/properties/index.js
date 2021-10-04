import { PropertyData } from "../../../components/PropertyData";

export default function handler(req, res) {
    res.status(200).json(PropertyData);
}