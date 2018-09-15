import { Injectable } from '@angular/core';
import { Recipe } from "./recipe.model";
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

    constructor (private slService: ShoppingListService) {

    }

    private recipes: Recipe[] = [
        new Recipe(
            'Dal Bati', 
            'Super Delicious', 
            'https://www.ruchiskitchen.com/wp-content/uploads/2014/11/Dal-Bati-recipe.jpg',
            [
                new Ingredient('Dal', 100),
                new Ingredient('Flour', 200)
            ]
        ),
        new Recipe(
            'Pizza', 
            'Tasty', 
            'https://d33oocx83zywzt.cloudfront.net/img650_new/10100701116.jpg',
            [
                new Ingredient('Flour', 300),
                new Ingredient('Salad', 4)
            ]
        )
    ];

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

    getRecipes () {
        return this.recipes.slice();
    }

    getRecipe (index: number) {

        return this.recipes[index];
    }

    addIngredientsToShoppingList (ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number){
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }

}