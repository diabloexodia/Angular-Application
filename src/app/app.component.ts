import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './shared/user.interface';
import { DataService } from './data.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'apitest';
  tempControl = new FormControl();
  constructor(private http: HttpClient, private dataService: DataService,private router:Router) {}
listuser!: User[];
dataSource!:any;
displayedColumns: string[] = ['id', 'name', 'avatar']; // Adjust based on your data properties

ngOnInit(){
  this.tempControl.valueChanges.subscribe(value => {
    console.log(value);
  })
 this. dataService.getData().subscribe({
    next: (responseData) => {
     this.listuser =responseData;
      this.dataSource= new MatTableDataSource(this.listuser);
     console.log("this is the ninitial get request" , (this.listuser));
    },
   
  });
}


registerStudent(){
  console.log('haiii')
  this.router.navigate(['register']);
  
  //for viewing student details
  // this.route.navigateByURL(`/students/${id}`);
}
}
