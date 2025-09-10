import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { DashboardService } from '../../services/dashboard-service';
import { NgFor, NgIf } from '@angular/common'; 
import { TabsModule } from 'primeng/tabs';

@Component({
  selector: 'app-dashboard',
  imports: [NgIf, NgFor, TabsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {
  constructor(public authService: AuthService, public dashboardService: DashboardService) { }

  // cards = [
  //   { title: 'Cadastros', value: 120 },
  //   { title: 'Perícias Pendentes', value: 8 },
  //   { title: 'Usuários Ativos', value: 15 },
  //   { title: 'Relatórios Emitidos', value: 42 }
  // ];

  doLogout() {
    this.authService.logout()
  }

  ngOnInit(): void {
    this.dashboardService.loadStats();

  }


statKeys = [
  'Novas Solicitações',
  'Solicitações Recebidas',
  'Solicitações Distribuidas',
  'Recebidas por Perito',
  'Perícias Em Andamento',
  'Perícias Concluídas',
  'Laudos Pendentes',
  'Não Pertencem ao SIP',
  'Pendentes de envio ao SIP',
  'Enviados ao SIP',
  'Em custódia do Núcleo',
  'Cobrança',
  'Solicitações Devolvidas',
  'Solicitações Pausadas',
  'Laudos Para Revisão',
  'Laudos para Correção',
  'SVO - Laudos Pendentes'
];


}
