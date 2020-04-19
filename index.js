const express = require("express");
const methodOverride = require("method-override");

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
//...8080/home
//...8080/home/sobre
//...8080/home/contato

app.use("/usuario", rotaAreaUsuario);
//...8080/usuario/area-contratante
//...8080/usuario/area-prestador

app.use("/cadastro", rotaCadastro);
//...8080/cadastro/prestador
//...8080/cadastro/usuario

app.use("/login", rotaLogin);
//...8080/login
//...8080/login/prestador
//...8080/login/contratante

app.use("/prestador", rotaPrestador);
//...8080/prestador/lista
//...8080/prestador/single

app.listen(8080, () => {
    console.log("servidor rodando na porta 8080")
})