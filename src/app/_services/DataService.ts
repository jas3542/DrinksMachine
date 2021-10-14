import { getHtmlTagDefinition } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { Drink } from '../_models/Drink';

import { Tea } from "../_models/Tea"
import { Coffee } from "../_models/Coffee"
import { Chocolate } from "../_models/Chocolate"

@Injectable({
  providedIn: 'root'
})
export class DataService {
    private drinks: string[] = [];
  
    constructor(
      ) { 
          this.drinks = ["Lemon Tea","Coffee","Chocolate"];
      }
          
    getDrinksList() {
      return this.drinks;
    }

    getDrink(name: string): Observable<Drink> {
      var drink = null;
      if (name==this.drinks[0]) { // Lemon tea
        drink = new Tea();
        drink.lemonTea = true;
        
      }else if (name==this.drinks[1]) { // coffee
        drink = new Coffee();
      }else if (name==this.drinks[2]) { // chocolate
        drink = new Chocolate();
      }
      return of(drink);
    }
  }