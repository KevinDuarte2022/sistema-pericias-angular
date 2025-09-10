import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { RouterModule, RouterOutlet } from '@angular/router'

@Component({
  selector: 'app-main-layout',
  imports: [RouterModule, RouterOutlet ],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css'
})
export class MainLayout {
  constructor(public authService: AuthService) { }

  doLogout() {
    this.authService.logout();
  }

}
