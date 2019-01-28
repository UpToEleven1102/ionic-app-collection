import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MusicProvider} from "../../providers/music/music";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  allMusic

  constructor(public navCtrl: NavController, private musicService: MusicProvider) {

  }

  ionViewDidLoad(){
    this.musicService.getMusic().then(music => {
      this.allMusic = music
    })
  }
}
