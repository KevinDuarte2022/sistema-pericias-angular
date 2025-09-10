import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { DashboardService } from '../../services/dashboard-service';
import { NgFor, NgIf } from '@angular/common'; 
import { TabsModule } from 'primeng/tabs';
import { CardModule } from 'primeng/card';
import { DashboardChart } from './dashboard-charts/dashboard-charts';

@Component({
  selector: 'app-dashboard',
  imports: [NgIf, NgFor, TabsModule, CardModule, DashboardChart],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class Dashboard implements OnInit {

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

  groups = [
    {
      title: 'Solicitações',
      keys: [
        this.statKeys[0], // Novas Solicitações
        this.statKeys[1], // Solicitações Recebidas
        this.statKeys[2], // Solicitações Distribuidas
        this.statKeys[12], // Solicitações Devolvidas
        this.statKeys[13]  // Solicitações Pausadas
      ]
    },
    {
      title: 'Perícias',
      keys: [
        this.statKeys[4], // Perícias Em Andamento
        this.statKeys[5], // Perícias Concluídas
        this.statKeys[3]  // Recebidas por Perito
      ]
    },
    {
      title: 'Laudos',
      keys: [
        this.statKeys[6],  // Laudos Pendentes
        this.statKeys[14], // Laudos Para Revisão
        this.statKeys[15], // Laudos para Correção
        this.statKeys[16]  // SVO - Laudos Pendentes
      ]
    },
    {
      title: 'Outros',
      keys: [
        this.statKeys[7],  // Não Pertencem ao SIP
        this.statKeys[8],  // Pendentes de envio ao SIP
        this.statKeys[9],  // Enviados ao SIP
        this.statKeys[10], // Em custódia do Núcleo
        this.statKeys[11]  // Cobrança
      ]
    }
  ];

  
  iconMap: { [key: string]: string } = {
    'Novas Solicitações': 'pi-inbox',
    'Solicitações Recebidas': 'pi-envelope',
    'Solicitações Distribuidas': 'pi-send',
    'Recebidas por Perito': 'pi-user',
    'Perícias Em Andamento': 'pi-spin pi-spinner',
    'Perícias Concluídas': 'pi-check-circle',
    'Laudos Pendentes': 'pi-file',
    'Não Pertencem ao SIP': 'pi-ban',
    'Pendentes de envio ao SIP': 'pi-clock',
    'Enviados ao SIP': 'pi-check',
    'Em custódia do Núcleo': 'pi-lock',
    'Cobrança': 'pi-money-bill',
    'Solicitações Devolvidas': 'pi-replay',
    'Solicitações Pausadas': 'pi-pause',
    'Laudos Para Revisão': 'pi-search',
    'Laudos para Correção': 'pi-pencil',
    'SVO - Laudos Pendentes': 'pi-question'
  };


  

  constructor(public authService: AuthService, public dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.dashboardService.loadStats();
  }

  doLogout() {
    this.authService.logout();
  }

 

}
