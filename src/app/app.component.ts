import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { WeatherForecastResponse, WeatherService } from './weather.service';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import {ImageModule} from 'primeng/image';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterOutlet, HttpClientModule, ButtonModule, InputTextModule, ImageModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  city = "";
  loading = false;
  response?: WeatherForecastResponse;
  error?: string;

  constructor(private service: WeatherService) { }

  getWeather() {
    this.loading = true;
    this.service.getForecastByCity(this.city).subscribe(
      {
        next: (response) => {
          this.response = response;
          this.error = undefined;
          this.loading = false;
        },
        error: (err) => {
          if (err.status === 404) {
            this.error = 'Cidade não encontrada';
          } else {
            this.error = 'Ocorreu um erro ao buscar a cidade';
          }
          this.response = undefined;
          this.loading = false;
        }
      }
    )
  }
}
