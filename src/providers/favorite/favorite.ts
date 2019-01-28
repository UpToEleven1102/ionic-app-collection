import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

/*
  Generated class for the FavoriteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FavoriteProvider {
  private favorites = []

  constructor(public http: HttpClient) {
    console.log('Hello FavoriteProvider Provider');
  }

  getFavorites() {
    return this.favorites
  }

  addFavorite(music) {
    this.favorites.push(music)
  }

  removeFavorite(music) {
    let idx = this.favorites.indexOf(music)
    if (idx >= 0)
      this.favorites.splice(idx, 1)
  }

  isFavorite(music) {
    return this.favorites.indexOf(music) >= 0
  }
}
