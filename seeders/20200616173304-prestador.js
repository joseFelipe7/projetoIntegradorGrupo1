'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      
      return queryInterface.bulkInsert('prestador', 
      [{
        nome: 'Luana',
        email: 'analulencina@gmail.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        cpf:'02222211144',
        data_nascimento: null,
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
        data_nascimento: null,
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
        data_nascimento: null,
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
        data_nascimento: null,
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