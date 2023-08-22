module.exports = {
    type: 'postgres', // Tipo do banco de dados
    host: 'localhost', // Host do banco de dados
    port: 5432, // Porta do banco de dados
    username: 'postgres', // Nome de usuário
    password: 'postgres', // Senha
    database: 'code_drops_node_crud', // Nome do banco de dados
    synchronize: false, // Sincronizar automaticamente o esquema do banco de dados (para ambiente de desenvolvimento)
    logging: true, // Habilitar logs do TypeORM
    entities: ['src/entities/**/*.ts'], // Caminho para suas entidades
    migrations: ['src/migrations/**/*.ts'], // Caminho para suas migrações
    subscribers: ['src/subscribers/**/*.ts'], // Caminho para seus subscribers
    cli: {
      entitiesDir: 'src/entities',
      migrationsDir: 'src/migrations',
      subscribersDir: 'src/subscribers',
    },
  };
  