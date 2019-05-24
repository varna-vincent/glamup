import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  events: string[] = [];
  opened: boolean;

  constructor() { }

  ngOnInit() {
  }

  toggle(event) {
	 event.srcElement.classList.toggle("change");
  }
}
