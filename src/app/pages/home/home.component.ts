import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isShown: boolean = false ; // hidden by default


toggleShow() {

this.isShown = ! this.isShown;

}

  constructor() { }

  ngOnInit(): void {
  }

}

