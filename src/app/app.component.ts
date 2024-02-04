import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './shared/User.interface';
import { DataService } from './services/data.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'apitest';
  tempControl = new FormControl();
  constructor(
    private http: HttpClient,
    private dataService: DataService,
    private router: Router
  ) {}
  listuser!: User[];
  dataSource!: MatTableDataSource<User>;
  displayedColumns: string[] = ['id', 'name', 'avatar']; // Adjust based on your data properties

  ngOnInit():void  {
    this.tempControl.valueChanges.subscribe((value) => {
      console.log(value);
    });
    this.dataService.getData().subscribe({
      next: (responseData) => {
        this.listuser = responseData;
        this.dataSource = new MatTableDataSource(this.listuser);
        console.log(this.listuser);
      },
    });
  }

  registerStudent():void {
    this.router.navigate(['register']);
  }
}
