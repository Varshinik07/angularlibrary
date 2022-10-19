import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule,Routes } from '@angular/router';
import { AddbookComponent } from './addbook/addbook.component';
import { FormsModule } from '@angular/forms';
const appRoutes:Routes=[
  {
    path:"",component:AddbookComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddbookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
