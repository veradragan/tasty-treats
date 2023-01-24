import { Component, OnInit } from '@angular/core';
import { MealsService } from '../meals.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  mealName: string = '';

  searchedMeal: any;
  ingredients: any[] = [];
  hasSearched = false;
  constructor(private mealsService: MealsService) {}

  ngOnInit(): void {}

  onSearch() {
    let meal: any = null;
    this.mealsService.getMealByName(this.mealName).subscribe({
      next: (data) => {
        if (data.meals) meal = data.meals[0];

        if (meal) {
          console.log(meal.idMeal);
          this.mealsService.getMealDetails(meal.idMeal).subscribe({
            next: (data) => {
              this.searchedMeal = data.meals[0];

              if (this.searchedMeal) {
                for (let i = 1; i <= 20; i++) {
                  let ingredient = meal[`strIngredient${i}`];
                  let measure = meal[`strMeasure${i}`];
                  if (ingredient) {
                    this.ingredients.push({ name: ingredient, measure });
                  }
                }
              }
            },
          });
        } else this.searchedMeal = null;
        this.hasSearched = true;
      },
    });
  }
}
