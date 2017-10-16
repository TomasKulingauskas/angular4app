import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-google-map2',
  templateUrl: './google-map2.component.html',
  styleUrls: ['./google-map2.component.css']
})
export class GoogleMap2Component implements OnInit {
  
  call(){
    alert("Skambina...");
  }
  
	location = { }

  time: number = Date.now()+1000000;

  state: boolean = true;
 
  constructor() {}
  

  ngOnInit() {
  if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position => {
        this.location = position.coords;
      });
    }
     setInterval(() => {
                this.state = !this.state;  
                }, 1000); 
  }

}
