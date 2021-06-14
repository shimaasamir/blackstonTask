import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-suggestions-item',
  templateUrl: './suggestions-item.component.html',
  styleUrls: ['./suggestions-item.component.scss']
})
export class SuggestionsItemComponent implements OnInit {
@Input() followed:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
