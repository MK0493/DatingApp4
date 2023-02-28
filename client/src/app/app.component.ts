import { Component, OnInit } from '@angular/core';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  //Class Properties
  title = 'Dating App';

  //Constructor
  constructor(private accountService: AccountService) {}

  //Methods
  ngOnInit(): void {
    this.setCurrentUser();
  }

  setCurrentUser() {
    // const userString: User = JSON.parse(localStorage.getItem('user')!); //using Exclaimation Mark ! to turn off typescript safety
    const userString = localStorage.getItem('user');
    if (!userString) return;
    const user: User = JSON.parse(userString);
    this.accountService.setCurrentUser(user);
  }
}
