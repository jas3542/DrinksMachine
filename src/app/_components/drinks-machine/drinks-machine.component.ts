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
    this.drinks = this.getListOfDrinks();
  }

  ngOnInit(): void {
    
  }

  getListOfDrinks(): string[] {
    return this.dataService.getDrinksList();
  }

  drinkSelected(drinkName: string) {
    console.log(drinkName);
    this.selectedDrinkName = drinkName;
    this.dataService.getDrink(drinkName).subscribe(val => {
      this.selectedDrink = val;
      
      this.CheckDrinkType(this.selectedDrink);
    });
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
    this.teaProcess.push(this.selectedDrink.boilWater());
    this.teaProcess.push(this.selectedDrink.steepWater());
    this.teaProcess.push(this.selectedDrink.pourDrinkInCup("tea"));
    this.teaProcess.push(this.selectedDrink.addLemon());
    
    setInterval(() => {
      if (this.messages.length == this.teaProcess.length)
        return; // finished
      this.messages.push(this.teaProcess[i])
      i++
    },1000);
  }

  printCoffeeProcess(): void {
    //this.messages = [];
    var i = 0;
    this.coffeeProcess.push(this.selectedDrink.boilWater());
    this.coffeeProcess.push(this.selectedDrink.brewCoffeeGrounds());
    this.coffeeProcess.push(this.selectedDrink.pourDrinkInCup("coffee"));
    this.coffeeProcess.push(this.selectedDrink.addSugar());
    this.coffeeProcess.push(this.selectedDrink.addMilk());
    
    setInterval(() => {
      if (this.messages.length == this.coffeeProcess.length)
        return; // finished
      this.messages.push(this.coffeeProcess[i])
      i++
    },1000);
  }

  printChocolateProcess(): void {
    //this.messages = [];
    var i = 0;
    this.chocolateProcess.push(this.selectedDrink.boilWater());
    this.chocolateProcess.push(this.selectedDrink.addChocolatePowder());
    this.chocolateProcess.push(this.selectedDrink.pourDrinkInCup("chocolate"));
    
    setInterval(() => {
      if (this.messages.length == this.chocolateProcess.length)
        return; // finished
      this.messages.push(this.chocolateProcess[i])
      i++
    },500);
  }

 
}
