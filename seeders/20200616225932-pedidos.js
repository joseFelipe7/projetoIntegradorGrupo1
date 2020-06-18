module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkInsert('pedidos', 
      //array com os nomes dos campos e valores para inserir
      [{
        status_andamento: "ENV",
        data_solicitacao: new Date("2020-06-10 02:58:33"),
        titulo: "Back-end",
        descricao: "Preciso de um site institucional",
        idprestadores: 1,
        clientes_id: 1,
        forma_pagamento: "dinheiro",
        idchat: null,
        chats_clientes_id: null,
        chats_prestadores_idprestadores: null,
        data_servico: new Date("2020-07-09 02:58:33")
      },
      {
        status_andamento: "CANC",
        data_solicitacao: new Date("2020-06-10 15:58:00"),
        titulo: "Front-end",
        descricao: "Quero um site para minha espresa. Já tenho back pronto, mas preciso alterar o visual.",
        idprestadores: 2,
        clientes_id: 3,
        forma_pagamento: "dinheiro",
        idchat: null,
        chats_clientes_id: null,
        chats_prestadores_idprestadores: null,
        data_servico: new Date("2020-07-11 12:00:00")
      },
      {
        status_andamento: "ENV",
        data_solicitacao: new Date("2020-08-10 20:30:33"),
        titulo: "Encanamento",
        descricao: "Preciso arrumar o encanamento da minha casa",
        idprestadores: 3,
        clientes_id: 1,
        forma_pagamento: "dinheiro",
        idchat: null,
        chats_clientes_id: null,
        chats_prestadores_idprestadores: null,
        data_servico: new Date("2020-08-15 15:00:00")
      },
      {
        status_andamento: "CANC",
        data_solicitacao: new Date("2020-06-10 15:58:00"),
        titulo: "Pedicure",
        descricao: "Gostaria de fazer manicure na minha casa.",
        idprestadores: 4,
        clientes_id: 1,
        forma_pagamento: "dinheiro",
        idchat: null,
        chats_clientes_id: null,
        chats_prestadores_idprestadores: null,
        data_servico: new Date("2020-09-25 18:15:00")
      },
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('pedidos', null, {});
  }
};
