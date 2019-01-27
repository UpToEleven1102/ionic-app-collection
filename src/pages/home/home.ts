import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MusicProvider} from "../../providers/music/music";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  music = []

  constructor(public navCtrl: NavController, private musicService: MusicProvider) {
    this.musicService.getMusic().subscribe({next: value => this.music.push(value), error: err => console.warn(err)})
  }

}
