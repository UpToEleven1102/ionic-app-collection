import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import {TodoProvider} from "../../providers/todo/todo";
import {ArchivedTodosPage} from "../archived-todos/archived-todos";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  todos = [];
  archived = [];
  reorderEnable = false;

  constructor(public navCtrl: NavController, private todoService: TodoProvider,private alertController: AlertController) {
    this.todos = todoService.getTodos();
  }

  toggleReorder() {
    this.reorderEnable = !this.reorderEnable;
  }

  navigateArchivedTodoPage(){
    this.navCtrl.push(ArchivedTodosPage);
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
              this.todoService.addTodo(data.addTodoInput);
            }
          }
        },
      ],
    });

    addTodoAlert.present().then(res => console.log(res)). catch(err => console.log(err));
  }
}
