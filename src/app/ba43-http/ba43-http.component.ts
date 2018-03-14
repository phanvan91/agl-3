import { Component, OnInit } from '@angular/core';
import { TodoService } from './../service/todo.service';
import { Subscrible } from 'rxjs/subscription';
import { Todo } from './../model/todo.class';
@Component({
  selector: 'app-ba43-http',
  templateUrl: './ba43-http.component.html',
  styleUrls: ['./ba43-http.component.css']
})
export class Ba43HttpComponent implements OnInit , ngOnDestroy {
  todo;
  sub;
  name : string;
  age;
  constructor(
    public todoservice : TodoService;
  ) { }

  ngOnInit() {
    this.loadData();
  }
  loadData(){
    this.sub = this.todoservice.getalltodo().subscribe(data =>{
      this.todo = data;
    },error => {
      this.todoservice.handleError(error)
    });
  }

  OnAdd(){
    let vv = new Todo(this.name,this.age);
    this.sub = this.todoservice.AddTodo(vv).subscribe(data =>{
      this.todo.push(data);
    },error => {
      this.todoservice.handleError(error)
    });)
  }

  ngOnDestroy(){
    if(this.sub){
      this.sub.unsubscribe();
    }
  }

}
