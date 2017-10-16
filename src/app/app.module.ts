import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MyNewComponentComponent } from './my-new-component/my-new-component.component';
import { DataService } from './data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoogleMapComponent } from './google-map/google-map.component';
import { GoogleMap2Component } from './google-map2/google-map2.component';
import { FormsModule } from '@angular/forms';


export const ROUTES: Routes = [
  { path: '**', component: MyNewComponentComponent },
  ];


@NgModule({
  declarations: [
    AppComponent,
    MyNewComponentComponent,
    GoogleMapComponent,
    GoogleMap2Component
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(ROUTES),
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDbXKBUS0TghDXKvIIX32mNvKylfTLpyw4'
    })
  ],
  entryComponents: [GoogleMapComponent, GoogleMap2Component],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
