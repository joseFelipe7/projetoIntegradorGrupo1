'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkInsert('prestador_endereco', 
      [{
        logradouro: 'rua das flores',
        uf: 'SP',
        cidade:'São Paulo',
        cep:'62555441',    
        numero:'1',
        complemento:null,
        fk_prestador:1
      },
      {
        logradouro: 'rua das margaridas',
        uf: 'SP',
        cidade:'São Paulo',
        cep:'62555222',
        numero:'2',
        complemento:null,
        fk_prestador:2
      },
      {
        logradouro: 'rua das amelias',
        uf: 'SP',
        cidade:'São Paulo',
        cep:'62555773',
        numero:'3',
        complemento:null,
        fk_prestador:3
      },
      {
        logradouro: 'rua das rosas',
        uf: 'SP',
        cidade:'São Paulo',
        cep:'62555484',
        numero:'4',
        complemento:null,
        fk_prestador:4
      },
      {
        logradouro: 'rua das flores',
        uf: 'SP',
        cidade:'São Paulo',
        cep:'62555445',    
        numero:'5',
        complemento:null,
        fk_prestador:5
      },
      {
        logradouro: 'rua das margaridas',
        uf: 'SP',
        cidade:'São Paulo',
        cep:'62555226',
        numero:'6',
        complemento:null,
        fk_prestador:6
      },
      {
        logradouro: 'rua das amelias',
        uf: 'SP',
        cidade:'São Paulo',
        cep:'62555777',
        numero:'7',
        complemento:null,
        fk_prestador:7
      },
      {
        logradouro: 'rua das rosas',
        uf: 'SP',
        cidade:'São Paulo',
        cep:'62555488',
        numero:'8',
        complemento:null,
        fk_prestador:8
      },
      {
        logradouro: 'rua das flores',
        uf: 'SP',
        cidade:'São Paulo',
        cep:'62555449',    
        numero:'9',
        complemento:null,
        fk_prestador:9
      },
      {
        logradouro: 'rua das margaridas',
        uf: 'SP',
        cidade:'São Paulo',
        cep:'62555210',
        numero:'10',
        complemento:null,
        fk_prestador:10
      },
      {
        logradouro: 'rua das amelias',
        uf: 'SP',
        cidade:'São Paulo',
        cep:'62555711',
        numero:'11',
        complemento:null,
        fk_prestador:11
      },
      {
        logradouro: 'rua das rosas',
        uf: 'SP',
        cidade:'São Paulo',
        cep:'62555412',
        numero:'12',
        complemento:null,
        fk_prestador:12
      },
      {
        logradouro: 'rua das flores',
        uf: 'SP',
        cidade:'São Paulo',
        cep:'62555413',    
        numero:'13',
        complemento:null,
        fk_prestador:13
      },
      {
        logradouro: 'rua das margaridas',
        uf: 'SP',
        cidade:'São Paulo',
        cep:'62555214',
        numero:'14',
        complemento:null,
        fk_prestador:14
      },
      {
        logradouro: 'rua das amelias',
        uf: 'SP',
        cidade:'São Paulo',
        cep:'62555715',
        numero:'15',
        complemento:null,
        fk_prestador:15
      },
      {
        logradouro: 'rua das rosas',
        uf: 'SP',
        cidade:'São Paulo',
        cep:'62555416',
        numero:'16',
        complemento:null,
        fk_prestador:16
      },
      {
        logradouro: 'rua das flores',
        uf: 'SC',
        cidade:'Santa Catarina',
        cep:'62555417',    
        numero:'17',
        complemento:null,
        fk_prestador:17
      },
      {
        logradouro: 'rua das margaridas',
        uf: 'SC',
        cidade:'Santa Catarina',
        cep:'62555218',
        numero:'18',
        complemento:null,
        fk_prestador:18
      },
      {
        logradouro: 'rua das amelias',
        uf: 'SC',
        cidade:'Santa Catarina',
        cep:'62555719',
        numero:'19',
        complemento:null,
        fk_prestador:19
      },
      {
        logradouro: 'rua das rosas',
        uf: 'SC',
        cidade:'Santa Catarina',
        cep:'62555420',
        numero:'20',
        complemento:null,
        fk_prestador:20
      },
      {
        logradouro: 'rua das flores',
        uf: 'SC',
        cidade:'Santa Catarina',
        cep:'62555421',    
        numero:'21',
        complemento:null,
        fk_prestador:21
      },
      {
        logradouro: 'rua das margaridas',
        uf: 'SC',
        cidade:'Santa Catarina',
        cep:'62555222',
        numero:'22',
        complemento:null,
        fk_prestador:22
      },
      {
        logradouro: 'rua das amelias',
        uf: 'SC',
        cidade:'Santa Catarina',
        cep:'62555723',
        numero:'23',
        complemento:null,
        fk_prestador:23
      },
      {
        logradouro: 'rua das rosas',
        uf: 'SC',
        cidade:'Santa Catarina',
        cep:'62555424',
        numero:'24',
        complemento:null,
        fk_prestador:24
      },
      {
        logradouro: 'rua das flores',
        uf: 'SC',
        cidade:'Santa Catarina',
        cep:'62555425',    
        numero:'25',
        complemento:null,
        fk_prestador:25
      },
      {
        logradouro: 'rua das margaridas',
        uf: 'SC',
        cidade:'Santa Catarina',
        cep:'62555226',
        numero:'26',
        complemento:null,
        fk_prestador:26
      },
      {
        logradouro: 'rua das amelias',
        uf: 'SC',
        cidade:'Santa Catarina',
        cep:'62555727',
        numero:'27',
        complemento:null,
        fk_prestador:27
      },
      {
        logradouro: 'rua das rosas',
        uf: 'SC',
        cidade:'Santa Catarina',
        cep:'62555428',
        numero:'28',
        complemento:null,
        fk_prestador:28
      },
      {
        logradouro: 'rua das flores',
        uf: 'SC',
        cidade:'Santa Catarina',
        cep:'62555429',    
        numero:'29',
        complemento:null,
        fk_prestador:29
      },
      {
        logradouro: 'rua das margaridas',
        uf: 'SC',
        cidade:'Santa Catarina',
        cep:'62555230',
        numero:'30',
        complemento:null,
        fk_prestador:30
      },
      {
        logradouro: 'rua das amelias',
        uf: 'SC',
        cidade:'Santa Catarina',
        cep:'62555731',
        numero:'31',
        complemento:null,
        fk_prestador:31
      },
      {
        logradouro: 'rua das rosas',
        uf: 'SC',
        cidade:'Santa Catarina',
        cep:'62555432',
        numero:'32',
        complemento:null,
        fk_prestador:32
      },
      {
        logradouro: 'rua das flores',
        uf: 'CE',
        cidade:'Ceará',
        cep:'62555433',    
        numero:'33',
        complemento:null,
        fk_prestador:33
      },
      {
        logradouro: 'rua das margaridas',
        uf: 'CE',
        cidade:'Ceará',
        cep:'62555234',
        numero:'34',
        complemento:null,
        fk_prestador:34
      },
      {
        logradouro: 'rua das amelias',
        uf: 'CE',
        cidade:'Ceará',
        cep:'62555735',
        numero:'35',
        complemento:null,
        fk_prestador:35
      },
      {
        logradouro: 'rua das rosas',
        uf: 'CE',
        cidade:'Ceará',
        cep:'62555436',
        numero:'36',
        complemento:null,
        fk_prestador:36
      },
      {
        logradouro: 'rua das flores',
        uf: 'CE',
        cidade:'Ceará',
        cep:'62555437',    
        numero:'37',
        complemento:null,
        fk_prestador:37
      },
      {
        logradouro: 'rua das margaridas',
        uf: 'CE',
        cidade:'Ceará',
        cep:'62555238',
        numero:'38',
        complemento:null,
        fk_prestador:38
      },
      {
        logradouro: 'rua das amelias',
        uf: 'CE',
        cidade:'Ceará',
        cep:'62555739',
        numero:'39',
        complemento:null,
        fk_prestador:39
      },
      {
        logradouro: 'rua das rosas',
        uf: 'CE',
        cidade:'Ceará',
        cep:'62555440',
        numero:'40',
        complemento:null,
        fk_prestador:40
      },
      {
        logradouro: 'rua das flores',
        uf: 'CE',
        cidade:'Ceará',
        cep:'62555441',    
        numero:'41',
        complemento:null,
        fk_prestador:41
      },
      {
        logradouro: 'rua das margaridas',
        uf: 'CE',
        cidade:'Ceará',
        cep:'62555242',
        numero:'42',
        complemento:null,
        fk_prestador:42
      },
      {
        logradouro: 'rua das amelias',
        uf: 'CE',
        cidade:'Ceará',
        cep:'62555743',
        numero:'43',
        complemento:null,
        fk_prestador:43
      },
      {
        logradouro: 'rua das rosas',
        uf: 'CE',
        cidade:'Ceará',
        cep:'62555444',
        numero:'44',
        complemento:null,
        fk_prestador:44
      },
      {
        logradouro: 'rua das flores',
        uf: 'CE',
        cidade:'Ceará',
        cep:'62555445',    
        numero:'45',
        complemento:null,
        fk_prestador:45
      },
      {
        logradouro: 'rua das margaridas',
        uf: 'CE',
        cidade:'Ceará',
        cep:'62555246',
        numero:'46',
        complemento:null,
        fk_prestador:46
      },
      {
        logradouro: 'rua das amelias',
        uf: 'CE',
        cidade:'Ceará',
        cep:'62555747',
        numero:'47',
        complemento:null,
        fk_prestador:47
      },
      {
        logradouro: 'rua das rosas',
        uf: 'CE',
        cidade:'Ceará',
        cep:'62555448',
        numero:'48',
        complemento:null,
        fk_prestador:48
      }
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkDelete('prestador_endereco', null, {});
    
  }
};
