describe('Lighthouse Audit', () => {
  it('should pass Lighthouse audits', () => {
    cy.visit('/');
    cy.lighthouse({
      performance: 30,
      accessibility: 90,
      'best-practices': 90,
      seo: 80,
      pwa: 30
    });
  });
});
