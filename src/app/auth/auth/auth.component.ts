import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  public onSubmit(data : NgForm) {
    console.log("Button clicked");
    console.log(data.value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
