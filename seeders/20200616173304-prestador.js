'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      
      return queryInterface.bulkInsert('prestador', 
      [{
        nome: 'Luana',
        email: 'analulencina@gmail.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        cpf:'02222211144',
        data_nascimento: new Date("2020-07-09 02:58:33"),
        status_:'A',        
        avatar:"/uploads/avatar_arquiteta.png",
        extensao_avatar:false,
        categoria_id:'9',
        nota: '4.8'
      },
      {
        nome: 'Lais Maria',
        email: 'lais@email.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        cpf:'02222211154',
        data_nascimento: new Date("2020-07-09 02:58:33"),
        status_:'A',        
        avatar:"/uploads/avatar_medica.png",
        extensao_avatar:false,
        categoria_id:'2',
        nota: '4.2'
      },
      {
        nome: 'Julio João',
        email: 'joao@email.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        cpf:'02222211147',
        data_nascimento: new Date("2020-07-09 02:58:33"),
        status_:'A',        
        avatar:"/uploads/avatar_pintor.png",
        extensao_avatar:false,
        categoria_id:'3',
        nota: '4.5'
      },
      {
        nome: 'Ana Maria',
        email: 'ana@email.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        cpf:'02222211132',
        data_nascimento: new Date("2020-07-09 02:58:33"),
        status_:'A',        
        avatar:"/uploads/avatar_cozinheira.png",
        extensao_avatar:false,
        categoria_id:'7',
        nota: '3.8'
      },
      {
        nome: 'Joana',
        email: 'analulencina2@gmail.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        cpf:'02222211142',
        data_nascimento: new Date("2020-07-09 02:58:33"),
        status_:'A',        
        avatar:"/uploads/joana.jpg",
        extensao_avatar:false,
        categoria_id:'9',
        nota: '4.8'
      },
      {
        nome: 'Maria',
        email: 'lais2@email.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        cpf:'02222211152',
        data_nascimento: new Date("2020-07-09 02:58:33"),
        status_:'A',        
        avatar:"/uploads/maria.jpg",
        extensao_avatar:false,
        categoria_id:'2',
        nota: '4.2'
      },
      {
        nome: 'João',
        email: 'joao2@email.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        cpf:'02222211142',
        data_nascimento: new Date("2020-07-09 02:58:33"),
        status_:'A',        
        avatar:"/uploads/joao.jpg",
        extensao_avatar:false,
        categoria_id:'3',
        nota: '4.5'
      },
      {
        nome: 'Marcos',
        email: 'marcos@email.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        cpf:'02222211133',
        data_nascimento: new Date("2020-07-09 02:58:33"),
        status_:'A',        
        avatar:"/uploads/pintor.jpg",
        extensao_avatar:false,
        categoria_id:'7',
        nota: '3.8'
      },
      {
        nome: 'Paulo',
        email: 'paulo@gmail.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        cpf:'02222211143',
        data_nascimento: new Date("2020-07-09 02:58:33"),
        status_:'A',        
        avatar:"/uploads/arquiteto.png",
        extensao_avatar:false,
        categoria_id:'9',
        nota: '4.8'
      },
      {
        nome: 'Julia ',
        email: 'julia@email.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        cpf:'02222211153',
        data_nascimento: new Date("2020-07-09 02:58:33"),
        status_:'A',        
        avatar:"/uploads/medica.png",
        extensao_avatar:false,
        categoria_id:'2',
        nota: '4.2'
      },
      {
        nome: 'Marcos',
        email: 'marcos@email.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        cpf:'02222211143',
        data_nascimento: new Date("2020-07-09 02:58:33"),
        status_:'A',        
        avatar:"/uploads/marcos.png",
        extensao_avatar:false,
        categoria_id:'3',
        nota: '4.5'
      },
      {
        nome: 'Ana Paula',
        email: 'ana3@email.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        cpf:'02222211133',
        data_nascimento: new Date("2020-07-09 02:58:33"),
        status_:'A',        
        avatar:"/uploads/cozinheira.jpg",
        extensao_avatar:false,
        categoria_id:'7',
        nota: '3.8'
      },
      {
        nome: 'Helena ',
        email: 'helena@gmail.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        cpf:'02222211145',
        data_nascimento: new Date("2020-07-09 02:58:33"),
        status_:'A',        
        avatar:"/uploads/avatar_arquiteta.png",
        extensao_avatar:false,
        categoria_id:'9',
        nota: '4.8'
      },
      {
        nome: 'Pâmela',
        email: 'pamela@email.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        cpf:'02222211155',
        data_nascimento: new Date("2020-07-09 02:58:33"),
        status_:'A',        
        avatar:"/uploads/avatar_medica.png",
        extensao_avatar:false,
        categoria_id:'2',
        nota: '4.2'
      },
      {
        nome: 'Pedro',
        email: 'pedro@email.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        cpf:'02222211145',
        data_nascimento: new Date("2020-07-09 02:58:33"),
        status_:'A',        
        avatar:"/uploads/avatar_pintor.png",
        extensao_avatar:false,
        categoria_id:'3',
        nota: '4.5'
      },
      {
        nome: 'Mariana',
        email: 'mariana@email.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        cpf:'02222211135',
        data_nascimento:  new Date("2020-07-09 02:58:33"),
        status_:'A',        
        avatar:"/uploads/avatar_cozinheira.png",
        extensao_avatar:false,
        categoria_id:'7',
        nota: '3.8'
      }
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkDelete('prestador', null, {});
    
  }
};