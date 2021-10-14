import { Drink } from "./Drink"

export class Tea extends Drink {
    lemonTea : boolean;
    constructor() {
        super();
        this.lemonTea = false;
    }

    boilWater(): string {
        return super.boilWater();
    }

    steepWater(): string {
        return "Steeping the water";
    }

    pourDrinkInCup(drinkName: string): string {
        return super.pourDrinkInCup(drinkName);
    }

    addLemon(): string {
        return "Adding Lemon";
    }
}