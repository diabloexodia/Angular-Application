import { NgModule } from '@angular/core';
import { RouterModule, Routes, } from '@angular/router';
import { PostFormsComponent } from './post-forms/post-forms.component';
import { HomePageComponent } from './home-page/home-page.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
const routes: Routes = [
  { path: 'register', component: PostFormsComponent , pathMatch: 'full'},
  {
       path:"students/:id", component: EditStudentComponent
  },
  {path:'**',component:HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}


