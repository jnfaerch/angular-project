import { Recipe } from './recipe.model';

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe(
            'A test recipe',
            'Simply the first recipe',
            'https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg'
        ),
        new Recipe(
            'Another test recipe',
            'Simply the second recipe',
            'https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg'
        )
    ];

  getRecipes() {
      return this.recipes.slice();
  }
}
