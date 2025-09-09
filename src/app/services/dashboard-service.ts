import { Injectable, inject, signal } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class DashboardService {
  private http = inject(HttpClient);
  stats = signal<any>(null);

   loadStats() {
    const token = localStorage.getItem('token');
    const headers = token ? new HttpHeaders({ Authorization: `Bearer ${token}` }) : undefined;

    this.http.get('http://localhost:5000/api/dashboard/stats', { headers }).subscribe({
      next: (res: any) => this.stats.set(res.statistics),
      error: (err) => {
        console.error('Erro ao carregar stats', err);
        this.stats.set(null); 
      },
    });
  }
}
