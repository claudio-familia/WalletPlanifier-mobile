import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  credentials: any =  { 
    username : '', 
    password : ''
  }

  constructor(private router: Router, private authService: AuthService) {
  }

  ngOnInit() {    
  }

  checkValue(data: any){
    console.log(data)
  }

  async logIn(): Promise<void> {    

    console.log(this.credentials)
    // const request = await this.authService.login({ userName, password});
    
    // request.subscribe(
    //   res => {
    //     console.log(res)
    //   }
    // );
  }

  goToSignUp(): void {
    this.router.navigate(['/sign-up']);
  }
}
