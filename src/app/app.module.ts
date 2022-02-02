import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// Color Picker
import { ColorPickerModule } from 'ngx-color-picker';

// Iconify
import { IconModule } from '@visurel/iconify-angular';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TodoService } from './todo/todo.service';
import { TodoAddCardComponent } from './todo-add-card/todo-add-card.component';
import { TodoListComponent } from './todo-list/todo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoAddCardComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,

    IconModule,
    ColorPickerModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
