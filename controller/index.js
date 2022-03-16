const express = require("express");

const app = express();

app.get("/", function(req, resp){
    resp.send("Bem vindo ao meu App");
})

app.get("/Contato", function(req, resp){
    resp.send("Página de Contato do meu App");
})

app.get("/Produto", function(req, resp){
    resp.send("Página de Produtos do meu App");
})

app.get("/dados/:nome/:cargo", function(req, resp){
    resp.send("<h1>Olá sr(a). "+req.params.nome+"</h1><h2>Seu Cargo é " +req.params.cargo+"</h2>");
})

// esta sempre deve ser a ultima linha quando usamos o express
app.listen(8080, function(){
    console.log("Servidor funcionando na url http://localhost:8080");
});