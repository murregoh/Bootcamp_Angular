import { Component, OnInit } from '@angular/core';
import { INavBarItem } from 'src/app/interfaces/nav-bar-items';
import { NavBarItemsService } from 'src/app/services/nav-bar-items.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  providers: [ NavBarItemsService ]
})
export class NavBarComponent implements OnInit {

  navBarItems: INavBarItem[];

  constructor(private _items: NavBarItemsService) { }

  ngOnInit() {
    this.navBarItems = this._items.getNavBarItems();
  }

}
