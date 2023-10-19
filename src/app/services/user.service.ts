import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable, map, retry, tap } from 'rxjs';
import { User } from '../interfaces/user';
import { environment } from 'src/environments/environment.development';
import { HttpEvent } from '@angular/common/http';

HttpClient
@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly paramValues = [5,10];
  constructor(private varHttp:HttpClient) { }

  getTxtFile():Observable<HttpResponse<Blob>> {
    return this.varHttp.get(`assets/text.txt`, {responseType:'blob', observe:'response'})
  }

  readonly defaultImage = "https://robohash.org/"
  getUsers():Observable<User[]> {
    return this.varHttp.get<User[]>(environment.varApiURL).pipe(
        map(varUsers => varUsers.map(eachUser => ({
            ...eachUser, //spread operator - copy content of each user
            name: eachUser.name.toUpperCase(),
            //add property to user obj
            imagePath: this.defaultImage + eachUser.username,
            isAdmin: eachUser.id === 10? true: false
          }))
        )
      )
  }

  getUserObj(paramID:number):Observable<User> {
    return this.varHttp.get<User>(environment.varApiURL + paramID).pipe(
      retry(3)
    );
  }

  //POST REQUEST
  createUserObj(paramUser:User):Observable<User> {
    return this.varHttp.post<User>(environment.varApiURL, paramUser);
  }

  updateUserObj(paramUser:User):Observable<User> {
    return this.varHttp.put<User>(environment.varApiURL + paramUser.id, paramUser);
  }

  //edit field
  updateUserField(paramUser:User):Observable<User> {
    return this.varHttp.patch<User>(environment.varApiURL + paramUser.id, paramUser);
  }

  //delete object
  deleteUserObj(paramUserID:number):Observable<void> {
    return this.varHttp.delete<void>(environment.varApiURL + paramUserID)
  }


}
