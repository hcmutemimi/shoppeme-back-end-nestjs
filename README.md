
## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.
## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

## structure
src/
├── app.module.ts
├── main.ts
│
├── users/
│   ├── dto/
│   │   └── create-user.dto.ts
│   ├── schemas/
│   │   └── user.schema.ts
│   ├── users.controller.ts
│   ├── users.service.ts
│   └── users.module.ts
│
├── products/
│   ├── dto/
│   ├── schemas/
│   ├── products.controller.ts
│   ├── products.service.ts
│   └── products.module.ts
│
├── admins/
│   ├── dto/
│   ├── schemas/
│   ├── admins.controller.ts
│   ├── admins.service.ts
│   └── admins.module.ts
│
├── common/
│   ├── guards/
│   ├── decorators/
│   ├── filters/
│   └── pipes/
|.  └── enums/
│
└── config/
    └── mongo.config.ts

