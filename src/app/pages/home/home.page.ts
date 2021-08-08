import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public apiService: AuthService) { }

  secretData: any = null;

  ngOnInit() {
  }

  async getData() {
    this.secretData = null;
 
    this.apiService.getSecretData().subscribe((res: any) => {      
      this.secretData = res;
    });
  }

}
