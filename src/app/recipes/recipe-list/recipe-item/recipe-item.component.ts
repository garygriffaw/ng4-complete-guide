import { Component, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent {
  @Input() index: number;
  recipe: Recipe;

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipe = this.recipeService.getRecipe(this.index);
  }
}
