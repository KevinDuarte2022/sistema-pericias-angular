# Sistema de Perícias Criminais - Angular

## Contexto do Projeto
Esta aplicação foi desenvolvida como desafio técnico para a vaga de Desenvolvedor Frontend Angular.  
O objetivo é criar um **dashboard interativo e responsivo** para visualizar e gerenciar solicitações de perícias criminais, consumindo uma API REST local.

A aplicação foi desenvolvida com **Angular 20 Standalone Components**, TypeScript e boas práticas de desenvolvimento, incluindo tratamento de erros, JWT e guards de rota.

---

## Tecnologias Utilizadas
- Angular 20 (Standalone Components)
- TypeScript
- PrimeNG e PrimeIcons
- Chart.js / ng2-charts
- TailwindCSS
- Font Awesome
- RxJS
- Jasmine + Karma (Testes unitários)
- Cypress (Testes E2E)
- Node.js 22 / npm 10
- Python 3.13 (API)

---



- Todos os componentes principais (Login, Welcome, Dashboard, Registrations) são **standalone**.  
- **Lazy loading** implementado nas páginas principais via `loadComponent`.  
- **AuthService** gerencia autenticação, tokens JWT e perfil do usuário.  
- **authGuard** protege rotas privadas.  

---

## Funcionalidades Implementadas

- Dashboard interativo com gráficos Chart.js
- Tela de Welcome com animação de "bonequinho" e texto estilizado
- Botão pulsante para loading com logo da PEFOCE
- Interface responsiva (desktop, tablet e mobile)
- Consumo da API REST
- Tratamento de erros HTTP (400, 401, 500)
- Sistema de login/logout com JWT
- Guards para proteção de rotas
- Lazy loading de componentes
- Testes unitários (Jasmine + Karma)
- Testes E2E (Cypress)
- Branches: `main` (código final) e `feature/dashboard` (dashboard)

### Diferenciais Implementados:
- Animações suaves na tela de Welcome
- Botão de loading estilizado para feedback visual
- Design UI/UX agradável

---

## Rotas Principais
| Rota | Componente | Protegida? |
|------|------------|------------|
| `/login` | Login | ❌ |
| `/` | Welcome | ✅ (AuthGuard) |
| `/dashboard` | Dashboard | ✅ (AuthGuard) |
| `/registrations` | Registrations | ✅ (AuthGuard) |

---

## Como Rodar o Projeto

### 1. API
```bash
# Ativar venv
source venv/Scripts/activate

# Rodar a API
python app.py

# Conferir se API está funcionando
# GET http://localhost:5000/api/health
# Retorno esperado:
# {
#   "status": "ok",
#   "message": "API está funcionando"
# }
2. Angular
bash
Copy code
# Instalar dependências
npm install

# Rodar aplicação
ng serve
3. Testes
Unitários (Jasmine + Karma)
bash

ng test
E2E (Cypress)
bash
Copy code
# Instalar Cypress
npm install cypress --save-dev

# Abrir interface do Cypress
npm run cypress:open

# Executar testes E2E via CLI
npm run cypress:run
AuthService (Resumo)
login(username, password) → autentica e salva token

logout() → limpa token e redireciona para login

isLogged() → verifica login

getCurrentUser() → retorna dados do usuário logado

authGuard
Impede acesso às rotas privadas (/, /dashboard, /registrations) sem login

Redireciona automaticamente para /login se não estiver autenticado

Pacotes e Dependências
Principais Dependências
@angular/animations, @angular/common, @angular/core, @angular/forms, @angular/router

primeng, primeicons

chart.js, ng2-charts

@fortawesome/fontawesome-free

tailwindcss

DevDependencies
cypress, jasmine-core, karma, karma-chrome-launcher, karma-coverage, karma-jasmine-html-reporter

Branches e Versionamento
main → Código final entregue

feature/dashboard → Implementações da dashboard

Commits descritivos 

Observações
Aplicação desenvolvida standalone (Angular 20) sem módulos.

Animação e interatividade focadas na experiência do usuário.

Código preparado para escala e manutenção futura.



Contato: 85985911220 
Desenvolvedor: Kevin Medeiros


Repositório GitHub: https://github.com/KevinDuarte2022/sistema-pericias-angular

