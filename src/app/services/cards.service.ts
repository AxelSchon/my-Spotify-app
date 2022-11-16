import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { cardModel } from "../navigation/Models/card.model";
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable(
    {providedIn: 'root'}
)
export class CardsService{
    private baseUrl: string = "https://my-spotify-app-26c53-default-rtdb.firebaseio.com/";
    private cardsEndpoint: string = "cards.json";

    constructor(private db:AngularFireDatabase){
    }

    getCards(){
        return this.db.list<cardModel>("cards").valueChanges();
    }

    getCard(index: number){
        return this.db.list<cardModel>("cards").valueChanges();     
    }

}