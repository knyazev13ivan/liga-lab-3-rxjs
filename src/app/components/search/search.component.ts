import { Component, Output, EventEmitter } from '@angular/core';
import {
  Observable,
  fromEvent,
  map,
  filter,
  debounceTime,
  distinctUntilChanged,
} from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchValue: string = '';

  @Output()
  public handleChangeSearch = new EventEmitter();

  searchInput = document.getElementById('search__input');
  getSearchValue() {
    fromEvent(this.searchInput!, 'keyup')
      .pipe(
        map((event) => {
          if(event.target) {
            // console.log(event.target);
            
            // return event.target.value
            
          }
        }),
        // filter((val) => val.length > 2),
        // distinctUntilChanged(),
        // map((value) => getUsersRepsFromAPI(value))
        debounceTime(700),
      )
      .subscribe((value) => {
        console.log(value);
      });
  }
}
