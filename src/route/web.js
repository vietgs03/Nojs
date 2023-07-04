import express from "express";
import getHomepage from "../controller/homeController";
let router = express.Router();

const initWebRoute =(app) =>
{
    
        router.get('/',getHomepage);
    

    app.get('/about',(req,res)=>{
        res.send("hello am thoma")
     });

     
    return app.use('/',router);
}

export default initWebRoute;