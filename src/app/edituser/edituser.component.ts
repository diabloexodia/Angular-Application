import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { User } from '../shared/user.interface';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent {

  studentForm :FormGroup | any ;
  dataSource!:any;

  constructor(private route:ActivatedRoute ,private formBuilder:FormBuilder, private dataService:DataService,private router:Router){}
  ngOnInit(): void {
    this.studentForm=this.formBuilder.group({
      username:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      avatar:['',Validators.required],
      subject1:['',Validators.required],
      subject2:['',Validators.required],
      subject3:['',Validators.required],
    });
    const id = this.route.snapshot.paramMap.get('id'); // get id from route parameter
    if (id) { // if id exists
      this.dataService.getUserData(Number(id)).subscribe((student: User) => {
        this.student = student;
        this.studentForm.setValue({
          'username': student.name,
          'email': student.email,
          'avatar': student.avatar,
          'subject1': student.subject1,
          'subject2': student.subject2,
          'subject3': student.subject2,
          
        });
      });
    }
  }


  //student!:User;
  submitHandler=() =>{
    if (this.studentForm.valid){
      alert("success");
      // this.postData();
      this.router.navigate(['/']);
    }else{
      alert("fill all the mandatory fields");
    }
    }
  putData() {
    const userData = this.studentForm.value;
   
    this.dataService.postDataStudent(userData.username, userData.avatar, userData.email,userData.subject1,userData.subject2,userData.subject3).subscribe({
      next: (newData: any) => {  // Acknowledge single-record response
        this.dataSource.data.push(newData); // Append the new record
        this.dataSource._updateChangeSubscription(); // Notify MatTableDataSource
        console.log("Data posted and appended:", this.dataSource.data);
      }
    });
  }
 
  student: User = {} as User;
  
  editData(): void {
    const id = this.route.snapshot.paramMap.get('id'); // get id from route parameter

    if (id) { // if id exists
      this.student.id = +id;  // assign id to student, convert from string to number using the '+' sign
    }

    // Update student details
    this.dataService.updateStudentDetails(this.student).subscribe(
      (updatedStudent) => {
        console.log('Student details updated successfully:', updatedStudent);
        // Navigate back to the profile page
        this.router.navigate([`/student/${updatedStudent.id}`]);
      },
      (error) => {
        console.error('Error updating student details:', error);
      }
    );
      // the student.id is stored in the below id
    console.log(this.student.id);
  }
}
