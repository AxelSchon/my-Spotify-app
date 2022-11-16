import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { genre_cardModel } from "../layouts/search-layout/search-components/Models/genre_card.model";
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable(
    {providedIn: 'root'}
)
export class GenreCardsService{
    private baseUrl: string = "https://my-spotify-app-26c53-default-rtdb.firebaseio.com/";
    private genreCardsEndpoint: string = "genre-cards.json";

    constructor(private db:AngularFireDatabase){
    }

    getGenreCards(){
        return this.db.list<genre_cardModel>("genre-cards").valueChanges();
    }

    getGenreCard(index: number){
        return this.db.list<genre_cardModel>("genre-cards").valueChanges();      
    }
}