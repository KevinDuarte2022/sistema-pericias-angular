import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  template: `
    <h2 class="text-2xl font-bold mb-4">Bem-vindo de volta!</h2>
    <p>Use o menu ao lado para navegar pelas seções do sistema.</p>
  `,
  styleUrls: ['./welcome.css']
})
export class Welcome {}
