module.exports = {
  port: process.env.POSTGRES_PORT,
  type: process.env.POSTGRES_TYPE,
  host: process.env.POSTGRES_HOST,

  username: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,

  logging: true,
  synchronize: false,

  seeds: ['dist/src/modules/**/*.seed.js'],
  entities: ['dist/src/modules/**/*.model.js'],
  migrations: ['db/migration/**/*.ts'],

  cli: {
    entitiesDir: 'db/entity',
    migrationsDir: 'db/migration',
    subscribersDir: 'db/subscriber',
  }
};
