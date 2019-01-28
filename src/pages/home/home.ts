import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import {MusicProvider} from "../../providers/music/music";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  allMusic

  constructor(public navCtrl: NavController, private musicService: MusicProvider, private loadingCtrl: LoadingController) {

  }

  ionViewDidLoad(){
    const loadingModal = this.loadingCtrl.create({content: "Getting Music"})

    loadingModal.present()

    this.musicService.getMusic().then(music => {
      this.allMusic = music
      loadingModal.dismissAll()
    })
  }
}
