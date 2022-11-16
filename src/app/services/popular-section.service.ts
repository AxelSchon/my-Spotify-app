import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { popular_sectionModel } from "../layouts/artist-page-layout/navigation/Models/popular_section.mode";
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable(
    {providedIn: 'root'}
)
export class PopularSectionService{
    private baseUrl: string = "https://my-spotify-app-26c53-default-rtdb.firebaseio.com/";
    private genreCardsEndpoint: string = "popular-section.json";

    constructor(private db:AngularFireDatabase){
    }

    getPopularSections(){
        return this.db.list<popular_sectionModel>("popular-section").valueChanges();
    }

    getPopularSection(index: number){
        return this.db.list<popular_sectionModel>("popular-section").valueChanges();     
    }
}