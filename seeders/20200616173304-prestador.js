'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('prestador', 
      [{
        nome: 'Luana',
        email: 'analulencina@gmail.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        cpf:'02222211141',
        data_nascimento: null,
        status_:'A',        
        avatar:"/uploads/avatar_arquiteta.png",
        extensao_avatar:false,
        categoria_id:'8'
      },
      {
        nome: 'Lais Maria',
        email: 'lais@email.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        cpf:'02222211151',
        data_nascimento: null,
        status_:'A',        
        avatar:"/uploads/avatar_medica.png",
        extensao_avatar:false,
        categoria_id:'1'
      },
      {
        nome: 'Julio João',
        email: 'joao@email.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        cpf:'02222211141',
        data_nascimento: null,
        status_:'A',        
        avatar:"/uploads/avatar_pintor.png",
        extensao_avatar:false,
        categoria_id:'3'
      },
      {
        nome: 'Ana Maria',
        email: 'ana@email.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        cpf:'02222211131',
        data_nascimento: null,
        status_:'A',        
        avatar:"/uploads/avatar_cozinheira.png",
        extensao_avatar:false,
        categoria_id:'7'
      },
      {
        nome: 'Joana',
        email: 'analulencina2@gmail.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        cpf:'02222211141',
        data_nascimento: null,
        status_:'A',        
        avatar:"/uploads/avatar_administradora.png",
        extensao_avatar:false,
        categoria_id:'8'
      },
      {
        nome: 'Maria',
        email: 'lais2@email.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        cpf:'02222211151',
        data_nascimento: null,
        status_:'A',        
        avatar:"/uploads/avatar_dermatologista.jpg",
        extensao_avatar:false,
        categoria_id:'4'
      },
      {
        nome: 'João',
        email: 'joao2@email.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        cpf:'02222211141',
        data_nascimento: null,
        status_:'A',        
        avatar:"/uploads/avatar_personal.png",
        extensao_avatar:false,
        categoria_id:'4'
      },
      {
        nome: 'Marcos',
        email: 'marcos@email.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        cpf:'02222211131',
        data_nascimento: null,
        status_:'A',        
        avatar:"/uploads/avatar_professora.png",
        extensao_avatar:false,
        categoria_id:'6'
      },
      {
        nome: 'Luan',
        email: 'luan3@gmail.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        cpf:'02222211141',
        data_nascimento: null,
        status_:'A',        
        avatar:"/uploads/avatar_cozinheiro.jpg",
        extensao_avatar:false,
        categoria_id:'7'
      },
      {
        nome: 'José Maria',
        email: 'jose3@email.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        cpf:'02222211151',
        data_nascimento: null,
        status_:'A',        
        avatar:"/uploads/avatar_jardineiro.png",
        extensao_avatar:false,
        categoria_id:'5'
      },
      {
        nome: 'Julio João',
        email: 'joao3@email.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        cpf:'02222211141',
        data_nascimento: null,
        status_:'A',        
        avatar:"/uploads/avatar_encanador.png",
        extensao_avatar:false,
        categoria_id:'3'
      },
      {
        nome: 'Lucas Silva',
        email: 'lucas3@email.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        cpf:'02222211131',
        data_nascimento: null,
        status_:'A',        
        avatar:"/uploads/avatar_administrador.png",
        extensao_avatar:false,
        categoria_id:'8'
      },
      {
        nome: 'Gabriel Ribeiro',
        email: 'gabs4@gmail.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        cpf:'02222211141',
        data_nascimento: null,
        status_:'A',        
        avatar:"/uploads/avatar_mecanico.png",
        extensao_avatar:false,
        categoria_id:'3'
      },
      {
        nome: 'Lauro Rodrigues',
        email: 'lauro4@email.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        cpf:'02222211151',
        data_nascimento: null,
        status_:'A',        
        avatar:"/uploads/avatar_medico.png",
        extensao_avatar:false,
        categoria_id:'1'
      },
      {
        nome: 'Juliano Almeida',
        email: 'juliano4@email.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        cpf:'02222211141',
        data_nascimento: null,
        status_:'A',        
        avatar:"/uploads/avatar_professor.png",
        extensao_avatar:false,
        categoria_id:'6'
      },
      {
        nome: 'Roberto Silva',
        email: 'roberto4@email.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        cpf:'02222211131',
        data_nascimento: null,
        status_:'A',        
        avatar:"/uploads/avatar_seguranca.png",
        extensao_avatar:false,
        categoria_id:'2'
      },
      {
        nome: 'Luana2',
        email: 'analulencina2@gmail.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        cpf:'02222211142',
        data_nascimento: null,
        status_:'A',        
        avatar:"/uploads/avatar_arquiteta.png",
        extensao_avatar:false,
        categoria_id:'8'
      },
      {
        nome: 'Lais Maria2',
        email: 'lais2@email.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        cpf:'02222211152',
        data_nascimento: null,
        status_:'A',        
        avatar:"/uploads/avatar_medica.png",
        extensao_avatar:false,
        categoria_id:'1'
      },
      {
        nome: 'Julio João2',
        email: 'joao2@email.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        cpf:'02222211142',
        data_nascimento: null,
        status_:'A',        
        avatar:"/uploads/avatar_pintor.png",
        extensao_avatar:false,
        categoria_id:'3'
      },
      {
        nome: 'Ana Maria2',
        email: 'ana2@email.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        cpf:'02222211132',
        data_nascimento: null,
        status_:'A',        
        avatar:"/uploads/avatar_cozinheira.png",
        extensao_avatar:false,
        categoria_id:'7'
      },
      {
        nome: 'Luana3',
        email: 'analulencina3@gmail.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        cpf:'02222211142',
        data_nascimento: null,
        status_:'A',        
        avatar:"/uploads/avatar_administradora.png",
        extensao_avatar:false,
        categoria_id:'8'
      },
      {
        nome: 'Lais Maria3',
        email: 'lais3@email.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        cpf:'02222211152',
        data_nascimento: null,
        status_:'A',        
        avatar:"/uploads/avatar_dermatologista.jpg",
        extensao_avatar:false,
        categoria_id:'4'
      },
      {
        nome: 'Julio João3',
        email: 'joao3@email.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        cpf:'02222211142',
        data_nascimento: null,
        status_:'A',        
        avatar:"/uploads/avatar_personal.png",
        extensao_avatar:false,
        categoria_id:'4'
      },
      {
        nome: 'Ana Maria3',
        email: 'ana3@email.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        cpf:'02222211132',
        data_nascimento: null,
        status_:'A',        
        avatar:"/uploads/avatar_professora.png",
        extensao_avatar:false,
        categoria_id:'6'
      },
      {
        nome: 'Luan4',
        email: 'luan4@gmail.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        cpf:'02222211142',
        data_nascimento: null,
        status_:'A',        
        avatar:"/uploads/avatar_cozinheiro.jpg",
        extensao_avatar:false,
        categoria_id:'7'
      },
      {
        nome: 'José Maria4',
        email: 'jose4@email.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        cpf:'02222211152',
        data_nascimento: null,
        status_:'A',        
        avatar:"/uploads/avatar_jardineiro.png",
        extensao_avatar:false,
        categoria_id:'5'
      },
      {
        nome: 'Julio João4',
        email: 'joao4@email.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        cpf:'02222211142',
        data_nascimento: null,
        status_:'A',        
        avatar:"/uploads/avatar_encanador.png",
        extensao_avatar:false,
        categoria_id:'3'
      },
      {
        nome: 'Lucas Silva4',
        email: 'lucas4@email.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        cpf:'02222211132',
        data_nascimento: null,
        status_:'A',        
        avatar:"/uploads/avatar_administrador.png",
        extensao_avatar:false,
        categoria_id:'8'
      },
      {
        nome: 'Gabriel Ribeiro5',
        email: 'gabs5@gmail.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        cpf:'02222211142',
        data_nascimento: null,
        status_:'A',        
        avatar:"/uploads/avatar_mecanico.png",
        extensao_avatar:false,
        categoria_id:'3'
      },
      {
        nome: 'Lauro Rodrigues5',
        email: 'lauro5@email.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        cpf:'02222211152',
        data_nascimento: null,
        status_:'A',        
        avatar:"/uploads/avatar_medico.png",
        extensao_avatar:false,
        categoria_id:'1'
      },
      {
        nome: 'Juliano Almeida5',
        email: 'juliano5@email.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        cpf:'02222211142',
        data_nascimento: null,
        status_:'A',        
        avatar:"/uploads/avatar_professor.png",
        extensao_avatar:false,
        categoria_id:'6'
      },
      {
        nome: 'Roberto Silva5',
        email: 'roberto5@email.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        cpf:'02222211132',
        data_nascimento: null,
        status_:'A',        
        avatar:"/uploads/avatar_seguranca.png",
        extensao_avatar:false,
        categoria_id:'2'
      },
      {
        nome: 'Luana5',
        email: 'analulencina5@gmail.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        cpf:'02222211143',
        data_nascimento: null,
        status_:'A',        
        avatar:"/uploads/avatar_arquiteta.png",
        extensao_avatar:false,
        categoria_id:'8'
      },
      {
        nome: 'Lais Maria5',
        email: 'lais5@email.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        cpf:'02222211153',
        data_nascimento: null,
        status_:'A',        
        avatar:"/uploads/avatar_medica.png",
        extensao_avatar:false,
        categoria_id:'1'
      },
      {
        nome: 'Julio João5',
        email: 'joao5@email.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        cpf:'02222211143',
        data_nascimento: null,
        status_:'A',        
        avatar:"/uploads/avatar_pintor.png",
        extensao_avatar:false,
        categoria_id:'3'
      },
      {
        nome: 'Ana Maria5',
        email: 'ana5@email.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        cpf:'02222211133',
        data_nascimento: null,
        status_:'A',        
        avatar:"/uploads/avatar_cozinheira.png",
        extensao_avatar:false,
        categoria_id:'7'
      },
      {
        nome: 'Luana6',
        email: 'analulencina6@gmail.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        cpf:'02222211143',
        data_nascimento: null,
        status_:'A',        
        avatar:"/uploads/avatar_administradora.png",
        extensao_avatar:false,
        categoria_id:'8'
      },
      {
        nome: 'Lais Maria6',
        email: 'lais6@email.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        cpf:'02222211153',
        data_nascimento: null,
        status_:'A',        
        avatar:"/uploads/avatar_dermatologista.jpg",
        extensao_avatar:false,
        categoria_id:'4'
      },
      {
        nome: 'Julio João6',
        email: 'joao6@email.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        cpf:'02222211143',
        data_nascimento: null,
        status_:'A',        
        avatar:"/uploads/avatar_personal.png",
        extensao_avatar:false,
        categoria_id:'4'
      },
      {
        nome: 'Ana Maria7',
        email: 'ana7@email.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        cpf:'02222211133',
        data_nascimento: null,
        status_:'A',        
        avatar:"/uploads/avatar_professora.png",
        extensao_avatar:false,
        categoria_id:'6'
      },
      {
        nome: 'Luan7',
        email: 'luan7@gmail.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        cpf:'02222211143',
        data_nascimento: null,
        status_:'A',        
        avatar:"/uploads/avatar_cozinheiro.jpg",
        extensao_avatar:false,
        categoria_id:'7'
      },
      {
        nome: 'José Maria5',
        email: 'jose5@email.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        cpf:'02222211153',
        data_nascimento: null,
        status_:'A',        
        avatar:"/uploads/avatar_jardineiro.png",
        extensao_avatar:false,
        categoria_id:'5'
      },
      {
        nome: 'Julio João5',
        email: 'joao5@email.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        cpf:'02222211143',
        data_nascimento: null,
        status_:'A',        
        avatar:"/uploads/avatar_encanador.png",
        extensao_avatar:false,
        categoria_id:'3'
      },
      {
        nome: 'Lucas Silva5',
        email: 'lucas5@email.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        cpf:'02222211133',
        data_nascimento: null,
        status_:'A',        
        avatar:"/uploads/avatar_administrador.png",
        extensao_avatar:false,
        categoria_id:'8'
      },
      {
        nome: 'Gabriel Ribeiro7',
        email: 'gabs7@gmail.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        cpf:'02222211143',
        data_nascimento: null,
        status_:'A',        
        avatar:"/uploads/avatar_mecanico.png",
        extensao_avatar:false,
        categoria_id:'3'
      },
      {
        nome: 'Lauro Rodrigues7',
        email: 'lauro7@email.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        cpf:'02222211153',
        data_nascimento: null,
        status_:'A',        
        avatar:"/uploads/avatar_medico.png",
        extensao_avatar:false,
        categoria_id:'1'
      },
      {
        nome: 'Juliano Almeida7',
        email: 'juliano7@email.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        cpf:'02222211143',
        data_nascimento: null,
        status_:'A',        
        avatar:"/uploads/avatar_professor.png",
        extensao_avatar:false,
        categoria_id:'6'
      },
      {
        nome: 'Roberto Silva7',
        email: 'roberto7@email.com',
        senha:'$2b$10$MWEv6WPeSOfC51lvJZrYpuDQGJ3fHRGP8vszBSwMO.ZZrFLrdlmze',
        cpf:'02222211133',
        data_nascimento: null,
        status_:'A',        
        avatar:"/uploads/avatar_seguranca.png",
        extensao_avatar:false,
        categoria_id:'2'
      }
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkDelete('prestador', null, {});
    
  }
};