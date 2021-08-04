import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  newUser: User = {
    firstName: '',
    lastName: '',
    password: '',
    userName: '',
    email: '',
  };

  constructor(private router: Router, private userService:UserService) {     
  }

  ngOnInit() {

  }

  goBack(): void {
    this.router.navigate(['/']);
  }

  createUser(){
    this.userService.create(this.newUser).subscribe(
      res => {
        console.log(res)
      }
    )
  }
}
