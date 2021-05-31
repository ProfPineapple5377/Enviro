import { Component } from '@angular/core';

@Component({
  selector: 'app-enviro',
  templateUrl: './enviro.template.html',
  styleUrls: ['./enviro.style.css']
})
export class EnviroAppComponent {
  data: any;
  results: any;
  constructor() {
    const url = 'https://data.cdp.net/resource/marp-zazk.json';
    this.fetchData(url)
      // tslint:disable-next-line:variable-name
      .then((response_data) => {
        this.data = response_data;
        console.log('For testing only');
        console.log(this.data);
    });

    // other data
    this.fetchData('https://data.cdp.net/resource/4hek-p74b.json')
      // tslint:disable-next-line:variable-name
      .then((response_data) => {
        this.data = response_data;
        console.log('For testing only 2');
        console.log(this.data);
      });

    this.fetchData('https://data.cdp.net/resource/5fxz-29mk.json')
      // tslint:disable-next-line:variable-name
      .then((response_data) => {
        this.data = response_data;
        console.log('For testing only 3');
        console.log(this.data);
      });

    this.fetchData('https://data.cdp.net/resource/tsqv-bik6.json')
      // tslint:disable-next-line:variable-name
      .then((response_data) => {
        this.data = response_data;
        console.log('For testing only 4');
        console.log(this.data);
      });

  }
  fetchData(url) {
    return fetch(url)
        .then(response => response.json())
            .then(async result => {
                return result;
            });
  }
  parseData(value: string) {
    if (!value) {
        console.warn('no input given');
        return;
    }
    this.results = this.data.filter(item => item.company_name.toLowerCase().includes(value.toLowerCase()));
    console.log('results');
    console.log(this.results);
  }

  githubLink() {
    window.open('https://github.com/ProfPineapple5377/Enviro');
  }
}
/*
  Data sets backup:
    link: https://data.cdp.net/Companies/2013-Global-500-Emissions-and-Response-Status/marp-zazk
      api: https://data.cdp.net/resource/marp-zazk.json

    link: https://data.cdp.net/Companies/2012-Global-500-Emissions-and-Response-Status/4hek-p74b
        api: https://data.cdp.net/resource/4hek-p74b.json

    link: https://data.cdp.net/Companies/2014-Forests-Risk-Assessment/5fxz-29mk
        api: https://data.cdp.net/resource/5fxz-29mk.json

    link:
        api: https://data.cdp.net/resource/tsqv-bik6.json
*/
