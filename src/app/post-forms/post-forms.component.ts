import { Component} from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { User } from '../shared/User.interface';
@Component({
  selector: 'app-post-forms',
  templateUrl: './post-forms.component.html',
  styleUrls: ['./post-forms.component.css'],
})
export class PostFormsComponent  {
  loginForm: FormGroup ;

  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      avatar: ['', Validators.required],
      subject1: ['', Validators.required],
      subject2: ['', Validators.required],
      subject3: ['', Validators.required],
    });
  }

  /**
   * Submitshandler calls the postData funtion if the form is valid
   *  @function submitHandler
   *  @returns {void}
   */
  submitHandler = (): void => {
    if (this.loginForm.valid) {
      this.postData();
      alert('success');
    } else {
      alert('fill all the mandatory fields');
    }
  };

  /**
   * Submits and registers the new user by making a POST request
   *  @function postData
   *  @returns {void}
   */
  postData(): void {
    const userData = this.loginForm.value;

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
        next: (newData: User) => {
          console.log(newData);
          
          this.router.navigate(['/']);
        },
        error: (err) => {
          console.log(err);
        },
        complete() {
          console.log('postData Method completed');
        },
      });
  }

  
  get department(): FormControl {
    return this.loginForm.get('deparment') as FormControl;
  }
  get email(): FormControl {
    return this.loginForm.get('email') as FormControl;
  }
  
}
