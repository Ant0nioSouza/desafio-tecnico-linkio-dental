# Backend Orders API

API REST desenvolvida em Node.js com TypeScript para gestão de pedidos, com autenticação JWT, regras de negócio e testes unitários.

## 🛠 Tecnologias

- Node.js
- Express
- TypeScript
- MongoDB + Mongoose
- JWT
- Vitest

## ▶️ Como executar o projeto

### Pré-requisitos
- Node.js 18+
- MongoDB em execução

### Instalação
```bash
npm install
```

### Variáveis de ambiente

Crie um arquivo `.env` na raiz:
```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/orders-db
JWT_SECRET=supersecret
```

### Rodar a aplicação
```bash
npm run dev
```

Servidor disponível em: `http://localhost:3000`

## 🔐 Autenticação

- `POST /auth/register`
- `POST /auth/login`

Ambos retornam um JWT que deve ser enviado no header:
```
Authorization: Bearer <token>
```

## 📦 Pedidos

### Criar pedido
```
POST /orders
```

### Listar pedidos
```
GET /orders?page=1&limit=10&state=CREATED
```

### Avançar estado
```
PATCH /orders/:id/advance
```

**Fluxo de estado:**
```
CREATED → ANALYSIS → COMPLETED
```

## 🧪 Testes
```bash
npm run test
```

Testes unitários garantem o funcionamento correto da transição de estado dos pedidos.

## 📄 Observações

- Regras de negócio estão isoladas no service
- Lógica de transição de estado é testável e independente do framework
- Erros são tratados de forma centralizada