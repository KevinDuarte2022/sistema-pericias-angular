
import { Component, Input, computed } from '@angular/core';
import { DashboardService } from '../../../services/dashboard-service';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { NgIf, NgFor } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';

type Group = { title: string; keys: string[] };

@Component({
  selector: 'app-dashboard-chart',
  standalone: true,
  imports: [NgIf, NgFor, BaseChartDirective],
  templateUrl: './dashboard-charts.html',
  styleUrls: ['./dashboard-charts.css']
})
export class DashboardChart {

  @Input() groups: Group[] = []; 
  pastelColors = [
    'rgba(255, 179, 186, 0.7)',
    'rgba(255, 223, 186, 0.7)',
    'rgba(255, 255, 186, 0.7)',
    'rgba(186, 255, 201, 0.7)',
    'rgba(186, 225, 255, 0.7)',
    'rgba(204, 204, 255, 0.7)',
    'rgba(255, 204, 229, 0.7)',
    'rgba(255, 229, 204, 0.7)',
    'rgba(229, 255, 204, 0.7)',
    'rgba(204, 255, 229, 0.7)',
    'rgba(204, 229, 255, 0.7)',
    'rgba(229, 204, 255, 0.7)',
    'rgba(255, 204, 204, 0.7)',
    'rgba(204, 255, 255, 0.7)',
    'rgba(255, 255, 204, 0.7)',
    'rgba(204, 255, 204, 0.7)',
    'rgba(255, 229, 229, 0.7)'
  ];

  
  chartGroups = computed<
    { title: string; chartData: ChartConfiguration<'bar'>['data'] }[] | undefined
  >(() => {
    const stats = this.dashboardService.stats();
    if (!stats) return undefined;
    if (!this.groups || this.groups.length === 0) return undefined;

    return this.groups.map(g => {
      const labels = g.keys;
      const values = labels.map(k => (stats[k] ?? 0) as number);
      const colors = this.pastelColors.slice(0, labels.length);
      const borders = colors.map(c => c.replace(', 0.7)', ', 1)')); 

      return {
        title: g.title,
        chartData: {
          labels,
          datasets: [
            {
              label: 'Quantidade',
              data: values,
              backgroundColor: colors,
              borderColor: borders,
              borderWidth: 1
            }
          ]
        } as ChartConfiguration<'bar'>['data']
      };
    });
  });

  chartOptions: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: false } 
    },
    scales: {
      x: { ticks: { autoSkip: false, maxRotation: 45, minRotation: 45 } },
      y: { beginAtZero: true }
    }
  };

  constructor(public dashboardService: DashboardService) {
    this.dashboardService.loadStats();
  }
}
