import { Component } from '@angular/core';
import {NavController, LoadingController, Loading, Refresher} from 'ionic-angular';
import {MusicProvider} from "../../providers/music/music";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  allMusic

  constructor(public navCtrl: NavController, private musicService: MusicProvider, private loadingCtrl: LoadingController) {

  }

  getMusic(e: Refresher, loadingModal: Loading) {
    this.musicService.getMusic().then(res => {
      this.allMusic = res
      if (loadingModal) {
        loadingModal.dismissAll()
      }
      if (e) {
        e.complete()
      }
    })
  }

  ionViewDidLoad(){
    const loadingModal = this.loadingCtrl.create({content: "Getting Music"})

    loadingModal.present()

    this.getMusic(null, loadingModal)
  }
}
