import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {FavoriteProvider} from "../../providers/favorite/favorite";

/**
 * Generated class for the FavoritePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favorite',
  templateUrl: 'favorite.html',
})
export class FavoritePage {
  private favorites = []

  constructor(public navCtrl: NavController, public navParams: NavParams, private favoriteService: FavoriteProvider) {
  }

  ionViewDidLoad() {
    this.favorites = this.favoriteService.getFavorites()
  }

}
