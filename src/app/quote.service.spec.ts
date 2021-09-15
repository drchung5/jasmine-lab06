import { TestBed, getTestBed } from '@angular/core/testing';

import { QuoteService } from './quote.service';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { Quote } from "./quote"

describe('QuoteService', () => {
  
  let injector
  let quoteService: QuoteService
  let httpMock: HttpTestingController

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers: [QuoteService]
    })

    injector = getTestBed();
    quoteService = injector.get(QuoteService);
    httpMock = injector.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(quoteService).toBeTruthy();
   });

   describe('#getQuote', () => {

    it('should return an Observable<Quote[]>', () => {
      const dummyQuotes: Quote[] = [{
        q: "Action this day!",
        a: "Winston Churchill",
        h: ""
      }]
      
      quoteService.getQuotes().subscribe(quotes => {
        expect(quotes.length).toBe(1)
        expect(quotes).toEqual(dummyQuotes)
      })

      const req = httpMock.expectOne(`/quote`)
      expect(req.request.method).toBe('GET')
      req.flush(dummyQuotes)
    })
  })

});
