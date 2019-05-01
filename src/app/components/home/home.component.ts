import { Component, OnInit } from '@angular/core';
import { IHomeItem } from 'src/app/interfaces/homeItem';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [ HomeService ]
})
export class HomeComponent implements OnInit {

  homeItems: IHomeItem[];

  constructor(private _items: HomeService) { }

  ngOnInit() {
    this.homeItems = this._items.getHomeItems();
  }

}
