import { StaticImageData } from "next/image";

export interface CategoryCardType {
    img: StaticImageData;
    title: string;
    content: string;
    desc: string;
    hoverImg: StaticImageData;
}