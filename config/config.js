require('dotenv').config();

module.exports = {
  "development": {
      "username": "user",
      "password": "password",
      "database": "db_name",
      "host": "node_db",
      "dialect": "postgres",
      "port": process.env.DB_PORT
  },
  "test": {
      "username": "root",
      "password": null,
      "database": "database_test",
      "host": "127.0.0.1",
      "dialect":"postgres"
  },
  "production": {
      "username": "root",
      "password": null,
      "database": "database_production",
      "host": "127.0.0.1",
      "dialect":"postgres"
  }
  };
