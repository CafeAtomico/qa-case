const Ajv = require("ajv");
const userSchema = require("../../schemas/user.schema.json");

describe("API - JSONPlaceholder /users", () => {
  const baseUrl = "https://jsonplaceholder.typicode.com";
  const ajv = new Ajv({ allErrors: true, strict: false });
  const validateUser = ajv.compile(userSchema);

  it("GET /users - deve retornar lista e validar schema do primeiro item", () => {
    cy.request({
      method: "GET",
      url: `${baseUrl}/users`,
    }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body).to.be.an("array");
      expect(res.body.length).to.be.greaterThan(0);

      const firstUser = res.body[0];
      const valid = validateUser(firstUser);
      expect(valid, JSON.stringify(validateUser.errors)).to.eq(true);
    });
  });

  it("POST /users - deve criar (simulado) e validar status/schema básico", () => {
    const payload = {
      name: "Lenon Campos",
      username: "lenoncampos",
      email: "lenon@example.com",
    };

    cy.request({
      method: "POST",
      url: `${baseUrl}/users`,
      body: payload,
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      // JSONPlaceholder normalmente responde 201 em POST
      expect(res.status).to.eq(201);
      expect(res.body).to.have.property("id");

      const valid = validateUser(res.body);
      expect(valid, JSON.stringify(validateUser.errors)).to.eq(true);
    });
  });

  it("PUT /users/1 - deve atualizar (simulado) e validar status/schema básico", () => {
    const payload = {
      id: 1,
      name: "Lenon Atualizado",
      username: "lenonupdate",
      email: "lenon.updated@example.com",
    };

    cy.request({
      method: "PUT",
      url: `${baseUrl}/users/1`,
      body: payload,
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      expect(res.status).to.eq(200);

      const valid = validateUser(res.body);
      expect(valid, JSON.stringify(validateUser.errors)).to.eq(true);
    });
  });

  it("DELETE /users/1 - deve deletar (simulado) e validar status", () => {
    cy.request({
      method: "DELETE",
      url: `${baseUrl}/users/1`,
    }).then((res) => {
      expect(res.status).to.eq(200);
    });
  });
});