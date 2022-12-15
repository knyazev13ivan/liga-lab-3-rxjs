import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  Observable,
  take,
  map,
  filter,
  tap,
  mergeMap,
  toArray,
  from,
} from 'rxjs';

export interface IPerson {
  name: string;
  height: number;
  mass: number;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}

export interface IShortPerson {
  name: string;
  films: string[];
}

@Component({
  selector: 'app-sw-list',
  templateUrl: './sw-list.component.html',
  styleUrls: ['./sw-list.component.scss'],
})
export class SwListComponent implements OnInit {
  swList: IShortPerson[] = [];
  sum: any = 0;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    return this.http
      .get<any>('https://swapi.dev/api/people')
      .pipe(
        map((response: { results: any }) => response.results),
        mergeMap((result: any[]) => from(result)),
        take(5),
        filter((person: IPerson) => person.name.length > 10),
        map((person: any) => ({
          name: person.name,
          films: person.films.length,
        })),
        tap((person: any) => this.swList.push(person))
      )
      .subscribe((people: any) => {
        this.getSum();
      });
  }

  getSum() {
    let sum: any = 0;
    new Promise((resolve, reject) => {
      setTimeout(() => resolve(this.swList.length), 1000);
    }).then((value) => (this.sum = value));
  }
}
