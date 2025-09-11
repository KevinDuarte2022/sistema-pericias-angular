import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (!authService.isLogged()) {
    console.log('AuthGuard: Acesso negado');
    router.navigate(['/login']);
    return false;
  }

  console.log('AuthGuard: Acesso permitido!');
  return true; 
};
