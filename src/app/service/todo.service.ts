import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { Todo } from './../model/todo.class';
@Injectable()
export class TodoService {
  API = 'http://5aa531ddf207ec00144accf1.mockapi.io/api/angular';
  constructor(
    public http : HttpClient;
  ) { }
  getalltodo() : Observable{
    return this.http.get(this.API);
  }
  AddTodo(todo) : Observable{
    return this.http.post(this.API,todo);
  }
  handleError(err){
    if(err.error instanceof Error){
      console.log(`Client-side error: ${err.error.message}`);
    }else{
      console.log(`server error: ${err.status} - ${err.error}`);
    }
  }
}
