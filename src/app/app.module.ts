import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableDataSource } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostFormsComponent } from './post-forms/post-forms.component'
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatIconModule} from '@angular/material/icon';
import { EditStudentComponent } from './edit-student/edit-student.component';
@NgModule({
  declarations: [
    AppComponent,
    PostFormsComponent,
    HomePageComponent,
    EditStudentComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,MatTableModule,ReactiveFormsModule,
    RouterModule,AppRoutingModule, NgbModule,MatIconModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
