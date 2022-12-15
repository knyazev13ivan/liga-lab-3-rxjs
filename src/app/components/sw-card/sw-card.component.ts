import { Component, Input } from '@angular/core';

export interface IPerson {
  name: string;
  films: number;
}

@Component({
  selector: 'app-sw-card',
  templateUrl: './sw-card.component.html',
  styleUrls: ['./sw-card.component.scss'],
})
export class SwCardComponent {
  _person: IPerson = {
    name: '',
    films: 0,
  };

  @Input() set person(person: IPerson) {
    this._person = person;
  }

  get person(): IPerson {
    return this._person;
  }
}
