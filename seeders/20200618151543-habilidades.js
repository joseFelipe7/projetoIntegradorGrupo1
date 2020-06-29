'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkInsert('habilidades', 
      [{
        titulo:'Arquiteta',
        inicio_profissao:new Date("2016-06-10 02:58:33"),
        descricao:'Arquiteto especialista em interiores',
        fk_prestador:'1'
      },
      {
        titulo:'Médica',
        inicio_profissao:new Date("2015-06-10 02:58:33"),
        descricao:'Médica da familia',
        fk_prestador:'2'
       
      },
      {
        titulo:'Pintor',
        inicio_profissao:new Date("2010-02-15 02:58:33"),
        descricao:'Pintor profissional com 10 anos de experiência',
        fk_prestador:'3'
      },
      {
        titulo:'Cozinheira',
        inicio_profissao:new Date("2008-07-19 02:58:33"),
        descricao:'Cozinheira especialista em frutos do mar',
        fk_prestador:'4'
       
      },
      {
        titulo:'Administradora',
        inicio_profissao:new Date("2016-06-10 02:58:33"),
        descricao:'Administradora de relações do exterior',
        fk_prestador:'5'
      },
      {
        titulo:'Dermatologista',
        inicio_profissao:new Date("2015-06-10 02:58:33"),
        descricao:'Dermatologista especialista em cuidado do rosto',
        fk_prestador:'6'
       
      },
      {
        titulo:'Personal',
        inicio_profissao:new Date("2010-02-15 02:58:33"),
        descricao:'Personal com 5 anos de experiência',
        fk_prestador:'7'
      },
      {
        titulo:'Professora',
        inicio_profissao:new Date("2008-07-19 02:58:33"),
        descricao:'Professora de matemática',
        fk_prestador:'8'
       
      },
      {
        titulo:'Cozinheiro',
        inicio_profissao:new Date("2016-06-10 02:58:33"),
        descricao:'Cozinheiro especialista em massa italiana',
        fk_prestador:'9'
      },
      {
        titulo:'Jardineiro',
        inicio_profissao:new Date("2015-06-10 02:58:33"),
        descricao:'Jadeineiro com experiência de 4 anos',
        fk_prestador:'10'
       
      },
      {
        titulo:'Encanador',
        inicio_profissao:new Date("2010-02-15 02:58:33"),
        descricao:'Encanador com experiência em condomínio',
        fk_prestador:'11'
      },
      {
        titulo:'Administrador',
        inicio_profissao:new Date("2008-07-19 02:58:33"),
        descricao:'Administrador em negócios',
        fk_prestador:'12'
       
      },
      {
        titulo:'Mecânico',
        inicio_profissao:new Date("2016-06-10 02:58:33"),
        descricao:'Mecânico especialista em carros',
        fk_prestador:'13'
      },
      {
        titulo:'Médico',
        inicio_profissao:new Date("2015-06-10 02:58:33"),
        descricao:'Médico especialista em coração',
        fk_prestador:'14'
       
      },
      {
        titulo:'Professor',
        inicio_profissao:new Date("2010-02-15 02:58:33"),
        descricao:'Professor de português',
        fk_prestador:'15'
      },
      {
        titulo:'Seguranca',
        inicio_profissao:new Date("2008-07-19 02:58:33"),
        descricao:'Segurança com 10 anos de experiência em show',
        fk_prestador:'16'
       
      },
      {
        titulo:'Arquiteta',
        inicio_profissao:new Date("2016-06-10 02:58:33"),
        descricao:'Arquiteto especialista em interiores',
        fk_prestador:'17'
      },
      {
        titulo:'Médica',
        inicio_profissao:new Date("2015-06-10 02:58:33"),
        descricao:'Médica da familia',
        fk_prestador:'18'
       
      },
      {
        titulo:'Pintor',
        inicio_profissao:new Date("2010-02-15 02:58:33"),
        descricao:'Pintor profissional com 10 anos de experiência',
        fk_prestador:'19'
      },
      {
        titulo:'Cozinheira',
        inicio_profissao:new Date("2008-07-19 02:58:33"),
        descricao:'Cozinheira especialista em frutos do mar',
        fk_prestador:'20'
       
      },
      {
        titulo:'Administradora',
        inicio_profissao:new Date("2016-06-10 02:58:33"),
        descricao:'Administradora de relações do exterior',
        fk_prestador:'21'
      },
      {
        titulo:'Dermatologista',
        inicio_profissao:new Date("2015-06-10 02:58:33"),
        descricao:'Dermatologista especialista em cuidado do rosto',
        fk_prestador:'22'
       
      },
      {
        titulo:'Personal',
        inicio_profissao:new Date("2010-02-15 02:58:33"),
        descricao:'Personal com 5 anos de experiência',
        fk_prestador:'23'
      },
      {
        titulo:'Professora',
        inicio_profissao:new Date("2008-07-19 02:58:33"),
        descricao:'Professora de matemática',
        fk_prestador:'24'
       
      },
      {
        titulo:'Cozinheiro',
        inicio_profissao:new Date("2016-06-10 02:58:33"),
        descricao:'Cozinheiro especialista em massa italiana',
        fk_prestador:'25'
      },
      {
        titulo:'Jardineiro',
        inicio_profissao:new Date("2015-06-10 02:58:33"),
        descricao:'Jadeineiro com experiência de 4 anos',
        fk_prestador:'26'
       
      },
      {
        titulo:'Encanador',
        inicio_profissao:new Date("2010-02-15 02:58:33"),
        descricao:'Encanador com experiência em condomínio',
        fk_prestador:'27'
      },
      {
        titulo:'Administrador',
        inicio_profissao:new Date("2008-07-19 02:58:33"),
        descricao:'Administrador em negócios',
        fk_prestador:'28'
       
      },
      {
        titulo:'Mecânico',
        inicio_profissao:new Date("2016-06-10 02:58:33"),
        descricao:'Mecânico especialista em carros',
        fk_prestador:'29'
      },
      {
        titulo:'Médico',
        inicio_profissao:new Date("2015-06-10 02:58:33"),
        descricao:'Médico especialista em coração',
        fk_prestador:'30'
       
      },
      {
        titulo:'Professor',
        inicio_profissao:new Date("2010-02-15 02:58:33"),
        descricao:'Professor de português',
        fk_prestador:'31'
      },
      {
        titulo:'Seguranca',
        inicio_profissao:new Date("2008-07-19 02:58:33"),
        descricao:'Segurança com 10 anos de experiência em show',
        fk_prestador:'32'
       
      },
      {
        titulo:'Arquiteta',
        inicio_profissao:new Date("2016-06-10 02:58:33"),
        descricao:'Arquiteto especialista em interiores',
        fk_prestador:'33'
      },
      {
        titulo:'Médica',
        inicio_profissao:new Date("2015-06-10 02:58:33"),
        descricao:'Médica da familia',
        fk_prestador:'34'
       
      },
      {
        titulo:'Pintor',
        inicio_profissao:new Date("2010-02-15 02:58:33"),
        descricao:'Pintor profissional com 10 anos de experiência',
        fk_prestador:'35'
      },
      {
        titulo:'Cozinheira',
        inicio_profissao:new Date("2008-07-19 02:58:33"),
        descricao:'Cozinheira especialista em frutos do mar',
        fk_prestador:'36'
       
      },
      {
        titulo:'Administradora',
        inicio_profissao:new Date("2016-06-10 02:58:33"),
        descricao:'Administradora de relações do exterior',
        fk_prestador:'37'
      },
      {
        titulo:'Dermatologista',
        inicio_profissao:new Date("2015-06-10 02:58:33"),
        descricao:'Dermatologista especialista em cuidado do rosto',
        fk_prestador:'38'
       
      },
      {
        titulo:'Personal',
        inicio_profissao:new Date("2010-02-15 02:58:33"),
        descricao:'Personal com 5 anos de experiência',
        fk_prestador:'39'
      },
      {
        titulo:'Professora',
        inicio_profissao:new Date("2008-07-19 02:58:33"),
        descricao:'Professora de matemática',
        fk_prestador:'40'
       
      },
      {
        titulo:'Cozinheiro',
        inicio_profissao:new Date("2016-06-10 02:58:33"),
        descricao:'Cozinheiro especialista em massa italiana',
        fk_prestador:'41'
      },
      {
        titulo:'Jardineiro',
        inicio_profissao:new Date("2015-06-10 02:58:33"),
        descricao:'Jadeineiro com experiência de 4 anos',
        fk_prestador:'42'
       
      },
      {
        titulo:'Encanador',
        inicio_profissao:new Date("2010-02-15 02:58:33"),
        descricao:'Encanador com experiência em condomínio',
        fk_prestador:'43'
      },
      {
        titulo:'Administrador',
        inicio_profissao:new Date("2008-07-19 02:58:33"),
        descricao:'Administrador em negócios',
        fk_prestador:'44'
       
      },
      {
        titulo:'Mecânico',
        inicio_profissao:new Date("2016-06-10 02:58:33"),
        descricao:'Mecânico especialista em carros',
        fk_prestador:'45'
      },
      {
        titulo:'Médico',
        inicio_profissao:new Date("2015-06-10 02:58:33"),
        descricao:'Médico especialista em coração',
        fk_prestador:'46'
       
      },
      {
        titulo:'Professor',
        inicio_profissao:new Date("2010-02-15 02:58:33"),
        descricao:'Professor de português',
        fk_prestador:'47'
      },
      {
        titulo:'Seguranca',
        inicio_profissao:new Date("2008-07-19 02:58:33"),
        descricao:'Segurança com 10 anos de experiência em show',
        fk_prestador:'48'
       
      }
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkDelete('habilidades', null, {});
    
  }
};
