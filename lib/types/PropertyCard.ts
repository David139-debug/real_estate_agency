type TypeOfPlace = "Modern Villa" | "Single Family" | "Town House" | "Appartment"
                    | "Office";

export type Errors = Partial<Record<keyof Property, string>>;

export interface Property {
    offerType: "Sell" | "Rent";
    typePlace: TypeOfPlace;
    photos: string[];
    additionalInfo: AdditonalInfo;
    location: Location
}

export interface AdditonalInfo {
    size: number;
    price: number;
    beds: number;
    baths: number;
}

export interface Location {
    address: string;
    name: string;
    city: string;
    street: string
}