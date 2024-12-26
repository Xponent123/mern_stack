/* api: application programming interface
   - allows two software programs to communicate with each other
   - allows the frontend to communicate with the backend
   - allows the frontend to send a request
    - allows the backend to send a response
    - allows the frontend to send a request to the backend
    - allows the backend to send a response to the frontend
    */

import express from  'express';
import {connectDB} from './config/db.js';
import dotenv from 'dotenv';
// import Product from './models/product.model.js';
// import mongoose from 'mongoose';
import productRoutes from './routes/product.route.js';
import path from 'path';

dotenv.config();
const PORT=process.env.PORT || 5000;
const app=express();
const __dirname=path.resolve();

app.use(express.json());
app.use('/api/products',productRoutes);
if(process.env.NODE_ENV==='production'){
    app.use(express.static(path.join(__dirname,'/frontend/dist')));
    app.get('*',(req,res) => {
        res.sendFile(path.resolve(__dirname,'frontend','dist','index.html'));
    });
}

console.log(process.env.MONGO_URI);
app.listen(PORT,()=> {
    connectDB();
    console.log('server started at http://localhost:'+PORT);
});
