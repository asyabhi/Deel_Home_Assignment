import { SALARY_INSIGHTS_PAGE as insights } from "../pageObjects/salaryInsights";

describe("Exercise 3", () => {
  beforeEach(() => {
    cy.fixture("jobData.json").then(function (data) {
      this.data = data;
    });
    cy.visit("https://growth.deel.training/dev/salary-insights");
    cy.get(insights.insights_header).first().should("be.visible");
  });
  it("Test Salary Insights for Accountant", function () {
    this.data.jobRole.forEach((job_role) => {
      this.data.jobCountry.forEach((job_country) => {
        cy.get(insights.role).should("be.visible").type(job_role);
        cy.get(insights.first_option_role).should("be.visible").click();

        cy.get(insights.country).should("be.visible").type(job_country);
        cy.get(insights.first_option_country).should("be.visible").click();

        cy.get(insights.submit).should("be.visible").click();

        cy.get(insights.salary_table).should("be.visible");
      });
    });
    // cy.get(insights.role).should("be.visible").type("Accountant");
    // cy.get(insights.first_option).should("be.visible").click();
  });
});
