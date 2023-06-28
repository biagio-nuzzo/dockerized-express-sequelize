# dockerized-expressjs-sequelize :rocket:

Welcome to the **dockerized-expressjs-sequelize** repository! :wave: This project is a backend application built with Node.js and Express.js. It utilizes Sequelize as the ORM (Object-Relational Mapping) tool for managing the database. The entire project is dockerized, with Docker working seamlessly with the backend container and the PostgreSQL database daemon. :whale:

## Project Information :information_source:

- Description: This project is a backend application developed in Node.js using Express.js as the framework. Sequelize is implemented as the ORM tool for efficient database management. The project is fully dockerized, with Docker managing the backend container and the PostgreSQL database daemon.
- Technologies: Node.js, Express.js, Sequelize, Docker, PostgreSQL
- Project Name: dockerized-expressjs-sequelize

## Prerequisites :wrench:

Before getting started with the project, ensure that you have the following dependencies installed on your development machine:

- [Node.js](https://nodejs.org/) (version X.X.X)
- [Docker](https://www.docker.com/) (version X.X.X)
- [PostgreSQL](https://www.postgresql.org/) (version X.X.X)

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

3. Run the following command to set up the project:

   ```bash
   ./dev_stack.sh
   ```

   This script will handle the setup process for you.

4. Once the setup is complete, you can start the backend server:

   ```bash
   docker-compose up
   ```

   The server should now be running on [http://localhost:3000](http://localhost:3000).

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
