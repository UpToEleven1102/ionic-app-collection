import {Component} from '@angular/core';
import {NavController, LoadingController, Loading, Refresher, ActionSheetController} from 'ionic-angular';
import {MusicProvider} from "../../providers/music/music";
import {SocialSharing} from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  allMusic

  constructor(public navCtrl: NavController,
              private musicService: MusicProvider,
              private loadingCtrl: LoadingController,
              private actionSheetCtrl: ActionSheetController,
              private socialSharing: SocialSharing) {
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

  shareMusic(music) {
    const actionSheet = this.actionSheetCtrl.create({
      title: "Share",
      buttons: [{
        text: 'Facebook',
        icon: 'logo-facebook',
        handler: () => {this.socialSharing.shareViaFacebook(music.name, music.image, music.music_url)}

      }, {
        text: 'Twitter',
        icon: 'logo-twitter',
        handler: () => {this.socialSharing.shareViaTwitter(music.name, music.image, music.music_url)}
      }, {
        text: 'Share',
        icon: 'share'
      }]
    })

    actionSheet.present()
  }

  ionViewDidLoad() {
    const loadingModal = this.loadingCtrl.create({content: "Getting Music"})

    loadingModal.present()

    this.getMusic(null, loadingModal)
  }
}
