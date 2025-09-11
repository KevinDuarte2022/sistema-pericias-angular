import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { RouterModule, RouterOutlet } from '@angular/router'
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-main-layout',
  imports: [RouterModule, RouterOutlet, CommonModule ],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css'
})
export class MainLayout {
  isSidebarOpen = true; 

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  constructor(public authService: AuthService) { }

  doLogout() {
    this.authService.logout();
  }

}
