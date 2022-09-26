import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() img: string;
  @Input() artistName: String;
  @Input() albumName: String;
  constructor() {
    this.img = "";
    this.artistName = "";
    this.albumName = "";
  }

  ngOnInit(): void {
  }

}
