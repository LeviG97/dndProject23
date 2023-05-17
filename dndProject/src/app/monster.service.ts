import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError,tap } from 'rxjs';
import { Monster } from './Monster';

@Injectable({
  providedIn: 'root'
})
export class MonsterService {
  private endpoint = 'https://www.dnd5eapi.co';

  constructor(private http: HttpClient) { }

  searchMonsters(challengeRating: number): Observable<Monster> {
    const url = `${this.endpoint}/api/monsters?challenge_rating=${challengeRating}`;
    return this.http.get<any>(url);
  }

  getMonsterDetails(url: string): Observable<Monster> {
    return this.http.get<Monster>(url);
  }
}
