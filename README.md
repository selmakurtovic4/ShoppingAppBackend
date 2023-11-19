# ABOUT REPOSITORY
This GitHub repository hosts the backend component of a shopping application built with Javascript and Node.js(Express.js).

## INSTALLING
```bash
npm install mysql2
npm install sequelize
npm install --save-dev sequelize-cli
npm install express

```

## SETTING UP DATABASE
For your application to function correctly, you need to create a database and configure its connection details in the .env file. Make sure to provide the appropriate database connection settings in your environment file.

## DATABASE MIGRATION AND SEEDING
```bash
npx sequelize-cli db:migrate:all
npx sequelize-cli db:seed 


```


## STARTING APP
```bash
npm start
```
