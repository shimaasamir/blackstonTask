import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
usersList:any;
feedList:any;
  constructor() {
    this.usersList =  [{
      "gender": "male",
      "name": {
          "title": "Mr",
          "first": "Noe",
          "last": "Vidal"
      },
      "location": {
          "street": {
              "number": 8648,
              "name": "Rue des Jardins"
          },
          "city": "Orléans",
          "state": "Allier",
          "country": "France",
          "postcode": 18112,
          "coordinates": {
              "latitude": "-0.5029",
              "longitude": "-121.7826"
          },
          "timezone": {
              "offset": "-4:00",
              "description": "Atlantic Time (Canada), Caracas, La Paz"
          }
      },
      "email": "noe.vidal@example.com",
      "login": {
          "uuid": "cf4dba01-a86e-4c3c-88f5-7950cc9c4630",
          "username": "whitefrog497",
          "password": "lakers1",
          "salt": "NIz5XpXq",
          "md5": "c113064aefa90f9cd2b7e7d488d7e0fa",
          "sha1": "0050f68e16a2bccd55cdb962661abd88848d058b",
          "sha256": "ab31e6fee8c92883ff76ebd1c52a7909022a20b958e6e4d08ea2717a255b02e2"
      },
      "dob": {
          "date": "1976-07-26T07:52:57.796Z",
          "age": 45
      },
      "registered": {
          "date": "2008-08-11T03:01:39.661Z",
          "age": 13
      },
      "phone": "04-75-72-42-03",
      "cell": "06-52-09-31-38",
      "id": {
          "name": "INSEE",
          "value": "1NNaN17124804 25"
      },
      "picture": {
          "large": "https://randomuser.me/api/portraits/men/0.jpg",
          "medium": "https://randomuser.me/api/portraits/med/men/0.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/men/0.jpg"
      },
      "nat": "FR"
  },
  {
      "gender": "female",
      "name": {
          "title": "Mademoiselle",
          "first": "Kim",
          "last": "Leroux"
      },
      "location": {
          "street": {
              "number": 2956,
              "name": "Quai Chauveau"
          },
          "city": "Grabs",
          "state": "Thurgau",
          "country": "Switzerland",
          "postcode": 8845,
          "coordinates": {
              "latitude": "-28.2636",
              "longitude": "6.6683"
          },
          "timezone": {
              "offset": "-12:00",
              "description": "Eniwetok, Kwajalein"
          }
      },
      "email": "kim.leroux@example.com",
      "login": {
          "uuid": "30e625c1-b136-4c07-8a39-8930455b5afb",
          "username": "ticklishgorilla438",
          "password": "redone",
          "salt": "P8RkhAG8",
          "md5": "eb3d49876074f1609c4f72c67bba485d",
          "sha1": "20c786d01759b506c37fd1124aec57743bc0e350",
          "sha256": "dd61f1d02b1ed552422409fc564f18235d06061b8c7865f95e69ece3fb5b22fd"
      },
      "dob": {
          "date": "1985-09-11T20:56:10.754Z",
          "age": 36
      },
      "registered": {
          "date": "2013-01-16T14:05:15.105Z",
          "age": 8
      },
      "phone": "077 382 81 19",
      "cell": "075 128 94 83",
      "id": {
          "name": "AVS",
          "value": "756.0232.6992.12"
      },
      "picture": {
          "large": "https://randomuser.me/api/portraits/women/86.jpg",
          "medium": "https://randomuser.me/api/portraits/med/women/86.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/women/86.jpg"
      },
      "nat": "CH"
  },
  {
      "gender": "female",
      "name": {
          "title": "Mrs",
          "first": "Maëly",
          "last": "Blanchard"
      },
      "location": {
          "street": {
              "number": 557,
              "name": "Place de L'Abbé-Basset"
          },
          "city": "Montpellier",
          "state": "Hautes-Alpes",
          "country": "France",
          "postcode": 37921,
          "coordinates": {
              "latitude": "-58.1075",
              "longitude": "-135.5472"
          },
          "timezone": {
              "offset": "0:00",
              "description": "Western Europe Time, London, Lisbon, Casablanca"
          }
      },
      "email": "maely.blanchard@example.com",
      "login": {
          "uuid": "68fbd66c-9e0d-475d-8e32-f123df7e6135",
          "username": "yellowrabbit277",
          "password": "kyle",
          "salt": "WNrApnVE",
          "md5": "11f65089511782a5e3c149903e725d42",
          "sha1": "524b7eb183928c2dd79eb1b3450cc6d63d08e087",
          "sha256": "6cdb1f1b944a38408aedb1b422390861b1ddddf3d4a7e1e5612369e6c94da970"
      },
      "dob": {
          "date": "1949-04-08T20:12:28.506Z",
          "age": 72
      },
      "registered": {
          "date": "2014-05-04T08:39:36.885Z",
          "age": 7
      },
      "phone": "05-10-99-89-59",
      "cell": "06-24-71-68-71",
      "id": {
          "name": "INSEE",
          "value": "2NNaN24854264 13"
      },
      "picture": {
          "large": "https://randomuser.me/api/portraits/women/3.jpg",
          "medium": "https://randomuser.me/api/portraits/med/women/3.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/women/3.jpg"
      },
      "nat": "FR"
  },
  {
      "gender": "male",
      "name": {
          "title": "Monsieur",
          "first": "Christoph",
          "last": "Perrin"
      },
      "location": {
          "street": {
              "number": 6172,
              "name": "Rue de L'Abbé-Groult"
          },
          "city": "Orny",
          "state": "Fribourg",
          "country": "Switzerland",
          "postcode": 1835,
          "coordinates": {
              "latitude": "-48.1111",
              "longitude": "62.3996"
          },
          "timezone": {
              "offset": "+9:30",
              "description": "Adelaide, Darwin"
          }
      },
      "email": "christoph.perrin@example.com",
      "login": {
          "uuid": "ff3247cc-1670-4387-8ca4-643c78fc31b0",
          "username": "purplepeacock493",
          "password": "gilligan",
          "salt": "57RcqfQa",
          "md5": "4f8672f41c382e3095e5d4e1daed1f57",
          "sha1": "f000ea34c5a92d76bb37931115c1cea845068d97",
          "sha256": "391b6d1a47be846c1cb294fab1a2995f8bdaa2f659735d2987f6c42a81be8232"
      },
      "dob": {
          "date": "1955-08-10T11:38:04.000Z",
          "age": 66
      },
      "registered": {
          "date": "2017-03-11T07:45:54.732Z",
          "age": 4
      },
      "phone": "076 815 12 99",
      "cell": "076 805 76 22",
      "id": {
          "name": "AVS",
          "value": "756.3883.8974.17"
      },
      "picture": {
          "large": "https://randomuser.me/api/portraits/men/5.jpg",
          "medium": "https://randomuser.me/api/portraits/med/men/5.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/men/5.jpg"
      },
      "nat": "CH"
  },
  {
      "gender": "female",
      "name": {
          "title": "Ms",
          "first": "Andréa",
          "last": "Blanchard"
      },
      "location": {
          "street": {
              "number": 8239,
              "name": "Rue D'Abbeville"
          },
          "city": "Strasbourg",
          "state": "Eure",
          "country": "France",
          "postcode": 79898,
          "coordinates": {
              "latitude": "68.3561",
              "longitude": "-111.4471"
          },
          "timezone": {
              "offset": "0:00",
              "description": "Western Europe Time, London, Lisbon, Casablanca"
          }
      },
      "email": "andrea.blanchard@example.com",
      "login": {
          "uuid": "0efef9f4-7b2a-4cc2-86d9-63a727302ce9",
          "username": "sadpeacock607",
          "password": "eddie1",
          "salt": "iqnMEUUJ",
          "md5": "39b8562b7a2390986358f8fd8e497e22",
          "sha1": "802a8e1bbe118450be360c824689c38d3f9260f9",
          "sha256": "064634e8d752ce5a5d4bdd7b23f00508b90807cee4c200e9c661304972dcbca1"
      },
      "dob": {
          "date": "1948-07-31T02:04:01.930Z",
          "age": 73
      },
      "registered": {
          "date": "2019-02-23T15:28:35.211Z",
          "age": 2
      },
      "phone": "03-55-24-25-86",
      "cell": "06-49-21-27-54",
      "id": {
          "name": "INSEE",
          "value": "2NNaN99356250 61"
      },
      "picture": {
          "large": "https://randomuser.me/api/portraits/women/89.jpg",
          "medium": "https://randomuser.me/api/portraits/med/women/89.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/women/89.jpg"
      },
      "nat": "FR"
  },
  {
      "gender": "male",
      "name": {
          "title": "Mr",
          "first": "Coşkun",
          "last": "Kocabıyık"
      },
      "location": {
          "street": {
              "number": 894,
              "name": "Şehitler Cd"
          },
          "city": "Kütahya",
          "state": "Aksaray",
          "country": "Turkey",
          "postcode": 12069,
          "coordinates": {
              "latitude": "7.9597",
              "longitude": "54.4129"
          },
          "timezone": {
              "offset": "-11:00",
              "description": "Midway Island, Samoa"
          }
      },
      "email": "coskun.kocabiyik@example.com",
      "login": {
          "uuid": "4fefb041-a06a-4b63-9015-d2823ef4c08b",
          "username": "heavylion113",
          "password": "ontario",
          "salt": "JoDuybg1",
          "md5": "c8c0f36a4f536e33f7075893376d6a16",
          "sha1": "13f11a5edc76a585527caf085f59553bc0e89c0d",
          "sha256": "468d9e55b08a76cd4e748f7a938fc77166b4e77e1c67bc607c9f7b3954c4e5ec"
      },
      "dob": {
          "date": "1946-02-20T17:11:43.656Z",
          "age": 75
      },
      "registered": {
          "date": "2003-09-18T19:29:23.800Z",
          "age": 18
      },
      "phone": "(997)-855-0985",
      "cell": "(073)-050-5166",
      "id": {
          "name": "",
          "value": null
      },
      "picture": {
          "large": "https://randomuser.me/api/portraits/men/47.jpg",
          "medium": "https://randomuser.me/api/portraits/med/men/47.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/men/47.jpg"
      },
      "nat": "TR"
  },
  {
      "gender": "female",
      "name": {
          "title": "Mrs",
          "first": "Nicole",
          "last": "Lawson"
      },
      "location": {
          "street": {
              "number": 8227,
              "name": "Richmond Road"
          },
          "city": "Newcastle upon Tyne",
          "state": "Wiltshire",
          "country": "United Kingdom",
          "postcode": "P5X 3PG",
          "coordinates": {
              "latitude": "20.1578",
              "longitude": "-81.8019"
          },
          "timezone": {
              "offset": "-1:00",
              "description": "Azores, Cape Verde Islands"
          }
      },
      "email": "nicole.lawson@example.com",
      "login": {
          "uuid": "35dd4dfb-72c7-4e11-87d7-d4c24397cc95",
          "username": "purplegoose301",
          "password": "bball",
          "salt": "XIcmAnug",
          "md5": "a219361382c80ca93aa9cdb1d4b650b5",
          "sha1": "49597a3303865b83635dc8e73d8f6071ce9f3ccc",
          "sha256": "afac6ecab3fc2718bc13bc303fe76a8831b3f0bc2e5c133af6a6e8c0ec597699"
      },
      "dob": {
          "date": "1946-05-27T04:33:46.309Z",
          "age": 75
      },
      "registered": {
          "date": "2010-07-11T01:52:29.023Z",
          "age": 11
      },
      "phone": "015242 58405",
      "cell": "0730-520-323",
      "id": {
          "name": "NINO",
          "value": "BC 53 70 62 O"
      },
      "picture": {
          "large": "https://randomuser.me/api/portraits/women/4.jpg",
          "medium": "https://randomuser.me/api/portraits/med/women/4.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/women/4.jpg"
      },
      "nat": "GB"
  }];
this.feedList=[{
  "albumId": 1,
  "id": 1,
  "title": "accusamus beatae ad facilis cum similique qui sunt",
  "url": "https://via.placeholder.com/600/92c952",
  "thumbnailUrl": "https://via.placeholder.com/150/92c952"
},
{
  "albumId": 1,
  "id": 2,
  "title": "reprehenderit est deserunt velit ipsam",
  "url": "https://via.placeholder.com/600/771796",
  "thumbnailUrl": "https://via.placeholder.com/150/771796"
},
{
  "albumId": 1,
  "id": 3,
  "title": "officia porro iure quia iusto qui ipsa ut modi",
  "url": "https://via.placeholder.com/600/24f355",
  "thumbnailUrl": "https://via.placeholder.com/150/24f355"
},
{
  "albumId": 1,
  "id": 4,
  "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
  "url": "https://via.placeholder.com/600/d32776",
  "thumbnailUrl": "https://via.placeholder.com/150/d32776"
}];
  console.log(this.usersList);
  console.log(this.feedList);
  }

  ngOnInit(): void {
  }

}
