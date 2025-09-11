import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { TabsModule } from 'primeng/tabs';
import { RegistrationsService } from '../../services/registrations-service';

import { InputTextModule } from 'primeng/inputtext';
// import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-registrations',
  imports: [CommonModule, FormsModule, CardModule, TabsModule, InputTextModule, ButtonModule, DialogModule],
  templateUrl: './registrations.html',
  styleUrls: ['./registrations.css']
})
export class Registrations implements OnInit {
  solicitacoes: any[] = [];
  showCard = false;
  showDeleteModal = false;
  currentSolicitacao: any = {};
  editingSolicitacao = false;
  deletingSolicitacao: any;

  constructor(private regService: RegistrationsService) {}

  ngOnInit(): void {
    this.loadSolicitacoes();
  }

  loadSolicitacoes() {
    this.regService.getAll().subscribe({
      next: res => this.solicitacoes = res.solicitacoes,
      error: err => console.error('Erro ao carregar solicitações', err)
    });
  }

  saveSolicitacao() {
    if (this.editingSolicitacao) {
      this.regService.update(this.currentSolicitacao.id, this.currentSolicitacao).subscribe(() => {
        this.loadSolicitacoes();
        this.showCard = false;
      });
    } else {
      this.regService.create(this.currentSolicitacao).subscribe(() => {
        this.loadSolicitacoes();
        this.showCard = false;
      });
    }
  }

  deleteSolicitacao() {
    this.regService.delete(this.deletingSolicitacao.id).subscribe(() => {
      this.loadSolicitacoes();
      this.cancelDelete();
    });
  }

  
  cancelDelete() {
    this.showDeleteModal = false;
    this.deletingSolicitacao = null;
  }

  openNewCard() {
    this.currentSolicitacao = {};
    this.editingSolicitacao = false;
    this.showCard = true;
  }

  cancelCard() {
    this.showCard = false;
  }

  editSolicitacao(sol: any) {
    this.currentSolicitacao = { ...sol };
    this.editingSolicitacao = true;
    this.showCard = true;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  viewSolicitacao(sol: any) {
    this.currentSolicitacao = { ...sol };
    this.editingSolicitacao = false;
    this.showCard = true;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  confirmDelete(sol: any) {
    this.deletingSolicitacao = sol;
    this.showDeleteModal = true;
  }
}