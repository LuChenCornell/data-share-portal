import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { QuestionsComponent } from './components/questions/questions.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
      QuestionsComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }