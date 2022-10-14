import { Component, OnInit } from '@angular/core';
import { cardModel } from 'src/app/navigation/Models/card.model';
import { card_list } from 'src/app/navigation/Models/card_list';
import { CardsService } from 'src/app/services/cards.service';



@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css']
})
export class HomeLayoutComponent implements OnInit {

  cards: cardModel[] = [];
  
  constructor(private cardsService:CardsService) {
    /* (using mock list)
    for (var card of card_list){
      this.cards.push(card);
    }
    */
  }

  ngOnInit(): void {
    this.cardsService.getCards().subscribe((data: cardModel []) =>{
      console.log("Fetching products");
      for (var card of data){
        console.log(card);
        this.cards.push(card);
      }
    });
  }

}
