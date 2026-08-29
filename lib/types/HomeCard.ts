import { StaticImageData } from "next/image";

export interface HomeCardType {
    img: StaticImageData;
    name: string;
    price: number;
    address: string;
    beds: number;
    baths: number;
    sqft: number;
}