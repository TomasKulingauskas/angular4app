import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from '../user.service'


@Component({
  selector: 'app-my-new-component',
  templateUrl: './my-new-component.component.html',
  styleUrls: ['./my-new-component.component.css']
})

export class MyNewComponentComponent implements OnInit {

    value: any;          //vartotojo į formą įvesti duomenys 
    error: string;      //kintamasis klaidai atvaizduoti, jei forma užpildyta neteisingai 
	  maxlength = '7';    //maksimalus simbolių kiekis formoje 

    onSubmit(value: any) {     //iškviečiama funkcija paspaudus mygtuką "Toliau"
        if (this.value === undefined || this.value.length < 5) {      //jei vartotojas nieko neįrašė arba įrašė per mažai
            this.error = "Klaida. Per mažai simbolių";
            /*
              toliau naudojam regexp ir praleidžiam 
              tik skaičius ir raides, išmetam q, w, x.
            */
        } else if (this.value.match("^[a-zA-Z0-9]*$") && this.value.match("^[^QWXqwx]*$")) {  
            /*
            sekanti funkcija yra aprašyta user.service.ts faile. 
             Kadangi else if reikalavimai išpildyti,
             auth guard funkcija canActivate() grąžina true reikšmę, 
             tada galima parodyti žemėlapį.
            */ 
            this.user.setUserLoggedIn();   //<---- true 
            this.router.navigate(['google-map']);

        } else {
            this.error = "Klaida. Neleistini simboliai.";
        }
      } 

    restrictSpace(event) {              //neleidžia dėlioti tarpų pildant formą
        if (event.keyCode === 32) {
            return false;
        }
    }

constructor(private router: Router, private user:UserService) {}

ngOnInit() {
    }
}