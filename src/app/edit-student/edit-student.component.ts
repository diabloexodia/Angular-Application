import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { User } from '../shared/User.interface';
import { FormBuilder } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css'],
})
export class EditStudentComponent implements OnInit {
  id?: number;
  dataSource2: MatTableDataSource<User>;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private dataServices: DataService,
    private router: Router
  ) {
    this.dataSource2 = new MatTableDataSource<User>([]);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.fetchStudentDetails(this.id);
    });
  }
  displayedColumns: string[] = [
    'name',
    'id',
    'avatar',
    'email',
    'sub1',
    'sub2',
    'sub3',
    'Edit',
  ]; // Adjust based on your data properties
  fetchStudentDetails(id: number): void {
    this.dataServices.getUserData(id).subscribe({
      next: (userData2) => {
        this.dataSource2.data = [userData2];
        console.log('Student data received:', this.dataSource2); // Log data after it's received
      },
    });
  }
  editDetails(id: number): void {
    this.router.navigateByUrl(`/studentEdit/${id}`);
  }
}
