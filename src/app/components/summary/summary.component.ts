import { Component, OnInit, ElementRef } from '@angular/core';
import { SummaryService } from 'src/app/services/summary.service';
import { ISummaryItem } from 'src/app/interfaces/summaryItem';


@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html'
})
export class SummaryComponent implements OnInit {

  summaryItems: ISummaryItem[];
  imageWidth: number = 400;

  constructor(private _summary: SummaryService, element: ElementRef) { }

  ngOnInit() {
    this.summaryItems = this._summary.getSummaryItems();
  }


}
