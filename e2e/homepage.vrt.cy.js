describe('Visual Regression Test - Login Page', () => {
  it('Login page appearance should match baseline', () => {
    cy.visit('/login');             
    cy.matchImage('login-page', {
      screenshotConfig: { capture: 'viewport' },
      diffConfig: { threshold: 0.01 },       // Allow small pixel changes
      maxDiffThreshold: 0.05,                // Fail if >5% difference
      imagesPath: 'cypress/visual_snapshots' // Where snapshots will be saved
    });
  });
});
