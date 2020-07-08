## Installation

```bash
& npm install -g ts-node typescript typeorm
$ npm install 
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Environment Variables

```bash
# setup enviromnent variables
$ . env.sh
```

## DB preparation

1. Install postgres 11 - https://www.postgresql.org/download/
2. Create database (with name from environment variables - POSTGRES_DATABASE)
3. Create table (with name of each model)

## Migrations DB

Create migrations with command:
  Pay attention on clear DB before init migration - migration
  create comparison of existing table schema with typeorm model,
  and reflect difference in migration !!!

```bash
# create migration to reflect models changes in migration file
$ npm start
$ npm run migration:generate -- -n <name-of-migration-file>
# run migration
$ npm run migration:run
```
 