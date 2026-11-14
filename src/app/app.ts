import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MapComponent } from './map-component/map-component';
import { CountryInfoComponent } from './country-info-component/country-info-component';

@Component({
  imports: [RouterOutlet, MapComponent, CountryInfoComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('D280-JavaScript-Programming');
}
