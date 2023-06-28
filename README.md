# dockerized-expressjs-sequelize :rocket:

Welcome to the **dockerized-expressjs-sequelize** repository! :wave: This project is a backend application built with Node.js and Express.js. It utilizes Sequelize as the ORM (Object-Relational Mapping) tool for managing the database. The entire project is dockerized, with Docker working seamlessly with the backend container and the PostgreSQL database daemon. :whale:

## Project Information :information_source:

- Description: This project is a backend application developed in Node.js using Express.js as the framework. Sequelize is implemented as the ORM tool for efficient database management. The project is fully dockerized, with Docker managing the backend container and the PostgreSQL database daemon.
- Technologies: Node.js, Express.js, Sequelize, Docker, PostgreSQL
- Project Name: dockerized-expressjs-sequelize

## Prerequisites :wrench:

Before getting started with the project, ensure that you have the following dependencies installed on your development machine:

- [Node.js](https://nodejs.org/) (v18.13.0)
- [Docker](https://www.docker.com/) (v20.10.23)
- [PostgreSQL](https://www.postgresql.org/) (v12.15)

## Environment Variables :key:

The following environment variables need to be set before running the project:

- `PG_DB`: The name of the PostgreSQL database.
- `PG_USER`: The username for accessing the PostgreSQL database.
- `PG_PASSWORD`: The password for accessing the PostgreSQL database.
- `PG_HOST`: The hostname for the PostgreSQL database.
- `DB_PORT`: The port number on which the PostgreSQL database is running.
- `NODE_SERVER_PORT`: The port number on which the Node.js server should run.

Make sure to set these variables with appropriate values in your environment.

## Getting Started :rocket:

To get this project up and running on your local machine, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/dockerized-expressjs-sequelize.git
   ```

2. Navigate to the project directory:

   ```bash
   cd dockerized-expressjs-sequelize
   ```

3. Set the required environment variables as mentioned above.

4. Run the following command to set up the project:

   ```bash
   ./dev_stack.sh
   ```

   This script will handle the setup process for you.

5. Once the setup is complete the server should now be running on [http://localhost:8000](http://localhost:8000) or the port you specified in the environment variable `NODE_SERVER_PORT`) to see the application in action! :tada:

## Usage :hammer_and_wrench:

Here are some important commands and endpoints you can use:

- **Create Migrations:**
  
  ```bash
  sequelize migration:create
  ```

- **Apply Migrations:**
  
  ```bash
  sequelize db:migrate
  ```

- **Enter the Node Container:**
  
  ```bash
  docker compose exec -u $(id -u) -it node_app bash
  ```

Feel free to explore and customize the project according to your requirements! Happy coding! :rocket:
