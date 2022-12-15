import { Component } from '@angular/core';
import { SwapiService } from 'src/app/services/swapi.service';
import { IPerson } from '../sw-card/sw-card.component';

@Component({
  selector: 'app-sw-list',
  templateUrl: './sw-list.component.html',
  styleUrls: ['./sw-list.component.scss'],
})
export class SwListComponent {
  _swList: any[] = [];

  constructor(private swService: SwapiService) {
    this.swList = swService.getPeople().subscribe((people) => {
      console.log(people);
    });
  }

  getSum(): number {
    let sum: any = 0;
    new Promise((resolve, reject) => {
      setTimeout(() => resolve(this.swList.lenght), 1000);
    }).then((value) => sum = value);
    return sum;
  }

  set swList(list: any) {
    this._swList = list;
  }
  get swList(): any {
    return this._swList;
  }
}
