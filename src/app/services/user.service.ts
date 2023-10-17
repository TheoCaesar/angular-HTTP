import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { environment } from 'src/environments/environment.development';

HttpClient
@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly paramValues = [5,10];
  constructor(private varHttp:HttpClient) { }

  getUsers():Observable<User[]> {
    // let myParams = new HttpParams().set('page', '5').set('size','10');
    const theParams = {["size"]:this.paramValues};
    let myParams = new HttpParams({fromObject:theParams});
    return this.varHttp.get<User[]>(environment.varApiURL, {params:myParams})
  }

  getUserObj(paramID:number):Observable<User> {
    return this.varHttp.get<User>(environment.varApiURL + paramID);
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
