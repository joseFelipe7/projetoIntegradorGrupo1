
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkInsert('clientes', 
      [{
        nome: 'Luana',
        email: 'analulencina@gmail.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        data_nascimento: null,
        status_:'A',
        cpf:'02222211133',
        avatar:false,
        extensao_avatar:false
      },
      {
        nome: 'João Mario',
        email: 'joao@email.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        data_nascimento: null,
        status_:'A',
        cpf:'02222211122',
        avatar:false,
        extensao_avatar:false
       
      },
      {
        nome: 'Maria Joana',
        email: 'maria@email.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        data_nascimento: null,
        status_:'A',
        cpf:'02222211174',
        avatar:false,
        extensao_avatar:false
      },
      {
        nome: 'Marcos Melo',
        email: 'marcos@email.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        data_nascimento: null,
        status_:'A',
        cpf:'02222211154',
        avatar:false,
        extensao_avatar:false
       
      },
      {
        nome: 'Luana',
        email: 'analulencina2@gmail.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        data_nascimento: null,
        status_:'A',
        cpf:'02211122287',
        avatar:false,
        extensao_avatar:false
      },
      {
        nome: 'João Mario',
        email: 'joao2@email.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        data_nascimento: null,
        status_:'A',
        cpf:'02211122288',
        avatar:false,
        extensao_avatar:false
       
      },
      {
        nome: 'Maria Joana',
        email: 'maria2@email.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        data_nascimento: null,
        status_:'A',
        cpf:'02211122289',
        avatar:false,
        extensao_avatar:false
      },
      {
        nome: 'Marcos Melo',
        email: 'marcos2@email.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        data_nascimento: null,
        status_:'A',
        cpf:'02211122291',
        avatar:false,
        extensao_avatar:false
       
      },
      {
        nome: 'Luana',
        email: 'analulencina3@gmail.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        data_nascimento: null,
        status_:'A',
        cpf:'02211122292',
        avatar:false,
        extensao_avatar:false
      },
      {
        nome: 'João Mario',
        email: 'joao3@email.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        data_nascimento: null,
        status_:'A',
        cpf:'02211122293',
        avatar:false,
        extensao_avatar:false
       
      },
      {
        nome: 'Maria Joana',
        email: 'maria3@email.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        data_nascimento: null,
        status_:'A',
        cpf:'02211122294',
        avatar:false,
        extensao_avatar:false
      },
      {
        nome: 'Marcos Melo',
        email: 'marco3s@email.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        data_nascimento: null,
        status_:'A',
        cpf:'02211122295',
        avatar:false,
        extensao_avatar:false
       
      },
      {
        nome: 'Luana',
        email: 'analulencina4@gmail.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        data_nascimento: null,
        status_:'A',
        cpf:'02211122296',
        avatar:false,
        extensao_avatar:false
      },
      {
        nome: 'João Mario',
        email: 'joao4@email.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        data_nascimento: null,
        status_:'A',
        cpf:'02211122297',
        avatar:false,
        extensao_avatar:false
       
      },
      {
        nome: 'Maria Joana',
        email: 'maria4@email.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        data_nascimento: null,
        status_:'A',
        cpf:'02211122298',
        avatar:false,
        extensao_avatar:false
      },
      {
        nome: 'Marcos Melo',
        email: 'marcos4@email.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        data_nascimento: null,
        status_:'A',
        cpf:'02211122299',
        avatar:false,
        extensao_avatar:false
       
      }
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkDelete('clientes', null, {});
    
  }
};
