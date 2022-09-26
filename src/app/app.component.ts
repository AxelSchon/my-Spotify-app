import { Component } from '@angular/core';
import { cardModel } from './navigation/Models/card.model';
import { card_list } from './navigation/Models/card_list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world-app';
  cards: cardModel[] = [];
  
  constructor() {
    for (var card of card_list){
      this.cards.push(card);
    }

  }
}
