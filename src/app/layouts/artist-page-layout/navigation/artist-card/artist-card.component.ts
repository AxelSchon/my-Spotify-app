import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist-card',
  templateUrl: './artist-card.component.html',
  styleUrls: ['./artist-card.component.css']
})
export class ArtistCardComponent implements OnInit {

  @Input() img: string;
  @Input() artistName: String;
  @Input() title: String;
  constructor() {
    this.img = "";
    this.artistName = "";
    this.title = "";
  }
  ngOnInit(): void {
  }
}