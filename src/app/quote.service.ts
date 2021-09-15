import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Quote } from './quote';
@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor( private httpClient: HttpClient ) { }

  getQuotes() : Observable<Quote[]> {    
    return this.httpClient.get<Quote[]>('/quote')
  }
}
