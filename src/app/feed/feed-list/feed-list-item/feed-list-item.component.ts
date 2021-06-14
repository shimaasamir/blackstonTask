import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed-list-item',
  templateUrl: './feed-list-item.component.html',
  styleUrls: ['./feed-list-item.component.scss']
})
export class FeedListItemComponent implements OnInit {
@Input() ImagePath: string="";
@Input() authImagePath: string="";
@Input() authName: string='';
@Input() likes:number = 0;
@Input() comments:number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
