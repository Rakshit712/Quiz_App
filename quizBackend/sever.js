import express from 'express';
const server = express();
const port =8000;

import router from './router/router.js'


import cors from 'cors';
server.use( cors() );
 server.use(express.json());



 import mongoose from 'mongoose';
 const url = "mongodb+srv://rakshitudp:Agrim122@mongocluster.xggpcnu.mongodb.net/mydb";

 mongoose.connect(url).then(()=>{console.log('connected to the database')}
).catch((err)=> console.log(err));


server.use('/api',router);

server.listen(port, () => {
    console.log(`Server is running on port ${port}`)});