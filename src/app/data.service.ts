import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError ,tap} from 'rxjs';
import { Router } from '@angular/router';
import { User } from './shared/user.interface';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient,private router:Router) {}

  getData(): Observable<User[]> {
    const url = 'https://65aa055f081bd82e1d95de7d.mockapi.io/todo/todo/';
    return this.http.get<User[]>(url); // Return the Observable directly
  }
 
  postDataStudent( name: string, avatar: string, email:string, subject1:number,subject2:number,subject3:number): Observable<User[]> {
    const params = {  name, avatar,email,subject1,subject2,subject3};
    const apiUrl = `https://65aa055f081bd82e1d95de7d.mockapi.io/todo/todo/`;
    
     return this.http.post<User[]>(apiUrl, params);
   
  }
  
  getUserData(id: number): Observable<User[]> {
   
    const url = `https://65aa055f081bd82e1d95de7d.mockapi.io/todo/todo/${id}`;
  
    return this.http.get<User[]>(url)
      .pipe(
        tap(data => console.log("User data fetched:", data)), // Log successful response
        catchError(error => {
          console.error("Error fetching user data:", error);
          return ([]); // Return an empty array on error to avoid template errors
        })
      );
  }

  deleteUserData(id: number): Observable<any> {
    const url = `https://65aa055f081bd82e1d95de7d.mockapi.io/todo/todo/${id}`;
    return this.http.delete(url);
}

// updateStudentDetails(student: Element): Observable<User> {
//   const url = `https://65aa055f081bd82e1d95de7d.mockapi.io/todo/todo/${id}`;
   
//   // return this.http.put<User[]>(url)
// }
  
}
