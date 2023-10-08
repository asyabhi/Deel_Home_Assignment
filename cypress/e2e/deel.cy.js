import { SALARY_INSIGHTS_PAGE as insights } from "../pageObjects/salaryInsights";

describe("Exercise 3", () => {
  beforeEach(() => {
    cy.fixture("role");
    cy.visit("https://growth.deel.training/dev/salary-insights");
    cy.get(insights.insights_header).first().should("be.visible");
  });
  it("Test Salary Insights for Accountant", function () {
      cy.get(insights.role).should('be.visible').type(this.role.)
  });
});
