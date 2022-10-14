import { Component, OnInit } from '@angular/core';
import { genre_cardModel } from './search-components/Models/genre_card.model';
import { genre_card_list } from './search-components/Models/genre_card_list';
import { GenreCardsService } from 'src/app/services/genre-card.service';

@Component({
  selector: 'app-search-layout',
  templateUrl: './search-layout.component.html',
  styleUrls: ['./search-layout.component.css']
})
export class SearchLayoutComponent implements OnInit {
  genre_cards: genre_cardModel[] = [];
  
  constructor(private GenreCardsService:GenreCardsService) {
    /* (for mock list)
    for (var genre_card of genre_card_list){
      this.genre_cards.push(genre_card);
    }
    */

  }
  ngOnInit(): void {
    this.GenreCardsService.getGenreCards().subscribe((data: genre_cardModel []) =>{
      console.log("Fetching products");
      for (var genre_card of data){
        console.log(genre_card);
        this.genre_cards.push(genre_card);
      }
    });
  }

}