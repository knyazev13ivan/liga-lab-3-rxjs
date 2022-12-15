import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  Observable,
  fromEvent,
  map,
  filter,
  debounceTime,
  distinctUntilChanged,
} from 'rxjs';

export interface ISwCard {
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

@Injectable({
  providedIn: 'root',
})
export class SwapiService {
  swList: ISwCard[] = [];
  searchValue: string = '';

  constructor(private http: HttpClient) {}

  
  getPeople(): Observable<ISwCard[]> {
    return this.http.get<ISwCard[]>('https://swapi.dev/api/people').pipe();
  }
  
  getSearchValue() {
    let searchInput = document.getElementById('search__input');
    fromEvent(searchInput!, 'keyup')
      .pipe(
        debounceTime(700),
        map((event) => {
          if(event.target) {
            console.log(event.target);
            
            // return event.target.value

          }
        }),
        // filter((val) => val.length > 2),
        // distinctUntilChanged(),
        // map((value) => getUsersRepsFromAPI(value))
      )
      .subscribe((value) => {
        console.log(value);
      });
  }
}
