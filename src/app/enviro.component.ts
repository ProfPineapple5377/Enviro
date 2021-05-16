import { Component } from '@angular/core';

@Component({
  selector: 'enviro-app',
  templateUrl: './enviro.template.html',
  styleUrls: ['./enviro.style.css']
})
export class EnviroApp {
  data: any;
  results: any;
  constructor() {
    let url = "https://data.cdp.net/resource/marp-zazk.json";
    this.fetchData(url)
      .then((response_data) => {
        this.data = response_data;
        console.log('For testing only');
        console.log(this.data);
    });
  }
  fetchData(url){
    return fetch(url)
        .then(response => response.json())
            .then(async result => {
                return result;
            });
  }
  parseData(value: String){
    if(!value){
        console.warn("no input given");
        return;
    }
    this.results = this.data.filter(item => item.company_name.toLowerCase().includes(value.toLowerCase()));
    console.log("results");
    console.log(this.results);
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
