FROM node:14

# Create app directory
# WORKDIR /app

# COPY package*.json ./
# COPY ./db/migrations .

RUN npm install
RUN npm install -g sequelize-cli

# Bundle app source
# COPY . .

WORKDIR /usr/src/app/src

CMD [ "node", "index.js" ]