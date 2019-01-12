import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { AuthService } from '../auth/auth.service';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';

@Injectable()
export class ServerService {
    constructor(private http: Http,
        private recipeService: RecipeService,
        private authService: AuthService) {}

    storeRecipes() {
        const token = this.authService.getToken();
        // return this.http.post('https://ng-recipe-book-faerch.firebaseio.com/recipes.json',
        //     recipes,
        //     {headers: headers});
        return this.http.put('https://ng-recipe-book-faerch.firebaseio.com/recipes.json?auth=' + token,
            this.recipeService.getRecipes());
    }

    getRecipes() {
        const token = this.authService.getToken();
        this.http.get('https://ng-recipe-book-faerch.firebaseio.com/recipes.json?auth=' + token)
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
