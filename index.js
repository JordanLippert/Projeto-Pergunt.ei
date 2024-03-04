const express = require ("express");
const app = express();

app.set('view engine', 'ejs');

//app.get("/", (req, resp) => {
  //  resp.send(" Bem vindo ao PERGUNT.EI ");
//});

app.get("/", (req, resp) =>{
    resp.render("index");
});

app.listen(1107, function(erro){
    if(erro){ 
        console.log(" Deu erro em algo ");
    }
    else {
        console.log(" Servidor funcionando ")
    }
});