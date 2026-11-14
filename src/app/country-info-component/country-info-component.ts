import {Component, computed, input} from '@angular/core';
import { APIResponse } from '../api/api.model';

@Component({
  imports: [],
  selector: 'app-country-info-component',
  styleUrl: './country-info-component.css',
  templateUrl: './country-info-component.html',
})
export class CountryInfoComponent {
  countryResponse = input<APIResponse>();
  country = computed(() => this.countryResponse()?.[1][0]);

}
