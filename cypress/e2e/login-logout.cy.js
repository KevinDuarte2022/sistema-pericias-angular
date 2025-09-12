describe('Fluxo de Login e Logout', () => {
  const username = 'admin'
  const password = 'admin123'

  beforeEach(() => {
    cy.visit('/') 
  })

  it('deve logar com sucesso e ir para a tela de welcome', () => {
    cy.get('[data-cy=input-username]').type(username)
    cy.get('[data-cy=input-password]').type(password)
    cy.get('[data-cy=btn-login]').click()

    
    cy.contains('Bem vindo').should('exist')

  
  })

  it('deve fazer logout e voltar para a tela de login', () => {
    cy.get('[data-cy=input-username]').type(username)
    cy.get('[data-cy=input-password]').type(password)
    cy.get('[data-cy=btn-login]').click()

    cy.contains('Logout').click()

   
    cy.url().should('include', '/login') 
    cy.get('[data-cy=btn-login]').should('exist')
  })
})
