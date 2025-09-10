import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CardModule } from 'primeng/card';
import { TabsModule } from 'primeng/tabs';

@Component({
  selector: 'app-registrations',
  imports: [CardModule, TabsModule],
  templateUrl: './registrations.html',
  styleUrl: './registrations.css'
})
export class Registrations implements OnInit {
  constructor(public authService: AuthService) {}

  ngOnInit(): void {
  }
}
