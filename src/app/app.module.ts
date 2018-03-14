import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { TodoService } from './service/todo.service';
import { AppComponent } from './app.component';
import { Ba43HttpComponent } from './ba43-http/ba43-http.component';


@NgModule({
  declarations: [
    AppComponent,
    Ba43HttpComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
