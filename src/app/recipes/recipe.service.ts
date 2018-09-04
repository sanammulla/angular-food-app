import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from "./recipe.model";
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    constructor (private slService: ShoppingListService) {

    }

    private recipes: Recipe[] = [
        new Recipe(
            'A Test Recipe', 
            'This is simply a test recipe', 
            'https://get.pxhere.com/photo/dish-meal-food-recipe-breakfast-fast-food-squid-lunch-cuisine-delicious-rice-thailand-shrimp-asian-food-vegetarian-food-foodstuff-thailand-food-thai-food-side-dish-the-pork-fried-rice-made-southeast-asian-food-steamed-rice-stir-fried-seafood-a-fried-egg-plate-lunch-1377212.jpg',
            [
                new Ingredient('Meat', 2),
                new Ingredient('French Fries', 20)
            ]
        ),
        new Recipe(
            'A Test Recipe2', 
            'This is simply a test recipe', 
            'https://get.pxhere.com/photo/dish-meal-food-recipe-breakfast-fast-food-squid-lunch-cuisine-delicious-rice-thailand-shrimp-asian-food-vegetarian-food-foodstuff-thailand-food-thai-food-side-dish-the-pork-fried-rice-made-southeast-asian-food-steamed-rice-stir-fried-seafood-a-fried-egg-plate-lunch-1377212.jpg',
            [
                new Ingredient('Buns', 3),
                new Ingredient('Salad', 4)
            ]
        )
    ];

    getRecipes () {
        return this.recipes.slice();
    }

    getRecipe (index: number) {

        return this.recipes[index];
    }

    addIngredientsToShoppingList (ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }

}