import { Component, signal } from '@angular/core';
import { MapComponent } from './map-component/map-component';
import { CountryInfoComponent } from './country-info-component/country-info-component';

@Component({
  imports: [MapComponent, CountryInfoComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('D280-JavaScript-Programming');

  protected onClick(event: MouseEvent) {
    const target = event.target as SVGElement;

    if (target.tagName.toLowerCase() === 'svg') {
      return;
    }
    const id = target.id;
  }
}
