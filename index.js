const express = require("express");
const methodOverride = require("method-override");
const session = require('express-session');

const app = express();


//ejs
app.set("view engine", "ejs");

app.use(methodOverride("_method"))

app.set("views", "./app/views");
app.use(express.static("public"));

app.use(express.urlencoded({
    extended:true
}));

app.use(express.json());
app.use(session({
    secret: "toolsHall",
    sesave: true,
    saveUninitialized: true
}));

//área usuario contratante e prestador
const rotaAreaUsuario = require("./app/routes/areaUsuarioRouter");

//cadastro (prestador e contratante)
const rotaCadastro = require("./app/routes/cadastroRouter");

//pagina inicial
const rotaHome = require("./app/routes/homeRouter");

//login (prestador e constratante e selecione)
const rotaLogin = require("./app/routes/loginRouter");

//single e lista do prestador
const rotaPrestador = require("./app/routes/prestadorRouter");
 
app.use("/home", rotaHome);
//...5620/home
//...5620/home/sobre
//...5620/home/contato

app.use("/usuario", rotaAreaUsuario);
//...5620/usuario/area-contratante
//...5620/usuario/area-prestador

app.use("/cadastro", rotaCadastro);
//...5620/cadastro/prestador
//...5620/cadastro/contratante

app.use("/login", rotaLogin);
//...5620/login
//...5620/login/prestador
//...5620/login/contratante

app.use("/prestador", rotaPrestador);
//...5620/prestador/lista
//...5620/prestador/single

app.listen(5620, () => {
    console.log("servidor rodando na porta 5620")
})