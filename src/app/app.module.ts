import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './_components/app.component';
import { DrinksMachineComponent } from './_components/drinks-machine/drinks-machine.component';

@NgModule({
  declarations: [
    AppComponent,
    DrinksMachineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
