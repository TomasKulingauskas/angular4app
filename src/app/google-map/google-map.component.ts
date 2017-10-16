import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Router} from "@angular/router";
import { GoogleMap2Component } from './../google-map2/google-map2.component';
import { MyNewComponentComponent } from './../my-new-component/my-new-component.component';


@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})

export class GoogleMapComponent implements OnInit {

location = {};

open() {
   this.router.resetConfig([
 	{path: '', component: MyNewComponentComponent},
 	{path: 'google-map', component: GoogleMapComponent},
 	{path: 'google-map2', component: GoogleMap2Component},
    ]);
    
   this.router.navigateByUrl('google-map2');
  }
      
   constructor(private router: Router) { }

ngOnInit(){
 if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position => {
        this.location = position.coords;
         
      });
    }
  }
 }   