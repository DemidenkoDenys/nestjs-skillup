## Installation

```bash
& npm install -g ts-node typescript typeorm env-cmd
$ npm install 
```

## Environment Variables

```bash
# set enviromnent variables in .env file in format:
#   POSTGRES_PORT = 5432
#   POSTGRES_TYPE = 'postgres'
#   POSTGRES_HOST = <HOST>
#   POSTGRES_DATABASE = <DB_NAME>
#   POSTGRES_PASSWORD = <PASSWORD>
#   POSTGRES_USERNAME = <USERNAME>

# enviromnent variables sets automatically
```

## DB preparation

1. Install postgres 11 - https://www.postgresql.org/download/
2. Create database (with name from environment variables - POSTGRES_DATABASE)
3. Create table (with name of each model) - !!! needs to generate migration with separated queryRunners (single queryRunner for each column, key, changes etc.)

## Migrations DB

Create migrations with command:
  Pay attention on clearing DB before init migration!
  Migration creates comparison of existing table schema with typeorm model, and reflect difference in migration!

```bash
# After each change or initially, create migration to reflect models changes or initial structure to migration files
$ npm start
$ npm run migration:generate -- -n <name-of-migration-file>
# run migration
$ npm run migration:run
```

## Seed DB

```bash
$ npm run seed
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