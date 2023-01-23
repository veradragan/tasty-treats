import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MealsService {
  constructor(private http: HttpClient) {}

  getCategories(): Observable<any> {
    return this.http.get(
      `https://www.themealdb.com/api/json/v1/1/categories.php`
    );
  }

  getAreas(): Observable<any> {
    return this.http.get(
      `https://www.themealdb.com/api/json/v1/1/list.php?a=list`
    );
  }
}
