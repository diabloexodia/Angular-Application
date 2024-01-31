import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../data.service';
import { User } from '../shared/user.interface';
import { MatTableDataSource } from '@angular/material/table';

interface Student {
  name: string;
  avatar: string;
  email: string;
  subject1: number;
  subject2: number;
  subject3: number;
}
@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})



export class EditStudentComponent {

  id?:number;

  
  constructor(private route: ActivatedRoute,private dataServices:DataService) {}
  
  ngOnInit(): void {
    
    
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.fetchStudentDetails(this.id);
        }
      );
    }
    studentdata!: Student [];
    dataSource2?:any;
   // studentdata?: any[];
    //  dataSource?:any;
    displayedColumns: string[] = ['name', 'id', 'avatar','email','sub1','sub2','sub3']; // Adjust based on your data properties
    
    fetchStudentDetails(id: number): void {
      this.dataServices.getUserData(id).subscribe({
        next: (userData2) => {
          this.dataSource2 = [userData2];
          // this.dataSource= this.studentdata
        //  this.dataSource= new MatTableDataSource(this.studentdata);
          console.log("Student data received:", this.dataSource2); // Log data after it's received
        },
       
    });

    }
    

  }
  


