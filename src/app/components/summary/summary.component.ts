import { Component, OnInit, ElementRef } from '@angular/core';
import { SummaryService } from 'src/app/services/summary.service';
import { ISummaryItems } from 'src/app/interfaces/summaryItems';


@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html'
})
export class SummaryComponent implements OnInit {

  summaryItems: ISummaryItems[];

  constructor(private _summary: SummaryService, element: ElementRef) { }

  ngOnInit() {
    this.summaryItems = this._summary.getSummaryItems();
  }


}
