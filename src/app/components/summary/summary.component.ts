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
  errorMessage: string;

  constructor(private _summary: SummaryService, element: ElementRef) { }

  ngOnInit() {
    this._summary.getSummaryItems().subscribe(
      data => {
        this.summaryItems = data;
      },
      error => this.errorMessage = <any>error
    );
  }


}
