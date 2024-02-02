import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DataService } from '../shared/data.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../shared/user.interface';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
  tempControl = new FormControl();
  constructor(
    private http: HttpClient,
    private dataService: DataService,
    private router: Router
  ) { this.dataSource = new MatTableDataSource<User>();}
  listuser!: User[];
  dataSource?: any;
  displayedColumns: string[] = ['id', 'name', 'avatar', 'expand', 'delete']; // Adjust based on your data properties

  ngOnInit() {
    this.tempControl.valueChanges.subscribe((value) => {
      console.log(value);
    });
   this.onpageload();
  }

  /**
   * loads user detials into the  Mat table using a GET reqeust
   * @function onpageload
   *  @returns {void}
   */
  onpageload(): void {
    this.dataService.getData().subscribe({
      next: (responseData) => {
        this.dataSource = new MatTableDataSource(responseData);
      },
      error: (err) => {
        console.log(err);
      },
      complete() {
        console.log('Method Completed');
      },
    });
  }
  /**
   * redirects the user to registration page
   * @function registerStudent
   *  @returns {void}
   */
  registerStudent(): void {
    this.router.navigate(['register']);
  }

  /**
   * Displays all the student data
   * @function expandData
   * @param {number} id - This is the user id passed from the HTML Expand Button
   *  @returns {void}
   */
  expandData(id: number): void {
    this.router.navigateByUrl(`/students/${id}`);
  }

  /**
   * Deletes the user from the table
   * @function deleteData
   * @param {number} id - This is the user id passed from the HTML Delete Button
   *  @returns {void}
   */
  deleteData(id: number): void {
    this.dataService.deleteUserData(id).subscribe({
      next: (Response: User) => {
        alert('Delete Successful');
        location.reload();
        console.log('next response', Response);
      },
      error: (err) => {
        console.log(err);
      },
      complete() {
        console.log('deleteData Method completed');
      },
    });
  }
}
