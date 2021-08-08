import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AlertController, LoadingController } from '@ionic/angular';

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
  
  showLoading = false;

  constructor(private authService: AuthService,
              private router: Router,
              private alertController: AlertController,
              private loadingController: LoadingController) {
  }

  ngOnInit() {    
  }

  checkValue(data: any){
    console.log(data)
  }

  async logIn(): Promise<void> {
    
    if(this.credentials.username == '' || this.credentials.password == ''){
      await this.alertController.create({
        header: 'Login failed',
        message: 'Must complete all fields to sign in!',
        buttons: ['OK'],
      }).then(res => res.present());
      return;
    }
    
    
    //const loading = await this.loadingController.create();
    //await loading.present();
    this.showLoading = true;

    const data = { 
      userName: this.credentials.username, 
      password: this.credentials.password
    }

    const request = await this.authService.login(data);
    
    request.subscribe(
      async res => {
        //await loading.dismiss();
        this.showLoading = false;
        this.router.navigateByUrl('/home', { replaceUrl: true }); 
      },
      async err => {
        //await loading.dismiss();
        this.showLoading = false;

        const alert = await this.alertController.create({
          header: 'Login failed',
          message: err.error,
          buttons: ['OK'],
        });

        await alert.present();
      }
    );
  }

  goToSignUp(): void {
    this.router.navigate(['/sign-up']);
  }
}
