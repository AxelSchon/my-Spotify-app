import { Component, OnInit } from '@angular/core';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';
import { genre_cardModel } from 'src/app/layouts/search-layout/search-components/Models/genre_card.model';
import { CardsService } from 'src/app/services/cards.service';
import { GenreCardsService } from 'src/app/services/genre-card.service';
import { cardModel } from '../Models/card.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private cs:CardsService) { }

  ngOnInit(): void {
  }

  addCard(card:cardModel) {
    console.log("You can add product.");
    console.log(card);
    this.cs.addCard(card);
  }



}
