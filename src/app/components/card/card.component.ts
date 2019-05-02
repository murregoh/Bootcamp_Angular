import { Component, OnInit, Input } from '@angular/core';
import { IGitHubUser2 } from 'src/app/interfaces/gitHubUser2';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
})
export class CardComponent implements OnInit {

  @Input() user: IGitHubUser2;
  imageWidth: number = 60;
  imageMargin: number = 5;

  constructor() { }

  ngOnInit() {
  }

}
