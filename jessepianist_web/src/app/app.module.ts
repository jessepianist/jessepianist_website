import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // Import RouterModule for routing
import { AppComponent } from './app.component';
import { HeaderComponent } from '../header/header.component';

@NgModule({
  
  imports: [
    BrowserModule,
    RouterModule // Import RouterModule for routing
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }