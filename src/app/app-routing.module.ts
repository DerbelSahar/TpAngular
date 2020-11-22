import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ColorComponent } from './components/color/color.component';
import { TodoComponent } from './components/todo/todo.component';
import { CvComponent } from './cv/cv/cv.component';
import { FrontComponent } from './front/front.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {path: 'cv', children: [
    {path:'', component: CvComponent},
    {path:':id', component: CvComponent},
  ]},
  {path: '', component: FrontComponent, children: [
    {path: 'todo', component: TodoComponent},
    {path: 'color', component: ColorComponent},
  ]},
  {path: 'admin', component: AdminComponent},
  {path: 'login', component: LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
