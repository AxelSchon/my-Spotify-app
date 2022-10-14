import { Component, OnInit } from '@angular/core';
import { popular_sectionModel } from './navigation/Models/popular_section.mode';
import { PopularSectionService } from 'src/app/services/popular-section.service';

@Component({
  selector: 'app-artist-page-layout',
  templateUrl: './artist-page-layout.component.html',
  styleUrls: ['./artist-page-layout.component.css']
})
export class ArtistPageLayoutComponent implements OnInit {

  popular_sections: popular_sectionModel[] = [];
  
  constructor(private PopularSectionService:PopularSectionService) {
    /* for mock list
    for (var popular_section of popular_section_list){
      this.popular_sections.push(popular_section);
    }
    */
  }

  ngOnInit(): void {
    this.PopularSectionService.getPopularSections().subscribe((data: popular_sectionModel []) =>{
      console.log("Fetching products");
      for (var popular_section of data){
        console.log(popular_section);
        this.popular_sections.push(popular_section);
      }
    });
  }

}
