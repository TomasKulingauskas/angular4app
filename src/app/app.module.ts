import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MyNewComponentComponent } from './my-new-component/my-new-component.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { GoogleMap2Component } from './google-map2/google-map2.component';
import { FormsModule } from '@angular/forms';
import { UserService } from './user.service';
import { AuthGuard } from './auth.guard';
 

export const ROUTES: Routes = [
    { path: '', component: MyNewComponentComponent },
    { path: 'google-map',  component: GoogleMapComponent, canActivate: [ AuthGuard ] },
    { path: 'google-map2', component: GoogleMap2Component, canActivate: [ AuthGuard ] },
    { path: '**', redirectTo: '' }
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
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDbXKBUS0TghDXKvIIX32mNvKylfTLpyw4'
    })
  ],
  entryComponents: [GoogleMapComponent, GoogleMap2Component],
  providers: [UserService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
