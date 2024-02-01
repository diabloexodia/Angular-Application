import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataService } from '../data.service';
import { User } from '../shared/user.interface';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// interface Student {
//   id:number;
//   name: string;
//   avatar: string;
//   email: string;
//   subject1: number;
//   subject2: number;
//   subject3: number;
// }
@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})



export class EditStudentComponent {

  id?:number;
  loginForm :FormGroup | any ;
  
  constructor(private formBuilder:FormBuilder,private route: ActivatedRoute,private dataServices:DataService,private router:Router) {}
  
  ngOnInit(): void {
    
    
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.fetchStudentDetails(this.id);
        }
      );
    }
    studentdata!: User [];
    dataSource2?:any;
   // studentdata?: any[];
    //  dataSource?:any;
    displayedColumns: string[] = ['name', 'id', 'avatar','email','sub1','sub2','sub3','Edit']; // Adjust based on your data properties
    
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
    // editStudent(Element:any):void {
    //   const studentid= this.dataSource2.id;
    //   console.log(Element);
    //   this.router.navigate([`/studentEdit/${Element}`]);
      
    // }
    editDetails(id:number){
      this.router.navigateByUrl(`/studentEdit/${id}`);
    }

  }
  


