import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'fixtura';
  generals : any = {
    'user': {
      'email': 'Desconocido@gmail.com',
      'authenticated': false
    }
  };

  constructor(public authService : AuthService) {

  }

  ngOnInit() {
    this.generals.user.email = this.authService.currentEmail;
    if ( this.generals.user.email === undefined ) {
      this.generals.user.authenticated = false;
    } else {
      this.generals.user.authenticated = true;
    }
  }

/*   iniciarSesion($event) {
    this.authService.login("admin@admin.com", "123456");
  } */
}
