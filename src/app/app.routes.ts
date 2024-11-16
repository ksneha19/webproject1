import { Routes } from '@angular/router';
import { CountryComponent } from './country/country.component';
import { CityComponent } from './city/city.component';
import { WeatherComponent } from './weather/weather.component';
import { CountrypopulationComponent } from './country/countrypopulation.component';
import { LoginComponent } from './auth/login.component';

export const routes: Routes = [
 {path:"countries", component:CountryComponent},
 {path: "cities", component:CityComponent},
 {path: "login", component:LoginComponent},
 {path: "countrypopulation/:id", component:CountrypopulationComponent},
 {path:"", component: WeatherComponent, pathMatch: "full"}
 
];
