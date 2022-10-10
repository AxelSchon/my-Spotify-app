import { Component, OnInit } from '@angular/core';
import { popular_sectionModel } from './navigation/Models/popular_section.mode';
import { popular_section_list } from './navigation/Models/popular_section_list';

@Component({
  selector: 'app-artist-page-layout',
  templateUrl: './artist-page-layout.component.html',
  styleUrls: ['./artist-page-layout.component.css']
})
export class ArtistPageLayoutComponent implements OnInit {

  popular_sections: popular_sectionModel[] = [];
  
  constructor() {
    for (var popular_section of popular_section_list){
      this.popular_sections.push(popular_section);
    }

  }

  ngOnInit(): void {
  }

}
