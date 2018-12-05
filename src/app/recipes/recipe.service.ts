import { EventEmitter, Injectable } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Hamburger with fries',
            'Juicy burger and fries',
            'http://www.jalyrihgrill.com/Hamburger-Fries-6_99.jpg',
            [
                new Ingredient('Bun', 1),
                new Ingredient('Meat', 1),
                new Ingredient('Fries', 20)
            ]
        ),
        new Recipe(
            'Vegan burger',
            'Not as juicy and without the meat',
            'http://www.ecotu.it/wp-content/uploads/2013/11/hamburgerlentil-620x400.jpg',
            [
                new Ingredient('Bun', 1),
                new Ingredient('Grass', 10),
                new Ingredient('Fries', 10)
            ]
        )
    ];

    constructor(private shopListService: ShoppingListService) {}

  getRecipes() {
      return this.recipes.slice();
  }

  getRecipe(index: number) {
      return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shopListService.addIngredients(ingredients);
  }
}
