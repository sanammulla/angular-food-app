import { Subscription } from 'rxjs/Subscription';
import { Recipe } from './../recipe.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipeSubscription: Subscription;
  recipes: Recipe[];

  constructor(private recipeService: RecipeService,
      private router: Router,
      private route: ActivatedRoute) { }

  ngOnInit() {
    this.recipeSubscription = this.recipeService.recipesChanged.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    )
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe () {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy(){
    this.recipeSubscription.unsubscribe();
  }

}
