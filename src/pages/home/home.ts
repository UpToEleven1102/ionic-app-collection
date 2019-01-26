import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  todos = [];
  archived = [];

  constructor(public navCtrl: NavController, private alertController: AlertController) {

  }

  openAddTodoAlert() {
    const addTodoAlert = this.alertController.create({
      title: 'Add new Todo',
      message: 'Enter your Todo',
      inputs: [
        {
          name: 'addTodoInput',
          type: 'text',
          placeholder: 'Todo',
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log(data)
          }
        },
        {
          text: 'Add',
          handler: data => {
            if (data.addTodoInput.length > 0) {
              this.todos.push(data.addTodoInput)
            }
          }
        },
      ],
    });

    addTodoAlert.present().then(res => console.log(res)). catch(err => console.log(err));
  }

  removeTodoItem(item) {
    const idx = this.todos.indexOf(item)
    this.todos.splice(idx, 1)
  }

  archiveTodoItem(item) {
    this.archived.push(item);
    this.removeTodoItem(item);

    console.log('archived: ', this.archived)
  }
}
