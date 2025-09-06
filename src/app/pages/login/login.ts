import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  username = '';
  password = '';


  constructor (public  authService: AuthService) {}

  doLogin(){
    this.authService.login(this.username, this.password).subscribe({
      next: res => console.log('Login realizado', res),
      error: err => console.error('Erro no login', err)
    })
  }


 

}
