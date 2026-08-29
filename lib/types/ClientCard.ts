import { StaticImageData } from "next/image";

export interface ClientCardType {
    img: StaticImageData;
    name: string;
    job: string;
    text: string;
}