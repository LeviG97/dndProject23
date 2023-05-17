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
    return this.http.get<Monster>(url)
    .pipe(
      tap(data => console.log('Monsterdata/error' + JSON.stringify(data))
      ),
      catchError(this.handleError)
    );
  }

  getMonsterDetails(url: string): Observable<Monster> {
    return this.http.get<Monster>(url);
  }

  private handleError(err:HttpErrorResponse){
    console.log('Monster:' + err.message);
    return throwError(() => new Error("Monster:" + err.message))
  }
}
