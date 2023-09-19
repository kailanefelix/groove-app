import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Scenario: Vendo musicas em alta
//Given: common-step-definitions.ts

When("o usuário clica no {string}", (button: string) => {
  cy.getDataCy(button).click();
});

Then(
  "o usuário deve ser redirecionado à página {string} e visualizar a música {string} e a música {string}",
  (page: string, musicTitle: string, musicTitle2: string) => {
    cy.visit(page);
    cy.getDataCy(musicTitle).should("contain", musicTitle);
    cy.getDataCy(musicTitle2).should("contain", musicTitle2);
  }
);

// Scenario: Visualizar tests
//Given: common-step-definitions.ts

When("o usuário clica na imagem {string}", (button: string) => {
    cy.getDataCy(button).click();
    }
);