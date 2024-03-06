const express = require ("express");
const app = express();

app.set('view engine', 'ejs');

app.get("/", (req, resp) =>{
    
    var nome = "Jordan Lippert";
    var linguagem = "JavaScript";
    var mensagemErro = false;

    resp.render("index",{
        nome: nome,
        linguagem: linguagem,
        empresa: "Pergunt.Enterprise",
        perguntas: 1023,
        msg: mensagemErro
    });
});

app.listen(1107, function(erro){
    if(erro){ 
        console.log(" Deu erro em algo ");
    }
    else {
        console.log(" Servidor funcionando ")
    }
});