import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model'
@Injectable()
export class RecipeService {


    recipeChanged = new Subject<Recipe[]>();
    private recipes: Recipe[] = [
        new Recipe ('Tasty Schnitzel', 
        'This is simply a test',
         'https://bigseventravel.com/wp-content/uploads/2020/07/Screenshot-2020-07-17-at-13.40.27.png',
         [
             new Ingredient('Meat', 1),
             new Ingredient('French Fries',20)
         ]),
        new Recipe ('Kabuli Palaw', 
        'Kabuli Palaw',
         'https://blog.iranroute.com/wp-content/uploads/2019/07/Ghormeh-Sabzi-8-e1563171294127-750x650.jpg',
         [
             new Ingredient('Buns',2),
             new Ingredient('Meat', 1)
         ]),

         new Recipe ('Ghorme Sabzi', 
        'Ghorme Sabzi',
         'https://i.pinimg.com/736x/77/75/5c/77755cb2a32c33cd4b713cd25ecb2138.jpg',
         [
             new Ingredient('Buns',2),
             new Ingredient('Meat', 1)
         ]),
         new Recipe ('Abgosht', 
        'Abgosht',
         'http://persianfoodtours.com/wp-content/uploads/2020/04/torshvash-persian-sour-stew.jpg',
         [
             new Ingredient('Buns',2),
             new Ingredient('Meat', 1)
         ]),
         new Recipe ('A Test Recipe', 
        'Ghormeh Sabzi',
         'https://i.pinimg.com/originals/25/8d/77/258d77402a5a9b4d5cd283160e4bf215.jpg',
         [
             new Ingredient('Buns',2),
             new Ingredient('Meat', 1)
         ]),
         new Recipe ('A Test Recipe', 
        'Ghormeh Sabzi',
         'https://i.pinimg.com/originals/25/8d/77/258d77402a5a9b4d5cd283160e4bf215.jpg',
         [
             new Ingredient('Buns',2),
             new Ingredient('Meat', 1)
         ])
      ];

      constructor(private slService: ShoppingListService){}


      setRecipes(recipes: Recipe[]){
          this.recipes = recipes;
          this.recipeChanged.next(this.recipes.slice());
          
      }


      getRecipes(){
          return this.recipes.slice();
      }
      getRecipe(index:number){
          return this.recipes[index];
      }
      addIngredientsToShoppingList(ingredient: Ingredient[]){
          this.slService.addIngredients(ingredient);

      }

      addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
      }

      updateRecipe(index: number, newRecipe: Recipe){
          this.recipes[index] = newRecipe;
          this.recipeChanged.next(this.recipes.slice());
      }

      deleteRecipe(index: number){
          this.recipes.splice(index, 1);
          this.recipeChanged.next(this.recipes.slice());
      }
}