import { Component } from '@angular/core';
import { Quote } from './quote';
import { QuoteService } from './quote.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = "Quotes"
  quote = {
    q: "",
    a: ""
  }
  
  constructor(private quotes: QuoteService ) {}

  ngOnInit(): void {
    this.getQuote()
  }

  getQuote() {
    this.quotes.getQuotes().subscribe(
      (newQuote: Quote[]) => {
        this.quote = newQuote[0]
      }
    )
  }

}
