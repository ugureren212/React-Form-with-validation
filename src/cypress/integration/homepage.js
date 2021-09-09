// integeration test used to see if a thank you message is displayed after the user has entered in
// each input field currectly and clicking the submit button

describe("renders the home page", () => {
  it("renders correctly", () => {
    cy.visit("/");
    cy.get("#container").should("exist");
  });

  it("enter user details", () => {
    cy.visit("/");

    /* ==== Generated with Cypress Studio ==== */
    cy.get("#fullName").clear();
    cy.get("#fullName").type("John Jack");
    cy.get("#email").clear();
    cy.get("#email").type("JohnJack212@gmail.com");
    cy.get("#notes").clear();
    cy.get("#notes").type("This is dummy data for the notes section.");
    /* ==== End Cypress Studio ==== */

    cy.get("#submitBtn").click();

    cy.get("#SuccessMessage"); // Yield el in .nav containing 'About'
    cy.contains("Thank You");
  });
});
