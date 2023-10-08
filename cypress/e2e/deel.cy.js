import { SALARY_INSIGHTS_PAGE as insights } from "../pageObjects/salaryInsights";

describe("Exercise 3", () => {
  beforeEach(() => {
    cy.fixture("jobData.json").then(function (data) {
      this.data = data;
    });
    // Visit Salary Insights page
    cy.visit("https://growth.deel.training/dev/salary-insights");
    // Check if header is visible
    cy.get(insights.insights_header).first().should("be.visible");
  });
  it("Test Salary Insights for Accountant", function () {
    cy.get(insights.role).should("be.visible").type(this.data.jobRole[0]);
    cy.get(insights.first_option_role).should("be.visible").click();

    cy.get(insights.country).should("be.visible").type(this.data.jobCountry[0]);
    cy.get(insights.first_option_country).should("be.visible").click();

    cy.get(insights.submit).should("be.visible").click();

    cy.get(insights.salary_table).should("be.visible");
  });

  it("Test Salary Insights for QA Engineer", function () {
    cy.get(insights.role).should("be.visible").type(this.data.jobRole[1]);
    cy.get(insights.first_option_role).should("be.visible").click();

    cy.get(insights.country).should("be.visible").type(this.data.jobCountry[1]);
    cy.get(insights.first_option_country).should("be.visible").click();

    cy.get(insights.submit).should("be.visible").click();

    cy.get(insights.salary_table).should("be.visible");
  });

  it("Test Salary Insights for Software Engineer", function () {
    cy.get(insights.role).should("be.visible").type(this.data.jobRole[2]);
    cy.get(insights.first_option_role).should("be.visible").click();

    cy.get(insights.country).should("be.visible").type(this.data.jobCountry[2]);
    cy.get(insights.first_option_country).should("be.visible").click();

    cy.get(insights.submit).should("be.visible").click();

    cy.get(insights.salary_table).should("be.visible");
  });
});
