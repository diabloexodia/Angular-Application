import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { DataService } from '../shared/data.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { User } from '../shared/user.interface';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css'],
})
export class EdituserComponent {
  studentForm: FormGroup | any;
  dataSource!: any;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.studentForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      avatar: ['', Validators.required],
      subject1: ['', Validators.required],
      subject2: ['', Validators.required],
      subject3: ['', Validators.required],
    });
    const id = this.route.snapshot.paramMap.get('id'); // get id from route parameter
    if (id) {
      // if id exists
      this.dataService.getUserData(Number(id)).subscribe((student: User) => {
        this.student = student;
        this.studentForm.setValue({
          username: student.name,
          email: student.email,
          avatar: student.avatar,
          subject1: student.subject1,
          subject2: student.subject2,
          subject3: student.subject2,
        });
      });
    }
  }
  /**
   * Addes the new student details to the server
   *  @function editData
   *  @returns {void}
   */
  putData() {
    const userData = this.studentForm.value;

    this.dataService
      .postDataStudent(
        userData.username,
        userData.avatar,
        userData.email,
        userData.subject1,
        userData.subject2,
        userData.subject3
      )
      .subscribe({
        next: (newData: any) => {
          // Acknowledge single-record response
          this.dataSource.data.push(newData); // Append the new record
          this.dataSource._updateChangeSubscription(); // Notify MatTableDataSource
          console.log('Data posted and appended:', this.dataSource.data);
        },
      });
  }

  student: User = {} as User;
  /**
   * Extracts hte id from the URl and display student information card
   *  @function editData
   *  @returns {void}
   */
  editData(): void {
    const id = this.route.snapshot.paramMap.get('id'); // get id from route parameter

    if (id) {
      // if id exists
      this.student.id = +id; // assign id to student, convert from string to number using the '+' sign
    }
    this.dataService.updateStudentDetails(this.student).subscribe({
      next: (updatedStudent) => {
        console.log('Student details updated successfully:', updatedStudent);
        // Navigate back to the profile page

        alert('Updated Successfully');
        this.router.navigate([`/student/${updatedStudent.id}`]);
      },
      error: (err) => {
        console.error('Error updating student details:', err);
      },
    });
  }
  /**
   * returns the user back to the home page
   *  @function back
   *  @returns {void}
   */
  back(): void {
    this.router.navigate([`/`]);
  }
}
