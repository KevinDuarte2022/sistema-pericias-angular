import { Injectable, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {
    const authService = inject(AuthService);
    const router = inject(Router);

    if (!authService.isLogged()) {
        console.log('AuthGuard: Acesso negado')
        router.navigate(['/login']);
        return false;
    }
    console.log('AuthGuard: acesso permitido!');
    return true;

}