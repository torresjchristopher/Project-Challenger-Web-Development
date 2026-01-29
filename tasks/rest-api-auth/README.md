# Task 5: REST API with Authentication & Authorization

Production-grade REST API with JWT authentication, role-based access control, and comprehensive testing.

## Overview

A complete REST API implementation featuring:
- RESTful endpoint design principles
- JWT token-based authentication
- Role-based access control (RBAC)
- Request validation with Joi
- Comprehensive error handling
- OpenAPI/Swagger documentation
- Rate limiting and throttling
- Complete test coverage

## Features

✅ **Authentication**
- JWT tokens with refresh mechanism
- Password hashing with bcryptjs
- Email verification
- Password reset flow
- OAuth2 ready

✅ **Authorization**
- Role-based access control (RBAC)
- Resource-level permissions
- Admin dashboard access
- User management endpoints

✅ **API Design**
- RESTful conventions
- Proper HTTP status codes
- Request/response validation
- Error standardization
- Pagination and sorting

✅ **Production Ready**
- Rate limiting (100 req/min)
- Input validation
- CORS configuration
- Helmet security headers
- Request logging

## Endpoints

### Auth
```
POST   /api/auth/register
POST   /api/auth/login
POST   /api/auth/refresh
POST   /api/auth/logout
GET    /api/auth/profile
```

### Users (Admin)
```
GET    /api/users
GET    /api/users/:id
PUT    /api/users/:id
DELETE /api/users/:id
```

### Resources
```
GET    /api/resources
POST   /api/resources
GET    /api/resources/:id
PUT    /api/resources/:id
DELETE /api/resources/:id
```

## Tech Stack

- **Framework**: Express.js, TypeScript
- **Database**: PostgreSQL
- **Auth**: JWT, bcryptjs
- **Validation**: Joi
- **Testing**: Jest, Supertest
- **Docs**: Swagger/OpenAPI

## Testing

```bash
npm test                 # All tests
npm run test:coverage   # Coverage report
npm run test:watch     # Watch mode
```

## Metrics

- **Type**: Challenge/Task
- **Difficulty**: Intermediate
- **Test Coverage**: 85%+
- **Est. LOC**: 3,500+

Part of **Project Challenger 1: Web Development**
