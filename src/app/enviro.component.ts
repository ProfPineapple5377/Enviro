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
        this.data = response_data
        console.log("For testing only");
        console.log(this.data);
    })
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
