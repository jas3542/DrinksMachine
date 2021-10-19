import { getHtmlTagDefinition } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable, of, Subject, throwError } from 'rxjs';
import { Drink } from '../_models/Drink';

import { Tea } from "../_models/Tea"
import { Coffee } from "../_models/Coffee"
import { Chocolate } from "../_models/Chocolate"

import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, retry, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private drinks: string[] = [];
  public headers: HttpHeaders;

  constructor(private httpClient: HttpClient) { 
      this.headers = new HttpHeaders({'Content-Type':'application/json',});
  }
  
  public getDrinks(): Observable<string[]> {
    return this.httpClient.get<string[]>("https://localhost:44320/api/drinks"/*,{params: httpParams}*/)
     .pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    );
  }

  public getTea(drink: Tea): Observable<any> {
    return this.httpClient.post<string[]>("https://localhost:44320/api/drinks/tea/recipe",JSON.stringify(drink),{headers: this.headers})
     .pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    );
  }

  public getCoffee(drink: Coffee): Observable<string[]> {

    return this.httpClient.post<string[]>("https://localhost:44320/api/drinks/coffee/recipe",JSON.stringify(drink),{headers: this.headers})
     .pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    );
  }

  public getChocolate(drink: Chocolate): Observable<string[]> {

    return this.httpClient.post<string[]>("https://localhost:44320/api/drinks/chocolate/recipe",JSON.stringify(drink),{headers: this.headers})
     .pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    );
  }

  

  // Handle the errors
  private handleError(error: HttpErrorResponse) {
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}