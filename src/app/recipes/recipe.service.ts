import { Recipe } from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is a test',
      'https://upload.wikimedia.org/wikipedia/commons/a/a9/10_minute_Recipe_for_a_Healthy_Garden_Salad_-_49859886512.jpg'
    ),
    new Recipe(
      'Recipe 2',
      'This is another test',
      'https://upload.wikimedia.org/wikipedia/commons/a/a9/10_minute_Recipe_for_a_Healthy_Garden_Salad_-_49859886512.jpg'
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
