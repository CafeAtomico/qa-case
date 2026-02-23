# qa-case — Desafio Técnico (QA Engineer)

Este repositório contém a solução do desafio técnico de QA, dividido em duas partes:

## 📘 Atividade 1 – Estratégia de Testes
As respostas da Atividade 1 (estratégia e abordagem de testes) estão documentadas em:  
➡️ `docs/atividade-1.md`

---

## 🤖 Atividade 2 – Automação (Cypress + JavaScript)

### Escopo
- **Web:** https://the-internet.herokuapp.com/challenging_dom  
  - Clicar nos **3 botões** do topo
  - Clicar em todos os links **Edit** e **Delete** da grid

- **API:** https://jsonplaceholder.typicode.com/users  
  - Validar os 4 verbos HTTP (**GET, POST, PUT, DELETE**)
  - Validar **HTTP status code**
  - Validar **JSON Schema**

### Estrutura dos testes
- Web: `cypress/e2e/web/challengingDom.cy.js`
- API: `cypress/e2e/api/usersApi.cy.js`
- Schema: `cypress/schemas/user.schema.json`

---

## ▶️ Como executar

### Pré-requisitos
- Node.js (LTS recomendado)
- npm

### Instalação
```bash
npm install
