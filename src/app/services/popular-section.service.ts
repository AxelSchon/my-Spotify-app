import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { popular_sectionModel } from "../layouts/artist-page-layout/navigation/Models/popular_section.mode";

@Injectable(
    {providedIn: 'root'}
)
export class PopularSectionService{
    private baseUrl: string = "https://my-spotify-app-26c53-default-rtdb.firebaseio.com/";
    private genreCardsEndpoint: string = "popular-section.json";

    constructor(private http:HttpClient){
    }

    getPopularSections(){
        return this.http.get<popular_sectionModel []>(this.baseUrl + this.genreCardsEndpoint);
    }

    getPopularSection(index: number){
        return this.http.get<popular_sectionModel>(this.baseUrl + 'popular-section' + '/' + index + '.json');       
    }
}