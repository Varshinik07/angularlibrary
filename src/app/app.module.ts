import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule,Routes } from '@angular/router';
import { AddbookComponent } from './addbook/addbook.component';
import { FormsModule } from '@angular/forms';
import { ViewbookComponent } from './viewbook/viewbook.component';
import{HttpClientModule} from '@angular/common/http';
import { SearchbookComponent } from './searchbook/searchbook.component';
const appRoutes:Routes=[
  {
    path:"",component:AddbookComponent
  },
  {
    path:"viewbook",component:ViewbookComponent
  },
  {
    path:"searchbook",component:SearchbookComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddbookComponent,
    ViewbookComponent,
    SearchbookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
