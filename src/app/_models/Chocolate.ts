import { Drink } from "./Drink"

export class Chocolate extends Drink {
    constructor() {
        super();
    }

    boilWater(): string {
        return super.boilWater();
    }

    addChocolatePowder(): string {
        return "Adding chocolate powder";
    }
    
    pourDrinkInCup(drinkName: string): string {
        return super.pourDrinkInCup(drinkName);
    }
}