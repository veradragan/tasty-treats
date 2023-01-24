import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MealsService {
  private baseUrl = `https://www.themealdb.com/api/json/v1/1`;

  constructor(private http: HttpClient) {}

  getCategories(): Observable<any> {
    return this.http.get(`${this.baseUrl}/categories.php`);
  }

  getAreas(): Observable<any> {
    return this.http.get(`${this.baseUrl}/list.php?a=list`);
  }

  getMealByName(name: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/search.php?s=${name}`);
  }

  getMealDetails(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/lookup.php?i=${id}`);
  }
}
