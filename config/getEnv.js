const path = require("path");
const dotEnv = require("dotenv");

module.exports = () => {
  // Neste cenário, com o yargs é possível estabelecer parâmetros que podem ser 
  // informados na inicialização do servidor em Node JS e recuperar os mesmo de forma muito prática.
  const args = require("yargs")
    .options({
      env: {
        alias: "e",
        describe: "Ambiente do Sistema",
        choices: ["testing", "production"],
        demandOption: true
      }
    })
    .help().argv;

    // busca as config do arquivo .env da nossa pasta raíz do nosso projeto
    const envFile = dotEnv.config({
      path: `${path.resolve(process.cwd(), '.env', args.env)}`
    });

    if (envFile.error) {
      switch(envFile.error.code) {
        case 'ENOENT':
          console.log('O arquivo .env não está localizado, por favor verifique se o arquivo existe!');
          break;
        default:
          console.log('Não é possível abrir o arquivo .env - Verifique se a estrutura do arquivo tem o formato correto!');
          break;
      }
      process.exit(0)
    }
};