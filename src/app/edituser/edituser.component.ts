import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent {

  loginForm :FormGroup | any ;
  dataSource!:any;

  constructor(private formBuilder:FormBuilder, private dataService:DataService,private router:Router){}
  ngOnInit(){
    this.loginForm=this.formBuilder.group({
      username:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      department:['',Validators.required],
      avatar:['',Validators.required],
      subject1:['',Validators.required],
      subject2:['',Validators.required],
      subject3:['',Validators.required],
    });
  }
  submitHandler=() =>{
    if (this.loginForm.valid){
      alert("success");
      // this.postData();
      this.router.navigate(['/']);
    }else{
      alert("fill all the mandatory fields");
    }
    }
  putData() {
    const userData = this.loginForm.value;
   
    this.dataService.postDataStudent(userData.username, userData.avatar, userData.email,userData.subject1,userData.subject2,userData.subject3).subscribe({
      next: (newData: any) => {  // Acknowledge single-record response
        this.dataSource.data.push(newData); // Append the new record
        this.dataSource._updateChangeSubscription(); // Notify MatTableDataSource
        console.log("Data posted and appended:", this.dataSource.data);
      }
    });
  }     
}
