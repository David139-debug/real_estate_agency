import { SVGProps } from "react";
import { Property } from "./PropertyCard";

export interface ListType {
    icon: React.ComponentType<SVGProps<SVGSVGElement>>;
    formData: Partial<Property>
    type: "Sell" | "Rent";
    desc: String;
}