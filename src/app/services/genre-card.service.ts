import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { genre_cardModel } from "../layouts/search-layout/search-components/Models/genre_card.model";

@Injectable(
    {providedIn: 'root'}
)
export class GenreCardsService{
    private baseUrl: string = "https://my-spotify-app-26c53-default-rtdb.firebaseio.com/";
    private genreCardsEndpoint: string = "genre-cards.json";

    constructor(private http:HttpClient){
    }

    getGenreCards(){
        return this.http.get<genre_cardModel []>(this.baseUrl + this.genreCardsEndpoint);
    }

    getGenreCard(index: number){
        return this.http.get<genre_cardModel>(this.baseUrl + 'genre-cards' + '/' + index + '.json');       
    }
}