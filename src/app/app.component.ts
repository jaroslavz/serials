import { Component, OnInit } from '@angular/core';
import { SerialsService } from './services/serials.service';
import { SerialModel } from './models/serial.model';
import { SelectItem } from 'primeng/api/selectitem';

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
  networks: SelectItem[] = [];
  years: SelectItem[] = [];

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

    this.years = [
      { label: '2015', value: '2015' },
      { label: '2016', value: '2016' },
      { label: '2017', value: '2017' },
      { label: '2018', value: '2018' },
      { label: '2019', value: '2019' },
      { label: '2020', value: '2020' }
    ];
  }

  getSerials() {
    this.serialsService.getserials().subscribe(
      response => {
        this.serials = response;
        response.forEach(item => {
          item.network.forEach(net => {
            this.networks.push({ label: net, value: net });
          });
        });

        this.networks = [...new Set(this.networks.map(s => s.label))].map(
          label => {
            const name = this.networks.find(s => s.label === label);
            return {
              label: name.label,
              value: name.value,
            };
          }
        );
      },
      error => {
        console.error(error);
      }
    );
  }

}
