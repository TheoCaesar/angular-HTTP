import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { environment } from 'src/environments/environment.development';

HttpClient
@Injectable({
  providedIn: 'root'
})
export class UserService {
  // varApiURL:string = "https://jsonplaceholder.typicode.com/users/"
  constructor(private varHttp:HttpClient) { }

  getUsers():Observable<User[]> {
    // return this.varHttp.get<User[]>(this.varApiURL)
    return this.varHttp.get<User[]>(environment.varApiURL)
  }

  getUserObj(paramID:number):Observable<User> {
    // return this.varHttp.get<User>(this.varApiURL + paramID)
    return this.varHttp.get<User>(environment.varApiURL + paramID)
    return this.varHttp.get<User>(`${environment.varApiURL}/${paramID}`)

  }
}
