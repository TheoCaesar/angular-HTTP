import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularHTTP';

  constructor(private varUserService:UserService){}

  ngOnInit(): void {
    this.onGetUsers()
    this.onGetUserObj()
  }

  onGetUserObj() {
    this.varUserService.getUserObj(4).subscribe({
      next(var_response){ console.log(var_response); },     //next - process data sent by observable
      error(err) { console.log(err) },                    //error - handling error sent to observable.
      complete() { console.log('Done getting ')}         //fxn run on completion
    });
  }

  onGetUsers() {
    this.varUserService.getUsers().subscribe({
      next(var_response){ console.log(var_response); },     //next - process data sent by observable
      error(err) { console.log(err) },                    //error - handling error sent to observable.
      complete() { console.log('Done getting ')}         //fxn run on completion
    });
  }
}
