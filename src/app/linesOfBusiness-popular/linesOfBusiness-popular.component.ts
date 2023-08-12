import { Component, OnInit } from '@angular/core';
import { LineOfBusiness } from '../LineOfBusiness';
import { LineOfBusinessService } from '../lineOfBusiness.service';

@Component({
  selector: 'app-linesOfBusiness-popular',
  templateUrl: './linesOfBusiness-popular.component.html',
  styleUrls: [ './linesOfBusiness-popular.component.css' ]
})
export class LinesOfBusinessPopularComponent implements OnInit {
  popularLinesOB: LineOfBusiness[] = [];

  constructor(private lineOfBusinessService: LineOfBusinessService) { }

  ngOnInit() {
    this.getLinesOfBusiness();
  }

  getLinesOfBusiness(): void {
    this.lineOfBusinessService.getLinesOfBusiness()
      .subscribe(linesOfBusiness => {
        this.popularLinesOB = linesOfBusiness.sort((a,b) => b.quoteQuantity - a.quoteQuantity).slice(0,2);
      });
  }
}
