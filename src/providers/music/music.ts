import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MusicProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

const apiUrl = 'https://orangevalleycaa.org/api/music'

@Injectable()
export class MusicProvider {
  constructor(public http: HttpClient) {
  }

  getMusic() {
    return new Promise(resolve => {
      this.http.get(apiUrl).subscribe(data => {
        resolve(data)
      }, err => console.log(err))
    })
  }
}
