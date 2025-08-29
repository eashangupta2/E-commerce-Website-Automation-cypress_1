it('should load the page in an acceptable time', () => {
  cy.visit('https://automationexercise.com/');
  cy.window().then((win) => {
    const performanceTiming = win.performance.getEntriesByType('navigation')[0];
    const pageLoadTime = performanceTiming.domComplete;
    cy.log(`Page Load Time (domComplete): ${pageLoadTime}ms`);
    expect(pageLoadTime).to.be.lessThan(5000); 
  });
});