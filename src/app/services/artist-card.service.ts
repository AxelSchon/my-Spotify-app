import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ArtistCardModel } from "../layouts/artist-page-layout/navigation/Models/artist-card.model";
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable(
    {providedIn: 'root'}
)
export class ArtistCardService{
    private baseUrl: string = "https://my-spotify-app-26c53-default-rtdb.firebaseio.com/";
    private cardsEndpoint: string = "artist-cards.json";

    constructor(private db:AngularFireDatabase){
    }

    getArtistCards(){
        return this.db.list<ArtistCardModel>("artist-cards").valueChanges();
    }

    getArtistCard(index: number){
        return this.db.list<ArtistCardModel>("artist-cards").valueChanges();       
    }
}