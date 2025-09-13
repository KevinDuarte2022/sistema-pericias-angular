import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { TabsModule } from 'primeng/tabs';
import { RegistrationsService } from '../../services/registrations-service';

import { InputTextModule } from 'primeng/inputtext';
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
  viewMode = false;
  deletingSolicitacao: any;

  alertDialogVisible = false;
  alertMessage = '';
  alertTitle = '';
  alertSeverity: 'success' | 'warn' | 'info' | 'error' = 'info';

  constructor(private regService: RegistrationsService) { }

  ngOnInit(): void {
    this.loadSolicitacoes();
  }


  loadSolicitacoes() {
    this.regService.getAll().subscribe({
      next: (res) => {
        this.solicitacoes = res.solicitacoes;
      },
      error: (err) => console.error('Erro ao carregar solicitações', err)
    });
  }

saveSolicitacao() {

  if (!this.currentSolicitacao.data || !this.currentSolicitacao.hora || !this.currentSolicitacao.status) {
    this.showAlert('Os campos Data, Hora e Status são obrigatórios!', 'Erro', 'error');
    return;
  }

  if (this.viewMode) {
    this.showAlert('Não é possível salvar enquanto estiver em modo visualização!', 'Aviso', 'warn');
    return;
  }

  if (this.currentSolicitacao.hora.length === 5) {
    this.currentSolicitacao.hora += ':00';
  }

  const request = this.editingSolicitacao
    ? this.regService.update(this.currentSolicitacao.id, this.currentSolicitacao)
    : this.regService.create(this.currentSolicitacao);

  request.subscribe({
    next: (res) => {
      console.log('Salvo com sucesso:', res);

      if (this.editingSolicitacao) {
        const index = this.solicitacoes.findIndex(s => s.id === res.solicitacao.id);
        if (index !== -1) this.solicitacoes[index] = res.solicitacao;
      } else {
        this.solicitacoes.unshift(res.solicitacao);
      }

      this.closeCard();
      this.showAlert('Registro salvo com sucesso!', 'Sucesso', 'success');
    },
    error: (err) => {
      console.error('Erro ao salvar:', err);
      this.showAlert(err?.error?.error || 'Erro ao salvar o registro!', 'Erro', 'error');
    }
  });
}




  deleteSolicitacao() {
    this.regService.delete(this.deletingSolicitacao.id).subscribe({
      next: () => {
        console.log('Solicitação removida');

        this.solicitacoes = this.solicitacoes.filter(s => s.id !== this.deletingSolicitacao.id);
        this.cancelDelete();
      },
      error: (err) => console.error('Erro ao excluir:', err)
    });
  }

  cancelDelete() {
    this.showDeleteModal = false;
    this.deletingSolicitacao = null;
  }


  openNewCard() {
    this.currentSolicitacao = {};
    this.editingSolicitacao = false;
    this.viewMode = false;
    this.showCard = true;
  }

  cancelCard() {
    this.closeCard();
  }

  private closeCard() {
    this.showCard = false;
    this.currentSolicitacao = {};
    this.editingSolicitacao = false;
    this.viewMode = false;
  }

  editSolicitacao(sol: any) {
    this.currentSolicitacao = { ...sol };
    this.editingSolicitacao = true;
    this.viewMode = false;
    this.showCard = true;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  viewSolicitacao(sol: any) {
    this.currentSolicitacao = { ...sol };
    this.editingSolicitacao = false;
    this.viewMode = true;
    this.showCard = true;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  confirmDelete(sol: any) {
    this.deletingSolicitacao = sol;
    this.showDeleteModal = true;
  }

  showAlert(message: string, title: string = 'Aviso', severity: 'success' | 'warn' | 'info' | 'error' = 'info') {
  this.alertMessage = message;
  this.alertTitle = title;
  this.alertSeverity = severity;
  this.alertDialogVisible = true;
}
}
