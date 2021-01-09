import { Subject } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients() {
    return [...this.ingredients];
  }

  addedShoppingList(name: string, amount: number) {
    const newAddedIngredient = new Ingredient(name, amount);

    this.ingredients.push(newAddedIngredient);
    this.ingredientsChanged.next([...this.ingredients]);
  }

  addIngredients(ingredients: Ingredient[]) {
    // for(let ingredient of ingredients) {
    //   this.addedShoppingList(ingredient.name, ingredient.amount);
    // }
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next([...this.ingredients]);
  }
}