import { Component, OnInit } from '@angular/core';
import { MealsService } from '../meals.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  categories: any;
  areas: any;

  constructor(private mealsService: MealsService) {}

  ngOnInit(): void {
    this.mealsService.getCategories().subscribe({
      next: (meals) => (this.categories = meals.categories),
      error: (e) => console.error(e),
    });

    this.mealsService.getAreas().subscribe({
      next: (area) => (this.areas = area.meals),
      error: (e) => console.error(e),
    });
    console.log(this.areas);
  }
}
