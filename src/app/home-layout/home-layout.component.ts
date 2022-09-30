import { Component, OnInit } from '@angular/core';
import { cardModel } from '../navigation/Models/card.model';
import { card_list } from '../navigation/Models/card_list';


@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css']
})
export class HomeLayoutComponent implements OnInit {

  cards: cardModel[] = [];
  
  constructor() {
    for (var card of card_list){
      this.cards.push(card);
    }

  }

  ngOnInit(): void {
  }

}
