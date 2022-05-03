const express=require('express');
const expressLayouts=require('express-ejs-layouts');


const app=express();
const port=process.env.PORT || 3000;

require('dotenv').config();

app.use(express.urlencoded({extended:true}));//allows us to pass url-encoded bodies.

app.use(express.static('public'));// we dont want to list the full path everytime. we just want to do /img/img.png, etc.
app.use(expressLayouts);

app.set('layout','./layouts/main');

const routes=require('./server/routes/recipeRoutes.js');
app.use('/',routes);

app.listen(port,()=>{
    console.log(`Listening to port ${port}`);
})



