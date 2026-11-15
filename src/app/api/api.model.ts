export type APIResponse = [Metadata, Country[]];

export interface Metadata {
    page: number;
    pages: number;
    per_page: string;
    total: number;
}


export interface Country {
    name: string;
    region: {
        value: string;
    };
    incomeLevel: {
        value: string;
    };
    capitalCity: string;
    longitude: string;
    latitude: string;
}