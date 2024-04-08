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

    constructor(private housingService: HousingService) {
        this.housingLocationList = this.housingService.getAllHousingLocations();
    }

}
