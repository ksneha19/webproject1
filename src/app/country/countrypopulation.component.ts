import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CountryPopulation } from './countrypopulation';
import { environment } from '../../environments/environment.development';

@Component({
  selector: 'app-countrypopulation',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './countrypopulation.component.html',
  styleUrl: './countrypopulation.component.scss'
})
export class CountrypopulationComponent implements OnInit {
  id: number = -1;
  public CountryPopulation!: CountryPopulation;
  constructor(private http: HttpClient, private activatedRoute:ActivatedRoute) {}
  ngOnInit(): void {
    let idparam = this.activatedRoute.snapshot.paramMap.get('id');
    this.id = idparam ? + idparam : -1;
     this.http.get<CountryPopulation>(`${environment.baseUrl}api/Countries/countrypopulation/${this.id}`).subscribe(
      {
      next: result => this.CountryPopulation = result,
      error: e => console.error(e)
    }
      );
  }

  }
