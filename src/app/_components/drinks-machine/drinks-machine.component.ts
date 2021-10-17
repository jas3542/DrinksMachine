import { Component, OnInit } from '@angular/core';
import { Chocolate } from 'src/app/_models/Chocolate';
import { Coffee } from 'src/app/_models/Coffee';
import { Drink } from 'src/app/_models/Drink';
import { Tea } from 'src/app/_models/Tea';
import { DataService } from '../../_services/DataService'
import {Location} from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drinks-machine',
  templateUrl: './drinks-machine.component.html',
  styleUrls: ['./drinks-machine.component.css']
})
export class DrinksMachineComponent implements OnInit {

  drinks : string[];
  selectedDrink : any;
  selectedDrinkName: string;
  isTea: boolean;
  isCoffee: boolean;
  isChocolate: boolean;

  messages: string[];
  teaProcess: string[];
  coffeeProcess: string[];
  chocolateProcess: string[];

  constructor(private dataService: DataService, private router: Router) { 
    this.drinks = [];
    this.selectedDrink = null;
    this.selectedDrinkName = null;
    this.isTea = false;
    this.isCoffee = false;
    this.isChocolate = false;

    this.messages = [];
    this.teaProcess = [];
    this.coffeeProcess = [];
    this.chocolateProcess = [];

    this.getListOfDrinks();
  }

  ngOnInit(): void {
    
  }

  getListOfDrinks(): void{
    this.dataService.getDrinks().subscribe(res => {
      this.drinks = res;
    });
  }

  drinkSelected(drinkName: string) {
    this.selectedDrinkName = drinkName;
    this.selectedDrink = this.getDrinkType(drinkName);

    this.CheckDrinkType(this.selectedDrink); // prints the recipe on the screen

    if (this.isTea) {
      this.dataService.getTeaRecipe(this.selectedDrink).subscribe(val => {
       this.teaProcess = val;
      });
    }
    if (this.isCoffee) {
      this.dataService.getCoffeeRecipe(this.selectedDrink).subscribe(val => {
        this.coffeeProcess = val;
       });
    }

    if (this.isChocolate) {
      this.dataService.getChocolateRecipe(this.selectedDrink).subscribe(val => {
        this.chocolateProcess = val;
       });
    }
    
  }
  
  getDrinkType(name: string): Drink {
    var drink = null;
    if (name==this.drinks[0]) { // Lemon tea
      drink = new Tea();
      drink.lemonTea = true;
      
    }else if (name==this.drinks[1]) { // coffee
      drink = new Coffee();
    }else if (name==this.drinks[2]) { // chocolate
      drink = new Chocolate();
    }
    return drink;

  }

  CheckDrinkType(drink: any): void {
    if (this.selectedDrink instanceof Tea) {
      this.isTea = true;
      this.printTeaProcess();
    }
    else if (this.selectedDrink instanceof Coffee) {
      this.isCoffee = true;
      this.printCoffeeProcess();
    }
    else if (this.selectedDrink instanceof Chocolate) {
      this.isChocolate = true;
      this.printChocolateProcess();
    }
  }
  
  printTeaProcess(): void {
    //this.messages = [];
    var i = 0;
    
    setInterval(() => {
      if (this.messages.length == this.teaProcess.length)
        return; // finished
      this.messages.push(this.teaProcess[i])
      i++
    },500);
  }

  printCoffeeProcess(): void {
    //this.messages = [];
    var i = 0;
    
    setInterval(() => {
      if (this.messages.length == this.coffeeProcess.length)
        return; // finished
      this.messages.push(this.coffeeProcess[i])
      i++
    },500);
  }

  printChocolateProcess(): void {
    //this.messages = [];
    var i = 0;
    
    setInterval(() => {
      if (this.messages.length == this.chocolateProcess.length)
        return; // finished
      this.messages.push(this.chocolateProcess[i])
      i++
    },500);
  }

 
}
