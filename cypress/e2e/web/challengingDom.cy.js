describe("Challenging DOM - cliques nos botões e grid", () => {
  it("deve clicar nos 3 botões e em todos os Edit/Delete da tabela", () => {
    cy.visit("/challenging_dom");

    // 1) clicar nos 3 botões do topo (sem depender do texto)
    cy.get("a.button").first().click();        // botão azul
    cy.get("a.button.alert").click();          // botão vermelho
    cy.get("a.button.success").click();        // botão verde

    // 2) clicar em todos os "edit" da grid
    cy.get("table")
      .find("a")
      .filter((_, el) => el.innerText.trim().toLowerCase() === "edit")
      .each(($el) => cy.wrap($el).click());

    // 3) clicar em todos os "delete" da grid
    cy.get("table")
      .find("a")
      .filter((_, el) => el.innerText.trim().toLowerCase() === "delete")
      .each(($el) => cy.wrap($el).click());
  });
});