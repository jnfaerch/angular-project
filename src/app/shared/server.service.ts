import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';

@Injectable()
export class ServerService {
    constructor(private http: Http, private recipeService: RecipeService) {}

    storeRecipes() {
        // return this.http.post('https://ng-recipe-book-faerch.firebaseio.com/recipes.json',
        //     recipes,
        //     {headers: headers});
        return this.http.put('https://ng-recipe-book-faerch.firebaseio.com/recipes.json',
            this.recipeService.getRecipes());
    }

    getRecipes() {
        this.http.get('https://ng-recipe-book-faerch.firebaseio.com/recipes.json')
            .pipe(map(
                (response: any) => {
                    const recipes: Recipe[] = response.json();
                    for (const recipe of recipes) {
                        if (!recipe['ingredients']) {
                            recipe['ingredients'] = [];
                        }
                    }
                    return recipes;
                })
            )
            .subscribe(
                (recipes: Recipe[]) => {
                    this.recipeService.setRecipes(recipes);
                }
            );
    }
}
