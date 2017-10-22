import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-map2',
  templateUrl: './google-map2.component.html',
  styleUrls: ['./google-map2.component.css']
})

export class GoogleMap2Component implements OnInit {
  
    location = {};   

    time: number = Date.now()+1000000;  //kintamasis atvaizduoti tech. pagalbos atvykimo laikui 

    state: boolean = true;  //atvaizduoja tech. pagalbos vietą žemėlapyje
 
ngOnInit() {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position => {
      this.location = position.coords;
      });
    }

    setInterval(() => {
      this.state = !this.state;   //simuliuoja tech. pagalbos judėjimą
      }, 1000); 
    }
  }
