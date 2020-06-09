module.exports = (sequelize, DataTypes) => {
    const Mensagem = sequelize.define("Mensagem", {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        mensagem: {
            type: DataTypes.STRING(999),
            allowNull: false
        },
        datamensagem: {
            type: DataTypes.DATE,
            allowNull: false
        },
        status_: {
            type: DataTypes.CHAR(1),
            allowNull: false
        },
        remetente: {
            type: DataTypes.CHAR(1),
            allowNull: false
        },
        id_chats: {
            type: DataTypes.INTEGER,
            allowNull: false
        }

    }, {
        timestamps: false,
        tableName: 'mensagens'
    });
    //Mensagem pertence a um chat por isso ele carrega a relação
    //BelongsTo (Pertecem a Um)
    Mensagem.associate = (listaModels) => {
        Mensagem.belongsTo(listaModels.Chat, {
            foreignKey: 'id_chats',
            as: 'chat'
        })
    }
    return Mensagem;
};