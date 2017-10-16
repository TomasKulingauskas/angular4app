import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { GoogleMapComponent } from './../google-map/google-map.component';


@Component({
  selector: 'app-my-new-component',
  templateUrl: './my-new-component.component.html',
  styleUrls: ['./my-new-component.component.css']
})

export class MyNewComponentComponent implements OnInit {

  str: string;
  error: string;
	maxlength = '7';

   clicked() {
    
    if (this.str === undefined || this.str.length < 5) {
      this.error = "Klaida. Per mažai simbolių";
      
    } else if (this.str.match("^[a-zA-Z0-9]*$") && this.str.match("^[^QWXqwx]*$") ) {
      this.router.resetConfig([
      {path: '', component: MyNewComponentComponent},
      {path: 'google-map', component: GoogleMapComponent}
    ]);
      this.router.navigateByUrl('google-map');

    } else {
      this.error = "Klaida. Neleistini simboliai.";
  }

} 

restrictSpace(event) {
    if (event.keyCode === 32) {
        return false;
    }
}

  constructor(private router: Router) {}

  ngOnInit() {

    }

}

