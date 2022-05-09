const express = require('express');
const app = express();
const router = require('./Rota');
const modelUser = require('./infrastructure/database/model/user-model/user-registration-model').USER_REGISTRATION_MODEL;

app.use(express.json());
app.use(router);


modelUser.sync();
app.listen(3001, ()=> console.log("Server funcionando na porta 3001"));