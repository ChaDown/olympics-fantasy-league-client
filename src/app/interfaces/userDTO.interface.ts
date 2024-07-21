import { Country } from "./country.interface";

export interface UserDTO {
    id: number;
    email: string;
    teamname: string;
    country1: Country;
    country2: Country;
    country3: Country;
    country4: Country;
    country5: Country;
    totalPoints: number;
}
