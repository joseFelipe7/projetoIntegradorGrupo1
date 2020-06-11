module.exports = (sequelize, DataTypes) => {
    const Pedido = sequelize.define("Pedido", {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        status_andamento: {
            type: DataTypes.STRING(5)
        },
        data_servico: {
            type: DataTypes.DATE
        },
        data_solicitacao: {
            type: DataTypes.DATE
        },
        titulo: {
            type: DataTypes.STRING(45)
        },
        descricao: {
            type: DataTypes.STRING(45)
        },
        idprestadores: {
            type: DataTypes.INTEGER
        },
        clientes_id: {
            type: DataTypes.INTEGER
        },
        forma_pagamento: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        idchat: {
            type: DataTypes.INTEGER
        },
        chats_clientes_id: {
            type: DataTypes.INTEGER
        },
        chats_prestadores_idprestadores: {
            type: DataTypes.INTEGER
        }
    }, {
        timestamps: false,
        tableName: 'pedidos'
    });

    //defindo a relaçao com a tabela mensagem, 1:n
    //Pedido possuiMuitos HISTÓRICOS
    Pedido.associate = (listaModels)=>{
        Pedido.hasMany(listaModels.HistoricoPedidos,{
            foreignKey:'pedidos_id',
            //fk da tabela em que está sendo o relacionamento, o id dessa tabela na outra (fk_chats)
            //procura a fk dentro da model que tenho relação, no caso: na Mensagem
            as:'historicos',
            //alias, apelido para a fk da relaçao
        });
    }

    return Pedido;
};