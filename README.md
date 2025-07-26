## BOOTCAMP DESENVOLVEDOR BACKEND 

## DESAFIO FINAL

# 📚 API de Gerenciamento de Livraria

Este projeto é uma API RESTful desenvolvida em **Node.js** com **Express**, voltada para o gerenciamento de uma livraria. Ela permite o controle de clientes, autores, livros, vendas e informações adicionais dos livros, utilizando autenticação básica para proteger suas rotas.

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/) (para informações adicionais dos livros)
- [express-basic-auth](https://www.npmjs.com/package/express-basic-auth)
- [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

## 🔐 Autenticação

Todas as rotas são protegidas com **Basic Auth** utilizando o middleware `express-basic-auth`.

### 🧪 Credenciais Padrão:

- **Usuário:** `admin`
- **Senha:** `admin`

### 📥 Exemplo de Requisição com Autenticação (Insomnia ou Postman)

Adicione no cabeçalho da requisição:

Authorization: Basic
username:admin
password:admin

## 📁 Endpoints

### 👥 Clientes

- `GET /cliente` — Lista todos os clientes  
- `GET /cliente/:id` — Detalha um cliente específico  
- `POST /cliente` — Cria um novo cliente  
- `PUT /cliente/:id` — Atualiza os dados de um cliente  
- `DELETE /cliente/:id` — Remove um cliente  

### ✍️ Autores

- `GET /autor` — Lista todos os autores  
- `POST /autor` — Cria um novo autor  
- `PUT /autor/:id` — Atualiza um autor existente  
- `DELETE /autor/:id` — Remove um autor  

### 📚 Livros

- `GET /livro` — Lista todos os livros  
- `GET /livro/:id` — Detalha um livro específico  
- `POST /livro` — Cria um novo livro  
- `PUT /livro/:id` — Atualiza um livro existente  
- `DELETE /livro/:id` — Remove um livro  

### 💰 Vendas

- `GET /venda` — Lista todas as vendas  
- `POST /venda` — Cria uma nova venda  

### 📖 Informações dos Livros (MongoDB)

- `GET /livroInfo` — Lista todas as informações adicionais  
- `POST /livroInfo` — Cria uma nova informação  
- `PUT /livroInfo/:id` — Atualiza uma informação existente  
- `DELETE /livroInfo/:id` — Remove uma informação  

## 🛠️ Instalação e Execução
npm install

Inicie a API:
npm start

A API estará disponível em: http://localhost:3000

🧑‍💻 Estrutura do Projeto
pgsql
Copiar
Editar
.
├── routes/
│   ├── cliente.route.js
│   ├── autor.route.js
│   ├── livro.route.js
│   ├── venda.route.js
│   └── livroInfo.mongo.route.js
├── server.js
└── package.json
  
