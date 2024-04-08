import {Component, Input} from '@angular/core';
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {HousingLocation} from "../housing-location";
import {RouterLink} from "@angular/router";

@Component({
    selector: 'app-housing-location',
    standalone: true,
    imports: [CommonModule, NgOptimizedImage, RouterLink],
    templateUrl: './housing-location.component.html',
    styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {
    @Input() housingLocation!: HousingLocation;
}
