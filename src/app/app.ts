import {Component, inject, signal} from '@angular/core';
import { MapComponent } from './map-component/map-component';
import { CountryInfoComponent } from './country-info-component/country-info-component';
import {APIService} from './api/api-service';
import {APIResponse} from './api/api.model';

@Component({
  imports: [MapComponent, CountryInfoComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  api = inject(APIService);
  selectedCountry = signal<APIResponse | undefined>(undefined);

  protected onClick(event: MouseEvent) {
    const target = event.target as SVGElement;

    if (target.tagName.toLowerCase() === 'svg') {
      return;
    }
    const id = target.id;

    this.api.countryRequest(id).subscribe(res => {
      this.selectedCountry.set(res);
    })
  }
}
