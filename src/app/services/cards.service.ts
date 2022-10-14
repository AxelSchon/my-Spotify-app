import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { cardModel } from "../navigation/Models/card.model";

@Injectable(
    {providedIn: 'root'}
)
export class CardsService{
    private baseUrl: string = "https://my-spotify-app-26c53-default-rtdb.firebaseio.com/";
    private cardsEndpoint: string = "cards.json";

    constructor(private http:HttpClient){
    }

    getCards(){
        return this.http.get<cardModel []>(this.baseUrl + this.cardsEndpoint);
    }

    getCard(index: number){
        return this.http.get<cardModel>(this.baseUrl + 'cards' + '/' + index + '.json');       
    }
}