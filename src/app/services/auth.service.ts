import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
    private http = inject(HttpClient);
    private router = inject(Router);

    token = signal<string | null>(null);
    user = signal<any>(null);

    login(username: string, password: string): Observable<any> {
        return this.http.post('http://localhost:5000/api/auth/login', { username, password }).pipe(
            tap((res: any) => {
                this.token.set(res.access_token);
                this.user.set(res.user);
                localStorage.setItem('token', res.access_token);

                this.router.navigate(['/dashboard']);
            })

        );


    }


    logout() {
        this.token.set(null);
        this.user.set(null);
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
    }


    isLogged(): boolean {
        return !!this.token();
    }

}