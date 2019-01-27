import { Component } from '@angular/core';
import { NavController, AlertController, ToastController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, private todoService: TodoProvider,private alertController: AlertController, private toastCtrl: ToastController) {
    this.todos = todoService.getTodos();
  }

  toggleReorder() {
    this.reorderEnable = !this.reorderEnable;
  }

  navigateArchivedTodoPage(){
    this.navCtrl.push(ArchivedTodosPage);
  }

  removeTodo(todo) {
    this.todoService.removeTodo(todo)
    const toast = this.toastCtrl.create({
      message: "Todo Removed",
      duration: 2000,
    })
    toast.present()
  }

  archiveTodo(todo) {
    this.todoService.archiveTodo(todo)
    const toast = this.toastCtrl.create({
      message: "Todo Archived",
      duration:2000
    })
    toast.present()
  }

  editTodo(todo, idx) {
    const editTodoAlert = this.alertController.create({
      title: "Edit todo",
      subTitle: todo,
      inputs: [{
        name: 'editTodoInput',
        type: 'text',
        placeholder: todo,
      }],
      buttons: [{
        text: 'Cancel',
      }, {
        text: 'Edit',
        handler: data => {
          this.todoService.editTodo(idx, data.editTodoInput)
          editTodoAlert.onDidDismiss(()=> {
            const toast = this.toastCtrl.create({
              message: 'Todo Edited',
              duration: 2000,
            })
            toast.present()
          })
        }
      }]
    }, )
    editTodoAlert.present()
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

            addTodoAlert.onDidDismiss(() => {
              const toast = this.toastCtrl.create({
                message: "Todo Added",
                duration: 2000,
                showCloseButton: true,
              });
              toast.present()
            })

          }
        },
      ],
    });

    addTodoAlert.present().then(res => console.log(res)). catch(err => console.log(err));
  }
}
