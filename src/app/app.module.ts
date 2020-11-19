import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { ColorComponent } from './components/color/color.component';
import { TwoComponent } from './components/two/two.component';
import { CardComponent } from './components/card/card.component';
import { PereComponent } from './components/pere/pere.component';
import { FilsComponent } from './components/fils/fils.component';
import { NgStyleComponent } from './directives/ng-style/ng-style.component';
import { WordComponent } from './directives/word/word.component';
import { NgClassComponent } from './directives/ng-class/ng-class.component';
import { HighlightDirective } from './highlight.directive';
import { RainbowDirective } from './rainbow.directive';
import { RainbowComponentComponent } from './components/rainbow-component/rainbow-component.component';
import { CvComponent } from './cv/cv/cv.component';
import { ItemComponent } from './cv/item/item.component';
import { ListComponent } from './cv/list/list.component'
import { DetailComponent } from './cv/detail/detail.component';
import { DefaultImagePipe } from './cv/default-image.pipe';
import { TodoComponent } from './components/todo/todo.component';
import { TodoListComponent } from './components/todo/todo-list/todo-list.component';
import { TodoFormComponent } from './components/todo/todo-form/todo-form.component';
import { TodoPageComponent } from './components/todo/todo-page/todo-page.component';
import { EmbaucheComponent } from './cv/embauche/embauche.component';
@NgModule({

  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ColorComponent,
    TwoComponent,
    CvComponent,
    ItemComponent,
    ListComponent,
    DetailComponent ,
    CardComponent,
    PereComponent,
    FilsComponent,
    NgStyleComponent,
    WordComponent,
    NgClassComponent,
    HighlightDirective,
    RainbowDirective,
    RainbowComponentComponent,
    DefaultImagePipe,
    TodoComponent,
    TodoListComponent,
    TodoFormComponent,
    TodoPageComponent,
    EmbaucheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
