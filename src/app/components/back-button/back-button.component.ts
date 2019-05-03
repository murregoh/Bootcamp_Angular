import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-back-button',
  template: ` <div class="col-md-12 btn btn-secondary" [routerLink]="['/home']">
                <i class="fab fa-angular fa-2x"></i> tras
              </div>`,
})
export class BackButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
