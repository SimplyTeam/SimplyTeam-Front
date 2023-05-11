describe('Lighthouse Audit', () => {
  it('should pass Lighthouse audits', () => {
    cy.visit('/auth/login');

    // Connectez-vous à l'application
    cy.get('input[name="email"]').type('jeanbaptiste.donin@ynov.com');
    cy.get('input[name="password"]').type('Choupi--1416');

    cy.get('button[type="submit"]').click();

    // cy.setCookie('access_token', "dfdsfsd");
    cy.visit('/workspaces')
    cy.url().should('include', '/workspaces');
    // cy.getCookie("access_token").should("exist");

    cy.lighthouse({
      performance: 30,
      accessibility: 90,
      'best-practices': 90,
      seo: 80,
    }, 
    {
      formFactor: 'desktop',
      screenEmulation: {
        mobile: false,
        disable: false,
        deviceScaleRatio: 1,
      }
  }
  );
  });
});
