import { Component, OnInit } from '@angular/core';
import { SerialsService } from './services/serials.service';
import { SerialModel } from './models/serial.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [SerialsService]
})
export class AppComponent implements OnInit {
  title = 'TV Serials';
  serials: SerialModel[];
  cols: any[];
  constructor(private serialsService: SerialsService) {
  }

  ngOnInit() {
    this.getSerials();

    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'season', header: 'Season' },
      { field: 'network', header: 'Network' },
      { field: 'premiereDate', header: 'Premiere' }
    ];
  }

  getSerials() {
    this.serialsService.getserials().subscribe(
      response => {
        console.log(response);
        this.serials = response;
      },
      error => {
        console.error(error);
      }
    );
  }

}
