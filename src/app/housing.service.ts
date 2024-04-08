import {Injectable} from '@angular/core';
import {HousingLocation} from "./housing-location";

@Injectable({
    providedIn: 'root'
})
export class HousingService {

    url = 'http://localhost:3000/locations';

    async getAllHousingLocations(): Promise<Array<HousingLocation>> {
        const data = await fetch(this.url);
        return (await data.json()) ?? [];
    }

    async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
        const data = await fetch(`${this.url}/${id}`);
        return (await data.json());
    }

    submitApplication(params: { firstName: string, lastName: string, email: string }) {
        console.log(
            `Home application received: ${JSON.stringify(params, null, 2)}`
        );
    }
}
