import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../shared/user.interface';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  tempControl = new FormControl();
  constructor(private http: HttpClient, private dataService: DataService,private router:Router) {}
  listuser!: User[];
  dataSource?:any;
  displayedColumns: string[] = ['id', 'name', 'avatar','expand','delete']; // Adjust based on your data properties
  
  ngOnInit(){
    
    this.tempControl.valueChanges.subscribe(value => {
      console.log(value);
      
    })
   this. dataService.getData().subscribe({
      next: (responseData) => {
       this.listuser =responseData;
        this.dataSource= new MatTableDataSource(this.listuser);
       console.log("this is" , (this.listuser));
      },
     
    });
    console.log("hee");
  }
  registerStudent(){
    console.log('haiii')
    this.router.navigate(['register']);
   
  }
  expandData(id:number){
    this.router.navigateByUrl(`/students/${id}`);
  }
  deleteData(id:number){
    this.dataService.deleteUserData(id).subscribe(response => {
      alert("Delete Successful");
      console.log(response);
      location.reload();
    
    

  });
}
  
}
