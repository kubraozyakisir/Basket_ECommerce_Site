import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutsComponent } from './components/layouts/layouts.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/layouts/navbar/navbar.component';
import { StoreModule } from '@ngrx/store';
import { BasketsReducer } from './state/baskets/baskets.reducer';

@NgModule({
  declarations: [
    AppComponent,
    LayoutsComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({"basketCount":BasketsReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
