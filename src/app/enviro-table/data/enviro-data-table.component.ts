import {Component} from '@angular/core';

// tslint:disable-next-line:class-name
class company_result {
  private accountID: string;
  private name: string;
  private country: string;
  private reportYear: string;
  private responseStatus: string;
  private rating: string;

  constructor(accountID: string, name: string, country: string, reportYear: string, responseStatus: string, rating: string) {
    this.accountID = accountID;
    this.name = name;
    this.country = country;
    this.reportYear = reportYear;
    this.responseStatus = responseStatus;
    this.rating = rating;
  }

  getID() {
    return this.accountID;
  }

  getName() {
    return this.name;
  }
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'enviro-data-table',
  templateUrl: './enviro-data-table.template.html',
  styleUrls: ['./enviro-data-table.style.css']
})

export class EnviroDataTableComponent {
  results: any;
  data: Array<{ id: string, name: string, value: Array<company_result> }>;

  constructor() {
    this.data = new Array<{ id: string; name: string; value: Array<company_result> }>();
    const urlList = [
      'https://data.cdp.net/resource/marp-zazk.json',
      'https://data.cdp.net/resource/4hek-p74b.json',
    ];
    // 'https://data.cdp.net/resource/5fxz-29mk.json'
    urlList.forEach(url => {
      this.fetchData(url)
        // tslint:disable-next-line:variable-name
        .then((response_data) => {
          response_data.forEach(o => {
            this.appendData(new company_result(
              o.account_number,
              o.company_name,
              o.country,
              o.reporting_year,
              o.response_status,
              o.performance_band
              )
            );
          });
        });
    });
    console.log(this.data);
  }

  fetchData(url) {
    return fetch(url)
      .then(response => response.json())
      .then(async result => {
        return await result;
      });
  }

  appendData(value: company_result) {
    const res = this.data.find(i => i.id === value.getID());
    if (res === undefined) {
      this.data.push({id: value.getID(), name: value.getName(), value: [value]});
    } else {
      res.value.push(value);
    }
  }

  parseData(value: string) {
    if (!value) {
      console.warn('no input given');
      return;
    }
    this.results = new Array<company_result>();
    this.data.filter(item => item.name.toLowerCase().includes(value.toLowerCase())).forEach(i => {
      i.value.forEach(j => {
        this.results.push(j);
      });
    });
    console.log('results');
    console.log(this.results);
  }

  githubLink() {
    window.open('https://github.com/ProfPineapple5377/Enviro');
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
}
