import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TodoProvider} from "../../providers/todo/todo";

/**
 * Generated class for the ArchivedTodosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-archived-todos',
  templateUrl: 'archived-todos.html',
})
export class ArchivedTodosPage {
  private archives = []

  constructor(public navCtrl: NavController, public navParams: NavParams, private todoService: TodoProvider) {
    this.archives = this.todoService.getArchivedTodos()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArchivedTodosPage');
  }

}
