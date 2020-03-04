import { Component, OnInit } from '@angular/core';
import { SerialsService } from './services/serials.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [SerialsService]
})
export class AppComponent implements OnInit {
  title = 'TV Serials';

  constructor(private serialsService: SerialsService) {
  }

  ngOnInit() {
    this.getSerials();
  }

  getSerials() {
    this.serialsService.getserials().subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.error(error);
      }
    );
  }

}
