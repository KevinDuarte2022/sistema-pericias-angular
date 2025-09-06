import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './services/api-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('sistema-pericias-angular');

  constructor(private api: ApiService) { }

  testLogin() {
    this.api.login('admin', 'admin123').subscribe({
      next: (res) => console.log('Login sucesso:', res),
      error: (err) => console.error('Erro no login:', err)
    });
  }

}
