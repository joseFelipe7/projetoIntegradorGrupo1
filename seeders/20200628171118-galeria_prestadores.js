'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkInsert('galeria_prestadores', 
      [{
        foto:'/uploads/projeto_arq1.png',
        extensao: null,
        titulo:'Projeto de arquitetura de interiores',
        descricao:'Projeto feito por mim, para interior da casa do meu cliente.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '1'
      },
      {
        foto:'/uploads/projeto_arq2.png',
        extensao: null,
        titulo:'Projeto de arquitetura de interiores',
        descricao:'Projeto feito por mim, para interior da casa do meu cliente.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '1'
      },
      {
        foto:'/uploads/projeto_arq3.png',
        extensao: null,
        titulo:'Projeto de arquitetura de interiores',
        descricao:'Projeto feito por mim, para interior da casa do meu cliente.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '1'
      },
      {
        foto:'/uploads/atendimento_medica.jpg',
        extensao: null,
        titulo:'Médica atendendo em casa',
        descricao:'Atendendo paciente em casa.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '2'
      },
      {
        foto:'/uploads/atendimento_medica.jpg',
        extensao: null,
        titulo:'Médica atendendo em casa',
        descricao:'Atendendo paciente em casa.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '2'
      },
      {
        foto:'/uploads/atendimento_medica.jpg',
        extensao: null,
        titulo:'Médica atendendo em casa',
        descricao:'Atendendo paciente em casa.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '2'
      },
      {
        foto:'/uploads/pintura_pintor1.png',
        extensao: null,
        titulo:'Pintando casa do cliente',
        descricao:'Pintando paredes da casa do meu cliente.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '3'
      },
      {
        foto:'/uploads/pintura_pintor2.png',
        extensao: null,
        titulo:'Pintando casa do cliente',
        descricao:'Pintando paredes da casa do meu cliente.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '3'
      },
      {
        foto:'/uploads/pintura_pintor1.png',
        extensao: null,
        titulo:'Pintando casa do cliente',
        descricao:'Pintando paredes da casa do meu cliente.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '3'
      },
      {
        foto:'/uploads/frutosmar_cozinheira1.jpg',
        extensao: null,
        titulo:'Prato de frutos do mar',
        descricao:'Melhor prato de frutos do mar que você vai comer.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '4'
      },
      {
        foto:'/uploads/frutosmar_cozinheira2.jpg',
        extensao: null,
        titulo:'Prato de frutos do mar',
        descricao:'Melhor prato de frutos do mar que você vai comer.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '4'
      },
      {
        foto:'/uploads/frutosmar_cozinheira2.jpg',
        extensao: null,
        titulo:'Prato de frutos do mar',
        descricao:'Melhor prato de frutos do mar que você vai comer.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '4'
      },
      {
        foto:'/uploads/admin_administradora.jpg',
        extensao: null,
        titulo:'Administrando',
        descricao:'Administrando relações com exterior.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '5'
      },
      {
        foto:'/uploads/admin_administradora.jpg',
        extensao: null,
        titulo:'Administrando',
        descricao:'Administrando relações com exterior.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '5'
      },
      {
        foto:'/uploads/admin_administradora.jpg',
        extensao: null,
        titulo:'Administrando',
        descricao:'Administrando relações com exterior.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '5'
      },
      {
        foto:'/uploads/peletosto_derma1.jpg',
        extensao: null,
        titulo:'Cuidar da pele',
        descricao:'Cuidando da pele do rosto da minha cliente.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '6'
      },
      {
        foto:'/uploads/peletosto_derma2.jpg',
        extensao: null,
        titulo:'Cuidar da pele',
        descricao:'Cuidando da pele do rosto da minha cliente.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '6'
      },
      {
        foto:'/uploads/peletosto_derma1.jpg',
        extensao: null,
        titulo:'Cuidar da pele',
        descricao:'Cuidando da pele do rosto da minha cliente.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '6'
      },
      {
        foto:'/uploads/treino_personal1.jpg',
        extensao: null,
        titulo:'Dando Treino',
        descricao:'Passando treino para meus alunos.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '7'
      },
      {
        foto:'/uploads/treino_personal1.jpg',
        extensao: null,
        titulo:'Dando Treino',
        descricao:'Passando treino para meus alunos.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '7'
      },
      {
        foto:'/uploads/treino_personal1.jpg',
        extensao: null,
        titulo:'Dando Treino',
        descricao:'Passando treino para meus alunos.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '7'
      },
      {
        foto:'/uploads/aula_professora.jpg',
        extensao: null,
        titulo:'Aula de Matemática',
        descricao:'Dando aula de matemática para meus alunos.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '8'
      },
      {
        foto:'/uploads/aula_professora.jpg',
        extensao: null,
        titulo:'Aula de Matemática',
        descricao:'Dando aula de matemática para meus alunos.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '8'
      },
      {
        foto:'/uploads/aula_professora.jpg',
        extensao: null,
        titulo:'Aula de Matemática',
        descricao:'Dando aula de matemática para meus alunos.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '8'
      },
      {
        foto:'/uploads/nhoque_cozinheiro1.jpg',
        extensao: null,
        titulo:'Prato de Nhoque',
        descricao:'Melhor prato de nhoque que você irá comer.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '9'
      },
      {
        foto:'/uploads/nhoque_cozinheiro2.jpg',
        extensao: null,
        titulo:'Prato de Nhoque',
        descricao:'Melhor prato de nhoque que você irá comer.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '9'
      },
      {
        foto:'/uploads/nhoque_cozinheiro3.jpg',
        extensao: null,
        titulo:'Prato de Nhoque',
        descricao:'Melhor prato de nhoque que você irá comer.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '9'
      },
      {
        foto:'/uploads/jardim_jardineiro1.png',
        extensao: null,
        titulo:'Jardim que cuido',
        descricao:'Jardim do meu cliente.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '10'
      },
      {
        foto:'/uploads/jardim_jardineiro2.png',
        extensao: null,
        titulo:'Jardim que cuido',
        descricao:'Jardim do meu cliente.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '10'
      },
      {
        foto:'/uploads/jardim_jardineiro1.png',
        extensao: null,
        titulo:'Jardim que cuido',
        descricao:'Jardim do meu cliente.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '10'
      },
      {
        foto:'/uploads/encanamento_encanador1.jpg',
        extensao: null,
        titulo:'Encanamento',
        descricao:'Encanmento feito por na casa do meu cliente.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '11'
      },
      {
        foto:'/uploads/encanamento_encanador2.jpg',
        extensao: null,
        titulo:'Encanamento',
        descricao:'Encanmento feito por na casa do meu cliente.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '11'
      },
      {
        foto:'/uploads/encanamento_encanador1.jpg',
        extensao: null,
        titulo:'Encanamento',
        descricao:'Encanmento feito por na casa do meu cliente.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '11'
      },
      {
        foto:'/uploads/admin_admnistrador.jpg',
        extensao: null,
        titulo:'Administrando',
        descricao:'Administrando o negócio do meu cliente.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '12'
      },
      {
        foto:'/uploads/admin_admnistrador.jpg',
        extensao: null,
        titulo:'Administrando',
        descricao:'Administrando o negócio do meu cliente.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '12'
      },
      {
        foto:'/uploads/admin_admnistrador.jpg',
        extensao: null,
        titulo:'Administrando',
        descricao:'Administrando o negócio do meu cliente.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '12'
      },
      {
        foto:'/uploads/mec_mecanico1.jpg',
        extensao: null,
        titulo:'Mecânica de Carro',
        descricao:'Arrumando carro do meu cliente.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '13'
      },
      {
        foto:'/uploads/mec_mecanico2.jpg',
        extensao: null,
        titulo:'Mecânica de Carro',
        descricao:'Arrumando carro do meu cliente.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '13'
      },
      {
        foto:'/uploads/mec_mecanico3.jpg',
        extensao: null,
        titulo:'Mecânica de Carro',
        descricao:'Arrumando carro do meu cliente.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '13'
      },
      {
        foto:'/uploads/atendimento_medico.jpg',
        extensao: null,
        titulo:'Médico atendendo em casa',
        descricao:'Atendendo paciente em casa.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '14'
      },
      {
        foto:'/uploads/atendimento_medico.jpg',
        extensao: null,
        titulo:'Médico atendendo em casa',
        descricao:'Atendendo paciente em casa.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '14'
      },
      {
        foto:'/uploads/atendimento_medico.jpg',
        extensao: null,
        titulo:'Médico atendendo em casa',
        descricao:'Atendendo paciente em casa.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '14'
      },
      {
        foto:'/uploads/aula_professor.jpg',
        extensao: null,
        titulo:'Aula de Português',
        descricao:'Dando aula de português para meus alunos.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '15'
      },
      {
        foto:'/uploads/aula_professor.jpg',
        extensao: null,
        titulo:'Aula de Português',
        descricao:'Dando aula de português para meus alunos.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '15'
      },
      {
        foto:'/uploads/aula_professor.jpg',
        extensao: null,
        titulo:'Aula de Português',
        descricao:'Dando aula de português para meus alunos.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '15'
      },
      {
        foto:'/uploads/show_seguranca1.jpg',
        extensao: null,
        titulo:'Segurança em Shows',
        descricao:'Garantindo segurança do público em show.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '16'
      },
      {
        foto:'/uploads/show_seguranca1.jpg',
        extensao: null,
        titulo:'Segurança em Shows',
        descricao:'Garantindo segurança do público em show.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '16'
      },
      {
        foto:'/uploads/show_seguranca1.jpg',
        extensao: null,
        titulo:'Segurança em Shows',
        descricao:'Garantindo segurança do público em show.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '16'
      },
      {
        foto:'/uploads/projeto_arq1.png',
        extensao: null,
        titulo:'Projeto de arquitetura de interiores',
        descricao:'Projeto feito por mim, para interior da casa do meu cliente.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '17'
      },
      {
        foto:'/uploads/projeto_arq2.png',
        extensao: null,
        titulo:'Projeto de arquitetura de interiores',
        descricao:'Projeto feito por mim, para interior da casa do meu cliente.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '17'
      },
      {
        foto:'/uploads/projeto_arq3.png',
        extensao: null,
        titulo:'Projeto de arquitetura de interiores',
        descricao:'Projeto feito por mim, para interior da casa do meu cliente.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '17'
      },
      {
        foto:'/uploads/atendimento_medica.jpg',
        extensao: null,
        titulo:'Médica atendendo em casa',
        descricao:'Atendendo paciente em casa.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '18'
      },
      {
        foto:'/uploads/atendimento_medica.jpg',
        extensao: null,
        titulo:'Médica atendendo em casa',
        descricao:'Atendendo paciente em casa.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '18'
      },
      {
        foto:'/uploads/atendimento_medica.jpg',
        extensao: null,
        titulo:'Médica atendendo em casa',
        descricao:'Atendendo paciente em casa.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '18'
      },
      {
        foto:'/uploads/pintura_pintor1.png',
        extensao: null,
        titulo:'Pintando casa do cliente',
        descricao:'Pintando paredes da casa do meu cliente.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '19'
      },
      {
        foto:'/uploads/pintura_pintor2.png',
        extensao: null,
        titulo:'Pintando casa do cliente',
        descricao:'Pintando paredes da casa do meu cliente.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '19'
      },
      {
        foto:'/uploads/pintura_pintor1.png',
        extensao: null,
        titulo:'Pintando casa do cliente',
        descricao:'Pintando paredes da casa do meu cliente.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '19'
      },
      {
        foto:'/uploads/frutosmar_cozinheira1.jpg',
        extensao: null,
        titulo:'Prato de frutos do mar',
        descricao:'Melhor prato de frutos do mar que você vai comer.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '20'
      },
      {
        foto:'/uploads/frutosmar_cozinheira2.jpg',
        extensao: null,
        titulo:'Prato de frutos do mar',
        descricao:'Melhor prato de frutos do mar que você vai comer.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '20'
      },
      {
        foto:'/uploads/frutosmar_cozinheira2.jpg',
        extensao: null,
        titulo:'Prato de frutos do mar',
        descricao:'Melhor prato de frutos do mar que você vai comer.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '20'
      },
      {
        foto:'/uploads/admin_administradora.jpg',
        extensao: null,
        titulo:'Administrando',
        descricao:'Administrando relações com exterior.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '21'
      },
      {
        foto:'/uploads/admin_administradora.jpg',
        extensao: null,
        titulo:'Administrando',
        descricao:'Administrando relações com exterior.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '21'
      },
      {
        foto:'/uploads/admin_administradora.jpg',
        extensao: null,
        titulo:'Administrando',
        descricao:'Administrando relações com exterior.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '21'
      },
      {
        foto:'/uploads/peletosto_derma1.jpg',
        extensao: null,
        titulo:'Cuidar da pele',
        descricao:'Cuidando da pele do rosto da minha cliente.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '22'
      },
      {
        foto:'/uploads/peletosto_derma2.jpg',
        extensao: null,
        titulo:'Cuidar da pele',
        descricao:'Cuidando da pele do rosto da minha cliente.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '22'
      },
      {
        foto:'/uploads/peletosto_derma1.jpg',
        extensao: null,
        titulo:'Cuidar da pele',
        descricao:'Cuidando da pele do rosto da minha cliente.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '22'
      },
      {
        foto:'/uploads/treino_personal1.jpg',
        extensao: null,
        titulo:'Dando Treino',
        descricao:'Passando treino para meus alunos.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '23'
      },
      {
        foto:'/uploads/treino_personal1.jpg',
        extensao: null,
        titulo:'Dando Treino',
        descricao:'Passando treino para meus alunos.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '23'
      },
      {
        foto:'/uploads/treino_personal1.jpg',
        extensao: null,
        titulo:'Dando Treino',
        descricao:'Passando treino para meus alunos.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '23'
      },
      {
        foto:'/uploads/aula_professora.jpg',
        extensao: null,
        titulo:'Aula de Matemática',
        descricao:'Dando aula de matemática para meus alunos.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '24'
      },
      {
        foto:'/uploads/aula_professora.jpg',
        extensao: null,
        titulo:'Aula de Matemática',
        descricao:'Dando aula de matemática para meus alunos.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '24'
      },
      {
        foto:'/uploads/aula_professora.jpg',
        extensao: null,
        titulo:'Aula de Matemática',
        descricao:'Dando aula de matemática para meus alunos.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '24'
      },
      {
        foto:'/uploads/nhoque_cozinheiro1.jpg',
        extensao: null,
        titulo:'Prato de Nhoque',
        descricao:'Melhor prato de nhoque que você irá comer.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '25'
      },
      {
        foto:'/uploads/nhoque_cozinheiro2.jpg',
        extensao: null,
        titulo:'Prato de Nhoque',
        descricao:'Melhor prato de nhoque que você irá comer.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '25'
      },
      {
        foto:'/uploads/nhoque_cozinheiro3.jpg',
        extensao: null,
        titulo:'Prato de Nhoque',
        descricao:'Melhor prato de nhoque que você irá comer.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '25'
      },
      {
        foto:'/uploads/jardim_jardineiro1.png',
        extensao: null,
        titulo:'Jardim que cuido',
        descricao:'Jardim do meu cliente.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '26'
      },
      {
        foto:'/uploads/jardim_jardineiro2.png',
        extensao: null,
        titulo:'Jardim que cuido',
        descricao:'Jardim do meu cliente.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '26'
      },
      {
        foto:'/uploads/jardim_jardineiro1.png',
        extensao: null,
        titulo:'Jardim que cuido',
        descricao:'Jardim do meu cliente.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '26'
      },
      {
        foto:'/uploads/encanamento_encanador1.jpg',
        extensao: null,
        titulo:'Encanamento',
        descricao:'Encanmento feito por na casa do meu cliente.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '27'
      },
      {
        foto:'/uploads/encanamento_encanador2.jpg',
        extensao: null,
        titulo:'Encanamento',
        descricao:'Encanmento feito por na casa do meu cliente.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '27'
      },
      {
        foto:'/uploads/encanamento_encanador1.jpg',
        extensao: null,
        titulo:'Encanamento',
        descricao:'Encanmento feito por na casa do meu cliente.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '27'
      },
      {
        foto:'/uploads/admin_admnistrador.jpg',
        extensao: null,
        titulo:'Administrando',
        descricao:'Administrando o negócio do meu cliente.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '28'
      },
      {
        foto:'/uploads/admin_admnistrador.jpg',
        extensao: null,
        titulo:'Administrando',
        descricao:'Administrando o negócio do meu cliente.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '28'
      },
      {
        foto:'/uploads/admin_admnistrador.jpg',
        extensao: null,
        titulo:'Administrando',
        descricao:'Administrando o negócio do meu cliente.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '28'
      },
      {
        foto:'/uploads/mec_mecanico1.jpg',
        extensao: null,
        titulo:'Mecânica de Carro',
        descricao:'Arrumando carro do meu cliente.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '29'
      },
      {
        foto:'/uploads/mec_mecanico2.jpg',
        extensao: null,
        titulo:'Mecânica de Carro',
        descricao:'Arrumando carro do meu cliente.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '29'
      },
      {
        foto:'/uploads/mec_mecanico3.jpg',
        extensao: null,
        titulo:'Mecânica de Carro',
        descricao:'Arrumando carro do meu cliente.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '29'
      },
      {
        foto:'/uploads/atendimento_medico.jpg',
        extensao: null,
        titulo:'Médico atendendo em casa',
        descricao:'Atendendo paciente em casa.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '30'
      },
      {
        foto:'/uploads/atendimento_medico.jpg',
        extensao: null,
        titulo:'Médico atendendo em casa',
        descricao:'Atendendo paciente em casa.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '30'
      },
      {
        foto:'/uploads/atendimento_medico.jpg',
        extensao: null,
        titulo:'Médico atendendo em casa',
        descricao:'Atendendo paciente em casa.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '30'
      },
      {
        foto:'/uploads/aula_professor.jpg',
        extensao: null,
        titulo:'Aula de Português',
        descricao:'Dando aula de português para meus alunos.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '31'
      },
      {
        foto:'/uploads/aula_professor.jpg',
        extensao: null,
        titulo:'Aula de Português',
        descricao:'Dando aula de português para meus alunos.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '31'
      },
      {
        foto:'/uploads/aula_professor.jpg',
        extensao: null,
        titulo:'Aula de Português',
        descricao:'Dando aula de português para meus alunos.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '31'
      },
      {
        foto:'/uploads/show_seguranca1.jpg',
        extensao: null,
        titulo:'Segurança em Shows',
        descricao:'Garantindo segurança do público em show.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '32'
      },
      {
        foto:'/uploads/show_seguranca1.jpg',
        extensao: null,
        titulo:'Segurança em Shows',
        descricao:'Garantindo segurança do público em show.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '32'
      },
      {
        foto:'/uploads/show_seguranca1.jpg',
        extensao: null,
        titulo:'Segurança em Shows',
        descricao:'Garantindo segurança do público em show.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '32'
      },
      {
        foto:'/uploads/projeto_arq1.png',
        extensao: null,
        titulo:'Projeto de arquitetura de interiores',
        descricao:'Projeto feito por mim, para interior da casa do meu cliente.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '33'
      },
      {
        foto:'/uploads/projeto_arq2.png',
        extensao: null,
        titulo:'Projeto de arquitetura de interiores',
        descricao:'Projeto feito por mim, para interior da casa do meu cliente.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '33'
      },
      {
        foto:'/uploads/projeto_arq3.png',
        extensao: null,
        titulo:'Projeto de arquitetura de interiores',
        descricao:'Projeto feito por mim, para interior da casa do meu cliente.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '33'
      },
      {
        foto:'/uploads/atendimento_medica.jpg',
        extensao: null,
        titulo:'Médica atendendo em casa',
        descricao:'Atendendo paciente em casa.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '34'
      },
      {
        foto:'/uploads/atendimento_medica.jpg',
        extensao: null,
        titulo:'Médica atendendo em casa',
        descricao:'Atendendo paciente em casa.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '34'
      },
      {
        foto:'/uploads/atendimento_medica.jpg',
        extensao: null,
        titulo:'Médica atendendo em casa',
        descricao:'Atendendo paciente em casa.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '34'
      },
      {
        foto:'/uploads/pintura_pintor1.png',
        extensao: null,
        titulo:'Pintando casa do cliente',
        descricao:'Pintando paredes da casa do meu cliente.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '35'
      },
      {
        foto:'/uploads/pintura_pintor2.png',
        extensao: null,
        titulo:'Pintando casa do cliente',
        descricao:'Pintando paredes da casa do meu cliente.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '35'
      },
      {
        foto:'/uploads/pintura_pintor1.png',
        extensao: null,
        titulo:'Pintando casa do cliente',
        descricao:'Pintando paredes da casa do meu cliente.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '35'
      },
      {
        foto:'/uploads/frutosmar_cozinheira1.jpg',
        extensao: null,
        titulo:'Prato de frutos do mar',
        descricao:'Melhor prato de frutos do mar que você vai comer.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '36'
      },
      {
        foto:'/uploads/frutosmar_cozinheira2.jpg',
        extensao: null,
        titulo:'Prato de frutos do mar',
        descricao:'Melhor prato de frutos do mar que você vai comer.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '36'
      },
      {
        foto:'/uploads/frutosmar_cozinheira2.jpg',
        extensao: null,
        titulo:'Prato de frutos do mar',
        descricao:'Melhor prato de frutos do mar que você vai comer.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '36'
      },
      {
        foto:'/uploads/admin_administradora.jpg',
        extensao: null,
        titulo:'Administrando',
        descricao:'Administrando relações com exterior.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '37'
      },
      {
        foto:'/uploads/admin_administradora.jpg',
        extensao: null,
        titulo:'Administrando',
        descricao:'Administrando relações com exterior.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '37'
      },
      {
        foto:'/uploads/admin_administradora.jpg',
        extensao: null,
        titulo:'Administrando',
        descricao:'Administrando relações com exterior.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '37'
      },
      {
        foto:'/uploads/peletosto_derma1.jpg',
        extensao: null,
        titulo:'Cuidar da pele',
        descricao:'Cuidando da pele do rosto da minha cliente.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '38'
      },
      {
        foto:'/uploads/peletosto_derma2.jpg',
        extensao: null,
        titulo:'Cuidar da pele',
        descricao:'Cuidando da pele do rosto da minha cliente.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '38'
      },
      {
        foto:'/uploads/peletosto_derma1.jpg',
        extensao: null,
        titulo:'Cuidar da pele',
        descricao:'Cuidando da pele do rosto da minha cliente.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '38'
      },
      {
        foto:'/uploads/treino_personal1.jpg',
        extensao: null,
        titulo:'Dando Treino',
        descricao:'Passando treino para meus alunos.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '39'
      },
      {
        foto:'/uploads/treino_personal1.jpg',
        extensao: null,
        titulo:'Dando Treino',
        descricao:'Passando treino para meus alunos.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '39'
      },
      {
        foto:'/uploads/treino_personal1.jpg',
        extensao: null,
        titulo:'Dando Treino',
        descricao:'Passando treino para meus alunos.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '39'
      },
      {
        foto:'/uploads/aula_professora.jpg',
        extensao: null,
        titulo:'Aula de Matemática',
        descricao:'Dando aula de matemática para meus alunos.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '40'
      },
      {
        foto:'/uploads/aula_professora.jpg',
        extensao: null,
        titulo:'Aula de Matemática',
        descricao:'Dando aula de matemática para meus alunos.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '40'
      },
      {
        foto:'/uploads/aula_professora.jpg',
        extensao: null,
        titulo:'Aula de Matemática',
        descricao:'Dando aula de matemática para meus alunos.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '40'
      },
      {
        foto:'/uploads/nhoque_cozinheiro1.jpg',
        extensao: null,
        titulo:'Prato de Nhoque',
        descricao:'Melhor prato de nhoque que você irá comer.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '41'
      },
      {
        foto:'/uploads/nhoque_cozinheiro2.jpg',
        extensao: null,
        titulo:'Prato de Nhoque',
        descricao:'Melhor prato de nhoque que você irá comer.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '41'
      },
      {
        foto:'/uploads/nhoque_cozinheiro3.jpg',
        extensao: null,
        titulo:'Prato de Nhoque',
        descricao:'Melhor prato de nhoque que você irá comer.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '41'
      },
      {
        foto:'/uploads/jardim_jardineiro1.png',
        extensao: null,
        titulo:'Jardim que cuido',
        descricao:'Jardim do meu cliente.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '42'
      },
      {
        foto:'/uploads/jardim_jardineiro2.png',
        extensao: null,
        titulo:'Jardim que cuido',
        descricao:'Jardim do meu cliente.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '42'
      },
      {
        foto:'/uploads/jardim_jardineiro1.png',
        extensao: null,
        titulo:'Jardim que cuido',
        descricao:'Jardim do meu cliente.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '42'
      },
      {
        foto:'/uploads/encanamento_encanador1.jpg',
        extensao: null,
        titulo:'Encanamento',
        descricao:'Encanmento feito por na casa do meu cliente.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '43'
      },
      {
        foto:'/uploads/encanamento_encanador2.jpg',
        extensao: null,
        titulo:'Encanamento',
        descricao:'Encanmento feito por na casa do meu cliente.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '43'
      },
      {
        foto:'/uploads/encanamento_encanador1.jpg',
        extensao: null,
        titulo:'Encanamento',
        descricao:'Encanmento feito por na casa do meu cliente.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '43'
      },
      {
        foto:'/uploads/admin_admnistrador.jpg',
        extensao: null,
        titulo:'Administrando',
        descricao:'Administrando o negócio do meu cliente.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '44'
      },
      {
        foto:'/uploads/admin_admnistrador.jpg',
        extensao: null,
        titulo:'Administrando',
        descricao:'Administrando o negócio do meu cliente.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '44'
      },
      {
        foto:'/uploads/admin_admnistrador.jpg',
        extensao: null,
        titulo:'Administrando',
        descricao:'Administrando o negócio do meu cliente.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '44'
      },
      {
        foto:'/uploads/mec_mecanico1.jpg',
        extensao: null,
        titulo:'Mecânica de Carro',
        descricao:'Arrumando carro do meu cliente.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '45'
      },
      {
        foto:'/uploads/mec_mecanico2.jpg',
        extensao: null,
        titulo:'Mecânica de Carro',
        descricao:'Arrumando carro do meu cliente.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '45'
      },
      {
        foto:'/uploads/mec_mecanico3.jpg',
        extensao: null,
        titulo:'Mecânica de Carro',
        descricao:'Arrumando carro do meu cliente.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '45'
      },
      {
        foto:'/uploads/atendimento_medico.jpg',
        extensao: null,
        titulo:'Médico atendendo em casa',
        descricao:'Atendendo paciente em casa.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '46'
      },
      {
        foto:'/uploads/atendimento_medico.jpg',
        extensao: null,
        titulo:'Médico atendendo em casa',
        descricao:'Atendendo paciente em casa.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '46'
      },
      {
        foto:'/uploads/atendimento_medico.jpg',
        extensao: null,
        titulo:'Médico atendendo em casa',
        descricao:'Atendendo paciente em casa.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '46'
      },
      {
        foto:'/uploads/aula_professor.jpg',
        extensao: null,
        titulo:'Aula de Português',
        descricao:'Dando aula de português para meus alunos.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '47'
      },
      {
        foto:'/uploads/aula_professor.jpg',
        extensao: null,
        titulo:'Aula de Português',
        descricao:'Dando aula de português para meus alunos.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '47'
      },
      {
        foto:'/uploads/aula_professor.jpg',
        extensao: null,
        titulo:'Aula de Português',
        descricao:'Dando aula de português para meus alunos.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '47'
      },
      {
        foto:'/uploads/show_seguranca1.jpg',
        extensao: null,
        titulo:'Segurança em Shows',
        descricao:'Garantindo segurança do público em show.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '48'
      },
      {
        foto:'/uploads/show_seguranca1.jpg',
        extensao: null,
        titulo:'Segurança em Shows',
        descricao:'Garantindo segurança do público em show.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '48'
      },
      {
        foto:'/uploads/show_seguranca1.jpg',
        extensao: null,
        titulo:'Segurança em Shows',
        descricao:'Garantindo segurança do público em show.',
        data_cadastro: new Date("2016-06-10 02:58:33"),
        fk_prestadores: '48'
      },
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkDelete('galeria_prestadores', null, {});
  }
};
