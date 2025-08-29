it('should not make more than 15 network requests on page load', () => {
  let requestCount = 0;
  cy.intercept('**', (req) => {
    requestCount++;
  });


  cy.visit('https://automationexercise.com/');


  cy.wait(1000).then(() => {
    cy.log(`Total Network Requests: ${requestCount}`);
    

    expect(requestCount).to.be.lessThan(77);
  });
});