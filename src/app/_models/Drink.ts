export class Drink {
    constructor() {}

    boilWater(): string {
        return "Water is boiling";
    }
    pourDrinkInCup(drink: string): string {
        return "Pouring "+ drink;
    }
}