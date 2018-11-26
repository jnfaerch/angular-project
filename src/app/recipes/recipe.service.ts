import { EventEmitter } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Hamburger with fries',
            'Simply the first recipe',
            'http://www.jalyrihgrill.com/Hamburger-Fries-6_99.jpg',
            [
                new Ingredient('Bun', 1),
                new Ingredient('Meat', 1),
                new Ingredient('Fries', 20)
            ]
        ),
        new Recipe(
            'Vegan burger',
            'Simply the second recipe',
            'http://www.ecotu.it/wp-content/uploads/2013/11/hamburgerlentil-620x400.jpg',
            [
                new Ingredient('Bun', 1),
                new Ingredient('Grass', 10),
                new Ingredient('Fries', 10)
            ]
        )
    ];

  getRecipes() {
      return this.recipes.slice();
  }
}
