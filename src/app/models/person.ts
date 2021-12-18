export interface Person {
    _id: string;
    email: string;
    location: PersonLocation;
    name: PersonName;
    picture: string;
}

export interface PersonLocation {
    latitude: number;
    longitude: number;
}

export interface PersonName {
    first: string;
    last: string;
}