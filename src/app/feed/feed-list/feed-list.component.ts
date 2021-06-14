import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed-list',
  templateUrl: './feed-list.component.html',
  styleUrls: ['./feed-list.component.scss']
})
export class FeedListComponent implements OnInit {
feedList:any = [];
  constructor() {
    this.feedList=[
      {
        imagePath:'https://i.picsum.photos/id/100/2500/1656.jpg?hmac=gWyN-7ZB32rkAjMhKXQgdHOIBRHyTSgzuOK6U0vXb1w',
        authImagePath:'https://randomuser.me/api/portraits/men/0.jpg',
        authName:'test user',
        likes: 3,
        comments:5
      },
      {
        imagePath:'https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk',
        authImagePath:'https://randomuser.me/api/portraits/men/0.jpg',
        authName:'test user',
        likes: 3,
        comments:5
      },
      {
        imagePath:'https://i.picsum.photos/id/1019/5472/3648.jpg?hmac=2mFzeV1mPbDvR0WmuOWSiW61mf9DDEVPDL0RVvg1HPs',
        authImagePath:'https://randomuser.me/api/portraits/men/0.jpg',
        authName:'test user',
        likes: 3,
        comments:5
      },
      {
        imagePath:'https://i.picsum.photos/id/1015/6000/4000.jpg?hmac=aHjb0fRa1t14DTIEBcoC12c5rAXOSwnVlaA5ujxPQ0I',
        authImagePath:'https://randomuser.me/api/portraits/men/0.jpg',
        authName:'test user',
        likes: 3,
        comments:5
      },
    ];
    localStorage.setItem('FEEDLIST',JSON.stringify(this.feedList));
    this.feedList = JSON.parse(localStorage.FEEDLIST);
  }

  ngOnInit(): void {

  }

}
