import { Service, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIResponse } from './api.model';


@Service()
export class APIService {
    private http = inject(HttpClient)

    public countryRequest(country: string) {
        return this.http.get<APIResponse>(`https://api.worldbank.org/v2/country/${country}?format=json`)
    }
}
