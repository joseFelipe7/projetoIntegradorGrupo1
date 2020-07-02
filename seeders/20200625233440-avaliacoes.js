'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkInsert('avaliacoes', 
      [{
        nota:'5',
        comentario: 'Projetos muito criativos para casa.',
        status_avaliacao: 'A',
        fk_prestador: '1',
        fk_cliente: '1',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'4',
        comentario: 'Excelente atendimento em casa!',
        status_avaliacao: 'A',
        fk_prestador: '2',
        fk_cliente: '2',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'1',
        comentario: 'Pintou minha casa e não achei tão bom.',
        status_avaliacao: 'A',
        fk_prestador: '3',
        fk_cliente: '3',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'2',
        comentario: 'Cozinheira fez um prato que não me agradou.',
        status_avaliacao: 'A',
        fk_prestador: '4',
        fk_cliente: '4',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'5',
        comentario: 'Administra muito bem relações com exterior!',
        status_avaliacao: 'A',
        fk_prestador: '5',
        fk_cliente: '5',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'4',
        comentario: 'Cuida muito bem da pele do rosto.',
        status_avaliacao: 'A',
        fk_prestador: '6',
        fk_cliente: '6',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'1',
        comentario: 'Não gostei do atendimento.',
        status_avaliacao: 'A',
        fk_prestador: '7',
        fk_cliente: '7',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'2',
        comentario: 'Metodologia de ensino não é muito boa.',
        status_avaliacao: 'A',
        fk_prestador: '8',
        fk_cliente: '8',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'5',
        comentario: 'Fez um excelente prato de nhoque!!!',
        status_avaliacao: 'A',
        fk_prestador: '9',
        fk_cliente: '9',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'4',
        comentario: 'Ficou um detalhe, mais trabalha muito bem!',
        status_avaliacao: 'A',
        fk_prestador: '10',
        fk_cliente: '10',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'1',
        comentario: 'Encanamento não ficou legal.',
        status_avaliacao: 'A',
        fk_prestador: '11',
        fk_cliente: '11',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'2',
        comentario: 'Não administra muito bem.',
        status_avaliacao: 'A',
        fk_prestador: '12',
        fk_cliente: '12',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'5',
        comentario: 'Meu carro ficou 100%.',
        status_avaliacao: 'A',
        fk_prestador: '13',
        fk_cliente: '13',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'4',
        comentario: 'Medico atende bem.',
        status_avaliacao: 'A',
        fk_prestador: '14',
        fk_cliente: '14',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'1',
        comentario: 'Professor não ensinou o que devia ao meu filho.',
        status_avaliacao: 'A',
        fk_prestador: '15',
        fk_cliente: '15',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'2',
        comentario: 'Segurança não conteve a confusão.',
        status_avaliacao: 'A',
        fk_prestador: '16',
        fk_cliente: '16',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'3',
        comentario: 'Projetos pouco criativos para casa.',
        status_avaliacao: 'A',
        fk_prestador: '17',
        fk_cliente: '16',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'2',
        comentario: 'Atendimento em casa deixou a desejar.',
        status_avaliacao: 'A',
        fk_prestador: '18',
        fk_cliente: '15',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'5',
        comentario: 'Pintou minha casa e ficou muito bom.',
        status_avaliacao: 'A',
        fk_prestador: '19',
        fk_cliente: '14',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'5',
        comentario: 'Cozinheira fez um prato muito bom!!!',
        status_avaliacao: 'A',
        fk_prestador: '20',
        fk_cliente: '13',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'1',
        comentario: 'Administra muito mal.',
        status_avaliacao: 'A',
        fk_prestador: '21',
        fk_cliente: '12',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'2',
        comentario: 'Não ficou legal o tratamento da pele do rosto.',
        status_avaliacao: 'A',
        fk_prestador: '22',
        fk_cliente: '11',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'5',
        comentario: 'Atendimento muito bom.',
        status_avaliacao: 'A',
        fk_prestador: '23',
        fk_cliente: '10',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'5',
        comentario: 'Metodologia de ensino é muito boa.',
        status_avaliacao: 'A',
        fk_prestador: '24',
        fk_cliente: '9',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'3',
        comentario: 'Fez um prato de nhoque mais ou menos.',
        status_avaliacao: 'A',
        fk_prestador: '25',
        fk_cliente: '8',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'2',
        comentario: 'Ficou alguns detalhes feios.',
        status_avaliacao: 'A',
        fk_prestador: '26',
        fk_cliente: '7',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'5',
        comentario: 'Encanamento ficou 100%.',
        status_avaliacao: 'A',
        fk_prestador: '27',
        fk_cliente: '6',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'4',
        comentario: 'Administra bem!!!.',
        status_avaliacao: 'A',
        fk_prestador: '28',
        fk_cliente: '5',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'1',
        comentario: 'Meu carro não ficou bom.',
        status_avaliacao: 'A',
        fk_prestador: '29',
        fk_cliente: '4',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'3',
        comentario: 'Medico atende mais ou menos.',
        status_avaliacao: 'A',
        fk_prestador: '30',
        fk_cliente: '3',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'5',
        comentario: 'Professor ensinou muito bem meu filho.',
        status_avaliacao: 'A',
        fk_prestador: '31',
        fk_cliente: '2',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'5',
        comentario: 'Segurança conteve a confusão!!!',
        status_avaliacao: 'A',
        fk_prestador: '32',
        fk_cliente: '1',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'1',
        comentario: 'Projetos ruins.',
        status_avaliacao: 'A',
        fk_prestador: '33',
        fk_cliente: '16',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'5',
        comentario: 'Atendimento top em casa!!!',
        status_avaliacao: 'A',
        fk_prestador: '34',
        fk_cliente: '15',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'3',
        comentario: 'Pintou minha mais ou menos.',
        status_avaliacao: 'A',
        fk_prestador: '35',
        fk_cliente: '14',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'2',
        comentario: 'Cozinheira fez um prato ruim.',
        status_avaliacao: 'A',
        fk_prestador: '36',
        fk_cliente: '13',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'3',
        comentario: 'Administra de forma regular.',
        status_avaliacao: 'A',
        fk_prestador: '37',
        fk_cliente: '12',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'1',
        comentario: 'Não recomendo.',
        status_avaliacao: 'A',
        fk_prestador: '38',
        fk_cliente: '11',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'4',
        comentario: 'Atendimento bom.',
        status_avaliacao: 'A',
        fk_prestador: '39',
        fk_cliente: '10',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'4',
        comentario: 'Metodologia de ensino é bom.',
        status_avaliacao: 'A',
        fk_prestador: '40',
        fk_cliente: '9',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'5',
        comentario: 'Fez um prato de nhoque top!!!.',
        status_avaliacao: 'A',
        fk_prestador: '41',
        fk_cliente: '8',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'5',
        comentario: 'Ficou sencional o serviço.',
        status_avaliacao: 'A',
        fk_prestador: '42',
        fk_cliente: '7',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'1',
        comentario: 'Encanamento ficou ruim.',
        status_avaliacao: 'A',
        fk_prestador: '43',
        fk_cliente: '6',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'5',
        comentario: 'Administra muito bem!!!.',
        status_avaliacao: 'A',
        fk_prestador: '44',
        fk_cliente: '5',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'3',
        comentario: 'Meu carro ficou mais ou menos.',
        status_avaliacao: 'A',
        fk_prestador: '45',
        fk_cliente: '4',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'5',
        comentario: 'Medico atende muito bem!!!',
        status_avaliacao: 'A',
        fk_prestador: '46',
        fk_cliente: '3',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'3',
        comentario: 'Professor ensina de forma regular.',
        status_avaliacao: 'A',
        fk_prestador: '47',
        fk_cliente: '2',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'3',
        comentario: 'Segurança conteve a confusão mais ou menos.',
        status_avaliacao: 'A',
        fk_prestador: '48',
        fk_cliente: '1',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'5',
        comentario: 'Projetos muito criativos para casa.',
        status_avaliacao: 'A',
        fk_prestador: '1',
        fk_cliente: '16',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'4',
        comentario: 'Excelente atendimento em casa!',
        status_avaliacao: 'A',
        fk_prestador: '2',
        fk_cliente: '15',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'1',
        comentario: 'Pintou minha casa e não achei tão bom.',
        status_avaliacao: 'A',
        fk_prestador: '3',
        fk_cliente: '14',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'2',
        comentario: 'Cozinheira fez um prato que não me agradou.',
        status_avaliacao: 'A',
        fk_prestador: '4',
        fk_cliente: '13',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'5',
        comentario: 'Administra muito bem relações com exterior!',
        status_avaliacao: 'A',
        fk_prestador: '5',
        fk_cliente: '12',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'4',
        comentario: 'Cuida muito bem da pele do rosto.',
        status_avaliacao: 'A',
        fk_prestador: '6',
        fk_cliente: '11',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'1',
        comentario: 'Não gostei do atendimento.',
        status_avaliacao: 'A',
        fk_prestador: '7',
        fk_cliente: '10',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'2',
        comentario: 'Metodologia de ensino não é muito boa.',
        status_avaliacao: 'A',
        fk_prestador: '8',
        fk_cliente: '9',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'5',
        comentario: 'Fez um excelente prato de nhoque!!!',
        status_avaliacao: 'A',
        fk_prestador: '9',
        fk_cliente: '8',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'4',
        comentario: 'Ficou um detalhe, mais trabalha muito bem!',
        status_avaliacao: 'A',
        fk_prestador: '10',
        fk_cliente: '7',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'1',
        comentario: 'Encanamento não ficou legal.',
        status_avaliacao: 'A',
        fk_prestador: '11',
        fk_cliente: '6',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'2',
        comentario: 'Não administra muito bem.',
        status_avaliacao: 'A',
        fk_prestador: '12',
        fk_cliente: '5',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'5',
        comentario: 'Meu carro ficou 100%.',
        status_avaliacao: 'A',
        fk_prestador: '13',
        fk_cliente: '4',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'4',
        comentario: 'Medico atende bem.',
        status_avaliacao: 'A',
        fk_prestador: '14',
        fk_cliente: '3',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'1',
        comentario: 'Professor não ensinou o que devia ao meu filho.',
        status_avaliacao: 'A',
        fk_prestador: '15',
        fk_cliente: '2',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'2',
        comentario: 'Segurança não conteve a confusão.',
        status_avaliacao: 'A',
        fk_prestador: '16',
        fk_cliente: '1',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'3',
        comentario: 'Projetos pouco criativos para casa.',
        status_avaliacao: 'A',
        fk_prestador: '17',
        fk_cliente: '1',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'2',
        comentario: 'Atendimento em casa deixou a desejar.',
        status_avaliacao: 'A',
        fk_prestador: '18',
        fk_cliente: '2',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'5',
        comentario: 'Pintou minha casa e ficou muito bom.',
        status_avaliacao: 'A',
        fk_prestador: '19',
        fk_cliente: '3',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'5',
        comentario: 'Cozinheira fez um prato muito bom!!!',
        status_avaliacao: 'A',
        fk_prestador: '20',
        fk_cliente: '4',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'1',
        comentario: 'Administra muito mal.',
        status_avaliacao: 'A',
        fk_prestador: '21',
        fk_cliente: '5',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'2',
        comentario: 'Não ficou legal o tratamento da pele do rosto.',
        status_avaliacao: 'A',
        fk_prestador: '22',
        fk_cliente: '6',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'5',
        comentario: 'Atendimento muito bom.',
        status_avaliacao: 'A',
        fk_prestador: '23',
        fk_cliente: '7',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'5',
        comentario: 'Metodologia de ensino é muito boa.',
        status_avaliacao: 'A',
        fk_prestador: '24',
        fk_cliente: '8',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'3',
        comentario: 'Fez um prato de nhoque mais ou menos.',
        status_avaliacao: 'A',
        fk_prestador: '25',
        fk_cliente: '9',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'2',
        comentario: 'Ficou alguns detalhes feios.',
        status_avaliacao: 'A',
        fk_prestador: '26',
        fk_cliente: '10',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'5',
        comentario: 'Encanamento ficou 100%.',
        status_avaliacao: 'A',
        fk_prestador: '27',
        fk_cliente: '11',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'4',
        comentario: 'Administra bem!!!.',
        status_avaliacao: 'A',
        fk_prestador: '28',
        fk_cliente: '12',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'1',
        comentario: 'Meu carro não ficou bom.',
        status_avaliacao: 'A',
        fk_prestador: '29',
        fk_cliente: '13',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'3',
        comentario: 'Medico atende mais ou menos.',
        status_avaliacao: 'A',
        fk_prestador: '30',
        fk_cliente: '14',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'5',
        comentario: 'Professor ensinou muito bem meu filho.',
        status_avaliacao: 'A',
        fk_prestador: '31',
        fk_cliente: '15',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'5',
        comentario: 'Segurança conteve a confusão!!!',
        status_avaliacao: 'A',
        fk_prestador: '32',
        fk_cliente: '16',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'1',
        comentario: 'Projetos ruins.',
        status_avaliacao: 'A',
        fk_prestador: '33',
        fk_cliente: '1',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'5',
        comentario: 'Atendimento top em casa!!!',
        status_avaliacao: 'A',
        fk_prestador: '34',
        fk_cliente: '3',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'3',
        comentario: 'Pintou minha mais ou menos.',
        status_avaliacao: 'A',
        fk_prestador: '35',
        fk_cliente: '5',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'2',
        comentario: 'Cozinheira fez um prato ruim.',
        status_avaliacao: 'A',
        fk_prestador: '36',
        fk_cliente: '7',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'3',
        comentario: 'Administra de forma regular.',
        status_avaliacao: 'A',
        fk_prestador: '37',
        fk_cliente: '9',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'1',
        comentario: 'Não recomendo.',
        status_avaliacao: 'A',
        fk_prestador: '38',
        fk_cliente: '11',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'4',
        comentario: 'Atendimento bom.',
        status_avaliacao: 'A',
        fk_prestador: '39',
        fk_cliente: '13',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'4',
        comentario: 'Metodologia de ensino é bom.',
        status_avaliacao: 'A',
        fk_prestador: '40',
        fk_cliente: '15',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'5',
        comentario: 'Fez um prato de nhoque top!!!.',
        status_avaliacao: 'A',
        fk_prestador: '41',
        fk_cliente: '2',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'5',
        comentario: 'Ficou sencional o serviço.',
        status_avaliacao: 'A',
        fk_prestador: '42',
        fk_cliente: '4',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'1',
        comentario: 'Encanamento ficou ruim.',
        status_avaliacao: 'A',
        fk_prestador: '43',
        fk_cliente: '6',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'5',
        comentario: 'Administra muito bem!!!.',
        status_avaliacao: 'A',
        fk_prestador: '44',
        fk_cliente: '8',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'3',
        comentario: 'Meu carro ficou mais ou menos.',
        status_avaliacao: 'A',
        fk_prestador: '45',
        fk_cliente: '10',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'5',
        comentario: 'Medico atende muito bem!!!',
        status_avaliacao: 'A',
        fk_prestador: '46',
        fk_cliente: '12',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'3',
        comentario: 'Professor ensina de forma regular.',
        status_avaliacao: 'A',
        fk_prestador: '47',
        fk_cliente: '14',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      },
      {
        nota:'3',
        comentario: 'Segurança conteve a confusão mais ou menos.',
        status_avaliacao: 'A',
        fk_prestador: '48',
        fk_cliente: '16',
        data_cadastro:  new Date("2020-07-09 02:58:33")
      }
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkDelete('avaliacoes', null, {});
    
  }
};