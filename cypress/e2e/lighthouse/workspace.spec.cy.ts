describe('Workspaces', () => {
	it('should redirect to the workspaces page on login', () => {
		cy.visit('/auth/login')

		cy.get('input[name="email"]').type('jeanbaptiste.donin@ynov.com')
		cy.get('input[name="password"]').type('Choupi--1416')

		cy.get('button[type="submit"]').click()

		cy.url().should('include', '/workspaces')
	})
})
