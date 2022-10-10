import { Component, OnInit } from '@angular/core';
import { genre_cardModel } from './search-components/Models/genre_card.model';
import { genre_card_list } from './search-components/Models/genre_card_list';

@Component({
  selector: 'app-search-layout',
  templateUrl: './search-layout.component.html',
  styleUrls: ['./search-layout.component.css']
})
export class SearchLayoutComponent implements OnInit {
  genre_cards: genre_cardModel[] = [];
  
  constructor() {
    for (var genre_card of genre_card_list){
      this.genre_cards.push(genre_card);
    }

  }
  ngOnInit(): void {
  }

}