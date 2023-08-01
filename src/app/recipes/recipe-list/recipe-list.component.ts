import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: Recipe[] = [
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
}
