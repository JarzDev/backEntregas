import "dotenv/config";
import express from "express";
import cors from "cors";
import { router } from "./routes";
import db from "./config/dbConnect";    


const PORT = process.env.PORT || 3001; 
const app = express();
 
const allowedOrigins = ['https://entregas.agilenetworks.cl/'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};


app.use(cors(options));
app.use(express.json());
app.use(router);


 
app.listen(PORT, () => {
    console.log(`Server corriendo en el puerto ${PORT}`);
    }
);
  
const  dbConnection= async()=> {
    try {
    await db.sync();   
    await db.authenticate();
        

        console.log('Database Wokring... :=)');
    } catch (error) {
        console.log(error);
    }
}   

dbConnection();