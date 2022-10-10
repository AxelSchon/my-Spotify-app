import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-genre-card',
  templateUrl: './genre-card.component.html',
  styleUrls: ['./genre-card.component.css']
})
export class GenreCardComponent implements OnInit {
  @Input() img: string;
  @Input() name: string;
  @Input() color: string;

  constructor() {
    this.img = "";
    this.name = "";
    this.color = "";
  }
  ngOnInit(): void {
  }

}
