import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterModule, RouterOutlet, CommonModule],
  templateUrl: './main-layout.html',
  styleUrls: ['./main-layout.css'] 
})
export class MainLayout {
  isSidebarOpen = true;

  constructor(public authService: AuthService) { }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  doLogout() {
    this.authService.logout();
  }
}
