import { Drink } from "./Drink"

export class Coffee extends Drink {
    milk: boolean;
    constructor() {
        super();
        this.milk = false;
    }

    boilWater(): string {
        return super.boilWater();
    }
    
    brewCoffeeGrounds(): string {
        return "Brewing coffee grounds"
    }

    pourDrinkInCup(drinkName: string): string { 
        if (this.milk) { // overrided because coffee will not fill up the cup if we want milk
            return "Pouring "+ drinkName + "with milk";
        }else {
            return super.pourDrinkInCup(drinkName);
        }
        
    }

    addSugar(): string {
        return "Adding sugar";
    }
    addMilk(): string {
        return "Adding milk";
    }
}