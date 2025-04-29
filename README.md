# Department Management API

GraphQL API built with NestJS for managing departments and sub-departments with JWT authentication and PostgreSQL.

## Features

- JWT Authentication
- GraphQL API
- Department CRUD operations
- PostgreSQL with TypeORM

## Quick Start

### Prerequisites

- Node.js (v14+)
- PostgreSQL

### Setup

1. Clone and install:

```bash
git clone <repository-url>
cd department-graphql-task
npm install
```

2. Create PostgreSQL database: `department_db`

3. Create `.env` file:

```env
DB_HOST=
DB_PORT=
DB_USERNAME=
DB_PASSWORD=
DB_NAME=
JWT_SECRET=
```

### Run

```bash
npm run start:dev
```

GraphQL playground: http://localhost:8 000/graphql

## API Examples

### Authentication

```graphql
mutation {
  login(input: { username: "admin", password: "password" }) {
    access_token
  }
}
```

### Department Operations

```graphql
# Create Department
mutation {
  createDepartment(
    input: {
      name: "Finance"
      subDepartments: [{ name: "Accounts" }, { name: "Audit" }]
    }
  ) {
    id
    name
  }
}

# Get Departments
query {
  getDepartments {
    id
    name
    subDepartments {
      id
      name
    }
  }
}

# Update Department
mutation {
  updateDepartment(id: 1, input: { name: "New Finance" }) {
    id
    name
  }
}

# Delete Department
mutation {
  deleteDepartment(id: 1)
}
```

**Note:** Include JWT token in Authorization header:

```
Authorization: Bearer <your-token>
```
