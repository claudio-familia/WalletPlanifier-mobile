import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
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

  loadServ: HTMLIonLoadingElement;

  constructor(private router: Router, 
              private loadingService: LoadingController,
              private alertService: AlertController,              
              private userService:UserService) {     
  }

  async ngOnInit() {
    this.loadServ = await this.loadingService.create()
  }

  goBack(): void {
    this.router.navigate(['/']);
  }

  async createUser(){
    this.loadServ.present();

    this.userService.create(this.newUser).subscribe(
      async res => {

        this.loadServ.dismiss();

        const alert = await this.alertService.create({
          header: 'Operation sucessfull',
          message: 'The user was created correctly',
          buttons: ['OK'],
        });

        alert.present().then(() => {
          this.router.navigate['/login'];
        });
      }
    )
  }
}
