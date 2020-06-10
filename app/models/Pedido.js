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

    return Pedido;
};