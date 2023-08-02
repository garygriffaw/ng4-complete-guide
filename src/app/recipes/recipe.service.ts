import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is a test',
      'https://upload.wikimedia.org/wikipedia/commons/a/a9/10_minute_Recipe_for_a_Healthy_Garden_Salad_-_49859886512.jpg',
      [
        new Ingredient('Lettuce', 1),
        new Ingredient('Croutons', 1),
        new Ingredient('Tomatos', 2),
      ]
    ),
    new Recipe(
      'Recipe 2',
      'This is another test',
      'https://www.eatingwell.com/thmb/MgogUdX7uFDsesnGLAqkmdZiZ8M=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/RM_Creamy_Chicken_Mushroom_and_Spinach_Skillet_Casserole_1x1_4755-eeaf608727dc4b02b7e7098345882089.jpg',
      [
        new Ingredient('Pasta', 1),
        new Ingredient('Chicken', 1),
        new Ingredient('Green Beans', 2),
        new Ingredient('Spinach', 1),
      ]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
