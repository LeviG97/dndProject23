import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError,tap } from 'rxjs';
import { Monster } from './Monster';

@Injectable({
  providedIn: 'root'
})
export class MonsterService {
  private endpoint = 'https://www.dnd5eapi.co/api/monsters';

  constructor(private http: HttpClient) { }

  searchMonsters(challengeRating: number): Observable<any> {
    const url = `${this.endpoint}?challenge_rating=${challengeRating}`;
    return this.http.get<any>(url);
  }

  getMonsterDetails(url: string): Observable<Monster> {
    return this.http.get<Monster>(url);
  }
}
