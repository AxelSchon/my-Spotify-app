import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-popular-section',
  templateUrl: './popular-section.component.html',
  styleUrls: ['./popular-section.component.css']
})
export class PopularSectionComponent implements OnInit {
  @Input() img: string;
  @Input() songName: string;
  @Input() monthlyListeners: string;
  @Input() playTime: string;
  @Input() rowIndex: string;

  constructor() {
    this.img = "";
    this.songName = "";
    this.monthlyListeners = "";
    this.playTime = "";
    this.rowIndex = "";
  }
  ngOnInit(): void {
  }

}
