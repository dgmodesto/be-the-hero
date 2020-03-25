const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);



/**
 * Métodos HTTP
 * 
 * GET: Buscar uma informação do backend
 * POST: Criar uma informação no backend
 * PUT: Alterar uma informação no backend
 * DELETE: Deletar uma informação no backend
 */

/**
 * Tipos de parâmetros
 * 
 * Query: Parâmetro nomeados enviados na rota após "?" (Filtros, paginação)
 * Route Params: Parâmetros utilizando para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 * 
 */

 /**
  * SQL: MYSQL, SQLite, PostgreSql, Oracle, Microsoft Sql Server
  * NoSql: MongoDB, CouchDB, Redis, etc
  */

  /**
   * Driver: Select * FROM users
   * Query Builder: table('users).select('*').where()
   * 
   */

   /**
    * Entidades: Representa tudo que será salvo no banco de dados
    *  - Ong
    *  - Caso (Incident)
    *  - 
    */
   /**
    * Funcionalidades:
    * - Login de ONG
    * - Cadastro de ONG
    * - Logout de ONG
    * - Cadastrar novos Casos
    * - Deletar Casos
    * - Listar Casos específicos de uma ONG
    * - Listar todos os Casos
    * - Entrar em contato com a ONG
    */

    /**
     * Create a migration
     * npx migrate:make migration_name
     * 
     * Aplicate migration
     * npx knex migrate:latest
     * 
     * Aplicate rollback 
     * npx knex migrate:rollback
     * 
     * list all migrations executed
     * npx knex migrate:status
     */