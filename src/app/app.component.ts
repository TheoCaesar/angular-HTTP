import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { User } from './interfaces/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularHTTP';
  allUsers!:User[]

  private userObj:User =  {
    'id': 1,  //** server should assign **
    'name': 'Lord Voldemort',
    'username': '@axelson',
    'email': 'axe@google.yaml',
    'address': {
        'street': 'Korle Gonno',
        'suite': 'Apt. 556',
        'city': 'Chokor',
        'zipcode': '2827-18322',
        'geo': {
            'lat': '-49.3159',
            'lng': '21.1496'
        }
    },
    'phone': '233 8435 4282 2343',
    'website': 'sc.org',
    'company': {
        'name': 'Societe Nouvelle',
        'catchPhrase': 'We always stand by you',
        'bs': 'harness real-time e-markets'
    }
}
  constructor(private varUserService:UserService){}

  ngOnInit(): void {
    // this.onGetText();
    // this.onDelete(3);
    // this.onUpdateUserField()
    // this.onUpdateUserObj()
    // this.onGetUsers()
    this.onGetUserObj()
    // this.onCreateUserObj()
  }
  //get methods
  onGetUserObj() {
    this.varUserService.getUserObj(4000).subscribe({
      next(var_response){ console.log(var_response);
      },     //next - process data sent by observable
      error(err) { console.log(err) },                    //error - handling error sent to observable.
      complete() { console.log('Done getting ')}         //fxn run on completion
    });
  }

  onGetUsers() {
    this.varUserService.getUsers().subscribe({
      next:(var_response) => {
        this.allUsers = var_response;
        console.log("allUsers:-->", this.allUsers)
      },
      error(err) { console.log(err) },                    //error - handling error sent to observable.
      complete() { console.log('Done getting ');}         //fxn run on completion
    });
  }

  //get text method
  onGetText(){
    this.varUserService.getTxtFile().subscribe({
      next(var_response){console.log(var_response)},
      error(var_error) {console.log("error",var_error)},
      complete() {console.log("Fetched Text File")}
    })
  }

  //delete method
  onDelete(userID:number){
    this.varUserService.deleteUserObj(userID).subscribe({
      next(var_response){console.log("delete method's response", var_response)},
      error(var_error) {console.log("error",var_error)},
      complete() {console.log("User with ID number " + String(userID) + " has been Deleted")}
    })
  }
  //patch methods
  onUpdateUserField() {
    this.varUserService.updateUserObj(this.userObj).subscribe({
      next(var_response){ console.log(var_response); },     //next - process data sent by observable
      error(err) { console.log(err) },                    //error - handling error sent to observable.
      complete() { console.log('Done updating existing user\'s property ')}         //fxn run on completion
    });
  }

  //put methods
  onUpdateUserObj() {
    this.varUserService.updateUserObj(this.userObj).subscribe({
      next(var_response){ console.log(var_response); },     //next - process data sent by observable
      error(err) { console.log(err) },                    //error - handling error sent to observable.
      complete() { console.log('Done updating existing user ')}         //fxn run on completion
    });
  }

  //post methods
  onCreateUserObj() {
    this.varUserService.createUserObj(this.userObj).subscribe({
      next(var_response){ console.log(var_response); },     //next - process data sent by observable
      error(err) { console.log(err) },                    //error - handling error sent to observable.
      complete() { console.log('Done creating new user ')}         //fxn run on completion
    });
  }



}
