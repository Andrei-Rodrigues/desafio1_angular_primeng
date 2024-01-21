import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class WeatherService {

    private apiKey = '45f8d6a48ac2279c8954243037bb47b8'
    private weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&APPID=${this.apiKey}&q=`

    constructor(private http: HttpClient) { }

    getForecastByCity(city: String): Observable<WeatherForecastResponse> {
        return this.http.get<WeatherForecastResponse>(
            this.weatherApiUrl + city
        );
    }
}

interface Weather {
    main: string;
    description: string;
}

interface Temperature {
    temp: number;
    feels_like: number;
    humidity: number;
}

interface Wind {
    speed: number;
}

export interface WeatherForecastResponse {
    weather: [Weather];
    main: Temperature;
    wind: Wind;
    name: string;
}