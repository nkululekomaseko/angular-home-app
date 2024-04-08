import {Component} from '@angular/core';
import {HousingLocation} from "../housing-location";
import {ActivatedRoute} from "@angular/router";
import {HousingService} from "../housing.service";
import {CommonModule} from "@angular/common";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";

@Component({
    selector: 'app-details',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './details.component.html',
    styleUrl: './details.component.css'
})
export class DetailsComponent {
    housingLocation: HousingLocation | undefined;
    applyForm = new FormGroup({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        email: new FormControl('')
    });

    constructor(private route: ActivatedRoute, private housingService: HousingService) {
        const housingLocationId = Number(this.route.snapshot.params['id']);
        this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);
    }

    submitApplication() {
        const {firstName, lastName, email} = this.applyForm.value;
        this.housingService.submitApplication(
            {
                firstName: firstName ?? '',
                lastName: lastName ?? '',
                email: email ?? '',
            }
        );
    }

}
