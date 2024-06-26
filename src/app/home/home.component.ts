import {Component} from '@angular/core';
import {CommonModule} from "@angular/common";
import {HousingLocationComponent} from "../housing-location/housing-location.component";
import {HousingLocation} from "../housing-location";
import {HousingService} from "../housing.service";

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, HousingLocationComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent {
    housingLocationList: Array<HousingLocation> = [];
    filteredLocationList: Array<HousingLocation> = [];

    constructor(private housingService: HousingService) {
        this.housingService.getAllHousingLocations().then(
            (housingLocationList: Array<HousingLocation>) => {
                this.housingLocationList = housingLocationList;
                this.filteredLocationList = housingLocationList;
            }
        );
    }

    filterResults(text: string) {
        if (!text) {
            this.filteredLocationList = this.housingLocationList;
            return;
        }

        this.filteredLocationList = this.housingLocationList.filter(
            housingLocation => housingLocation?.city.toLowerCase().includes(text)
        );
    }

}
