## 🧠 Atividade 1 – Estratégia e Cenários de Teste

### 1. Como eu iniciaria uma estratégia de teste?

Eu iniciaria a estratégia de teste desde o início do projeto, atuando de forma integrada ao time de desenvolvimento (Shift-Left), considerando que o sistema será criado do zero, baseado em arquitetura de microsserviços, com integrações externas e alto volume de transações.

Os primeiros passos seriam:
- Entendimento do negócio e do fluxo completo de compra de imóveis
- Identificação dos principais atores (cliente, imobiliária e banco)
- Mapeamento de regras críticas de negócio, como validação de crédito, documentos e valores
- Identificação de riscos técnicos e de negócio, como falhas de integração, inconsistência de dados, segurança e performance
- Definição da estratégia de testes baseada em risco, priorizando os fluxos mais críticos

Além disso, definiria critérios de aceite claros.

---

### 2. Quais abordagens de teste eu consideraria?

Eu adotaria uma abordagem híbrida de testes, combinando diferentes técnicas para garantir maior cobertura e eficiência.

As principais abordagens consideradas seriam:
- Testes funcionais
- Testes exploratórios
- Testes baseados em risco
- Testes de API
- Testes de regressão automatizados
- Testes não funcionais, como performance e segurança

---

### 3. Como eu trabalharia com diferentes tipos e níveis de teste?

Eu trabalharia seguindo o conceito da pirâmide de testes, priorizando testes mais rápidos e estáveis na base e testes mais amplos no topo.

Os níveis de teste seriam:
- Testes unitários, focados em regras de negócio e executados junto aos desenvolvedores
- Testes de API.
- Testes End-to-End (Web), focados nos fluxos críticos de compra de imóveis
- Testes exploratórios, realizados de forma contínua para identificar cenários não previstos

---

### 4. Quais ferramentas eu consideraria usar?

A escolha das ferramentas seria baseada na arquitetura do sistema.

Algumas ferramentas consideradas seriam:
- Cypress para automação de testes.
- Swagger para documentação e validação de contratos de API
- GitHub Actions ou GitLab CI para integração contínua
- Jira ou ferramentas similares para gestão de testes e defeitos

---

### 5. Como eu me imagino atuando nessa equipe?

Eu me imagino atuando como um QA Engineer integrado ao time, participando ativamente de todas as etapas do desenvolvimento.

Minha atuação incluiria:
- Participação em refinamentos e planejamento
- Apoio na definição de critérios de aceite
- Criação e manutenção de testes automatizados
- Execução de testes exploratórios
- Identificação e comunicação de riscos
- Atuação preventiva, visando qualidade contínua e entrega de valor ao negócio