import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from '../user.service'

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})

export class GoogleMapComponent implements OnInit {

    location = {}; //objektas koordinatėms saugoti

    navigate() {                            
      this.user.setUserLoggedIn(); 
      this.router.navigate(['google-map2']);     //perkelia į tech. pagalbos žemėlapį
    }
      
constructor(private router: Router, private user: UserService) {}

ngOnInit() {
    if(navigator.geolocation){    //funkcija vartotojo koordinatėms gauti                                   
      navigator.geolocation.getCurrentPosition(position => {
      this.location = position.coords;
      });
    }
  }
}   