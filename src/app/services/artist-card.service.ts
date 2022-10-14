import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ArtistCardModel } from "../layouts/artist-page-layout/navigation/Models/artist-card.model";

@Injectable(
    {providedIn: 'root'}
)
export class ArtistCardService{
    private baseUrl: string = "https://my-spotify-app-26c53-default-rtdb.firebaseio.com/";
    private cardsEndpoint: string = "artist-cards.json";

    constructor(private http:HttpClient){
    }

    getArtistCards(){
        return this.http.get<ArtistCardModel []>(this.baseUrl + this.cardsEndpoint);
    }

    getArtistCard(index: number){
        return this.http.get<ArtistCardModel>(this.baseUrl + 'artist-card' + '/' + index + '.json');       
    }
}